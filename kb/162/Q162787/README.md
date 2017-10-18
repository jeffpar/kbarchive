---
layout: page
title: "Q162787: Access Denied Error with User Manager or Server Manager"
permalink: kb/162/Q162787/
---

## Q162787: Access Denied Error with User Manager or Server Manager

	Article: Q162787
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run User Manager for Domains from a computer other than the
	Primary Domain Controller, you get the following error message:
	
	  Access Denied
	
	CAUSE
	=====
	
	The "Access this Computer from Network" right, which is found in User Manager
	(on the Policies menu, select User Rights), is required to run User Manager from
	a computer other than the primary domain controller (PDC).
	
	RESOLUTION
	==========
	
	Ensure that the user running User Manager has the "Access this computer from
	Network" right.
	
	Additional query words: BDC administration execute dialog
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
