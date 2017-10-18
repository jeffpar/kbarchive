---
layout: page
title: "Q165940: Dynamic Updates for Adding LUs to Pools Is Broken"
permalink: kb/165/Q165940/
---

## Q165940: Dynamic Updates for Adding LUs to Pools Is Broken

	Article: Q165940
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an LU is assigned to pool, and then removed from the pool, and the file is
	saved while the SNA Server service is active, the SNA Server determines that the
	LU assignment to the pool took effect.
	
	CAUSE
	=====
	
	This is a problem related to dynamic updates. After a dynamic update occurs
	because the LU was added to the pool, SNA Server receives a notification and
	assumes that a new LU had been created. Therefore, two records exist for the LU
	and subsequent status updates go to the wrong LU.
	
	RESOLUTION
	==========
	
	A change was made so that SNA Server checks whether the LU already exists when a
	dynamic update occurs, and if so ignores the message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
