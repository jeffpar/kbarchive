---
layout: page
title: "Q185687: CPU Utilization Randomly Goes to 100 Percent on SNA Print Server"
permalink: kb/185/Q185687/
---

## Q185687: CPU Utilization Randomly Goes to 100 Percent on SNA Print Server

	Article: Q185687
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CPU Utilization on an SNA Server computer that is running SNA Print Server
	may randomly jump to, and remain at, 100 percent until the Print Server service
	is stopped.
	
	CAUSE
	=====
	
	A variable that has not been initialized can cause Print Server to start trying
	to do work for a device which does not exist. This causes the processor to go
	into a loop, from which it does not exit until Print Server is stopped.
	
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
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	From SNA Server Manager, stop the Print Server and restart it to work around
	this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 3.0 SP3. This problem was first corrected in SNA Server 3.0
	Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
