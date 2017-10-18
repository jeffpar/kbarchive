---
layout: page
title: "Q185737: TN3270 Server May Cause Dr. Watson Error to Occur"
permalink: kb/185/Q185737/
---

## Q185737: TN3270 Server May Cause Dr. Watson Error to Occur

	Article: Q185737
	Product(s): Microsoft SNA Server
	Version(s): *DO_NOT_USE* 3.0 (all SP),3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions *DO_NOT_USE* 3.0 (all SP), 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When LUs assigned to the TN3270 service are defined with unique port addresses,
	a Dr. Watson error may occur in the TN3270 service.
	
	The exception occurs in the TCPInitializeListenSocket() function, as noted below
	in the Dr. Watson log:
	
	State Dump for Thread Id 0xcc
	
	eax=00000000 ebx=000a08f0 ecx=fffff7ae edx=00000000 esi=000001d4
	  edi=000a1145
	eip=0101568a esp=01d0fdb8 ebp=000a2004 iopl=0     nv up ei pl zr
	na po nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000
	efl=00000246
	
	function: TCPInitializeListenSocket
	       01015670 f2ae             repne   scasb
	es:000a1145=00
	       01015672 4f               dec     edi
	       01015673 668917           mov     [edi],dx
	ds:000a1145=0000
	       01015676 a036010301     mov al,[Mod5Address+0xa246
	(01030136)]
	ds:01030136=00
	       0101567b 884702           mov     [edi+0x2],al
	ds:019bfb4b=??
	       0101567e 8d7b04           lea     edi,[ebx+0x4]
	ds:019bf2f6=????????
	       01015681 83c9ff           or      ecx,0xff
	       01015684 33c0             xor     eax,eax
	       01015686 33d2             xor     edx,edx
	       01015688 f2ae             repne   scasb
	es:000a1145=00
	FAULT ->0101568a 668b5500         mov     dx,[ebp]
	ss:019c0a0b=????
	       0101568e 6a0a             push    0xa
	       01015690 f7d1             not     ecx
	       01015692 49               dec     ecx
	       01015693 8d4c1904         lea     ecx,[ecx+ebx+0x4]
	ds:019bf2f7=????????
	       01015697 51               push    ecx
	       01015698 52               push    edx
	       01015699 e8f2850000       call    _itoa (0101dc90)
	       0101569e 8b8320010000     mov     eax,[ebx+0x120]
	ds:000a0a10=2c303539
	       010156a4 83c40c           add     esp,0xc
	       010156a7 46               inc     esi
	       010156a8 83c50c           add     ebp,0xc
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function
	Name
	000a2004 00000000 00000000 00000000 00000000 00000000
	  tn3servr!TCPInitializeListenSocket  (FPO: [EBP 0x00000000]
	[1,99,4])
	000a2010 00000000 00000000 00000000 00000000 00000000
	tn3servr!<nosymbols>
	
	NOTE: The lines of text above may have been wrapped due to limitations in the
	article[ASCII 146]s formatting.
	
	CAUSE
	=====
	
	When the TN3270 service initializes successfully, an entry is made into the
	Application Event log to indicate which configured IP ports the TN3270 service
	is listening on for connection requests. The buffer size used to convey the
	message from the TN3270 service to the Windows NT Application Event log is 256
	bytes. If a large number of unique port assignments are configured to LUs
	assigned to the TN3270 service, this can cause a buffer overrun to occur.
	
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
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 3.0 SP3. This problem was first corrected in SNA Server 3.0
	Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbZNotKeyword6 kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : :*DO_NOT_USE* 3.0 (all SP),3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
