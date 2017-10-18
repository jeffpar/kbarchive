---
layout: page
title: "Q165704: Snanmvt.exe Access Violation in SNADMOD!sbpibhrl"
permalink: kb/165/Q165704/
---

## Q165704: Snanmvt.exe Access Violation in SNADMOD!sbpibhrl

	Article: Q165704
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNANetMn service, which is started automatically by SNA Server to handle
	routing of alert messages from SNA Server to Netview, may encounter an access
	violation when it is dynamically stopped by SNA Server.
	
	There may be no visible failure to the administrator, except for problems with
	SNA Server alerting to Netview, and an entry in the <Ntroot>\Drwtsn32.log
	file, such as:
	
	Application exception occurred:
	  App: snanmvt.DBG (pid=331)
	  Exception number: c0000005 (access violation)
	
	< data omitted >
	
	State Dump for Thread Id 0x14c
	
	eax=00cc075c ebx=77f42119 ecx=00000000 edx=00cc0000 esi=00392d00
	edi=00050005
	eip=10005018 esp=002cff2c ebp=002cffec iopl=0         nv up ei pl zr na po
	nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	efl=00000246
	
	function: sbpibhrl
	
	<data omitted>
	
	FAULT ->10005018 c70100000000     mov     dword ptr [ecx],0x0
	           ds:00000000=????????
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	002cff64 00351a34 00392d00 00052868 00000001 00353976 SNADMOD!sbpibhrl
	  (FPO: [EBP 0x002cffec] [1,11,4])
	002cff74 00353976 003539b4 00000000 12990001 00cb11cc snanmvt!sbpbterm
	  (FPO: [0,0,2])
	002cff78 003539b4 00000000 12990001 00cb11cc 00000001 snanmvt!sbpgterm
	  (FPO: [2,0,0])
	002cff84 00cb11cc 00000001 00052868 00000000 00052860 snanmvt!sbpgmain
	  (FPO: [0,0,0])
	002cffa8 77e3167a 00000001 00052868 00000000 77f46c2e
	snasvc!ServiceMainFunction
	  (FPO: [2,3,3])
	002cffb8 77f46c2e 00052860 00000000 00000000 00052860
	advapi32!ScSvcctrlThreadA
	  (FPO: [1,0,1])
	002cffec 00000000 77e3166c 00052860 00000000 52485324
	kernel32!BaseThreadStart
	00000000 00000000 00000000 00000000 00000000 00000000 snanmvt!<nosymbols>
	
	CAUSE
	=====
	
	When the SnaNetMn service is stopped, the service was attempting to release a
	NULL control block, leading to an access violation.
	
	RESOLUTION
	==========
	
	Updates to SNA Server versions 2.11, 2.11 Service Pack 1, 2.11 Service Pack 2,
	and 3.0 are available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	Service Pack 1, 2.11 Service Pack 2, and 3.0. This problem was corrected in the
	latest Microsoft SNA Server 3.0 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
