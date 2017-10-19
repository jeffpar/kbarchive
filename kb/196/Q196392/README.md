---
layout: page
title: "Q196392: MngAgent Access Violation In Function CStdAgentProxy::SetPending"
permalink: /kb/196/Q196392/
---

## Q196392: MngAgent Access Violation In Function CStdAgentProxy::SetPending

	Article: Q196392
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server Manage Agent service (MngAgent) may fail unexpectedly with an
	access violation, causing the SNA Server service to appear in an [Offline]
	status.
	
	If Drwtsn32.exe is configured as the Windows NT default debugger on the computer,
	the <Ntroot>\Drwtsn32.log entry will be created for the MngAgent failure,
	indicating a fault in the routine CStdAgentProxy::SendPending as follows:
	
	  Application exception occurred:
	
	  App: mngagent.exe (pid=<process id>) When: <date> @ <time>
	  Exception number: c0000005 (access violation)
	
	  function: CStdAgentProxy::SetPending
	
	  01003624 8b4130 mov eax,[ecx+0x30] 01003627 0bc2 or eax,edx 01003629 894130
	  mov [ecx+0x30],eax 0100362c 8b442408 mov eax,[esp+0x8] 01003630 85c0 test
	  eax,eax 01003632 741b jz
	
	  CStdAgentProxy::SetPending+0x2f
	
	  01003634 837c240401 cmp dword ptr [esp+0x4],0x1 01003639 7506 jnz
	
	  CStdAgentProxy::SetPending+0x21 )
	
	  0100363b 095014 or [eax+0x14],edx 0100363e c20c00 ret 0xc
	
	  FAULT ->01003641 8b4814           mov     ecx,[eax+0x14]
	
	CAUSE
	=====
	
	This unexpected failure of the Manage Agent service is due to an internal error
	within the MngAgent service.
	
	
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
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0, 3.0 Service Pack
	1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0 Service Pack 1. This
	problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	Additional query words: MngAgent Mngcli
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
