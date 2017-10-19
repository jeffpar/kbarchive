---
layout: page
title: "Q180052: SNA Server Access Violation in Function s1pucosp"
permalink: /kb/180/Q180052/
---

## Q180052: SNA Server Access Violation in Function s1pucosp

	Article: Q180052
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server service (Snaservr.exe) may fail unexpectedly with an access
	violation in s1pucosp() or s1puaslu(). At the customer site where this problem
	was reported, the access violation would occur once every two weeks to one
	month. The access violation appears to be related to the use of pooled 3270 LUs
	that are configured to use associated printers.
	
	When the problem occurs, all users connecting through SNA Server lose their host
	sessions and the SNA Server service no longer runs. The Windows NT application
	event log should indicate an Event 624, logged by SNA Server.
	
	CAUSE
	=====
	
	An uninitialized variable causes the SNA Server to attempt to access an invalid
	array index within an internal structure.
	
	Following the release of SNA Server 3.0 SP3, further problems were found which
	could cause the same snaservr.exe access violation symptoms. These further
	problems were caused by incorrect handling of the "associated printer"
	structures in the server.
	
	
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
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0, 3.0 SP1, 3.0
	SP2, 3.0 SP3, and 4.0. This problem was first corrected in SNA Server 3.0
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	When this problem occurs, the following entry will be logged in the
	<Ntroot>\Drwtsn32.log file, indicating an access violation in function
	"s1pucosp":
	
	  Application exception occurred:
	       App: exe\snaservr.DBG (<process id>)
	       Exception number: c0000005 (access violation)
	
	  [...]
	
	  State Dump for Thread Id <thread>
	
	  eax=00000101 ebx=00000000 ecx=00000101 edx=00000000
	esi=00000000
	  edi=01969668
	  eip=002c7856 esp=0125fee8 ebp=001c1748 iopl=0
	  nv up ei pl zr na po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	efl=00000246
	
	  function: s1pucosp
	   002c7825 0fbfc1           movsx   eax,cx
	  002c7828 8b14850ce23800
	ds:00000101=????????
	                           mov     edx,[s1mode+0x380c
	(0038e20c)+eax*4]
	  002c782f 6683ba0801000000 cmp     word ptr [edx+0x108],0x0
	  002c7837 7426             jz      s1pucosp+0x107f (002c785f)
	  002c7839 33d2             xor     edx,edx
	  002c783b 0fbfc1           movsx   eax,cx
	  002c783e 8b1c850ce23800
	ds:00000101=????????
	                           mov     ebx,[s1mode+0x380c
	(0038e20c)+eax*4]
	  002c7845 668b8b08010000   mov     cx,[ebx+0x108]
	ds:00000108=????
	  002c784c 0fbfc1           movsx   eax,cx
	  002c784f 8b1c850ce23800
	ds:00000101=????????
	                            mov     ebx,[s1mode+0x380c
	(0038e20c)+eax*4]
	  FAULT ->002c7856 66399308010000   cmp     [ebx+0x108],dx
	  ds:00000108=????
	
	  *----> Stack Back Trace <----*
	
	  Function Name
	  snaservr!s1pucosp  (FPO: [EBP 0x000000ff
	  snaservr!s1pucmgr  (FPO: [0,0,1])
	  snaservr!s1pusvc  (FPO: [0,4,3])
	  snaservr!s1pgdisp  (FPO: [1,0,0])
	  snaservr!sbpsched  (FPO: [EBP 0x0125ffec
	  snaservr!sbpgmain  (FPO: [0,0,0])
	  snasvc!ServiceMainFunction  (FPO: [2,1,3
	  advapi32!RegisterServiceCtrlHandlerA
	  snaservr!<nosymbols>
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
