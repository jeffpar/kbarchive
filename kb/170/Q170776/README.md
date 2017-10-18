---
layout: page
title: "Q170776: TP_STARTED Stops Responding If NT App Opens More Than 256 TP"
permalink: kb/170/Q170776/
---

## Q170776: TP_STARTED Stops Responding If NT App Opens More Than 256 TP

	Article: Q170776
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After opening more than 256 transaction programs from a single Windows NT
	application, a TP_STARTED request may stop responding.
	
	CAUSE
	=====
	
	The internal APPC callback function for the get_server_list and get_default_lu's
	remote procedure calls (RPCs) assume that SNADMOD will return only an eight-bit
	TP control block index. However, if the application has already opened more than
	256 transaction programs, the SNADMOD could return a larger value, causing the
	APPC interface to fail to respond to the TP_STARTED request.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 and
	3.0. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The updated module is <snaroot>\system\Wappc32.dll.
	
	Additional query words: idea
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211
	Version           : WINDOWS:2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
