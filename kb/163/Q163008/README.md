---
layout: page
title: "Q163008: APPC Application Fails After SP1 Applied to SNA NT Client"
permalink: kb/163/Q163008/
---

## Q163008: APPC Application Fails After SP1 Applied to SNA NT Client

	Article: Q163008
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1
	Operating System(s): 
	Keyword(s): kbnetwork kbprogrammingkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The APPC Transaction Program (TP) fails after you apply SNA Server Service Pack
	1 to the SNA Server Windows NT client. This failure does not occur if the you
	have logged on to Windows NT with a user ID that has local Administrator rights.
	
	CAUSE
	=====
	
	The Transaction Program (TP) never receives a response to the TP_STARTED call.
	The client internal traces show DMOD fails to initialize because the call
	OpenProcessToken fails with a return code of 5, Access Denied.
	
	RESOLUTION
	==========
	
	Apply the update referenced below. A change was made to DMOD so it runs under
	the user's context instead of the local system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 Service
	Pack 1 (SP1).
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbprogramming kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ210
	Version           : WINDOWS:2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
