---
layout: page
title: "Q140108: BUG: Opening an AVI file Fails When MCIWnd Is Subclassed"
permalink: kb/140/Q140108/
---

## Q140108: BUG: Opening an AVI file Fails When MCIWnd Is Subclassed

	Article: Q140108
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1; :1.1
	Operating System(s): 
	Keyword(s): kbmmkbbuglist
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Video for Windows Development Kit, version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an application based on Windows 3.1 where an MCIWnd window is subclassed
	(using SetWindowLong API) and an AVI file is opened by MCIWndOpen macro, if the
	window is closed (for example, by double-clicking System Menu Box), then no AVI
	files may be opened in any MCIWnd window created thereafter. Specifically,
	MCIWndOpen returns MCI error code 289 on subsequent calls.
	
	RESOLUTION
	==========
	
	The subclassed window can process a WM_CLOSE message to set the original MCIWnd
	window procedure back and then forward this message to the original window
	procedure as in this sample code:
	
	     WM_CLOSE: SetWindowLong(hsubMCIWnd, GWL_WNDPROC, (DWORD)lpfnOldWndProc);
	               return CallWindowProc(lpfnOldWndProc, hsubMCIWnd,
	               message, wParam, lParam);
	              // lpfnOldWndProc points to the original MCIWnd procedure
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.10 MCIWndCreate MCI MCIAVI alias used unique
	
	======================================================================
	Keywords          : kbmm kbbuglist
	Technology        : kbAudDeveloper kbWin3xSearch kbVideoSearch kbSDKSearch kbWinSDKSearch kbWinSDK310 kbVideoDK110
	Version           : WINDOWS:3.1; :1.1
	
	=============================================================================
	
