---
layout: page
title: "Q167732: Stack Fault Creating Shortcut in Spanish OSR2"
permalink: kb/167/Q167732/
---

## Q167732: Stack Fault Creating Shortcut in Spanish OSR2

	Article: Q167732
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbui osr2 win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Spanish version of Windows 95 OEM Service Release 2 (OSR2) or 2.1, the
	following error message may occur when you try to create a new shortcut by
	clicking File, pointing to New, and then clicking Shortcut in Windows Explorer.
	
	  This program has performed an illegal operation and will be shut down.
	
	If you click Details, you receive information similar to:
	
	  EXPLORER caused a stack error in module SHELL32.DLL at 0137:7fdb5b67
	
	Once this error message is cleared, the process of creating the shortcut may
	continue successfully.
	
	CAUSE
	=====
	
	There is a problem in the Spanish version of Windows 95 OEM Service Release
	versions 2 and 2.1 that results in this error.
	
	RESOLUTION
	==========
	
	You can work around this problem by using the following method to create a new
	shortcut:
	
	Use the right mouse button to click the location in which you want to create the
	new shortcut, point to New on the menu that appears, and then click Shortcut.
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : kberrmsg kbui osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
