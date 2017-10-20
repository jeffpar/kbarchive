---
layout: page
title: "Q76103: HOWTO: Guidelines for Allocating Instance (Per-Window) Data"
permalink: /kb/076/Q76103/
---

## Q76103: HOWTO: Guidelines for Allocating Instance (Per-Window) Data

{% raw %}

	Article: Q76103
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbWndw kbWndwProp
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If an application creates multiple windows of a single window class, that
	application must carefully manage data for those windows. Undesired results may
	occur when windows share the same global data because modifications of that data
	will affect all windows.
	
	If an application has a window that normally relies on global data and the
	application creates multiple instances of that window, whatever was kept in
	global data must be kept in instanced data. The optimal method is to store a
	private data structure in global or local memory and to store a handle to that
	memory in the window's so-called "extra" bytes. Alternatively, the window may
	store the handle in its property list.
	
	This article discusses the concerns and methods for storing extra data with
	windows using both window extra bytes and property lists.
	
	MORE INFORMATION
	================
	
	1. Application and Window Instances, Sharing Data
	-------------------------------------------------
	
	The word "instance" usually refers to a particular copy of an application that is
	currently running in the system. The term "instance" means "copy of data"; each
	instance of an application has a separate data segment containing global and
	static data, the application's stack, and the application's local heap.
	Different instances of the same application have only very limited access to
	each other's data (through the use of the GetInstanceData function).
	
	Every window is an "instance" of a particular window class. A window is
	represented by a data structure allocated from USER's local heap (identified by
	hWnd) that contains information specific to that window, such as its window
	style, and a pointer to its window procedure. Since multiple windows of the same
	class may reside in the same application instance and share the same window
	procedure, those windows freely share all global data in the application's data
	segment. Therefore, a particular window should never depend on a global
	variable.
	
	Consider a case in a text editing program based on the Windows Multiple Document
	Interface (MDI) where each MDI child window maintains information about the file
	being edited in that window. If each window uses the same global variables to
	store page numbers, file names, and text length, only one window would display
	correct information. As soon as the user loads another file or performs an
	operation that changes any global variable, all windows are affected. The
	effects may not be apparent until a repaint occurs on the other windows, making
	the problem extremely difficult to track down. To avoid this situation, keep any
	window-specific data separately attached to each window class, isolating that
	data. Such data may be stored either in window extra bytes or property lists.
	The most efficient and fastest method is to allocate extra memory for data, and
	store that memory handle in window extra bytes. Property lists are most useful
	when dealing with preregistered window classes or with temporary data.
	
	2. Window Extra Bytes and Extra Allocations
	-------------------------------------------
	
	An application specifies window extra bytes for a class in the cbWndExtra field
	of the WNDCLASS structure prior to calling the RegisterClass function. Windows
	allocates these bytes from USER's local heap in addition to the window's data
	structure. An application reads these extra bytes with the GetWindowWord and
	GetWindowLong functions and modifies them with the SetWindowWord and
	SetWindowLong functions.
	
	Extra bytes are a very scarce resource because they reside in USER's local heap,
	and therefore reduce available system resources. Always minimize an
	application's use of window extra bytes as much as possible.
	
	There is a myth that the GetWindowWord and GetWindowLong calls are extremely
	fast, which serves as an excuse to use a large number of window extra bytes.
	While these functions are highly optimized, they still need to perform necessary
	checks on the window handle and trap special cases. They do more than a simple
	lookup in USER's heap, and both require a far call. Only when an application
	requires a single WORD or DWORD should it store that data directly in extra
	bytes.
	
	The most efficient method for allocating more than 4 extra bytes is to declare a
	single HANDLE in the window's extra bytes, allocate an additional data structure
	when creating the window, and store that handle in the window extra bytes. This
	method minimizes the use of extra bytes and provides very fast access to the
	entire data structure. If the data is allocated as local FIXED memory, there is
	no need to even lock the data before using it.
	
	The best time to allocate this memory is while processing the WM_NCCREATE
	message; a window receives this message only once, very soon after creation. The
	code to perform this allocation might resemble the following:
	
	     case WM_NCCREATE:
	
	         pExtraData=(typecast)LocalAlloc(LPTR, cbData);
	         SetWindowWord(hWnd, 0, (WORD)pExtraData);
	         break;
	
	Here, cbData is the number of bytes in the extra data structure, and the LPTR
	parameter to the LocalAlloc function specifies the LMEM_FIXED and LMEM_ZEROINIT
	flags. Use the number 0 as the index for the SetWindowWord call because 0
	references the start of the extra bytes. Note also that (typecast) is a
	placeholder for the appropriate pointer type of the data structure.
	
	The best time to free this memory is while processing the WM_NCDESTROY message.
	The code to perform this step might resemble the following:
	
	     case WM_NCDESTROY:
	          pExtraData=GetWindowWord(hWnd, 0);
	
	          if ((typecast)NULL!=pExtraData)
	              {
	              //Clean out the old handle.
	              SetWindowWord(hWnd, 0, 0);
	              LocalFree((HANDLE)pExtraData);
	              }
	          break;
	
	2.1 Using Extra Data in the Window Procedure
	--------------------------------------------
	
	To access the extra data stored in separately allocated memory, a window must
	retrieve a pointer to the data before processing any message that requires that
	data.
	
	If the application allocated memory as LMEM_FIXED, retrieving a pointer to the
	extra data structure requires only a single call to GetWindowWord, as follows:
	
	     pExtraData=(typecast)GetWindowWord(hWnd, 0);
	
	From this point on, accessing ANY field in the data structure is extremely fast
	because it requires only a dereference operation on the pointer. The following
	is a sample reference of the extra data:
	
	     if (0==pExtraData->cMouseMoves)
	
	         {
	         ...
	         }
	
	The main advantage of this method over extended use of window extra bytes is that
	it uses only a single call to GetWindowWord and SetWindowWord functions to read
	and write ANY data in the entire data structure. Many calls to the GetWindowWord
	and SetWindowWord functions are necessary if this structure was stored entirely
	in extra bytes (unless the structure itself is only 2 bytes long).
	
	In addition, maintaining the data structure is much easier when it is defined as
	a C structure and not as a large group of offsets for the GetWindowWord and
	SetWindowWord functions. Maintaining offsets requires carefully defining
	constants based on the sizes of the data types involved, and defining reasonably
	symbolic names to keep the source code readable. Defining a C structure is much
	easier and lets the C compiler determine the size of each field.
	
	2.2 Local Versus Global Memory
	------------------------------
	
	Local memory from the application's heap is best suited for the purposes of
	instanced data, unless heap space is already a scarce commodity. Local
	allocations are very inexpensive as far as system memory is concerned. In
	addition, handles to local memory allocated with LMEM_FIXED are directly usable
	as near pointers.
	
	In Windows version 3.x, each global allocation (through the GlobalAlloc function)
	uses a selector from the local descriptor table (LDT). Only 8192 are selectors
	available in Windows version 3.x enhanced mode and only 4096 are available in
	Windows 3.x standard mode. If an application creates hundreds of instances of a
	window that allocates a global segment, it will unnecessarily deplete the number
	of free selectors available to all applications in the system. For more
	information on using selectors, please query on the following words in the
	Microsoft Knowledge Base:
	
	  prod(winsdk) and protect mode and handle limits
	
	An application can conserve global handles by allocating a large block of memory
	and performing local allocations within the block. This technique, known as
	multiple FAR heaps, is described in Chapter 18 of the book titled "Windows 3.0
	Power Programming Techniques" by Paul Yao and Peter Norton (Bantam Computer
	Books). Another good reference is the article "Improve Windows-Based App's
	Memory Use with Subsegment Allocation and Custom Resources" in the January 1991
	issue of the "Microsoft Systems Journal" (volume 6, number 1).
	
	3. Properties
	-------------
	
	Properties allow an application to attach extra data to ANY window and do not
	require the application to process any messages for that window or modify the
	window's data in any way. An application attaches, retrieves, and deletes
	properties through the SetProp, GetProp, and RemoveProp functions,
	respectively.
	
	Properties are most useful when an application needs to attach data to any of
	Windows's predefined classes, such as dialog boxes and controls, because such
	windows have no extra bytes available for application use. Properties are also
	very useful for temporary data that needs to be attached to a window for only a
	portion of that window's lifetime.
	
	Using properties is relatively slow and has the added penalty that each property
	is limited to a WORD (which is very inconvenient for large structures). They
	also use space in the USER's local heap, and therefore consume valuable system
	resources. Follow the same guidelines for properties as for windows extra bytes,
	that is, allocate extra memory and store the handle as a single property.
	
	If the application may use extensive properties for dialog boxes or standard
	Windows controls, consider one of the following alternatives.
	
	3.1 Alternatives to Property Lists for Dialog Boxes
	---------------------------------------------------
	
	If an application needs to attach data to a dialog box, consider using a private
	dialog class. The application registers this class and provides a window
	procedure similar to the way it would for any other type of application-specific
	window. A private dialog class requires at least DLGWINDOWEXTRA window extra
	bytes; the application must add DLGWINDOWEXTRA to any additional space for a
	memory handle. The extra memory can be allocated and freed using the same
	messages described in Section 2 above. Note that the offset of the memory handle
	for the GetWindowWord and SetWindowWord functions is DLGWINDOWEXTRA instead of 0
	(zero).
	
	For more information on private dialog classes, please query on the following
	words in the Microsoft Knowledge Base:
	
	  prod(winsdk) and defdlgproc
	
	3.2 Alternatives to Property Lists for Predefined Control Windows
	-----------------------------------------------------------------
	
	Most of Windows's predefined controls already use some number of window extra
	bytes however they do not reserve any space for application-specific use. An
	application can, however, create a superclass and specify space for a HANDLE to
	extra data.
	
	Superclassing is the process of retrieving a window's class information,
	modifying the appropriate fields, and registering the new class under a
	different name. The following six steps are involved in this process:
	
	1. Call the GetClassInfo function using the hWnd of an existing window of the
	  class to superclass. This fills a WNDCLASS structure with information for
	  that class.
	
	2. Change the hInstance field of the WNDCLASS structure to thehInstance of the
	  application.
	
	3. Save the old lpfnWndProc value and store the address of the superclass
	  procedure in that field. Class extra bytes are a suitable place to save the
	  old value. Pass all messages not processed by the superclass procedure to
	  this original lpfnWndProc and be sure to export the superclass procedure.
	
	4. Save the value of cbWndExtra (again, class extra bytes are suitable for this
	  purpose) and add sizeof(HANDLE) to that field. Do NOT simply store
	  sizeof(HANDLE) or the control will break. The superclass MUST use the
	  existing value of cbWndExtra as the offset to GetWindowWord and SetWindowWord
	  functions when manipulating the extra memory handle.
	
	5. Change the class name to something unique. Windows will not reregister a
	  class if one already exists by that name.
	
	6. Call the RegisterClass function with the new WNDCLASS structure.
	
	Allocate extra memory for windows of this superclass using the same method
	described above in Section 2.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbWndw kbWndwProp 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
