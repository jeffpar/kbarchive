---
layout: page
title: "Q196947: SNA Server Sessions Lost Over 802.2 DLC Connection."
permalink: kb/196/Q196947/
---

## Q196947: SNA Server Sessions Lost Over 802.2 DLC Connection.

	Article: Q196947
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1; winnt:4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If SNA Server is communicating to an IBM host or AS/400 system over an 802.2 DLC
	connection, session loss may occur under heavy stress load. This problem has
	been observed most frequently when communicating over 100 MB Ethernet
	connections, though the problem can occur over Token Ring and 10 MB Ethernet
	connections as well. When this problem occurs, SNA Server may log one of the
	following events:
	
	  Event ID: 4
	  Source: SNA Server
	  Description: (1133) Message Sequence Error
	
	  X'1133' The node received a request with an invalid sequence number.
	
	  -or-
	
	  Event ID: 21
	  Source: SNA Server
	  Description: (1124) Negative Response Sent On Connection <name>
	  (SENSE = 2001)
	
	Where sense code 2001 = Sequence Number: The sequence number received on the
	normal-flow request was not 1 greater than the last sequence number.
	
	CAUSE
	=====
	
	The SNA Server 802.2 DLC link service receives data from the Windows NT Dlc.sys
	driver. Under heavy load, the link service may encounter a "local busy"
	condition, causing the DLC driver to issue a Receiver Not Ready (RNR) frame to
	the remote system. When exiting an RNR condition, the DLC driver may pass up a
	duplicate frame to SNA Server, which may cause that SNA session to terminate
	unexpectedly.
	
	RESOLUTION
	==========
	
	This problem is fixed in Microsoft Windows NT 4.0 Service Pack 4. The updated
	module is Dlc.sys.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0, 4.0 Service Pack
	1, 4.0 Service Pack 2, and 4.0 Service Pack 3. Any version of SNA Server can
	encounter this problem when running on these versions of Windows NT.
	
	This problem is fixed in Windows NT 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	In SNA Server back-to-back testing on 100 MB Ethernet connections, SNA Server
	can occasionally receive a "duplicate frame" in an SNA session, which can cause
	the session to drop. The following illustrates the reproduction scenario:
	
	DLC app/Box #1     Box #2
	==============     =====================================
	             <- sends a window of frames (say, N(S) = 01 - 08)
	
	<- DLC passes up frame 01-06,
	then encounters local busy state
	
	DLC sends RNR with N(R)= 0x06 ->
	
	< DLC ends local busy state >
	
	RR, N(R) = 0x06 ->
	                  <- resends N(S) = 06
	
	<- DLC passes 0x06 to app
	
	This causes I-frame 0x06 to be received twice by the DLC application in error.
	With SNA Server, the DLC data contains the SNA message including the SNA
	transmission header, which has its own SNA session sequence number. When this
	DLC problem occurs, the SNA Server then detects a duplicate SNA message, and
	drops the session. SNA Server has implemented a workaround to ignore such
	duplicate messages, though if the SNA message happens to be a segmented message
	(that is, the middle of an SNA basic information unit), then it's not possible
	to work around the problem, causing the SNA session to be dropped.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOSWinSearch kbOSWinNT400 kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2 kbOSWinNTSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
