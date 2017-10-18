---
layout: page
title: "Q11246: INFO: Changing Window Colors with Control Panel"
permalink: kb/011/Q11246/
---

## Q11246: INFO: Changing Window Colors with Control Panel

	Article: Q11246
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbSysSettings
	Last Modified: 09-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows, changing the screen background color or the test color will affect
	the following programs:
	
	  Notepad        MS-DOS Executive
	  Clock          PIF Editor
	  Control        Spooler Panel
	  Calendar       Terminal
	  Clipboard      Write
	
	However, the following programs are not affected:
	
	  Calculator     Reversi
	  Cardfile       COMMAND.COM
	  Paint
	
	MORE INFORMATION
	================
	
	It is up to the application to look in the WIN.INI file to see what [color]
	preferences are selected. Some applications do not change because either they do
	not look in the WIN.INI file for those colors, or the applications choose to
	ignore them.
	
	For an application to be aware of system color changes, the WM_SYSCOLORCHANGE
	message must be used in the Windows procedures.
	
	For example, suppose a static hBrush is in the WndProc for repaint purposes. To
	be aware of system color changes, update the brush based on system color changes
	by doing something similar to the following:
	
	      case WM_SYSCOLORCHANGE:
	
	      DeleteObject(hBrush);
	      hBrush = CreateSolidBrush(GetSysColor(COLOR_WINDOW));
	      return 0;
	
	Additional query words: 3.10 3.00
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbSysSettings 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
