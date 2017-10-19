---
layout: page
title: "Q67063: Inserting Right Justified Text in a Menu in Windows"
permalink: /kb/067/Q67063/
---

## Q67063: Inserting Right Justified Text in a Menu in Windows

	Article: Q67063
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
	
	The "\a" character used with the InsertMenu() function is NOT considered to be a
	C language "\a", but is instead considered to be a resource compiler "\a". This
	code in the resource compiler is translated to a backspace character. Thus, an
	"\a" used in the resource compiler is really considered to be a "\b" or an
	"\x08" within the C Language.
	
	When an "\x08" (backspace) is used, the menu item behaves as expected. However,
	you must place at least one character, which can be a space, before the "\b".
	For example:
	
	     (LPSTR)" \bsometext"
	
	NOTE: This is still true in Windows 3.1; however, the leading blank is not
	necessary. The above example should be modified as follows:
	
	     (LPSTR)"\bsometext"
	
	This is not the case for Windows 95. In Windows 95, the MFT_RIGHTJUSTIFY flag
	should be used with InsertMenuItem()/SetMenuItemInfo/MENUEX resource.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
