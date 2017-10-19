---
layout: page
title: "Q72236: Maximizing the Use of Available Memory in Windows"
permalink: /kb/072/Q72236/
---

## Q72236: Maximizing the Use of Available Memory in Windows

	Article: Q72236
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows graphical environment creates and stores objects on behalf
	of each application in the system. Two places store many of these objects, the
	user heap and the graphics device interface (GDI) heap, each one limited to 64K.
	This article discusses the objects, their size, and how to maximize the use of
	the heaps.
	
	MORE INFORMATION
	================
	
	A good way to see what is stored in the heaps is to use the Heap Walker tool
	(HEAPWALK.EXE) provided with the Microsoft Windows Software Development Kit
	(SDK). Heap Walker is documented in Chapter 11 of the SDK Tools manual for
	Windows 3.0 and in Chapter 9 of the SDK Programming Tools manual for Windows
	3.1. The memory management practices of Windows are documented in Chapters 15
	and 16 of the SDK Guide to Programming for Windows 3.0. Further information on
	Windows memory management is available in Charles Petzold's "Programming
	Windows" (Microsoft Press) and in Peter Norton and Paul Yao's "Windows 3.0 Power
	Programming Techniques" (Bantam Computer Books).
	
	The following table lists the objects stored in the user heap and the typical
	sizes for these items:
	
	  Object          Size in Bytes
	  ------          -------------
	  Menu            20 + 20 per menu item
	  Window Class    40 to 50
	  Window          60 to 70
	
	Note that every running program requires space in the user heap. Every
	application must use this shared resource wisely. One technique to reduce heap
	requirements is through the judicious use of resources. For example, static
	strings should be placed into a string table instead of being stored as string
	variables. If a group of applications shares a common set of resources, place
	the resources into a dynamic-link library (DLL). Multiple applications can share
	one copy of code, data, and resources through a DLL.
	
	Another way to reduce heap requirements is through the use of class extra bytes
	and window extra bytes. Although these bytes are stored on the user heap, each
	is associated with a particular window or window class. These bytes are
	convenient places to store a handle to a data structure that has been allocated
	from global memory.
	
	Menus are, by far, the biggest consumer of user heap space. Applications that
	have multiple menu bars or create menus with the TrackPopupMenu() API should
	load these resources only as needed and destroy them after use, instead of
	waiting for program termination. In Windows 3.1, user stores menus in a separate
	64K heap.
	
	When an application creates a GDI object, Windows allocates space from the GDI
	heap. While most applications create GDI objects, an application should not
	create too many objects at one time. Also, each object must be destroyed when it
	is no longer required by the application. The following table lists the objects
	stored in the GDI heap and their typical sizes:
	
	  Object              Size in Bytes
	  ------              -------------
	  Brush               32
	  Bitmap              28 to 32
	  Device Context (DC) 300
	  Font                40 to 44
	  Pen                 28
	  Region              28
	  Palette             28
	
	Items are created in the GDI heap whenever an application creates a GDI object.
	Most applications create GDI objects, but an application should not create too
	many objects at one time. Also, an object must be destroyed when it is no longer
	required by the application.
	
	The maximum number of windows that can be open simultaneously is constrained by
	the amount of space remaining in the user heap. As noted above, the user and GDI
	heaps are each limited to 64K.
	
	Because heap space is shared among all running applications, an application must
	check the value returned from each function call to verify that memory
	allocations are successful. The debugging version of Windows produces a
	FatalExit message when an application uses an invalid handle. This information
	is difficult to obtain from any other source.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
