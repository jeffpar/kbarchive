---
layout: page
title: "Q87285: Windows Err Msg: One of the Library Files Needed..."
permalink: /kb/087/Q87285/
---

## Q87285: Windows Err Msg: One of the Library Files Needed...

	Article: Q87285
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbother kbdisplay kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Windows 3.1, you may receive the following error message:
	
	  One of the library files needed to run this application is damaged. Please
	  reinstall this application.
	
	This error message may be caused by one of the following reasons:
	
	- A corrupt .DLL file exists.
	
	  -or-
	
	- A corrupt video grabber file exists. Grabber files have the extension .2GR or
	  .3GR, and are located in the WINDOWS\SYSTEM subdirectory.
	
	MORE INFORMATION
	================
	
	If the error occurs when you are running MS-DOS Prompt from Windows, then the
	error is probably caused by a corrupt video grabber file. To replace the video
	grabber files, reinstall the video driver.
	
	If the error occurs when running a Windows-based application, then the error may
	be caused by a damaged .DLL file. You need to find which .DLL file is causing
	the error and replace the file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
