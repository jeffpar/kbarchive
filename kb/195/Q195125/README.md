---
layout: page
title: "Q195125: Stopping MngAgent Service May Cause Trap in Mngcli.exe"
permalink: kb/195/Q195125/
---

## Q195125: Stopping MngAgent Service May Cause Trap in Mngcli.exe

	Article: Q195125
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the SNA MngAgent Service is manually stopped then restarted, it's possible
	for an application exception to occur in Mngcli.exe, and a Drwtsn32.log be
	generated if Drwtsn32.exe is configured as the default debugger on the SNA
	Server computer.
	
	The Drwtsn32.log file that is generated will contain information similar to the
	following:
	
	     Application exception occurred:
	        App: exe\mngcli.exe (pid=<process id number>)
	        When: <date> @ <time>
	        Exception number: c0000005 (access violation)
	
	  (some details omitted for clarity)
	
	  function: CManage::OtherProcTerminated
	          60983df9 c744241000000000 mov   dword ptr [esp+0x10],0x0   ss:0270e843=????????
	          60983e01 c744241805000000 mov   dword ptr [esp+0x18],0x5   ss:0270e843=????????
	          60983e09 e8a2feffff       call    CManage::MngLock (60983cb0)
	          60983e0e bf02000000       mov     edi,0x2
	          60983e13 3bf7             cmp     esi,edi
	          60983e15 7c5e             jl
	  CManage::OtherProcTerminated+0xc5 (60983e75)
	          60983e17 57               push    edi
	          60983e18 8bcd             mov     ecx,ebp
	          60983e1a e8d18c0000       call    CShrMemPool::GetPtr (6098caf0)
	          60983e1f 8bf0             mov     esi,eax
	  FAULT ->60983e21 8b4604           mov     eax,[esi+0x4]
	  ds:0121ea06=????????
	          60983e24 85c0             test    eax,eax
	          60983e26 7444             jz
	  CManage::OtherProcTerminated+0xbc (60983e6c)
	          60983e28 8b08             mov     ecx,[eax]   ds:00000000=????????
	          60983e2a 894c2414         mov     [esp+0x14],ecx   ss:0270e843=????????
	          60983e2e 8b5604           mov     edx,[esi+0x4]   ds:0121ea06=????????
	          60983e31 8b4204           mov     eax,[edx+0x4]   ds:0121ea06=????????
	          60983e34 8b00             mov     eax,[eax]   ds:00000000=????????
	          60983e36 8944241c         mov     [esp+0x1c],eax   ss:0270e843=????????
	          60983e3a 8b0e             mov     ecx,[esi]   ds:00000000=????????
	          60983e3c 85c9             test    ecx,ecx
	          60983e3e 742c             jz
	  CManage::OtherProcTerminated+0xbc (60983e6c)
	
	CAUSE
	=====
	
	A process was ending incorrectly using either the MngAgent.exe or Mngcli.exe.
	
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0 and 4.0
	Service Pack 1. This problem was first corrected in SNA Server 3.0 Service Pack
	4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : :4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
