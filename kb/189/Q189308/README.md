---
layout: page
title: "Q189308: Manager Fails to Detect Installed Link Service"
permalink: /kb/189/Q189308/
---

## Q189308: Manager Fails to Detect Installed Link Service

	Article: Q189308
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add multiple link services of the same type (for example, multiple
	802.2 DLC link services), sometimes a link service will not be properly
	recognized by SNA Server Manager.
	
	CAUSE
	=====
	
	When you create an object, a check is done to see if an object of the same name
	exists. The name compare function used to check for an existing name uses an
	incorrect length. This can lead to a problem where a new object with a name
	similar to an existing object is not added because the name compare function
	indicates that the name already exists. For example, an 802.2 DLC link service
	with a name of SnaDlc22 will not be shown in Manager if SnaDlc2 is already
	installed. The name compare function indicates that SnaDlc22 matches SnaDlc2,
	because it uses an incorrect length for the object name.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 and 4.0
	SP1. This problem was corrected in the latest SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
