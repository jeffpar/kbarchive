---
layout: page
title: "Q196079: API Tracing May Cause Access Violation With CMETPN() Function"
permalink: kb/196/Q196079/
---

## Q196079: API Tracing May Cause Access Violation With CMETPN() Function

	Article: Q196079
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA applications written to use the CMETPN (Extract_TP_Name) function may get an
	access violation when API tracing has been enabled.
	
	The Drwtsn32.log file that is generated will contain information similar to the
	following:
	
	  Application exception occurred:
	
	  App: exe/Application.exe (pid=<process id number>) When: <date> @
	  <time> Exception number: c0000005 (access violation)
	
	  (some details omitted for clarity)
	
	  function: seputrcp_d
	
	  61d09caf 8d542448 lea edx,[esp+0x48] ss:0144e7eb=???????? 61d09cb3 6a00 push
	  0x0 61d09cb5 6a00 push 0x0 61d09cb7 52 push edx 61d09cb8 68b033d161 push
	  0x61d133b0 61d09cbd e979040000 jmp seputrcp_d+0x4dcb (61d0a13b) 61d09cc2
	  6683bc242401000001 cmp word ptr [esp+0x124],0x1
	
	  ss:0012ff08=0001
	
	  61d09ccb 7539 jnz seputrcp_d+0x4996 (61d09d06) 61d09ccd 33c0 xor eax,eax
	  61d09ccf 33c9 xor ecx,ecx
	
	  FAULT ->61d09cd1 8a4303         mov     al,[ebx+0x3]   ds:0131ea06=??
	
	  61d09cd4 8a4b02 mov cl,[ebx+0x2] ds:0131ea06=?? 61d09cd7 50 push eax 61d09cd8
	  33d2 xor edx,edx 61d09cda 8a5301 mov dl,[ebx+0x1] ds:0131ea06=?? 61d09cdd
	  33c0 xor eax,eax 61d09cdf 8a03 mov al,[ebx] ds:00000000=?? 61d09ce1 51 push
	  ecx 61d09ce2 52 push edx 61d09ce3 50 push eax 61d09ce4 8d4c2458 lea
	  ecx,[esp+0x58]
	
	  ss:0144e7eb=????????
	
	  61d09ce8 68b833d161 push 0x61d133b8
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  0012ff00 62e13834 00000001 00000028 11b00000 00000000 snatrc!seputrcp_d
	  (FPO: [EBP 0x77fa55b0] [10,68,4])
	  0012ff2c 62e06678 00000001 00000028 11b00000 00000000 wcpic32!seputrcp
	  (FPO: [9,0,0])
	  0012ff68 004010dc 00410000 004171a0 004170e8 004170ec wcpic32!cmetpn
	  (FPO: [EBP 0x77fa55b0] [4,1,4])
	
	CAUSE
	=====
	
	The CMETPN function was passing the Conversation ID in the wrong parameter,
	causing a null pointer to be de-referenced.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack.
	
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. This problem was first corrected in SNA
	Server 3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
