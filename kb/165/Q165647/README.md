---
layout: page
title: "Q165647: BIND -RSP for Host-Initiated Dependent LU6.2 Sessions"
permalink: /kb/165/Q165647/
---

## Q165647: BIND -RSP for Host-Initiated Dependent LU6.2 Sessions

	Article: Q165647
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
	
	SNA Server 3.0 sends a negative response to a BIND sent by a host for a
	dependent LU6.2 session even though the BIND is correct. If the BIND is elicited
	by SNA Server sending an INIT-SELF, the BIND is responded to positively. When
	the host initiates the BIND, SNA Server may reject it with sense code 0835xxxx
	(where xxxx offset may vary)
	
	CAUSE
	=====
	
	This was a problem found in the SNA Server service.
	
	RESOLUTION
	==========
	
	A fix was made to the SNA Server service to resolve this issue. To resolve this
	problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: cics appc lu62
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
