---
layout: page
title: "Q170660: TN3270 Server Access Violation in SetBestGroups()"
permalink: /kb/170/Q170660/
---

## Q170660: TN3270 Server Access Violation in SetBestGroups()

	Article: Q170660
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a TN3270E print emulator attempts to open a printer session through the SNA
	Server 3.0 Service Pack 1 TN3270 Server, the TN3270 server may encounter the
	following access violation:
	
	  
	
	  Application exception occurred:
	     App: tn3servr.DBG (pid=<process id>)
	     Exception number: c0000005 (access violation)
	
	  [data omitted]
	
	  function: SetBestGroups
	
	  FAULT ->01012c07 8b4804     mov  ecx,[eax+0x4]   ds:0068e922=????????
	
	CAUSE
	=====
	
	This is caused by a problem in the SNA Server 3.0 Service Pack 1 TN3270 server,
	which was introduced by the addition of support for multiple ports.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 Service
	Pack 1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	When this problem occurs, the stack back trace looks like the following:
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  0ca5fc10 01013e60 00183230 0ca5fc34 001849a2 001833c8
	     tn3servr!SetBestGroups
	  0ca5fc98 0100faa8 00183230 001849a2 0ca5fcbc 001849a2
	     tn3servr!SRSGetSNAResourceFirst
	  0ca5fd54 010184e3 00183230 001849a2 00183888 00000010
	     tn3servr!SNAGenericSessionStart
	  0ca5fd70 010179b7 00183230 00183230 0101704b 00183230
	     tn3servr!TNTContinueDataFromNetwork
	  0ca5fd7c 0101704b 00183230 0ca5ff5c 0ca5fe3c 00183230
	     tn3servr!TNTContinueDataFromNetwork
	  0ca5fd94 01018580 00183230 010152b2 00183230 00000011
	     tn3servr!TNTContinueDataFromNetwork
	  0ca5fd9c 010152b2 00183230 00000011 0ca5fe3c 001837cc
	     tn3servr!TNTDataFromNetwork
	  0ca5fe14 77f4f7c2 00000000 00000011 001837cc 7ffdf000 tn3servr!TCPRecv
	  0ca5fe28 77fb03bb 01015100 001837cc 00000000 00010017
	     kernel32!<nosymbols>
	  0ca5ff5c 0100c876 00000003 0018d0b8 00000000 006ddcce ntdll!<nosymbols>
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
