---
layout: page
title: "Q143199: DHCP Manager May Incorrectly Report Lease Expirations"
permalink: /kb/143/Q143199/
---

## Q143199: DHCP Manager May Incorrectly Report Lease Expirations

	Article: Q143199
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When viewing the lease expiration of all Dynamic Host Configuration Protocol
	(DHCP) reserved clients for a scope in DHCP Manager, selecting "Scope, Active
	Leases, Properties" indicates that the "Lease Expires: Infinite". This is only
	true if the scope is created with an unlimited lease duration. If the scope's
	lease duration is limited to a specific period of time, the lease expiration for
	the reserved clients will match the expiration of all addresses in the scope.
	
	CAUSE
	=====
	
	The lease term of a DHCP reserved client is determined by the lease duration of
	the scope in which the reservation is added.
	
	RESOLUTION
	==========
	
	To create reserved clients with unlimited lease durations, create a scope with
	an unlimited lease duration and add reservations to that scope.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
