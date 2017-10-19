---
layout: page
title: "Q135317: Application Exception in SNA Server 802.2 Link Service"
permalink: /kb/135/Q135317/
---

## Q135317: Application Exception in SNA Server 802.2 Link Service

	Article: Q135317
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
	
	The following application exception occurs in the SNA Server 802.2 link
	service:
	
	  Application exception occurred:
	          App: snalink.DBG (pid=169)
	          When: 5/27/1995 @ 1:54:25.364
	          Exception number: c0000005 (access violation)
	
	
	CAUSE
	=====
	
	A timing condition occurs where the link service uses an invalid internal link
	station control block index without first checking whether it is valid or not.
	
	RESOLUTION
	==========
	
	Microsoft has updated the file SNADLC.DLL to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
