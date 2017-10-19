---
layout: page
title: "Q164771: No Event Logging Occurs When SNAUDB Is Stopped"
permalink: /kb/164/Q164771/
---

## Q164771: No Event Logging Occurs When SNAUDB Is Stopped

	Article: Q164771
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you stop the SNA Server Host Account Cache service (that is, SnaDatabase,
	or Snaudb.exe), no events are logged in the Windows NT event log.
	
	CAUSE
	=====
	
	No event log messages are reported when you stop the SNA Server Host Account
	Cache service.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	The updated file is:
	
	  <Snaroot>\Hssystem\Snaudb.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna snahostsec
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
