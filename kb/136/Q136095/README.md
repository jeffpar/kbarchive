---
layout: page
title: "Q136095: 802.2 Link Service Hangs APPC Program or Causes Event ID 592"
permalink: kb/136/Q136095/
---

## Q136095: 802.2 Link Service Hangs APPC Program or Causes Event ID 592

	Article: Q136095
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
	
	When you download data from a host computer using an APPC program with 4K RU
	sizes (pacing of 8), one or more of the following symptoms occur:
	
	- The following event appears in the application log:
	
	  Event ID 592
	  Descrition: Receive_Allocate timed out. No incoming allocate was
	  accepted within the configured timeout period.
	
	- The APPC program freezes.
	
	CAUSE
	=====
	
	When SNA server detects that DLC.SYS is in a local busy state, the 802.2 link
	service queries DLC.SYS once to see whether it has enough buffers to clear it,
	but the 802.2 link service fails to continue querying if the first query is
	unsuccessful.
	
	This is a trace of the problem:
	
	  (linkint.trc)
	  |00000027.00000093 TRC_W  asy-wr writeptr now 24, linktype 4
	  |00000027.00000093 a4ucc  completed READ - index = 0, rc = 0
	  |00000027.00000093 a4ucc  DLC status - code = 1
	  |00000027.00000093 a4ucc  entering local busy due to buffer shortage
	  |00000027.00000093 a4ugb  get a DRB - command = 1e
	  |00000027.00000093 a4ugb  get a general DRB
	  |00000027.00000093 a4ugb  got a DRB 00073630 command 1e
	
	RESOLUTION
	==========
	
	To resolve this problem, install the fix mentioned below. The new 802.2 link
	service retries the query about every 0.2 seconds. Microsoft has updated the
	file SNADLC.DLL to correct this problem.
	
	
	To work around this problem if your program hangs, deactivate the LU on both the
	host and in SNA Server.
	
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
	
