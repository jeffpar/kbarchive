---
layout: page
title: "Q137804: SNA Server DFT Link Service Outage 0x11 (DSR Failure)"
permalink: /kb/137/Q137804/
---

## Q137804: SNA Server DFT Link Service Outage 0x11 (DSR Failure)

	Article: Q137804
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the IBMDFT.DLL driver with the Microsoft SNA Server, the receipt of
	a large amount of data (such as a screen dump) causes the DFT connection to
	disconnect with an Outage 0x11 message (that is a DSR failure).
	
	
	CAUSE
	=====
	
	The DFT link service is erroneously informing the node that it supports a
	maximum frame size of 256 bytes. As a result, the node uses a maximum frame size
	of 256 bytes. When the node has an RU larger than 256 bytes to send to the link
	service, it segments the RU to stay at or below 256 bytes and sends it in
	multiple parts. The link service cannot cope with this (expecting to receive
	only whole RUs), and disconnects the connection.
	
	RESOLUTION
	==========
	
	Microsoft has updated the file IBMDFT.DLL to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11
	
	=============================================================================
	
