---
layout: page
title: "Q194630: SnaBase May Get Access Violation if Over 255 TPs in Subdomain"
permalink: kb/194/Q194630/
---

## Q194630: SnaBase May Get Access Violation if Over 255 TPs in Subdomain

	Article: Q194630
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a subdomain contains more than 255 transaction programs (TPs), the SnaBase
	service on an SNA Server 3.0 or 4.0 system may experience an application
	exception.
	
	CAUSE
	=====
	
	SnaBase tries to put more than 255 elements into one message.
	
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
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 Service Pack 1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, 4.0
	Service Pack 1. This problem was first corrected in SNA Server 3.0 Service Pack
	4.
	
	MORE INFORMATION
	================
	
	The SnaBase now sends multiple update messages if all changed local services do
	not fit into 255 elements.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
