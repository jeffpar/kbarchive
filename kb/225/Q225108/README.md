---
layout: page
title: "Q225108: SNA 4.0 SP2 May Cause Trap in Function RamWrite or CheckInboundQ"
permalink: /kb/225/Q225108/
---

## Q225108: SNA 4.0 SP2 May Cause Trap in Function RamWrite or CheckInboundQ

	Article: Q225108
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fixkbfaq
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application exception (trap) may occur at some point after installing Service
	Pack 2 for SNA Server 4.0. The function reporting the problem has been seen in
	either function RamWrite or function CheckInboundQ.
	
	If you have Dr. Watson (Drwtsn32.exe) configured as the default debugger, a
	Drwtsn32.log file will be created in the [NTROOT] directory.
	
	In addition to the Dr. Watson, a Snadump.log file will be created in the
	[SNAROOT\traces] directory. Both an event 4097 and 624 will get created in the
	application log of the Event Viewer with this occurs.
	
	Drwtsn32.log example showing an exception in function RamWrite:
	
	Application exception occurred:
	       App: exe\snalink.dbg (pid=pid #)
	       When: 3/16/1999 @ 14:45:28.559
	       Exception number: c0000005 (access violation)
	[..]
	[..]
	State Dump for Thread Id [Thread Id]
	
	eax=85a3a2a8 ebx=6726acf0 ecx=b2c0b7e8 edx=00000001 esi=9706fb1c edi=00000002
	eip=6722d085 esp=00bcfcbc ebp=00bcfcdc iopl=0         nv up ei pl zr na po nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000             efl=00000246
	
	function: RamWrite
	       6722d062 895004           mov     [eax+0x4],edx          ds:86ca8cae=8b045089
	       6722d065 8b0b             mov     ecx,[ebx]              ds:6726acf0=01010054
	       6722d067 8b35c8ac2667     mov     esi,[BmD (6726acc8)]   ds:6726acc8=01010000
	       6722d06d 8b4128           mov     eax,[ecx+0x28]         ds:b3e7a1ee=3328418b
	       6722d070 33c9             xor     ecx,ecx
	       6722d072 894df8           mov     [ebp-0x8],ecx          ss:01e3e6e2=????????
	       6722d075 894d10           mov     [ebp+0x10],ecx         ss:01e3e6e2=????????
	       6722d078 8d0cc0           lea     ecx,[eax+eax*8]        ds:85a3a2a8=????????
	       6722d07b 8945f4           mov     [ebp-0xc],eax          ss:01e3e6e2=????????
	       6722d07e 8db4cedc3b0000   lea     esi,[esi+ecx*8+0x3bdc] ds:b2c0f3c4=????????
	FAULT ->6722d085 395610           cmp     [esi+0x10],edx         ds:982de522=????????
	
	DRWTSN32.LOG example showing an exception in function CheckInboundQ:
	
	Application exception occurred:
	       App: exe\mngagent.dbg (pid=pid #)
	       When: 11/3/1998 @ 7:28:50.734
	       Exception number: c0000005 (access violation)
	[..]
	[..]
	State Dump for Thread Id [Thread Id]
	
	eax=00000000 ebx=00000000 ecx=033fffb0 edx=033fffa8 esi=77f1c67a edi=77f674e0
	eip=67226860 esp=033fff5c ebp=033fff64 iopl=0         nv up ei pl zr na po nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000             efl=00000246
	
	function: CheckInboundQ
	       67226850 55               push    ebp
	       67226851 8bec             mov     ebp,esp
	       67226853 51               push    ecx
	       67226854 a1d85c2667       mov  eax,[BmD+0x10 (67265cd8)] ds:67265cd8=00000000
	       67226859 56               push    esi
	       6722685a 8945fc           mov     [ebp-0x4],eax          ss:0460e96a=????????
	       6722685d 8b45fc           mov     eax,[ebp-0x4]          ss:0460e96a=????????
	FAULT ->67226860 f0ff00           lock    inc dword ptr [eax]    ds:00000000=????????
	
	NOTE: For this particular problem, the access violations can appear in a number
	of different SNA components (for example, Snaservr.exe, Snabase.exe,
	Snalink.exe, Snaprint.exe, and so on). This will be indicated by the Pid # in
	the Drwtsn32.log file.
	
	CAUSE
	=====
	
	This problem was due to a regression in the Snadmod.dll introduced in Service
	Pack 2.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0 SP2. This problem
	was first corrected in SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
