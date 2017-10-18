---
layout: page
title: "Q182422: Services on SNA Server Are Incorrectly Enumerated"
permalink: kb/182/Q182422/
---

## Q182422: Services on SNA Server Are Incorrectly Enumerated

	Article: Q182422
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you select an SNA Server computer in SNA Server Manager, a message appears at
	the top of the right pane that indicates an incorrect number of configured
	services for that SNA Server.
	
	For example, selecting an SNA Server computer named SNASERV1 in the left pane of
	Manager results in a message similar to the following at the top of the right
	pane in Manager:
	
	  Services on 'SNASERV1' (<number of configured services>)
	
	The problem is that the number of configured services shown in this message will
	always be one more than the actual number of configured services for the
	selected SNA Server computer.
	
	CAUSE
	=====
	
	Some folders in Manager are being counted as a service, which causes the number
	of configured services to be off by one.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
