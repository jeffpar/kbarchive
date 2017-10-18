---
layout: page
title: "Q67249: Using Window Extra Bytes in Custom Controls"
permalink: kb/067/Q67249/
---

## Q67249: Using Window Extra Bytes in Custom Controls

	Article: Q67249
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows environment, custom controls are often designed to
	store data about their state, color, or position. This data can be stored
	directly in window extra bytes associated with the custom control window or in a
	local or a global memory object.
	
	If a control uses window extra bytes directly, Windows allocates memory from the
	user heap, which is a scarce system resource shared by all applications. In
	contrast, the LocalAlloc function allocates memory from the heap of the
	application or the dynamic-link library (DLL) in which the control is
	implemented.
	
	If six or fewer bytes of data are required for each instance of a custom control,
	the demand placed on the system user heap is not large. In contrast, each window
	in Windows version 3.0 requires at least 62 bytes of user heap; therefore, using
	a small number of window extra bytes is easily justified.
	
	If the control requires more than six bytes of data, the control class should set
	the number of window extra bytes to the size of one HANDLE data type. When the
	control is created, call the LocalAlloc function to allocate enough memory to
	hold the data associated with the control. Store the handle that LocalAlloc
	returns in the window extra bytes.
	
	MORE INFORMATION
	================
	
	Depending on the amount of storage required, storing a handle to a local memory
	block in the window extra bytes is usually advantageous. This method requires
	calling the LocalAlloc function once at initialization time and calling the
	LocalLock and LocalUnlock functions each time the control processes a message
	that refers to or modifies any status information. Calling LocalLock and
	LocalUnlock is much faster than calling GetWindowWord to access each item of
	data.
	
	Storing a memory handle in the window extra bytes also provides the control the
	option of using a global memory block if a very large amount of data must be
	stored.
	
	Using an allocated memory also allows the application to vary the amount of data
	stored for each custom control by storing the size of the structure or an index
	that describes the structure at the beginning of the block of memory.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
