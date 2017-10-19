---
layout: page
title: "Q187327: Full Synchronization Fails When Using Long Service Names"
permalink: /kb/187/Q187327/
---

## Q187327: Full Synchronization Fails When Using Long Service Names

	Article: Q187327
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An error message is written to the event log of domain controllers every five
	minutes indicating a problem with the domain synchronization. While SAM and
	BUILTIN Full synchronization is successful, LSA Full Synchronization fails with
	the following system event log entries:
	
	  PDC:
	  NETLOGON: 5714
	  The full synchronization request from the server "bdc" failed with the
	  following error: More data is available.
	
	  BDC:
	  NETLOGON: 5718
	  The full synchronization replication of the LSA database from the
	  primary domain controller "pdc" failed with the following error: More
	  data is available.
	
	
	CAUSE
	=====
	
	Replication of the LSA database fails when using long service names. The buffer
	size reserved to hold LSA data depends on a maximum name-length variable that
	was too small. The problem does not occur in Windows NT 4.0.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but is not fully regression tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next service pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
