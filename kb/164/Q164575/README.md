---
layout: page
title: "Q164575: Application Exception in SNA Server Using APPC Sync Level 2"
permalink: kb/164/Q164575/
---

## Q164575: Application Exception in SNA Server Using APPC Sync Level 2

	Article: Q164575
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
	
	When an APPC application uses sync point level 2 support (the SYNCPT API, new in
	SNA Server 3.0) and the LU 6.2 conversation is deactivated, the SNA Server
	service on an SNA Server 3.0 system may experience an application exception.
	This exception causes a Dr. Watson log to be generated. The Drwtsn32.log file
	may contain information similar to the following when this occurs:
	
	  Application exception occurred:
	  Application: exe\snaservr.DBG (pid=<process number>)
	  When: <date> @ <time>
	  Exception number: c0000005 (access violation)
	
	When the application exception occurs, an Event 624 is also logged to the Windows
	NT Application Event log:
	
	  Event ID: 624
	  Source: SNA Server
	  Description: Creating dump file SNADUMP.LOG for SNASERVR.EXE
	
	CAUSE
	=====
	
	The application exception occurs because the SNA Server service adds IBM Sense
	Codes to an UNBIND RU before the length of the data message is correctly
	specified. This only occurs when an APPC application is using the sync point
	level 2 API support and the LU 6.2 conversations are deallocated abnormally.
	
	
	RESOLUTION
	==========
	
	The SNA Server service has been updated to correct this problem. The updated
	modules are:
	
	  <snaroot>\system\snaservr.exe
	  <snaroot>\system\trcservr.exe (used for debug purposes only)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: syncpt backout sna30
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
