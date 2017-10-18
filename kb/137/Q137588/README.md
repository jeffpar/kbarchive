---
layout: page
title: "Q137588: TN3270 Service Will Not Start with a Large Config File"
permalink: kb/137/Q137588/
---

## Q137588: TN3270 Service Will Not Start with a Large Config File

	Article: Q137588
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the TN3270 server configuration file becomes too large the service fails to
	start and the following error message is logged in the event log:
	
	  Event 102: Source:tn3270 server
	  Type error:
	  TN3270 Service initialization completed by time-out.
	
	  Explanation
	  TN3270 Service initialization failed.
	
	  Action
	  Record message and contact technical support.
	
	CAUSE
	=====
	
	
	RESOLUTION
	==========
	
	Microsoft has updated the file, %tnserverroot%\TN3SERVR.EXE, to correct this
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna tn3270
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
