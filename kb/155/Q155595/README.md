---
layout: page
title: "Q155595: Server Manager Error: A Machine Account Already Exists"
permalink: kb/155/Q155595/
---

## Q155595: Server Manager Error: A Machine Account Already Exists

	Article: Q155595
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbusage
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a new machine account to the domain in Server Manager, you receive
	the following error message:
	
	  A Machine Account for <machine name> Already Exists.
	
	You receive this message even though no other machine account with this name
	exists in the domain.
	
	CAUSE
	=====
	
	A user account name exists with a dollar sign ($) symbol as the last character.
	For example, if there is a user account named "Tracey$" and you attempt to add a
	machine account named "Tracey," you will receive the error message. By default,
	Windows NT saves user account names in the registry as <user name>$.
	
	RESOLUTION
	==========
	
	Open User Manager for Domains and either remove or rename the user account.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv kbusage 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
