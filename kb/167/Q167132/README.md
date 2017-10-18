---
layout: page
title: "Q167132: XADM: Access Violation in Store.exe After Upgrading to SP4"
permalink: kb/167/Q167132/
---

## Q167132: XADM: Access Violation in Store.exe After Upgrading to SP4

	Article: Q167132
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade to Microsoft Exchange Server Service Pack 4 or Microsoft
	Exchange Server version 5.0, the information store may raise a general
	protection fault (GPF), resulting in a Drwtsn32.log similar to the one below:
	
	  Application exception occurred:
	          App: Store.DBG (pid=333)
	          When: 4/8/1997 @ 15:27:56.295
	          Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	An invalid address for a recipient is sent in a message to the information
	store. While processing the message, the information store mishandles the
	address and causes the access violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. This problem has been corrected in the latest U.S. Service
	Pack for Microsoft Exchange Server version 4.0. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	This problem was corrected in the latest Microsoft Exchange Server 5.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	State Dump for Thread Id 0x107
	
	  EAX=00000000  EBX=00000000  ECX=00000000  EDX=00ef8cec  ESI=fffffffc
	  EDI=021340e7
	  EIP=0200d01b  ESP=01c3f51c  EBP=01c3f5c8  EFL=00000246
	  CS=001b  DS=0023  ES=0023  SS=0023  FS=003b  GS=0000
	
	  Function: CbStrlenWithoutNullW:
	          0x0200d015  33c0             xor          eax,eax
	          0x0200d017  8b4c2404         mov          ecx,dword ptr [esp+04]
	  FAULT-->0x0200d01b  663901           cmp          word ptr [ecx],ax
	          0x0200d01e  740c             je           0200d02c
	          0x0200d020  83c002           add          eax,02
	          0x0200d023  83c102           add          ecx,02
	          0x0200d026  66833900         cmp          word ptr [ecx],00
	          0x0200d02a  75f4             jne          0200d020
	          0x0200d02c  c20400           retn         0004
	
	  *----> Stack Back Trace <----*
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Function Name
	  01c3f518 02033240 00000000 00000000 00b98ad8
	  STORE!CbStrlenWithoutNullW+0x6
	  01c3f5c8 02111c79 00f00a4c 00b98ad8 01c3f968
	  STORE!EcEntryIdFromORName+0xa0c
	  01c3f970 021116ba 00f05b2c 00000000 00000001 STORE!EcDeliverNDR+0x21a
	  01c3fb44 0211cee5 00ef1cbc 00eef58c 00ee8edc
	  STORE!EcDeliverReport+0x1334
	  01c3fd6c 0211c905 00ef1cbc 00ee8edc 00b988cc STORE!EcTferInMessage+0x37a
	  01c3ff90 0204ef4c 00000000 00330012 00dbfbe4
	  STORE!FStartTransferIn+0x5f5
	  01c3ffb8 77f04f4a 00000000 00dbfbe4 c0000034 STORE!EcProcessTask+0x129
	  01c3ffec 00000000 00000000 00000000 00000000
	  KERNEL32!BaseThreadStart+0x69
	
	  or
	
	  *----> Stack Back Trace <----*
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Function Name
	  0113f9c8 02033240 00000000 00000000 00f142dc
	  STORE!CbStrlenWithoutNullW+0x6
	  0113fa78 0203528e 00f00b04 00b9a2f8 0113fad0
	  STORE!EcEntryIdFromORName+0xa0c
	  0113fad8 02035cb1 00b9a2a4 00f142dc 00000000
	  STORE!EcSetOriginatorProps+0x7a
	  0113fc88 0204c832 00b988cc 00b94768 00f0a2ec
	  STORE!EcDeliverMessage+0x813
	  0113ff90 0204ef4c 00f08b54 00030001 00dbfbe4 STORE!FStartReceive+0x6a1
	  0113ffb8 77f04f32 00000000 00dbfbe4 c0000034 STORE!EcProcessTask+0x129
	  0113ffec 00000000 0204ee23 00000000 00000000
	  KERNEL32!BaseThreadStart+0x51
	
	
	Additional query words: Crash Corrupt Address sp1 IMC
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
