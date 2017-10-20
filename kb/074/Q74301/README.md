---
layout: page
title: "Q74301: Information About Headings and Labels in HEAPWALK"
permalink: /kb/074/Q74301/
---

## Q74301: Information About Headings and Labels in HEAPWALK

{% raw %}

	Article: Q74301
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Heap Walker utility (HEAPWALK) is a tool used to view the memory layout in
	the Microsoft Windows graphical environment. With HEAPWALK, you can examine
	memory before, during, and after an application runs and examine how an
	application behaves under different memory conditions. This article lists and
	explains the columns of information that HEAPWALK displays for global and local
	memory objects.
	
	The version of HEAPWALK provided with version 3.1 of the Microsoft Windows
	Software Development Kit (SDK) differs significantly from the version provided
	with version 3.0. HEAPWALK version 3.1 uses the Tool Helper dynamic-link library
	(DLL), displays information in a more organized manner (by sorting objects based
	on a secondary key), provides information about objects in the user heap as well
	as in the GDI help, and simultaneously displays a graphical representation of a
	resource along with a hex dump of the resource.
	
	The information in this article applies to HEAPWALK versions 3.0 and 3.1 unless
	otherwise noted.
	
	MORE INFORMATION
	================
	
	Main Window
	-----------
	
	HEAPWALK displays a list of memory objects in the global heap in its main window.
	Options on the Walk menu determine which objects HEAPWALK displays in its main
	window. Options on the Sort menu determine the order in which objects are
	displayed in the main window. Options on the Object menu specify a number of
	actions that HEAPWALK can perform on a selected object.
	
	For each global memory object, HEAPWALK displays various information in its main
	window, as follows:
	
	ADDRESS:
	
	ADDRESS:
	  Address of the memory block (in hexadecimal).
	   - In real mode or standard mode, this is a physical address value.
	   - In enhanced mode, this is a linear address value. (The paging
	     mechanism maps a linear address to a physical address.)
	
	HANDLE:
	  Handle for the memory block (in hexadecimal).
	   - This value was returned from a GlobalAlloc call.
	
	SIZE:
	  Size of the memory block in bytes (in decimal).
	
	LOCK:
	  Current lock count of the memory block (displayed only if nonzero).
	
	FLG:
	  Flag.
	     D - If memory block is discardable.
	         Page 11-3 of the "Microsoft Windows Software Development Kit
	         Tools" manual for version 3.0 incorrectly states that this
	         field contains an "S" for shareable segments. Instead, the
	         OBJ-TYPE field contains "Shared" for shareable segments.
	
	OWNER-NAME:
	  Owner of the memory block.
	   - Usually the module that allocated the memory block.
	   - Can be an application name (for example, HEAPWALK), one of the
	     Windows modules (USER, GDI, DISPLAY, and so on), or FREE.
	
	OBJ-TYPE:
	  Type of memory object:
	   - Code segment number or name - Code segment along with its number
	       or name. (To display segment names, place the SYM file for the
	       application module in the directory from which HEAPWALK runs,
	       and select the Label Segments command from the Sort menu.)
	   - Data - Data segment.
	   - Shared - A shared object.
	   - Resource
	   - Kernel data structures such as:
	      - Task
	      - Task Database
	      - Module Database
	
	ADD-INFO:
	  Additional information that may accompany OBJ-TYPE.
	   - This is usually a resource type such as an icon, a cursor, or a
	     font.
	
	Local Window
	------------
	
	To view the memory objects in an application's local heap, select the
	application's data segment and use the Show and LocalWalk commands from the
	Object menu. This results in two windows: a Show Window, which displays a
	hexadecimal memory dump, and a Local Window, which displays a list of the local
	objects and their attributes, as follows:
	
	 OFFSET:
	  Offset of the local memory block in the data segment (in
	  hexadecimal).
	
	SIZE:
	  Size of the local object in bytes (in decimal).
	
	MOV/FIX:
	  Mov - For a movable memory block.
	  Fix - For a fixed memory block.
	
	FLAGS:
	  For movable objects.
	     D - If discardable.
	     Lnn - Lock count if nonzero.
	
	OBJECT TYPE:
	  "Free" for free objects.
	  For the GDI data segment, the local window displays the object type
	      (for example, DC, Brush, Pen, or Region).
	
	Show Window
	-----------
	
	Using the Show command from the Object menu displays a hexadecimal dump of any
	global memory block in a separate window. The show window displays the offset,
	hexadecimal memory dump, and the ASCII memory dump. The Showbits command
	displays the memory as a bitmap (if the block contains a cursor, an icon, or a
	bitmap).
	
	HEAPWALK version 3.0 truncates objects that are larger than 64K.
	HEAPWALK version 3.1 does not exhibit this behavior.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
