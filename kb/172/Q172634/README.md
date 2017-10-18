---
layout: page
title: "Q172634: SNA Server Access Violation in Function Sapascp()"
permalink: kb/172/Q172634/
---

## Q172634: SNA Server Access Violation in Function Sapascp()

	Article: Q172634
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11 SP1,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 SP1, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server may encounter an access violation in SnaServer.exe if a 3270 emulator
	sends it an invalid OPEN SSCP request with no element data. This will cause the
	following entry to be logged in the Windows NT application event log:
	
	  Event: 624
	  Source: SNA Server
	  Description: Creating dump file C:\SNA\traces\snadump.log for
	  Snaservr.exe
	
	Also, an <Ntroot>\Drwtsn32.log entry may be created, indicating the
	following failure:
	
	  Application exception occurred:
	  App: snaservr.DBG (pid=<process ID>)
	  When: <date and time>
	  Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	The SNA Server service is not properly handling an invalid OPEN SSCP request
	from a third-party 3270 emulator. This problem can occur if the OPEN SSCP
	request contains no element data. The 3270 Emulator Interface Specification
	included in softcopy form on the SNA Server CD-ROM describes the proper format
	of the OPEN SSCP request.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0 and 2.1.
	We are currently researching this issue and will post more information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11.
	
	
	A supported fix for SNA Server 2.11 SP2 is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	State Dump for Thread Id <thread ID>
	
	  eax=00000000 ebx=00000000 ecx=014677f6 edx=014677f6 esi=01460000
	  edi=00000000
	  eip=0030a3fc esp=0125fef0 ebp=014677e4 iopl=0         nv up ei pl zr na
	  po
	  nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	  efl=00000246
	
	  function: sapascp
	       0030a3da 33ff             xor     edi,edi
	       0030a3dc 66897c2416       mov     [esp+0x16],di
	  ss:0256e8f8=????
	       0030a3e1 8b4c2448         mov     ecx,[esp+0x48]
	  ss:0256e8f7=????????
	       0030a3e5 668939           mov     [ecx],di
	  ds:014677f6=0101
	       0030a3e8 8b442444         mov     eax,[esp+0x44]
	  ss:0256e8f7=????????
	       0030a3ec 8b28             mov     ebp,[eax]
	  ds:00000000=????????
	       0030a3ee 8d4d12           lea     ecx,[ebp+0x12]
	  ss:027761ea=????????
	       0030a3f1 8b4504           mov     eax,[ebp+0x4]
	  ss:027761ea=????????
	       0030a3f4 894c2420         mov     [esp+0x20],ecx
	  ss:0256e8f7=????????
	       0030a3f8 8944241c         mov     [esp+0x1c],eax
	  ss:0256e8f7=????????
	  FAULT ->0030a3fc 0fbf5004         movsx   edx,word ptr [eax+0x4]
	  ds:0130ea07=e2f2
	       0030a400 0fbf4006         movsx   eax,word ptr [eax+0x6]
	  ds:0130ea07=e2f2
	       0030a404 2bc2             sub     eax,edx
	       0030a406 83f822           cmp     eax,0x22
	       0030a409 7c1c             jl      sapascp+0x57 (0030a427)
	       0030a40b 807d2412         cmp     byte ptr [ebp+0x24],0x12
	  ss:027761ea=??
	       0030a40f 7416             jz      sapascp+0x57 (0030a427)
	       0030a411 8b4c241c         mov     ecx,[esp+0x1c]
	  ss:0256e8f7=????????
	       0030a415 8a440a2a         mov     al,[edx+ecx+0x2a]
	  ds:027761fd=??
	       0030a419 fec8             dec     al
	       0030a41b 3c01             cmp     al,0x1
	       0030a41d 1ac0             sbb     al,al
	
	*----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  0125ff28 0030847c 00000002 0125ff70 0125ff6e 000000ff snaservr!sapascp
	  (FPO: [EBP 0x000000ff] [3,11,4])
	  0125ff50 0030c566 00000002 0125ff70 0125ff6e 00000000 snaservr!sapmain
	  (FPO: [EBP 0x000000ff] [3,2,4])
	  0125ff70 0030d1f4 0125ffec 001435a8 00000001 77f0178e snaservr!sbpcdin
	  (FPO: [0,3,1])
	  0125ff88 0030d7f5 009811c0 00000001 001435a8 77f8fe94 snaservr!sbpsched
	  (FPO: [EBP 0x0125ffec] [0,1,4])
	  0125ff8c 009811c0 00000001 001435a8 77f8fe94 001435a0 snaservr!sbpgmain
	  (FPO: [0,0,0])
	  0125ffa8 77dd8f76 00000001 001435a8 77f9b340 77f04f2c
	  snasvc!ServiceMainFunction  (FPO: [2,1,3])
	  0125ffec 00000000 77dd8f68 001435a0 00000000 00000000
	  advapi32!RegisterServiceCtrlHandlerA
	  00000000 00000000 00000000 00000000 00000000 00000000
	  snaservr!<nosymbols>
	
	With the fix applied, SNA Server sends an OPEN SSCP negative response with operr1
	set to Invalid message (BADSAMSG - 0A08) and operr2 set to Format / protocol
	error (CSREFORM - 4).
	
	NOTE: The 3270 emulator that sent this invalid message will receive this negative
	response. The emulator may display the error to the user, though this may vary
	depending on the emulator being used. The error may appear in hex (operr1 =
	0xA08, operr2 = 0x4) or decimal (operr1 = 2568, operr2 = 4). Since this problem
	indicates a logic error in the 3270 emulator being used, this problem should be
	reported to the emulator vendor.
	
	Additional query words: sapascp drwatson
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ210 kbSNAServ211SP1 kbSNAServ300SP1
	Version           : WINDOWS:2.0,2.1,2.11 SP1,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
