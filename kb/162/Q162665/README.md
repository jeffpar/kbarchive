---
layout: page
title: "Q162665: LUA File Transfer Locks Out 3270 User Sessions"
permalink: kb/162/Q162665/
---

## Q162665: LUA File Transfer Locks Out 3270 User Sessions

	Article: Q162665
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When invoking a file transfer using the Data Connection NetView/DM Agent (NDMA)
	on a computer running SNA Server, all 3270 client user requests "hang" until the
	file transfer has completed. When running a 3270 emulator on the server, a 3270
	request does get processed, but the response time is very slow.
	
	CAUSE
	=====
	
	The Data Connection NetView/DM Agent uses the LUA RUI API to communicate with
	the host. Even though the LUA LU being used was defined as a "low priority LU"
	(that is, the "high priority LU" checkbox on the LUA LU definition within SNA
	Server Admin is not checked), SNA Server was queuing the LUA application
	requests in a high-priority internal queue, ahead of 3270 user requests. All
	user requests made on 3270 LU sessions are always defined as "high priority,"
	though they were not being properly handled as high priority.
	
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, 2.11 Service Pack 1 (SP1), and 3.0.
	
	
	A supported fix is now available for SNA Server versions 2.11 and 3.0, but has
	not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft recommends that you wait for the next Service Pack
	that contains this fix. Contact Microsoft Technical Support for more
	information.
	
	
	Additional query words: prodsna 2.00 2.10 2.11 3.00 kbbug2.00 sna3sp1fix
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0
	
	=============================================================================
	
