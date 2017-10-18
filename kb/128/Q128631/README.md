---
layout: page
title: "Q128631: No Sharing Options in Clipboard Viewer in Windows 95"
permalink: kb/128/Q128631/
---

## Q128631: No Sharing Options in Clipboard Viewer in Windows 95

	Article: Q128631
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork kbole win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to share Clipboard Viewer pages in Windows 95, the relevant buttons
	(for example, the Share, Stop Sharing, Connect, and Disconnect buttons) are
	missing and there is no Connect command on the File menu.
	
	CAUSE
	=====
	
	The Clipboard Viewer tool that is included with Windows 95 does not have sharing
	functionality.
	
	MORE INFORMATION
	================
	
	If you install Windows 95 over Windows for Workgroups version 3.x and during
	Setup choose to not install the Windows 95 Clipboard Viewer, Windows 95 retains
	the Windows for Workgroups ClipBook Viewer, which has sharing functionality.
	
	For ClipBook Viewer to have the Share option, NETDDE must be running. Place a
	shortcut to Netdde.exe (from the Windows folder) in the Startup folder to cause
	NETDDE to run automatically at every startup.
	
	Additional query words: clip board clip book
	
	======================================================================
	Keywords          : kbnetwork kbole win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
