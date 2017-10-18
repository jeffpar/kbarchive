---
layout: page
title: "Q182575: IBM PComm AS/400 Data Transfer Doesn't Display Remote APPC LUs"
permalink: kb/182/Q182575/
---

## Q182575: IBM PComm AS/400 Data Transfer Doesn't Display Remote APPC LUs

	Article: Q182575
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the IBM Personal Communications (for AS/400) version 4.1 Data
	Transfer utility, the Remote APPC LU names may fail to appear. Also, any APPC
	application that uses the SNA Server DISPLAY function may retrieve duplicate
	Remote APPC LUs and APPC Modes and will fail to retrieve dynamically defined
	Remote APPC LUs.
	
	CAUSE
	=====
	
	The SNA Server service is incorrectly reporting multiple instances of Remote
	APPC LUs and Modes and fails to report dynamically defined Remote APPC LUs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3 and 4.0. This problem was corrected in the latest SNA
	Server version 4.0 U.S. Service Pack. For information on obtaining this Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
