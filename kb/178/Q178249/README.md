---
layout: page
title: "Q178249: Using Network Control Panel to Configure SNA Server Fails"
permalink: kb/178/Q178249/
---

## Q178249: Using Network Control Panel to Configure SNA Server Fails

	Article: Q178249
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to configure SNA Server from the Services tab of the Network
	Control Panel within Windows NT 4.0, the following error message appears:
	
	  INF file SNAFILE.INF does not exist
	
	CAUSE
	=====
	
	SNA Server does not support configuration in this manner.
	
	WORKAROUND
	==========
	
	To administer SNA Server, use the SNA Manager program located in the Microsoft
	SNA Server program group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0. This problem was corrected in the latest SNA Server
	version 3.0 and 4.0 U.S. Service Packs. For information on obtaining these
	Service Packs, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
