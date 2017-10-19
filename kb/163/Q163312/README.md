---
layout: page
title: "Q163312: Incorrect Format 0 XID for Channel Connections"
permalink: /kb/163/Q163312/
---

## Q163312: Incorrect Format 0 XID for Channel Connections

	Article: Q163312
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A connection using a Channel adapter, although configured for a format 0 XID,
	generates an XID indicating format 3.
	
	CAUSE
	=====
	
	The first byte of the XID generated specifies format 3.
	
	RESOLUTION
	==========
	
	Apply the update referenced below. An update to the SNA Server Administrator
	program corrects the format of the connection entry to properly indicate Format
	0 for channel connections.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.1, 2.11,
	and 2.11 Service Pack 1 (SP1).
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.1,2.11,2.11 SP1
	
	=============================================================================
	
