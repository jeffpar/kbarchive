---
layout: page
title: "Q169853: 0Ds Inserted When Transparency Is ASCII Is Selected"
permalink: kb/169/Q169853/
---

## Q169853: 0Ds Inserted When Transparency Is ASCII Is Selected

	Article: Q169853
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you select "Transparency Is ASCII" in the SNA Print Session properties, an
	extra "0D" (carriage return) may be inserted inadvertently. Bypass GDI is turned
	off in this case.
	
	CAUSE
	=====
	
	There is a problem in the New Line (NL) handling that can cause SNA Print
	Service to sometimes fail to set the column position back to the left side of
	the page. This later causes SNA Print Service to issue an extra carriage return
	(0x0D) when it finds itself in the wrong position.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
