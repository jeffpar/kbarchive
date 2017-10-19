---
layout: page
title: "Q77701: Finding Version Information for Multimedia Files"
permalink: /kb/077/Q77701/
---

## Q77701: Finding Version Information for Multimedia Files

	Article: Q77701
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The VERINFO utility provides version information about many of the drivers,
	dynamic-link libraries (DLLs), and executable files provided with Microsoft
	Multimedia Windows. VERINFO in installed in the main Multimedia Windows
	directory (by default, C:\MMWIN).
	
	MORE INFORMATION
	================
	
	After VERINFO is running, double-click the name of a file to view the file's
	version information. VERINFO then provides a drop-down list box and prompts for
	specific information. By default, VERINFO gives the version number.
	
	For example, if the user requests information about the MMSYSTEM.DLL file,
	VERINFO provides a series of bits in the Value edit control, as follows:
	
	  0001 0000 0000 0096
	
	This number represents version 1 of the software, build 96 (beta). This
	information varies depending on the build of the software that is installed.
	
	This information can be useful to determine whether a particular driver requires
	updating. It is also useful to verify that all portions of the product are from
	the same release.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
