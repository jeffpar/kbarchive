---
layout: page
title: "Q194365: SNA Server Access Violation in DestroyUser()"
permalink: /kb/194/Q194365/
---

## Q194365: SNA Server Access Violation in DestroyUser()

{% raw %}

	Article: Q194365
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server Manager traps when performing the following steps:
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Create a LUA pool.
	
	2. Create a User, such as Everyone in Manager.
	
	3. Save the configuration.
	
	4. Delete the above LUA pool.
	
	5. Delete the above user, and SNA Server Manager traps.
	
	When this occurs, a <Ntroot>\Drwtsn32.log file may be created, indicating a
	"FAULT" in the following routine:
	
	     Copyright (C) 1985-1996 Microsoft Corp. All rights reserved.
	
	     Application exception occurred:
	             App: exe\snaexp.dbg (pid=201)
	             When: 6/11/1998 @ 18:17:50.449
	             Exception number: c0000005 (access violation)
	
	     State Dump for Thread Id 0xfc
	
	     eax=00000000 ebx=00000000 ecx=000ac008 edx=0008bea8 esi=0008bea8
	     edi=000ca650
	     eip=61204628 esp=0006f94c ebp=00000001 iopl=0         nv up ei pl nz na
	     pe nc
	     cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	     efl=00000202
	
	     function: DestroyUser
	             6120460c 89442418         mov     [esp+0x18],eax
	     ss:012ce353=????????
	             61204610 7258             jb      DestroyUser+0xea (6120466a)
	             61204612 8b8fb8010000     mov     ecx,[edi+0x1b8]
	     ds:000ca808=000a3a34
	             61204618 55               push    ebp
	             61204619 51               push    ecx
	             6120461a e8e1710000       call    GetGrpNthItem (6120b800)
	             6120461f 50               push    eax
	             61204620 56               push    esi
	             61204621 e84aa80000       call    GetAddr (6120ee70)
	             61204626 8bd8             mov     ebx,eax
	     FAULT ->61204628 668b4304         mov     ax,[ebx+0x4]
	     ds:0125ea07=????
	             6120462c 663d0b00         cmp     ax,0xb
	             61204630 750d             jnz     DestroyUser+0xbf (6120463f)
	             61204632 668b5702         mov     dx,[edi+0x2]
	     ds:01329057=????
	             61204636 6aff             push    0xff
	             61204638 8d4340           lea     eax,[ebx+0x40]
	     ds:0125ea06=????????
	             6120463b 52               push    edx
	             6120463c 50               push    eax
	             6120463d eb15             jmp     DestroyUser+0xd4 (61204654)
	             6120463f 663d0c00         cmp     ax,0xc
	             61204643 0f85a1000000     jne     DestroyUser+0x16a (612046ea)
	             61204649 668b4f02         mov     cx,[edi+0x2]
	     ds:01329057=????
	
	     *----> Stack Back Trace <----*
	
	     FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	     0006f958 6120444b 0008bea8 00000001 00ae000c 00261d70 snacfg!DestroyUser
	     (FPO: [EBP 0x000ca650] [2,0,4])
	     0006f974 6120438a 0008bea8 67700013 00261d70 00261100 snacfg!Destroy
	     (FPO: [EBP 0x00ae000c] [2,0,4])
	     0006f988 67709760 00ae000c 67700013 00260dc0 0006f980
	     snacfg!SnaDestroyRecord  (FPO: [2,0,2])
	     0006f9a4 670350e6 00000000 00261100 00260dc0 00260dc0
	     snaadmin!CSnaItem::Destroy  (FPO: [1,3,1])
	     00ae000c 00010003 000861e8 00010003 0008a8c0 00010003
	     snaole!CSnaObject::DestroyItem (FPO: Non-FPO [0,10,3])
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
