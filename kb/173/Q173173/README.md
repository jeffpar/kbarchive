---
layout: page
title: "Q173173: SNA Manage Agent Traps After Saving Configuration Change"
permalink: kb/173/Q173173/
---

## Q173173: SNA Manage Agent Traps After Saving Configuration Change

	Article: Q173173
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you make a configuration change using SNA Manager, the SNA Server Manage
	Agent process (Mngagent.exe) may encounter an access violation, causing the SNA
	Server status in Manager to appear as offline. The SNA Server service will
	continue to run properly, but no status information is displayed for the
	server.
	
	When this problem occurs, the following <ntroot>\Drwtsn32.log entry is
	logged:
	
	  Application exception occurred:
	  App: mngagent.dbg (<process ID>)
	  Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	This problem is rare. An uninitialized variable leads to a Manage Agent access
	violation in CAgtPxyRecExchange::SendModifyUse.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Manually restart the SNA Manage Agent (Mngagent.exe) on the SNA Server
	  computer.
	
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
	
	  State Dump for Thread Id <thread>
	
	  eax=00000000 ebx=00000002 ecx=0035ebb0 edx=003cc174 esi=0038ff00
	  edi=0000000a
	  eip=0100cb97 esp=0131fe3c ebp=0d83cff0 iopl=0         nv up ei pl zr na
	  po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	  efl=00000246
	
	  function: CAgtPxyRecExchange::SendModifyUse
	       0100cb79 85c0             test    eax,eax
	       0100cb7b 7407            jz CAgtPxyRecExchange::SendModifyUse+0x84
	  (0100cb84)
	       0100cb7d 8b4808           mov     ecx,[eax+0x8]
	  ds:0068e922=????????
	       0100cb80 894c2428         mov     [esp+0x28],ecx
	 ss:019ae75f=????????
	       0100cb84 837d0800         cmp    dword ptr [ebp+0x8],0x0
	  ss:0decb912=????????
	       0100cb88 747c           jz CAgtPxyRecExchange::SendModifyUse+0x106
	  (0100cc06)
	       0100cb8a 837c242800       cmp   dword ptr [esp+0x28],0x0
	  ss:019ae75f=????????
	       0100cb8f 747c           jz CAgtPxyRecExchange::SendModifyUse+0x10d
	  (0100cc0d)
	       0100cb91 f6450c04         test    byte ptr [ebp+0xc],0x4
	  ss:0decb912=??
	       0100cb95 7506           jnz CAgtPxyRecExchange::SendModifyUse+0x9d
	  (0100cb9d)
	  FAULT ->0100cb97 f6400c04         test    byte ptr [eax+0xc],0x4
	  ds:0068e922=??
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  0131fe64 01001ea8 00000000 0dbacff0 0038ff00 003d5750
	  mngagent!CAgtPxyRecExchange::SendModifyUse (FPO: [EBP 0x0131fe9c]
	  [5,7,4])
	
	  0131fe8c 6098b267 0131fe9c 00000002 0038fec0 00000b22
	  mngagent!CStdAgentProxy::OnModify
	
	  (FPO: [EBP 0x0131ffb8] [1,0,4])
	  0131fea8 01008ca5 61490c40 00000000 0121ffb8 77fa1773
	  mngbase!CNotifyQueue::Dispatch  (FPO: [0,4,1])
	
	  0131ffb8 77f46c2e 0121ffb8 61490c40 00000000 0121ffb8
	  mngagent!DoAgentProxy (UKNOWN FPO TYPE)
	
	  61490c40 1274c085 7401f883 02f8831a 01b85a74 c2000000
	  kernel32!BaseThreadStart
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
