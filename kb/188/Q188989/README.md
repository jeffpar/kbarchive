---
layout: page
title: "Q188989: XADM: IS Stops Unexpectedly Formatting a Binary Property Value"
permalink: kb/188/Q188989/
---

## Q188989: XADM: IS Stops Unexpectedly Formatting a Binary Property Value

	Article: Q188989
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During normal operations, the information store may stop unexpectedly, and an
	Access Violation error message appears on the server console. If Dr. Watson is
	active as the default debugger, a Dr. Watson log and a User.dmp file (if
	configured to create a User.dmp file) may be produced.
	
	CAUSE
	=====
	
	The information store stops because an attempt is made to de-reference a NULL
	pointer during a memory copy operation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	
	MORE INFORMATION
	================
	
	The Drwtsn32.log file that is produced will look similar to the following. Note
	that the ESI register is zero:
	
	  Microsoft (R) Windows NT (TM) Version 4.00 DrWtsn32
	  Copyright (C) 1985-1995 Microsoft Corp. All rights reserved.
	
	  Application exception occurred:
	        App: STORE.DBG (pid=76)
	        When: 2/19/1998 @ 9:39:5.106
	        Exception number: c0000005 (access violation)
	
	  State Dump for Thread Id 0x1aa
	
	  EAX=055252a8  EBX=9f3f0002  ECX=27cfc000  EDX=9f3f0000  ESI=00000000
	  EDI=188ca081
	  EIP=00437b76  ESP=148df964  EBP=188ca070  EFL=00000216
	  CS=001b  DS=0023  ES=0023  SS=0023  FS=0038  GS=0000
	
	  function:STORE!@EcFormatMVBinary
	
	        .....
	        00437B66  761F             jbe         EcFormatMVBinary+66h
	
	        0437B68   8B12             mov         edx,dword ptr [edx]
	
	        00437B6A  8B7004           mov         esi,dword ptr [ibMost]
	
	        00437B6D  8D7C1502         lea         edi,dword ptr [ebp+edx+2]
	
	        00437B71  8BD1             mov         edx,ecx
	
	        00437B73  C1E902           shr         ecx,2
	
	  FAULT => 00437B76  F3A5             rep movs    dword ptr es:[edi],dword
	        ptr [esi]
	        .....
	
	  *----> Stack Back Trace <----*
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  148df974  00410c6b  00007fff 00000001 055252a8
	   STORE!EcFormatMVBinary+0x5d
	  148df99c  0040f898  00007fff 055252a0 148df9c8
	   STORE!EcFormatValue+0x1b1
	  148df9cc  004268d6  00007fff 00000001 00000000 STORE!EcFormatRow+0xcc
	  148dfa20  0040c558  00000001 0000355a 19ac8ee8
	   STORE!EcGetPropsSpecific+0x17c
	  00000006  00000000  00000000 00000000 00000000 STORE!EcRpc+0x471
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
