---
layout: page
title: "Q87947: DSKLAYT2 Does Not Preserve Tree Structure of Source Files"
permalink: /kb/087/Q87947/
---

## Q87947: DSKLAYT2 Does Not Preserve Tree Structure of Source Files

	Article: Q87947
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.1,3.5; WINDOWS:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows versions 3.5, 3.1 
	- Microsoft Win32 Software Development Kit (SDK), versions 3.1, 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DSKLAYT2 utility in the Microsoft Setup Toolkit for Windows creates disk
	images using the files specified in the .LYT file produced by the DSKLAYT
	utility. The created disk images are flat; all files are placed in the root
	directory. DSKLAYT2 does not preserve the tree structure of the source files.
	
	Having flat directories on the setup disks is a limitation of only the DSKLAYT2
	utility. _MSTEST.EXE, the setup driver spawned by SETUP.EXE, supports a tree
	structure on the setup disks. Once DSKLAYT2 creates disk images, manually create
	subdirectories on each disk. Then move files from the root directory of the disk
	to the appropriate position in the tree structure. (Do not move files between
	disks.) Make corresponding changes to the .INF file. In the file description
	line of each moved file, change the filename to indicate the file's new location
	in the tree structure.
	
	Additional query words: 3.10 3.50 4.00 95 MSSetup tool kit win16sdk
	
	======================================================================
	Keywords          :  
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK400 kbWin32SDK310 kbWin32SDK350 kbWin32SDK351 kbWinSDKSearch kbWinSDK310
	Version           : :3.1,3.5; WINDOWS:3.1,3.5,3.51,4.0
	
	=============================================================================
	
