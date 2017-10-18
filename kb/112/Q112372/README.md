---
layout: page
title: "Q112372: Recombining Split Domains"
permalink: kb/112/Q112372/
---

## Q112372: Recombining Split Domains

	Article: Q112372
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	You cannot split a domain or rename a domain by changing the domain name on
	a server or a subset of servers in the domain.
	
	Attempting to split a domain by renaming the domain on a subset of servers
	may work fine until one of the domains attempts to trust the other domain,
	or a third domain attempts to trust both of the split domains. Trust
	relationships do not work in this type of situation because the two domains
	share the same security ID (SID).
	
	Windows NT must be reinstalled on some of the servers to split a domain or
	to combine domains.
	
	If you have attempted to split a domain by changing the domain name on a
	subset of servers in the domain, recombine the domains by doing the
	following:
	
	
	NOTE: In the following steps, the domain that will remain is referred to as
	Domain A and the domain that will be deleted is referred to as Domain B.
	
	1. Decide which domain will remain. Only one of the domains can stay.
	
	2. Create new accounts on Domain A to replace the accounts that will lost when
	  Domain B is deleted.
	
	3. On domains that trust Domain B, remove that trust and make them trust Domain
	  A. (See the Microsoft Windows NT Advanced Server "System Guide" for details.)
	
	4. On Domain A and all trusting domains, change Access Control Lists (ACLs) to
	  replace references to the accounts on Domain B with references to the new
	  accounts created on Domain A.
	
	5. Move all workstations on Domain B to Domain A.
	
	6. Demote the domain controller of Domain B.
	
	7. From the Server Manager of Domain A, remove all servers from Domain B (if
	  they are still listed as members of Domain B) and add them to Domain A. Make
	  sure the domain name on all Domain B servers are changed to match the name of
	  Domain A.
	
	8. Start the servers that had been in Domain B. Allow enough time for
	  replication from Domain A to take place, and then check the event log of each
	  server to make sure each server successfully imported the account databases
	  of Domain A.
	
	Note that if domains are split or combined by changing the domain name on
	servers, trust relationships with other domains may need to be deleted and
	rebuilt. For information on broken trust relationships, see article Q112214
	in the Microsoft Knowledge Base.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	
	=============================================================================
	
