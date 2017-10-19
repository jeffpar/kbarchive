---
layout: page
title: "Q168775: Unused Dependent LU6.2 Session Not Deactivated"
permalink: /kb/168/Q168775/
---

## Q168775: Unused Dependent LU6.2 Session Not Deactivated

	Article: Q168775
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After SNA Server initiates a dependent LU6.2 session for use by an SNA Server
	APPC or CPIC application, the dependent LU6.2 session remains active even after
	the LU6.2 conversation is de-allocated. This problem started occurring with SNA
	Server 3.0; this problem did not occur with SNA Server 2.x.
	
	CAUSE
	=====
	
	The SNA Server dependent APPC mode entry is configured with "Contention Winner
	Limit = 1;" SNA Server 3.0 is failing to override the contention winner status
	of a session when responding to a host BIND request. Because SNA Server is not
	negotiating to be the contention winner on the LU6.2 session, SNA Server does
	not initiate session shutdown after the LU6.2 conversation is de-allocated.
	
	This problem was introduced in SNA Server 3.0 as a side effect of implementing
	support for dynamic partnership for APPC LUs.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Configure the host subsystem to be the contention loser.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	SP1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
