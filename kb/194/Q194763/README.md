---
layout: page
title: "Q194763: SNA Print Server PDF Fails to Support Macros Exceeding 127 Chara"
permalink: /kb/194/Q194763/
---

## Q194763: SNA Print Server PDF Fails to Support Macros Exceeding 127 Chara

	Article: Q194763
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you configure an SNA print server to use a Printer Definition File (PDF) to
	perform character mapping operations, the operation will fail if the length of
	the fully expanded macro used exceeds 127 characters.
	
	CAUSE
	=====
	
	A problem with SNA print server resulted in the maximum length of PDF macros
	being limited to 127 characters.
	
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
	SP1, 3.0 SP2, 3.0 SP 3, 4.0, and 4.0 SP1. This problem was first corrected in
	SNA Server 3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
