---
layout: page
title: "Q164795: Print Jobs Do Not Print Through Office Vision 400"
permalink: kb/164/Q164795/
---

## Q164795: Print Jobs Do Not Print Through Office Vision 400

	Article: Q164795
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
	
	Print jobs created using Office Vision 400 will not print until the print
	session is cycled on and then off.
	
	What happens is that the print job sits at the WTR status until the print session
	in SNA Manager is recycled, at which time the job prints normally.
	
	CAUSE
	=====
	
	There was a problem in Ppd5250.exe that has now been fixed. The print subsystem
	was sending back a response with a zero-length RU, which made the AS/400 give
	the print subsystem direction again (because it was expecting a proper
	response). Ppd5250.exe then gave the AS/400 direction, but it still had the
	zero-length RU. So the AS/400 returned direction back again, and this process
	repeated over and over.
	
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodsna sna30
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
