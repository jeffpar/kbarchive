---
layout: page
title: "Q151697: SNA Server 2.11 May Send 2nd BID to 3270 Emulator in Error"
permalink: /kb/151/Q151697/
---

## Q151697: SNA Server 2.11 May Send 2nd BID to 3270 Emulator in Error

	Article: Q151697
	Product(s): Microsoft SNA Server
	Version(s): 2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, versions 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using SNA Server 2.11, a 3270 emulator may log one of the following sense
	code errors:
	
	  0813 = Bracket Bid Reject -- No RTR Forthcoming
	  081B = Receiver in transmit mode
	
	This problem did not occur with SNA Server 2.1.
	
	CAUSE
	=====
	
	With any 3270 emulator that supports the SNA Server EIS (FMI) interface, the SNA
	Server passes a STATUS BID request up to the emulator when it receives a BID
	from the host. However, it also passes a STATUS BID request to the emulator when
	it receives data marked as BB. The emulator rejects this second STATUS BID
	request with the sense code 0813 or 081B.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 2.11. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack 1. For information on obtaining the Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	If SNA Server Data Link Control and 3270 message tracing are enabled, the
	following message flow may be observed:
	
	Emulator    SNA Server     Host
	-----------------------------------------------------------------------
	                 <- BIND RQD
	        <- Open PLU
	Open PLU +RSP ->
	        BIND +RSP ->
	        <- Open PLU Conf OK
	                 <- SDT RQD
	        <- FMIST CTRL SDT REQ (NO ACK)
	        SDT +RSP ->
	                 <- BID RQD
	        <- FMIST CTRL BID REQ (ACK RQD, RBI)
	FMIST CTRL BID +RSP ->
	        BID +RSP ->
	                 <- FMD RQE (RH=039580)
	        <- FMIST CTRL BID REQ (ACK RQD)
	FMIST CTRL BID NAK1 (081B) ->
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211NT kbSNAServ211NTSP1
	Version           : :2.11,2.11 SP1
	
	=============================================================================
	
