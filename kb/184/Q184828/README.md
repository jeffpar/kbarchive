---
layout: page
title: "Q184828: XADM: Store Crash on Security Credentials Check"
permalink: kb/184/Q184828/
---

## Q184828: XADM: Store Crash on Security Credentials Check

	Article: Q184828
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the information store is verifying a security message from an RPC client,
	the information store may crash, producing a Drwtsn32.log file similar to the
	one below:
	
	Microsoft (R) Windows NT (TM) Version 3.51 DrWtsn32
	Copyright (C) 1985-1995 Microsoft Corp. All rights reserved.
	
	Application exception occurred:
	       App: SECURITY.DBG (pid=79)
	       When: 12/9/1996 @ 17:52:26.45
	       Exception number: c0000005 (Access Violation)
	
	State Dump for Thread Id 0x199
	
	eax=001442c0 ebx=00000038 ecx=00143970 edx=00000000 esi=0012fdfc
	edi=00000000
	eip=77f8904b esp=0012fd68 ebp=0012fdd0 iopl=0         nv up ei pl zr na po
	nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	efl=00000246
	
	function: SECURITY!SspHandleVerifyMessage
	0x76692c19  f8           clc
	0x76692c1a  753d         jne          76692c59
	0x76692c1c  8d7de8       lea          edi,dword ptr [ebp-18]
	0x76692c1f  33c0         xor          eax,eax
	0x76692c21  8d75e8       lea          esi,dword ptr [ebp-18]
	0x76692c24  b910000000   mov          ecx,00000010
	0x76692c29  ab           stosd
	0x76692c2a  ab           stosd
	0x76692c2b  ab           stosd
	0x76692c2c  ab           stosd
	0x76692c2d  8b7df8       mov          edi,dword ptr [ebp-08]
	0x76692c30  2bc0         sub          eax,eax
	0x76692c32  c745e801     mov          eax, ptr[ebp-8]
	FAULT--->   0x76692c39  f3a6         repe cmpsb
	0x76692c3b  7405         je           76692c42
	0x76692c3d  1bc0         sbb          eax,eax
	0x76692c3f  83d8ff       sbb          eax,ff
	0x76692c42  85c0         test         eax,eax
	
	*----> Stack Back Trace <----*
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	0846fdf0  766925bc  08d3cf2c 0846fe18 0000004a
	SECURITY!SspHandleVerifyMessage+0x8c
	0846fe08  76693884  08d3cf2c 0846fe98 0000004a
	SECURITY!SspVerifySignature+0x15
	0846fe1c  77e82311  08d3cf2c 0846fe98 0000004a
	SECURITY!VerifySignature+0x23
	0846febc  77e6c18c  08d40178 0846ff1c 08d38f58
	RPCRT4!?Receive@OSF_CCONNECTION@@UAEJPAU_RPC_MESSAGE@@I@Z+0xa1
	0846fef8  77e6bf79  0846ff10 08d38f58 08d3cdb0
	RPCRT4!?ReceiveMessage@OSF_CCONNECTION@@AAEJPAU_RPC_MESSAGE@@PAII1@Z+0x23
	0846ff18  00000078  00000002 00165e28 0846ff84
	RPCRT4!?TransReceive@TRANS_ADDRESS@@UAEJPAPAVOSF_SCONNECTION@@PAPAXPAI@Z+0x
	8f
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 4.0. We
	are researching this problem and will post additional information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
