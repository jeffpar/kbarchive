---
layout: page
title: "Q170589: APPC Print Sessions Inactive w/ System 36 or AS/36 Host"
permalink: /kb/170/Q170589/
---

## Q170589: APPC Print Sessions Inactive w/ System 36 or AS/36 Host

	Article: Q170589
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	APPC print sessions defined on an SNA 3.0 Server stay in an inactive status and
	do not change to available status if the host is either a System/36 or an AS/36.
	
	CAUSE
	=====
	
	The PIP data sent in an APPC print session Attach contains a 2-byte field called
	"Reported System ID," which specifies which type of source system the SNA Print
	Server is trying to emulate. By default, SNA Server sends 0x0510 to indicate
	that an AS/400 is being emulated. To communicate with either an S/36 or an AS/36
	Host, SNA Server must send 0x0500.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
