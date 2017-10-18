---
layout: page
title: "Q175284: XADM: Remove All Does Not Remove JET Performance Counters"
permalink: kb/175/Q175284/
---

## Q175284: XADM: Remove All Does Not Remove JET Performance Counters

	Article: Q175284
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	When you run Microsoft Exchange Server setup and you carry out a Remove All
	command, the JET (ESE) performance counters are not removed. This is by
	design. JET is now used by the Windows NT version 5.0 directory, DHCP, and
	WINS components; therefore, the counters cannot be removed.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
