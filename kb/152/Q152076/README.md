---
layout: page
title: "Q152076: Browser Returns Truncated List of Resources"
permalink: /kb/152/Q152076/
---

## Q152076: Browser Returns Truncated List of Resources

	Article: Q152076
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A domain user will get a truncated list of resources when they browse the domain
	with File Manager or the Net View command.
	
	CAUSE
	=====
	
	The browser service can only return 64 KB of domain/server names per transport.
	If the resource list for a domain cannot fit in a 64 KB buffer, the user will
	get a truncated list of resources available on the domain.
	
	WORKAROUND
	==========
	
	Use one of the following workarounds:
	
	- Break up the current single domain into multiple domains.
	
	  -OR-
	
	- Reduce the description text for the servers in the domain. More servers can
	  fit in the 64 KB buffer this way.
	
	Note: Use the Server Manager for the domains to reduce the Description Text.
	
	STATUS
	======
	
	The 64KB domain/server names per transport limitation has been removed in a
	Windows NT 4.0 Browser environment. All Browsers involved in transferring the
	Browse list to the client, and the client itself must be Windows NT Version 4.0.
	In a large Browser environment, this means that the Primary domain controller
	which takes on the especial role of being the Domain Master Browser, and the
	Master Browser on the client's segment, and all Backup Browsers on the client's
	segment must all be Windows NT version 4.0 for the Browser list to exceed 64KB.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
