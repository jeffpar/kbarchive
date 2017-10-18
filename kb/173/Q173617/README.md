---
layout: page
title: "Q173617: Print Server Application Exception in Function AimOpenPrinter"
permalink: kb/173/Q173617/
---

## Q173617: Print Server Application Exception in Function AimOpenPrinter

	Article: Q173617
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server Host Print service may generated an application exception when
	attempting to start a configured print session in SNA Server Manager. An error
	similar to the following will be logged in the Windows NT Application Event Log
	when the application exception occurs:
	
	  Event ID: 4097
	  Source: DrWatson
	  Description: The application, exe\snaprint.dbg, generated an application
	  error.
	  The error occurred on <date> @ <time>. The exception generated was
	  c0000005 at address 01002308 (AIMOpenPrinter).
	
	In addition, a Drwtsn32.log file will be generated in the Windows NT directory.
	The Drwtsn32.log will contain information similar to the following:
	
	  Application exception occurred:
	
	  App: exe\snaprint.DBG (pid=<process id #>)
	  When: <date> @ <time>
	  Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	When starting a print session, the Print Server attempts to open a connection to
	the configured printer by issuing a StartDoc() call. If the StartDoc() call
	fails, the print server was not properly setting all related pointers to NULL,
	causing the application exception to occur.
	
	In a reported occurrence of this problem, the StartDoc() call failed because the
	print server was not able to connect to the TCP/IP address of the remote printer
	that the print session was configured to use. There may be other reasons that
	StartDoc() fails that result in the same application exception.
	
	RESOLUTION
	==========
	
	The SNA Server Print service has been updated to correctly free all allocated
	memory and to reset all related pointers if the StartDoc() fails.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The Drwtsn32.log file will contain information similar to the following:
	
	  
	
	  Application exception occurred:
	     App: exe\snaprint.DBG (pid=<process id #>)
	     When: <date> @ <time>
	     Exception number: c0000005 (access violation)
	
	  function: AIMOpenPrinter
	     01002195 53               push    ebx
	     01002196 68c0a70001       push    0x100a7c0
	     0100219b 6a00             push    0x0
	     0100219d e82e080000       call    PreAsyncTrace (010029d0)
	     010021a2 83c410           add     esp,0x10
	     010021a5 8bcb             mov     ecx,ebx
	     010021a7 a13ce00001     mov eax,[PPDSessions (0100e03c)]
	  ds:0100e03c=00160b38
	     010021ac 8b443804         mov     eax,[eax+edi+0x4]
	  ds:00f0fa6b=????????
	     010021b0 8b10             mov     edx,[eax]
	  ds:0dfafe53=00000000
	     010021b2 8a01             mov     al,[ecx]
	  ds:0e014d28=53
	  FAULT ->010021b4 3a02             cmp     al,[edx]
	  ds:00000000=??
	     010021b6 751a             jnz     AIMOpenPrinter+0xdf2 (010021d2)
	     010021b8 0ac0             or      al,al
	     010021ba 7412             jz      AIMOpenPrinter+0xdee (010021ce)
	     010021bc 8a4101           mov     al,[ecx+0x1]
	  ds:0ef2372e=??
	     010021bf 3a4201           cmp     al,[edx+0x1]
	  ds:00f0ea06=??
	     010021c2 750e             jnz     AIMOpenPrinter+0xdf2 (010021d2)
	     010021c4 83c102           add     ecx,0x2
	     010021c7 83c202           add     edx,0x2
	     010021ca 0ac0             or      al,al
	     010021cc 75e4             jnz     AIMOpenPrinter+0xdd2 (010021b2)
	     010021ce 33c0             xor     eax,eax
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  01b5ff5c 01004af7 01b5ff84 00000000 00000000 0c7b9a00
	  snaprint!AIMOpenPrinter  (FPO: [EBP 0x01b5ffec] [4,146,4])
	  01b5ffa0 01006ca6 00146f98 77dd8f8c 00000001 00146fa0
	  snaprint!AIMRunScheduler  (FPO: [EBP 0x01b5ffec] [0,8,4])
	  01b5ffa8 77dd8f8c 00000001 00146fa0 00140548 77f04f32
	  snaprint!SIMMainEntryPoint  (FPO: [2,0,1])
	  01b5ffec 00000000 77dd8f7e 00146f98 00000000 52485324
	  advapi32!RegisterServiceCtrlHandlerA
	  00000000 00000000 00000000 00000000 00000000 00000000
	  snaprint!<nosymbols>
	
	Additional query words: trap
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
