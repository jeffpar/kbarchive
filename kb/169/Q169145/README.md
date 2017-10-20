---
layout: page
title: "Q169145: Event ID: 5511 - Mismatched SIDs"
permalink: /kb/169/Q169145/
---

## Q169145: Event ID: 5511 - Mismatched SIDs

{% raw %}

	Article: Q169145
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Domain synchronization may fail with the following error:
	
	  Source: NETLOGON
	  Event ID: 5511
	  The servers <DOMAINCONTROLLER1> and <DOMAINCONTROLLER2> both claim
	  to be an NT Domain Controller for the <DOMAIN> domain. One of the
	  servers should be removed from the domain because the servers have different
	  security identifiers (SID).
	
	CAUSE
	=====
	
	The easiest way for this error to occur is to install a domain controller while
	either it or the other domain controller is disconnected from the network or
	off-line. This will create a domain with the same name but it will have a
	different security identifier (SID). As far as Windows NT domains, machine
	accounts, and trusts are concerned, you have created a new domain.
	
	RESOLUTION
	==========
	
	The problem domain controller must be re-installed when it can connect to the
	primary domain controller.
	
	
	Additional query words: trust installed account sync logon replication synchronization
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
