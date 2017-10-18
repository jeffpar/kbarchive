---
layout: page
title: "Q139423: Downstream Connection Should Default to Incoming Calls"
permalink: kb/139/Q139423/
---

## Q139423: Downstream Connection Should Default to Incoming Calls

	Article: Q139423
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you configure a Downstream (DSPU) connection in SNA Server Admin, the
	default Allowed Directions value is Outgoing Calls. However, most users require
	that the Allowed Directions be set to Incoming Calls, so that the downstream PU
	can initiate the connection.
	
	RESOLUTION
	==========
	
	
	Microsoft has updated the file <snaroot>\SYSTEM\SNAADMIN.EXE to correct
	this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11 x25
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
