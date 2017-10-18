---
layout: page
title: "Q176767: SNA Print Service Prints 80 Columns per Line Instead of 132"
permalink: kb/176/Q176767/
---

## Q176767: SNA Print Service Prints 80 Columns per Line Instead of 132

	Article: Q176767
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Even though a host printer session is configured to use 132-column printing with
	the SNA Print Service, the print job is still printed with 80 columns per line.
	
	When the host sends an FMH-1 Read Partition query for an LU1 print session, the
	SNA Print Service responds with a usable size of 24x80, even though the SNA
	Server printer session is configured to use a maximum print position (MPP) of
	132 columns. This causes the host to set MPP to 80 instead of 132.
	
	CAUSE
	=====
	
	The SNA Print Service is ignoring the configured Default Page Width setting in
	the SNA Server configuration and always indicating a maximum page width of 80
	columns.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the SNA Print Service included
	in Microsoft SNA Server versions 3.0, 3.0 Service Pack 1, and 3.0 Service Pack
	2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
