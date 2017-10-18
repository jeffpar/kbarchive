---
layout: page
title: "Q196921: SNA Server Access Violation in Function S1PWLUSE()"
permalink: kb/196/Q196921/
---

## Q196921: SNA Server Access Violation in Function S1PWLUSE()

	Article: Q196921
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server service may terminate unexpectedly causing all connected users to
	lose their existing host sessions. If Drwtsn32.exe is configured as the default
	debugger on the system, a Drwtsn32.log file similar to the following will be
	generated when this problem occurs:
	
	Application exception occurred:
	       App: exe\snaservr.DBG (pid=<process ID>)
	       When: <data> @ <time>
	       Exception number: c0000005 (access violation)
	
	function: s1pwluse
	       003ebb91 7514             jnz     s1pwluse+0xa7 (003ebba7)
	       003ebb93 66c746180100     mov     word ptr [esi+0x18],0x1
	ds:00f0ea07=????
	       003ebb99 6a00             push    0x0
	       003ebb9b e880060000       call    s1pwclps (003ec220)
	       003ebba0 b101             mov     cl,0x1
	       003ebba2 e9d9010000       jmp     s1pwluse+0x280 (003ebd80)
	       003ebba7 663d1a00         cmp     ax,0x1a
	       003ebbab 0f85cf010000     jne     s1pwluse+0x280 (003ebd80)
	       003ebbb1 b101             mov     cl,0x1
	       003ebbb3 e9c8010000       jmp     s1pwluse+0x280 (003ebd80)
	FAULT ->003ebbb8 668b4618         mov     ax,[esi+0x18]
	ds:00f0ea07=????
	       003ebbbc 663d0100         cmp     ax,0x1
	       003ebbc0 751a             jnz     s1pwluse+0xdc (003ebbdc)
	       003ebbc2 66c746181500     mov     word ptr [esi+0x18],0x15
	ds:00f0ea07=????
	       003ebbc8 668b420c         mov     ax,[edx+0xc]
	ds:021ea5c3=????
	       003ebbcc 6689460e         mov     [esi+0xe],ax
	ds:00f0ea07=????
	       003ebbd0 e8eb040000       call    s1pwolpq (003ec0c0)
	       003ebbd5 b101             mov     cl,0x1
	       003ebbd7 e9a4010000       jmp     s1pwluse+0x280 (003ebd80)
	       003ebbdc 663d1a00         cmp     ax,0x1a
	       003ebbe0 0f859a010000     jne     s1pwluse+0x280 (003ebd80)
	       003ebbe6 b101             mov     cl,0x1
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	000000ff 00000000 00000000 00000000 00000000 00000000 snaservr!s1pwluse
	(FPO: [1,0,2])
	000000ff 00000000 00000000 00000000 00000000 00000000 snaservr!<nosymbols>
	
	In addition, the SNA Server will log a message similar to the following in the
	Windows NT Application Event Log:
	
	  Event ID: 624
	  Source: SNA Server
	  Description: Creating dump file <snaroot>\traces\snadump.log for
	               snaservr.exe.
	
	CAUSE
	=====
	
	The access violation in the S1PWLUSE() function is caused because the SNA Server
	service attempts to process an incorrectly formatted message that it received
	from a client across the native 3270 emulator interface (3270 Emulator Interface
	Specification).
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. We are
	researching this problem in SNA Server versions 2.11 and 3.0 and will post more
	information here in the Knowledge Base as it becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	
	=============================================================================
	
