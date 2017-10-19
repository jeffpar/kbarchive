---
layout: page
title: "Q177662: Roaming Profile Not Working When Using Services With Same Acct"
permalink: /kb/177/Q177662/
---

## Q177662: Roaming Profile Not Working When Using Services With Same Acct

	Article: Q177662
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a domain user account is used as the account to start up a service on a
	workstation or member server, and the same domain user account is set up to use
	a roaming profile, the roaming profiles cannot be used on this workstation or
	member server.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform one of the following:
	
	- Create a second domain user account with identical rights and use this
	  account for the service.
	
	  -or-
	
	- Disable roaming profiles for this domain user account.
	
	
	Additional query words: roaming profile services
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
