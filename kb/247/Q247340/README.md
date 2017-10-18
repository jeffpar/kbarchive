---
layout: page
title: "Q247340: SymDestName Incorrect in SDK Documentation for CPI-C Samples"
permalink: kb/247/Q247340/
---

## Q247340: SymDestName Incorrect in SDK Documentation for CPI-C Samples

	Article: Q247340
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There is an error in the SDK documentation for the CPI-C send and receive sample
	Transaction Programs (TPs). An incorrect name is listed for the SymDestName.
	
	The exact location of the sample documentation in the Software Development Kit
	(SDK) is under Appendixes\Sample CPI-C TPs in the SDK\Sample CPI-C TPs.
	
	The Setup section states the following:
	
	  For example, use SENDLU-RECVLU-#INTER as your LU-LU-mode triplet. Then create
	  a CPI-C symbolic destination name CPICRECV containing the application TP name
	  CPICRECV...
	
	However, under the Input and Output section, the CPI-C symbolic destination name
	(SymDestName) is listed as CPICSEND:
	
	  ResultFile = C:\CPICSEND.OUT File name to print timings to.
	  NumSends = 2 Number of Send_Data calls per conversation.
	  SendSize = 1024 Size in bytes of data sent each time.
	  ConfirmEvery = 1 Number of Send_Data calls between Confirm calls.
	  SymDestName = CPICSEND Symbolic destination name.
	
	The SymDestName name should actually be CPICRECV.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 (all
	SP), 4.0, 4.0SP1, 4.0SP2, and 4.0SP3.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
