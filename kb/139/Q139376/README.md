---
layout: page
title: "Q139376: SNA Server Does Not Support Printer LU Pools"
permalink: /kb/139/Q139376/
---

## Q139376: SNA Server Does Not Support Printer LU Pools

	Article: Q139376
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbsetup sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SNA Server does not support Printer LU Pools because it would be impossible
	to predict where a user's host print output would be sent. If users each
	print to their own printer LU, the SNA Server administrator will need to
	define an SNA Server user record for each user and assign them the specific
	display and printer LU.
	
	Note that the printer LU where a user's host print job is routed depends on
	the user configuration at the host end, not in SNA Server.
	
	NOTE: SNA Server 3.0 implements the use of an Associated Printer LU. This
	feature allows an Administrator to associate a specific 3270 printer LU
	with a 3270 Printer LU. The [ASCII 147]Pool contains Associated Printers[ASCII 148] option in
	the General tab of the 3270 Pool Properties is intended for users whose
	host ap
	lications have direct relationships between display LUs and printer LUs. If
	this option is selected, all display LUs will be treated as though they
	have an associated printer.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbsetup sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	
