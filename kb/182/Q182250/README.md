---
layout: page
title: "Q182250: Can't Start Multiple Nodes Simultaneously in MMC Snap-in"
permalink: /kb/182/Q182250/
---

## Q182250: Can't Start Multiple Nodes Simultaneously in MMC Snap-in

	Article: Q182250
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Management Console (MMC) Snap-in does not allow multiple nodes
	(SNA Server services) to start simultaneously. This functionality is present in
	the SNA Manager.
	
	CAUSE
	=====
	
	The toolbar in the MMC Snap-in will not work with MultiSelected items.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The toolbar in the MMC Snap-in has been modified so that it will not show the
	START/STOP command for multiple items.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
