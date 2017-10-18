---
layout: page
title: "Q163210: SNA Server Does Not STSN Sequence Numbers On Positive"
permalink: kb/163/Q163210/
---

## Q163210: SNA Server Does Not STSN Sequence Numbers On Positive

	Article: Q163210
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An SLI application can register a SLI_STSN_ROUTINE to handle the STSN (Set and
	Test Sequence Numbers) command from the host PLU. When the SLI application
	returns a positive response, SNA Server does not echo back the sequence numbers
	indicated in the STSN host request.
	
	You may want SNA Server to send the SNA sequence numbers on every STSN response
	(positive or negative). SNA Server only returns the sequence numbers in the case
	of a TEST NEGATIVE response.
	
	CAUSE
	=====
	
	SNA Server does not echo back the sequence numbers in the positive case.
	
	RESOLUTION
	==========
	
	An update to SNA Server 2.11 Service Pack 1 is available to correct this
	problem. The updated modules include:
	
	  <snaroot>\SYSTEM\SNASERVR.EXE
	  <snaroot>\SYSTEM\WINRUI32.DLL
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.0, 2.1,
	2.11 and 2.11 SP1 (this problem is fixed in SNA Server 3.0). This problem was
	corrected in the latest SNA Server version 2.11 U.S. Service Pack. For
	information on obtaining this Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Annotated SNA Server DLC message traces are included below; these describe two
	scenarios where SNA Server fails to echo STSN sequence numbers on positive
	response.
	
	1. When the host sends an STSN with the SET, SET options, to which SNA
	
	Server responds with TESTPOS, TESTPOS. This is correct; however, SNA Server does
	NOT echo back the sequence numbers in the response.
	
	Host issues STSN REQUEST: SET,SET,37,0
	
	  DLC    ---------------------------------------------- 10:35:57.17
	  DLC    01161000->0A020101 DLC DATA
	  DLC                       DAF:02 OAF:01 ODAI:off Exp.
	  DLC                       STSN   RQD SC  FI BC EC DR1
	  DLC
	  DLC    ---- Header  at address 00D14174, 1 elements ----
	  DLC    06060100 00002D00 02010A88 01000D01     <......-....h....>
	  DLC
	  DLC    ---- Element at address 0120FB48, start 10, end 18 ----
	  DLC    6B8000A2 50002500 00                    <k..sP.%..       >
	
	SNA Server responds with STSN REPLY: TESTPOS,TESTPOS,0,0
	
	  DLC    ---------------------------------------------- 10:35:58.94
	  DLC    0A020101->01161000 DLC DATA
	  DLC                       DAF:01 OAF:02 ODAI:off Exp.
	  DLC                       STSN   +RSP SC  FI BC EC DR1
	  DLC
	  DLC    ---- Header  at address 00D151E8, 1 elements ----
	  DLC    0100880A 00012D00 01020A88 01000D01     <..h...-....h....>
	  DLC
	  DLC    ---- Element at address 0120EB50, start 10, end 18 ----
	  DLC    EB8000A2 50000000 00                    <...sP....       >
	
	2. When the host sends an STSN with the SET, SET & TEST options, to which
	  SNA Server responds with TESTPOS, TESTNEG. This is also correct; however, SNA
	  Server only fills in the TESTNEG sequence number in the response.
	
	  Host issues STSN REQUEST: SET,SET&TEST,44,27
	
	  DLC    ---------------------------------------------- 10:40:45.11
	  DLC    01161000->0A020101 DLC DATA
	  DLC                       DAF:02 OAF:01 ODAI:off Exp.
	  DLC                       STSN   RQD SC  FI BC EC DR1
	  DLC
	  DLC    ---- Header  at address 00D156C8, 1 elements ----
	  DLC    06060100 00002D00 02010A9A 01000D01     <......-.........>
	  DLC
	  DLC    ---- Element at address 0120EFE0, start 10, end 18 ----
	  DLC    6B8000A2 70002C00 1B                    <k..sp.,..       >
	
	  SNA Server responds with STSN REPLY: TESTPOS,TESTNEG,0,25
	
	  DLC    ---------------------------------------------- 10:40:47.81
	  DLC    0A020101->01161000 DLC DATA
	  DLC                       DAF:01 OAF:02 ODAI:off Exp.
	  DLC                       STSN   +RSP SC  FI BC EC DR1
	  DLC
	  DLC    ---- Header  at address 00D14B9C, 1 elements ----
	  DLC    01009A0A 00012D00 01020A9A 01000D01     <......-.........>
	  DLC
	  DLC    ---- Element at address 012137BC, start 10, end 18 ----
	  DLC    EB8000A2 70000000 19                    <...sp....       >
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	
	=============================================================================
	
