---
layout: page
title: "Q139785: RUI Problem Handling RUI_SEND After Sense Data Received"
permalink: kb/139/Q139785/
---

## Q139785: RUI Problem Handling RUI_SEND After Sense Data Received

	Article: Q139785
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the host application sends sense data to an RUI application while the RUI
	application is sending data, the SNA Server RUI library queues the application
	data in error and never sends it, causing the RUI application and the host
	application to become unsynchronized.
	
	CAUSE
	=====
	
	The RUI application gets the sense data indicator (SDI) message and correctly
	sends negative response. Because the RUI library is in the middle of a chain (it
	has only received Begin Chain - BCI, not End Chain - ECI) it sets a flag telling
	it to discard all data messages until it receives one with ECI set.
	Unfortunately the server performs the same check. Therefore the RUI library does
	not see the ECI flag until it receives the end of the NEXT chain (the retried
	one).
	
	RESOLUTION
	==========
	
	The RUI application can't work around this problem. The solution is for the RUI
	library to detect that a new chain is starting without the purging one ending,
	and simply to stop purging at that point.
	
	An update to the SNA Server RUI DLL corrects this problem. Note that with this
	update applied, the RUI application will still miss the Middle of Chain (MC) and
	EC sequence numbers on the rejected chain. Microsoft has updated the following
	files to correct this problem:
	
	  Client Platforms     Updated Files
	  -----------------------------------------------------------
	  Win32                <snaroot>\system\WINRUI32.DLL
	  Windows 3.x          <winroot>\system\WINRUI.DLL
	  OS/2                 <snaroot>\ACSRUI.DLL
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.1,2.11
	
	=============================================================================
	
