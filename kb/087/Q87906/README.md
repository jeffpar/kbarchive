---
layout: page
title: "Q87906: Dsklayt2 Does Not Support Duplicate Filenames"
permalink: kb/087/Q87906/
---

## Q87906: Dsklayt2 Does Not Support Duplicate Filenames

	Article: Q87906
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.0,3.1; WINDOWS:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows versions 3.0, 3.1 
	- Microsoft Win32 Software Development Kit (SDK), versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Dsklayt2 utility in the Microsoft Setup Toolkit for Windows does not support
	duplicate filenames in the source tree. If two or more files have the same name,
	Dsklayt2 may place more than one of these files into the root directory of the
	same setup disk. If this happens, Dsklayt2 generates a warning message when it
	creates a disk image for the disk that warns that the first file is
	overwritten.
	
	If two or more files in the source tree for an application share the same name,
	rename all but one of the files before running the Dsklayt utility. Use the
	Rename Copied File option in the Dsklayt utility to have the filenames changed
	back to their original names when SETUP.EXE or _MSTEST.EXE copies the files from
	the setup disk to the destination disk.
	
	When Dsklayt2 creates a compressed file, it adds an underscore (_) to the end of
	the file extension, replacing the third character if necessary. Therefore,
	Dsklayt2 does not support compressed files if the names of the uncompressed
	files differ only in the third character of the file extension.
	
	Additional query words: 3.10 3.50 4.00 95 MSSetup tool kit
	
	======================================================================
	Keywords          :  
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK400 kbWin32SDK350 kbWin32SDK351 kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1; WINDOWS:3.5,3.51,4.0
	
	=============================================================================
	
