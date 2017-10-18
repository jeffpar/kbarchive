---
layout: page
title: "Q84481: SPY Utility Reports Application Name, Not Module Name"
permalink: kb/084/Q84481/
---

## Q84481: SPY Utility Reports Application Name, Not Module Name

	Article: Q84481
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
	
	When the SPY utility provided with the Microsoft Windows Software Development
	Kit (SDK) reports the module name for a running application, it reports the name
	of the executable file. However, the module name and the name of the application
	don't need to match. The module name of an application is specified in the NAME
	statement in the application's module definition (DEF) file.
	
	For example, SPY indicates that the module name for Microsoft Word for Windows is
	WINWORD. However, calling GetModuleHandle("WINWORD") always returns zero even
	when Word for Windows is running.
	
	The EXEHDR utility, which is also provided with the Windows SDK, reports the
	correct module name for an application. EXEHDR reports the module name for Word
	for Windows as MSWORD. GetModuleHandle("MSWORD") returns the module handle for
	Word for Windows if it is running.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
