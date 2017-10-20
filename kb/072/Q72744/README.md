---
layout: page
title: "Q72744: Determining That SHARE Is Loaded Under Microsoft Windows"
permalink: /kb/072/Q72744/
---

## Q72744: Determining That SHARE Is Loaded Under Microsoft Windows

{% raw %}

	Article: Q72744
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
	
	To determine whether the SHARE.EXE application is loaded, an application
	typically calls MS-DOS Interrupt 2Fh Function 1000h. However, this method always
	returns true in enhanced mode Microsoft Windows versions 3.0 and 3.1 even if the
	SHARE is not loaded.
	
	Windows returns true for Interrupt 2Fh Function 1000h to prevent SHARE from
	installing itself in an MS-DOS virtual machine (VM) under Windows. If SHARE
	installed a local copy in a VM, the system would become unstable and data
	corruption on the hard drive(s) might result.
	
	MORE INFORMATION
	================
	
	To determine under enhanced mode Windows whether SHARE is installed, call
	Interrupt 21h Function 5Ch to lock a region of a file. This function is
	available only when SHARE is installed, and unlike using the OpenFile function
	with sharing modes, the lock region function always fails with error 1 (invalid
	function) if SHARE is not loaded. Perform the following six steps to determine
	whether SHARE is loaded:
	
	1. Create a temporary file using MS-DOS Interrupt 21h Function 5Ah.
	
	2. Lock a region of the returned temporary file using MS-DOS Interrupt 21h
	  Function 5Ch. Set AL = CX = DX = SI = 0 and DI = 1.
	
	3. If the call in step 2 returns with the carry flag set and AX = 1, SHARE is
	  not loaded. Move to step 5.
	
	4. SHARE is loaded. Unlock the region of the file using MS-DOS Interrupt 21h
	  Function 5Ch. Set CX = DX = SI = 0 and AL = DI = 1.
	
	5. Close the file using MS-DOS Interrupt 21h Function 3Eh.
	
	6. Delete the file using MS-DOS Interrupt 21h Function 41h.
	
	Note that the drive on which the temporary file is created is important in a
	network environment. Typically, SHARE is always loaded for network drives;
	however, a copy of SHARE is running on the server, not on the workstation.
	Therefore, the application should run the test above against the drive(s) from
	which it will access files.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
