---
layout: page
title: "Q191394: SNA Server Access Violation in Function S1psineg"
permalink: /kb/191/Q191394/
---

## Q191394: SNA Server Access Violation in Function S1psineg

	Article: Q191394
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft SNA Server (Snaservr.exe) may fail unexpectedly with an access
	violation. The following event will be logged into the Windows NT application
	event log:
	
	  Event ID: 624
	  Source:  SNA Server
	  Description: Creating dump file
	  <snaroot>\traces\snadump.log for
	  snaservr.exe.
	
	The following log entry will be created in the <Ntroot>\Drwtsn32.log file:
	
	Application exception occurred:
	          App: exe\snaservr.dbg (<process id>)
	          Exception number: c0000005 (access violation)
	
	  [...]
	
	  State Dump for Thread Id 0x8c
	
	  eax=00000000 ebx=00000000 ecx=000008d3 edx=00000000 esi=01154b04
	  edi=000008d3 eip=0101f253 esp=00cdff0c
	  ebp=01144d48 iopl=0 nv up ei pl zr na po nc
	  cs=001b ss=0023 ds=0023 es=0023 fs=0038 gs=0000 efl=00000246
	
	  function: s1psineg
	  0101f22d 66c740160000   mov   word ptr [eax+0x16],0x0
	  ds:0140ea07=????
	  0101f233 c6400926       mov   byte ptr [eax+0x9],0x26
	  ds:0140ea06=??
	  0101f237 c6401220       mov   byte ptr [eax+0x12],0x20
	  ds:0140ea06=??
	  0101f23b 8b06           mov   eax,[esi]
	  ds:01154b04=0164ba44
	  0101f23d 50             push  eax
	  0101f23e e8adb2feff     call  snpuputi (0100a4f0)
	  0101f243 33c0           xor   eax,eax
	  0101f245 8b7c2410       mov   edi,[esp+0x10]
	  ss:020ee913=????????
	  0101f249 0fbfcf         movsx   ecx,di
	  0101f24c 8b148ddc431101      ds:000008d3=????????  mov
	  edx,[s1lnkfh+0x14 (011143dc)+ecx*4]
	  FAULT ->0101f253 6639421a cmp   edx+0x1a],ax
	  ds:0140ea07=????
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function
	Name
	  01144d48 000f0011 02030000 01154960 000b0011 02030000
	snaservr!s1psineg
	  (FPO: [2,1,2])
	
	CAUSE
	=====
	
	This problem can occur if the host system sends an invalid "User Request
	Correlation Field" in the BIND for an LU6.2 session. Under normal situations, an
	INIT-SELF Format 1 would be sent to the host containing the URC field. The host
	should then reply with a BIND that contains the same URC field. It was observed
	on a tandem host, that the URC field in the BIND was badly formatted and caused
	SNA Server to access violate. Please refer to the IBM SNA Format Manual for the
	valid format of the request units.
	
	
	
	
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
	
	This problem was corrected in the latest Microsoft SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	This fix stops SNA Server from access violating, and instead sends a negative
	response to the invalid BIND. You will still need to address why the host is not
	sending a valid "User Request Correlation Field."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0 and 4.0 SP1. This problem was first corrected in SNA
	Server 3.0 Service Pack 4.
	
	Additional query words: prodsna snaserverservice kbbug4.00 kbfix4.00.sp1 kbbug3.00 kbbug3.00.sp1 kbbug3.00.sp2 kbfix3.00.sp3
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
