---
layout: page
title: "Q238882: HOWTO: Know When Your Screen Saver Starts"
permalink: /kb/238/Q238882/
---

## Q238882: HOWTO: Know When Your Screen Saver Starts

{% raw %}

	Article: Q238882
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95,98; winnt:4.0
	Operating System(s): 
	Keyword(s): kbHook kbOSWinNT400 kbOSWin2000 kbOSWin95 kbOSWin98 kbDSupport kbhowto
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A screen saver will start, pending your choices, whenever there is no mouse or
	keyboard activity for the current screen saver timeout period. Some applications
	need to know when the screen saver has started in order to do some background
	processing, for example, writing or updating the data to disk.
	
	MORE INFORMATION
	================
	
	When a screen saver starts, it posts a WM_SYSCOMMAND message to the foreground
	window with WPARAM as SC_SCREENSAVE. To detect and notify other applications of
	this event, use the following steps:
	
	1. Install WH_GETMESSAGE Global hook.
	
	     
	     hHook = SetWindowsHookEx(WH_GETMESSAGE, (HOOKPROC)HookProc,
	             (HINSTANCE) hMod, 0);
	
	2. Define a user-defined registered message for example, "ScreenSaverStarted".
	
	     UINT WM_SCRNSVSTART = RegisterWindowMessage("ScreenSaverStarted");
	
	3. Broadcast this message to all top-level windows in the system.
	
	     LRESULT CALLBACK   HookProc(UINT code , WPARAM wParam, LPARAM lParam)
	     {
	  	MSG *msg = (MSG *)lParam;
	  	if ( msg->message == WM_SYSCOMMAND && 
	  msg->wParam == SC_SCREENSAVE)
	  	{	// broadcast message to all top-level windows
	  		// Or execute some other code here
	  		PostMessage(HWND_BROADCAST, WM_SCRNSVSTART, 0, 0);
	  	} 
	  		// Always call next hook in chain 
	  	return CallNextHookEx(hHook, code,  wParam, lParam);
	     }
	
	4. Uninstall the hook.
	
	    UnhookWindowsHookEx(hHook);
	
	  On Windows 98 and Windows 2000, you can query the system by calling
	  SystemParametersInfo with uiAction as SPI_GETSCREENSAVERRUNNING.
	
	     BOOL bActive;  
	     SystemParametersInfo(SPI_GETSCREENSAVERRUNNING, NULL,(LPVOID) &bActive, NULL); 
	     //bActive will be true if Screen Saver is running
	
	REFERENCES
	==========
	
	For additional information, please click the article number(s) below to view the
	article(s) in the Microsoft Knowledge Base:
	
	  Q140723 HOWTO: Force a Screen Saver to Close Once Started in Windows NT
	
	  Q150785 HOWTO: Detect If a Screen Saver Is Running on Windows NT
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Gagandeep Singh, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHook kbOSWinNT400 kbOSWin2000 kbOSWin95 kbOSWin98 kbDSupport kbhowto 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin95search kbWin98search kbWinAdvServSearch kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95,98; winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
