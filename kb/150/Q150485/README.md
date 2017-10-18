---
layout: page
title: "Q150485: HPMON Causes an Access Violation in SPOOLSS"
permalink: kb/150/Q150485/
---

## Q150485: HPMON Causes an Access Violation in SPOOLSS

	Article: Q150485
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SPOOLSS may cause an access violation, which will cause the Spooler service to
	fail.
	
	If Dr Watson is enabled you may get a report in DRWTSN32.LOG.
	
	CAUSE
	=====
	
	The Spooler service (SPOOLSS) is a fairly simple and very reliable service. The
	Spooler service needs what are called Monitors to communicate with. The Spooler
	service has been designed to be modular which gives users the flexibility to add
	specific Monitors (device-specific drivers) to Windows NT. These Monitors run as
	part of the Spooler service.
	
	If the Monitor has difficulty, it can cause the Spooler to attempt to access
	memory not available to the Spooler; this is called an Access Violation. To help
	determine which Monitor is most likely at fault, check for a DRWTSN32.LOG. Open
	the file with an ASCII editor such as Notepad and search for the KeyWord FAULT.
	
	HPMON incorrectly handled a DLC timed out response from DLC.
	
	MORE INFORMATION
	================
	
	This issue with HPMON will appear exactly in the same code every time. Below is
	an example of DLC Timed Out causing a DRWTSN32.LOG.
	
	eax=7737afc8 ebx=00000002 ecx=00009999 edx=7737b06a esi=00717000
	edi=7737b06c
	eip=77fa54bd esp=0098fe14 ebp=00716f5c iopl=0         nv up ei ng nz na po
	nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	efl=00000286
	
	function: wcscpy
	       77fa54b1 8b442404         mov     eax,[esp+0x4]
	ss:00dfe737=????????
	       77fa54b5 56               push    esi
	       77fa54b6 8b74240c         mov     esi,[esp+0xc]
	ss:00dfe737=????????
	       77fa54ba 57               push    edi
	       77fa54bb 8bf8             mov     edi,eax
	FAULT ->77fa54bd 668b0e           mov     cx,[esi]
	ds:00717000=????
	       77fa54c0 8bd7             mov     edx,edi
	       77fa54c2 66890a           mov     [edx],cx
	ds:7737b06a=9999
	       77fa54c5 83c702           add     edi,0x2
	       77fa54c8 83c602           add     esi,0x2
	       77fa54cb 6685c9           test    cx,cx
	       77fa54ce 75ed             jnz     wcscpy+0xc (77fa54bd)
	       77fa54d0 5f               pop     edi
	       77fa54d1 5e               pop     esi
	       77fa54d2 c3               ret
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0098fe18 77f25e3e 7737afc8 00716f5c 77377bb7 7737afc8 ntdll!wcscpy  (FPO:
	[2,0,2])
	0098fe24 77377bb7 7737afc8 00716f5c 0079a142 7737866c kernel32!lstrcpyW
	(FPO: [2,0,0])
	0098fe34 7737866c 00716f5c 7737ac98 0098fea4 00000001 hpmon!Mystrtok  (FPO:
	[2,0,1])
	0098fe50 773786ef ffff0002 0079a140 0098fe6c 00000001 hpmon!TranslatePjl
	(FPO: [EBP 0x0098fea4] [3,0,4])
	0098fea4 7737437a 0079c405 ffff0002 0079a140 77373f65 hpmon!DecodePjl
	0098feb4 77373f65 0079a100 0070e5f8 0070e630 00000000 hpmon!DecodeIFrame
	(FPO: [1,0,0])
	0098ffb8 77f26c15 00000000 0070e5f8 0070e630 00000000 hpmon!ReadThread
	0098ffec 00000000 77373bd9 00000000 00000000 00905a4d
	kernel32!BaseThreadStart
	00000000 00000000 00000000 00000000 00000000 00000000 spoolss!<nosymbols>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: error print printing
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
