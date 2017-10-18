---
layout: page
title: "Q96427: INFO: Detecting Whether a Menu Is Open"
permalink: kb/096/Q96427/
---

## Q96427: INFO: Detecting Whether a Menu Is Open

	Article: Q96427
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbMenu kbSDKPlatform kbGrpDSUser
	Last Modified: 12-JUN-1999
	
	3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Windows version 3.1, an application can determine whether a menu is open in
	the system by calling the GetSystemDebugState function. An application can use
	this information to perform its tasks without interfering with the menu
	mechanism of Windows.
	
	MORE INFORMATION
	================
	
	For example, if a background application displays a hidden pop-up window while a
	menu is open in some other application, the user who opened the menu will be
	confused. In this situation, the background application must check the menu
	state of the system before displaying its hidden pop-up window.
	
	GetSystemDebugState function returns a LONG value that can be used to determine
	the menu state of the system. The function can be used as follows:
	
	     if ( GetSystemDebugState() & SDS_MENU )
	         // Yes! There is a menu open.
	       else
	         // No! There is no menu open.
	
	For further information on the GetSystemDebugState function, please see page 445
	of "Microsoft Windows Software Development Kit, Programmer's Reference, Volume
	2: Functions" manual.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbMenu kbSDKPlatform kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
