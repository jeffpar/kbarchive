---
layout: page
title: "Q74490: PRB: Application Not Recognized as Compatible with Windows 3.x"
permalink: kb/074/Q74490/
---

## Q74490: PRB: Application Not Recognized as Compatible with Windows 3.x

	Article: Q74490
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
	
	When you run an application designed for version 3.0 or 3.1 of the Windows
	graphical environment, Windows displays one of the following error messages:
	
	  The specified application is not based on Windows or MS-DOS.
	
	  -or-
	
	  Application Compatibility Warning:
	
	  The application you are about to run, filename.exe, was designed for a
	  previous version of Windows.
	
	  You should obtain an updated version of the application that is compatible
	  with Windows version 3.0. To run the current version of the application,
	  choose Cancel. Then, exit Windows, restart it by typing Win /r, and start the
	  application again.
	
	  If you choose OK and continue to start this application, you might encounter
	  compatibility problems that could cause the application or Windows to
	  terminate unexpectedly.
	
	[The message for Windows version 3.1 is similar. However, it does not instruct
	the user to restart Windows in real mode (Win /r) because real mode is not
	available.]
	
	CAUSE
	=====
	
	The application was not processed by the resource compiler (RC) or the module
	definition (DEF) file does not contain the EXETYPE WINDOWS statement.
	
	RESOLUTION
	==========
	
	In the Windows environment, each application and dynamic-link library must be
	processed by RC even if it does not have any resources. RC modifies the file
	header to enable Windows to process the application or library correctly.
	
	Running an application that was not processed by RC causes Windows to display the
	Application Compatibility Warning message box that contains the text above.
	
	The DEF file for an application or DLL must contain the EXETYPE WINDOWS statement
	to direct the linker to create a Windows EXE file. If this statement is missing,
	RC fails with an error such as the following:
	
	  RC : fatal error RW1030: filename: The EXETYPE of the program is not WINDOWS.
	  Make sure the .DEF file is correct.
	
	Attempting to run an improperly-linked application causes Windows to display an
	Unrecoverable Application Error (UAE) message box that contains the first error
	message listed above.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
