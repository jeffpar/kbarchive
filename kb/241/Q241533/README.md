---
layout: page
title: "Q241533: Dr. Watson in Mmc.exe with SNA Server and SMS on Same Computer"
permalink: kb/241/Q241533/
---

## Q241533: Dr. Watson in Mmc.exe with SNA Server and SMS on Same Computer

	Article: Q241533
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SNA Server 4.0 and Systems Management Server 2.0 are installed on the same
	computer, an exception error may occur when you try to open the Microsoft
	Management Console (MMC) plug-in for SNA Server (Mmcsna.msc) using Mmc.exe. If
	Dr. Watson is configured as the default debugger on the system, a Drwtsn32.log
	file similar to the following is generated when this problem occurs:
	
	  Error:
	  An application error has occurred and an application error log is being
	  generated.
	  MMC.EXE
	  Exception: access violation (0x0000005), Address: 0x5f4058b6.
	
	  Application exception occurred:
	       App: exe\mmc.dbg (pid=220)
	       When: 6/16/1999 @ 16:42:1.312
	       Exception number: c0000005 (access violation)
	
	  State Dump for Thread Id 0xdb
	
	  eax=00000000 ebx=00256520 ecx=00000000 edx=00000008 esi=002579a4 edi=002579a0
	  eip=5f4058b6 esp=0006e240 ebp=0006e274 iopl=0         nv up ei pl nz na po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000             efl=00000206
	
	  function: Ordinal1669
	       5f4058aa e8d4b7ffff       call    Ordinal1168 (5f401083)
	       5f4058af 8b4004           mov     eax,[eax+0x4]          ds:0147ea06=????????
	       5f4058b2 6a01             push    0x1
	       5f4058b4 8bc8             mov     ecx,eax
	  FAULT ->5f4058b6 8b10             mov     edx,[eax]              ds:00000000=????????
	       5f4058b8 ff9298000000     call    dword ptr [edx+0x98]   ds:000000a0=????????
	       5f4058be c3               ret
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	
