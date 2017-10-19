---
layout: page
title: "Q157175: XCON: MTA Service Terminates Unexpectedly"
permalink: /kb/157/Q157175/
---

## Q157175: XCON: MTA Service Terminates Unexpectedly

	Article: Q157175
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exchange MTA Service may terminate unexpectedly, causing message delivery to
	fail.
	
	The Windows NT Application Event Log may show an entry similar to the following:
	
	  Event ID: 9405
	  Source: MSExchangeMTA
	  Category: Field Engineering
	  Type: Error
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Exception c0000005 occurred at Address 207a972. [BASE SUBMIT 17] (16).
	
	The DrWtsn32.log may look something like this:
	
	  Microsoft (R) Windows NT (TM) Version 3.51 DrWtsn32 Copyright (C) 1985-1995
	  Microsoft Corp. All rights reserved.
	
	  Application exception occurred:
	  App: emsmta.DBG (pid=44)
	  When: 4/11/1996 @ 7:30:30.452
	  Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	A NULL pointer was passed to a function that did not check for it. When this
	pointer was de-referenced, and access violation occurred.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The Thread where the access violation occurred may look similar to this:
	
	State Dump for Thread Id 0x61
	EAX=00000000  EBX=00000000  ECX=00000561  EDX=0542efe4  ESI=02505294
	EDI=025052b6
	EIP=0207a972  ESP=0542ef3c  EBP=0542ef54  EFL=00000246
	CS=001b  DS=0023  ES=0023  SS=0023  FS=0038  GS=0000
	
	function: EMSMTA!odpbcach
	..... 0x0207a964  55               push         ebp
	..... 0x0207a965  8bec             mov          ebp,esp
	..... 0x0207a967  83ec0c           sub          esp,0c
	..... 0x0207a96a  53               push         ebx
	..... 0x0207a96b  8b4508           mov          eax,dword ptr [ebp+08]
	..... 0x0207a96e  56               push         esi
	..... 0x0207a96f  33db             xor          ebx,ebx
	..... 0x0207a971  57               push         edi
	FAULT-->. 0x0207a972  8b7008         mov          esi,dword ptr [eax+08]
	..... 0x0207a975  885dff           mov          byte ptr [lreturn],bl
	..... 0x0207a978  e833c4f9ff       call         sbpiwtid (02016db0)
	..... 0x0207a97d  8b4d08           mov          ecx,dword ptr [xiarbptr]
	..... 0x0207a980  668b4122         mov          ax,word ptr [ecx+22]
	..... 0x0207a984  50               push         eax
	..... 0x0207a985  e8f3bcf9ff       call         sbpiwacs (0201667d)
	..... 0x0207a98a  668b451c         mov          ax,word ptr [xioper]
	
	*----> Stack Back Trace <----*
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	0542ef54  020813a8  00000000 0542efe4 0542efe4 EMSMTA!odpbcach+0xe
	0542efec  0205fea1  025052b6 0083b7bc 0228c400 EMSMTA!odpdomva+0x13e
	0542f028  0206a667  00000011 37fa0af4 00000017 EMSMTA!otpsrtop+0x1b7
	0542f164  02069c00  00000011 268a02f4 0205fcea EMSMTA!ospadrec+0x962
	0542f1c4  0205ffa6  00000011 268a02f4 00000017 EMSMTA!ospadeco+0x466
	0542f220  0206a667  00000011 268a02f4 00000017 EMSMTA!otpsrtop+0x2bc
	0542f35c  02069c00  00000011 32fc01fc 0205fcea EMSMTA!ospadrec+0x962
	0542f3bc  0205ffa6  00000011 32fc01fc 00000012 EMSMTA!ospadeco+0x466
	0542f418  0206a667  00000011 32fc01fc 00000012 EMSMTA!otpsrtop+0x2bc
	0542f554  02069c00  00000011 00dc02ad 0205fcea EMSMTA!ospadrec+0x962
	0542f5b4  0205ffa6  00000011 00dc02ad 0000000a EMSMTA!ospadeco+0x466
	0542f610  0206a667  00000011 00dc02ad 0000000a EMSMTA!otpsrtop+0x2bc
	0542f74c  02069c00  00000011 00000e1d 0205fcea EMSMTA!ospadrec+0x962
	0542f7ac  0205ffa6  00000011 00000e1d 00000008 EMSMTA!ospadeco+0x466
	0542f808  0206a667  00000011 03e20574 00000008 EMSMTA!otpsrtop+0x2bc
	0542f944  0206a89a  00000011 20000e48 0205fcea EMSMTA!ospadrec+0x962
	0542fa90  0206a89a  00000011 066a019f 0205fcea EMSMTA!ospadrec+0xb95
	0542fbdc  0206a89a  00000011 11720e6c 0205fcea EMSMTA!ospadrec+0xb95
	0542fd28  02069c00  00000011 000000d0 0205fcea EMSMTA!ospadrec+0xb95
	0542fd88  0205f53d  00000011 000000d0 00000001 EMSMTA!ospadeco+0x466
	0542ff18  02060855  00000011 00000001 00000000 EMSMTA!otpsrort+0x1b8
	0542ff2c  0205e367  42ffb811 02486a36 000002a8 EMSMTA!otpsubok+0x39
	0542ff8c  02016755  02486a36 02486a36 00000011 EMSMTA!otpsmain+0x954
	0542ffb8  77f26c2a  00000011 02486a36 02486a36 EMSMTA!sbpiwbep+0x5c
	0542ffec  00000000  020166f9 00000011 00000000 0x77f26c2a
	
	
	Additional query words: Access Violation GP Fault
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
