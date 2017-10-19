---
layout: page
title: "Q173520: Documentation Error in Migration Tool for NetWare"
permalink: /kb/173/Q173520/
---

## Q173520: Documentation Error in Migration Tool for NetWare

	Article: Q173520
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you perform a migration from Novell NetWare to Windows NT, the Supervisor
	equivalents are not migrated to the Administrators group.
	
	MORE INFORMATION
	================
	
	The book "Services for NetWare Networks," version 3.5 states in chapter 9, on
	page 88:
	
	  You can choose to add groups and users who have Supervisor
	  rights to the Administrators group on Windows NT.
	
	This statement is not correct. The users are added to the global Administrators
	group instead.
	
	NOTE: Do not confuse the "Services for NetWare Administrators Guide (Add-on
	Utilities for Microsoft Windows NT Server version 4.0)" with the book mentioned
	here. There is no information about using the Nwconv.exe migration utility in
	this book.
	
	Additional query words: nwconv migrate convert
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
