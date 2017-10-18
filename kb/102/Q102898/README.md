---
layout: page
title: "Q102898: User Manager Focus on Machine Name Instead of Domain Name"
permalink: kb/102/Q102898/
---

## Q102898: User Manager Focus on Machine Name Instead of Domain Name

	Article: Q102898
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When User Manager starts on a domain controller, instead of focusing on the
	current domain, it focuses on the machine name.
	
	CAUSE
	=====
	
	User Manager is in the Startup group in Program Manager. Because it takes some
	time for Netlogon services to start, User Manager is started before the network
	is running. With only the machine name available and the domain not up yet, User
	Manager can only focus on the machine.
	
	RESOLUTION
	==========
	
	Do not automatically start User Manager by putting it in the Startup group.
	Start User Manager a little after booting the domain controller.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
