---
layout: page
title: "Q73668: MS-DOS-Based Application Characteristics Under Windows"
permalink: /kb/073/Q73668/
---

## Q73668: MS-DOS-Based Application Characteristics Under Windows

	Article: Q73668
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
	
	This article discusses the mechanism that the Microsoft Windows graphical
	environment uses to run an MS-DOS (non-Windows) application.
	
	MORE INFORMATION
	================
	
	In the Window environment, each MS-DOS-based application runs has a
	Windows-based application to act as its agent. When the MS-DOS-based application
	is running in a window under enhanced mode Windows, and the MS- DOS-based
	application makes a call to the display hardware, the agent intercepts the call
	and places the character into its window. To the MS-DOS-based application, the
	agent acts as a virtual copy of the display hardware.
	
	NOTE: The Windows agent does not manage the display; it simply renders the
	MS-DOS-based application's display into a window.
	
	To determine if an application is an MS-DOS-based application, check the
	application's name to see if it matches the name of the MS-DOS-based application
	agent. The module name of the MS-DOS-based application agent is WINOLDAP. The
	following code fragment performs this check:
	
	     BOOL IsThisWOAWindow(HWND hWnd)
	     {
	        BOOL IsWOA;
	        HANDLE hModWOA;
	        IsWOA = FALSE;
	        if (hModWOA = GetModuleHandle("WINOLDAP"))
	           {
	           if (hModWOA == (HANDLE)(GetClassWord(hWnd, GCW_HMODULE)))
	              {
	              IsWOA = TRUE;
	              }
	           }
	        return IsWOA;
	     }
	
	To determine how many MS-DOS-based applications are running at any given time,
	call the code above from an loop that enumerates the handles of all windows in
	the system.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
