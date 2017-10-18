---
layout: page
title: "Q133186: Removing MS Plus! Does Not Restore Existing Internet Access"
permalink: kb/133/Q133186/
---

## Q133186: Removing MS Plus! Does Not Restore Existing Internet Access

	Article: Q133186
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use the Uninstall feature to remove Microsoft Plus!, the CompuServe
	Web Browser and Internet dial-up to a PPP do not function. There is no defined
	error message for this problem.
	
	CAUSE
	=====
	
	The CompuServe Web Browser Setup program replaces the Windows 95 WINSOCK. When
	you remove Microsoft Plus!, the WINSOCK is removed. The CompuServe Web Browser
	stops working because its WINSOCK has been removed from the system.
	
	RESOLUTION
	==========
	
	After you remove Microsoft Plus!, reinstall the CompuServe Web Browser software.
	
	MORE INFORMATION
	================
	
	This issue affects any software package that replaces the WINSOCK for Windows 95
	and Microsoft Plus!.
	
	Additional query words: CIS
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
