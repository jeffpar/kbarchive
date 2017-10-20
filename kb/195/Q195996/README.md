---
layout: page
title: "Q195996: SNA Server Incorrectly Handles Cancelled Allocate Requests"
permalink: /kb/195/Q195996/
---

## Q195996: SNA Server Incorrectly Handles Cancelled Allocate Requests

{% raw %}

	Article: Q195996
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following symptoms can occur when SNA Server incorrectly handles cancelled
	allocate requests:
	
	- An Advanced Program-to-Program Communications (APPC) or Common Programming
	  Interface for Communications (CPIC) application's call to [MC_]ALLOCATE or
	  CMALLC may hang indefinitely. This may occur after a previous allocation
	  request has been cancelled, or after the SNA Server connection has been
	  restarted.
	
	- If an APPC or CPIC application subsequently cancels an outstanding
	  [MC_]ALLOCATE or CMALLC request (by calling the cancel verb, or by calling
	  TP_ENDED, or if the client-server LAN session is lost), the SNA Server may
	  later fail unexpectedly with an access violation (C0000005) in routine
	  s1prfrcb() or s1puc62() as indicated by the Drwtsn32.log entry.
	
	The following Knowledge Base article has additional information when this problem
	results in an access violation in the s1prfrcb() routine:
	
	  Article ID: <LINK TYPE="ARTICLE" VALUE="Q193659">Q193659</LINK>
	
	  Title: SNA Server Access Violation in s1prfrcb()
	
	CAUSE
	=====
	
	SNA Server was incorrectly handling the cancellation of a pending [MC_]ALLOCATE
	or CMALLC request. This caused the SNA Server to prevent unused LU 6.2 sessions
	from being used. If many cancelled client allocation requests are received, this
	could lead to an SNA Server access violation.
	
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0 Service
	Pack 1. This problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
