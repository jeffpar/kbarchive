---
layout: page
title: "Q194932: Implicit Incoming Remote LU Cannot Be Set to None with SNACFG"
permalink: /kb/194/Q194932/
---

## Q194932: Implicit Incoming Remote LU Cannot Be Set to None with SNACFG

{% raw %}

	Article: Q194932
	Product(s): Microsoft SNA Server
	Version(s): 2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An implicit incoming Remote logical unit (LU) cannot be reset to "None" with
	SNACFG, once it has been set to another value.
	
	To reproduce this behavior, submit the following command in a command-line
	shell:
	
	  SNACFG APPCLLU servername:local LU name /IMPREMOTELU:None
	
	This will cause the following error message to appear:
	
	  Error - Implicit Remote LU NONE not found
	
	Leaving the /IMPREMOTELU parameter blank causes the same error message.
	
	CAUSE
	=====
	
	Instead of removing the previous associated implicit remote LU, SNACFG tries to
	resolve the Name, which of course does not exist.
	
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
	
	This problem was corrected in the latest Microsoft SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	2.11 Service Pack 2, 3.0, 3.0 Service Pack 1, 3.0 Service Pack 2, 3.0 Service
	Pack 3, 4.0, and 4.0 Service Pack 1. This problem was first corrected in SNA
	Server 3.0 Service Pack 4.
	
	Additional query words: SNACFG IMPREMOTELU unattended
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
