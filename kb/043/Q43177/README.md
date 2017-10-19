---
layout: page
title: "Q43177: PRB: Error L2028: Automatic Data Segment Plus Heap Exceed 64K"
permalink: /kb/043/Q43177/
---

## Q43177: PRB: Error L2028: Automatic Data Segment Plus Heap Exceed 64K

	Article: Q43177
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error is received during linking:
	
	  L2028: Automatic data segment plus heap exceeds 64K
	
	CAUSE
	=====
	
	The LINK error L2028 is caused when the data segment required by the application
	exceeds 64K. This can be calculated by adding the HEAPSIZE and STACKSIZE
	portions of the .DEF file, plus the global data and static data. These two
	numbers of the .DEF file plus the size of the global and static data need to be
	under 65536 bytes. The global data refers to global variables in an application,
	not the global heap.
	
	RESOLUTION
	==========
	
	The solution is to reduce the amount of the HEAPSIZE, STACKSIZE, global data, or
	static data. If the application utilizes large amounts of global data, some of
	this data should be moved into the memory covered by Windows [e.g. utilizing
	GlobalAlloc()]. If the data consists of constants, such as string tables, these
	can be moved into Windows resources using the RC compiler.
	
	This problem may also be resolved by using the /Gt compile option which is
	available beginning with the Microsoft C/C++ 7.0 compiler. Using the /Gt switch,
	you can specify the size a static object and allocate the static object its own
	data segment. If need be the threshold value can be adjusted to ensure some of
	the data objects are allocated in an additional data segment, outside of the
	default data segment. The default threshold value when the /Gt option is not
	specified will be 32767 bytes.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
