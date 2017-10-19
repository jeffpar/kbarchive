---
layout: page
title: "Q164340: XADM: Importing CSV to Directory Causes GPF in MAD"
permalink: /kb/164/Q164340/
---

## Q164340: XADM: Importing CSV to Directory Causes GPF in MAD

	Article: Q164340
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When doing an import to an existing directory item (that is, not a new item) and
	that item has secondary proxies of some kind, a string comparison is done
	against a pointer that is one off the end of an array. Depending on what this
	points to, it may produce an access violation in Mad.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. This problem was corrected in the latest Microsoft
	Exchange Server 4.0 and 5.0 U.S. Service Packs. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The Drwtsn32.log file that is produced will look something like the following:
	
	  Microsoft (R) Windows NT (TM) Version 3.51 DrWtsn32
	  Copyright (C) 1985-1995 Microsoft Corp. All rights reserved.
	
	  Application exception occurred:
	        App: MAD.DBG (pid=76)
	        When: 2/19/1997 @ 9:39:5.106
	        Exception number: c0000005 (access violation)
	
	  State Dump for Thread Id 0x1aa
	
	  EAX=ffffffff  EBX=00000000  ECX=00177008  EDX=00030002  ESI=00000001
	  EDI=00000018
	  EIP=77f2421f  ESP=0184fa8c  EBP=0184fb0c  EFL=00000202
	  CS=001b  DS=0023  ES=0023  SS=0023  FS=0038  GS=0000
	
	  function: _CompareStringW
	
	  0x77f241ff  010f  add          dword ptr [edi],ecx
	  0x77f24201  8701  xchg         dword ptr [ecx],eax
	  0x77f24203  0b00  or           eax,dword ptr [eax]
	  0x77f24205  008b5 add          byte ptr [ebx+4d8b1055],cl
	  0x77f2420b  18894 sbb          byte ptr [ecx-2d7a17b3],cl
	  0x77f24211  0f84d je           _CompareStringW@24+00000bd7
	  0x77f24217  85c9  test         ecx,ecx
	  0x77f24219  0f84d je           _CompareStringW@24+00000bd7
	  FAULT-->  0x77f2421f  668b0 mov          cx,word ptr [edx]
	  0x77f24222  8b5d1 mov          ebx,dword ptr [ebp+18]
	  0x77f24225  66390 cmp          word ptr [ebx],cx
	  0x77f24228  0f85d jne          _CompareStringW@24+000001e5
	  0x77f2422e  66833 cmp          word ptr [edx],00
	  0x77f24232  0f84c je           _CompareStringW@24+000001e5
	  0x77f24238  8345e add          dword ptr [ebp-18],02
	  0x77f2423c  83c20 add          edx,02
	  0x77f2423f  8b4de mov          ecx,dword ptr [ebp-18]
	
	  *----> Stack Back Trace <----*
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  0184fb0c  77f26bc3  00000409 00000001 00030002
	  KERNEL32!CompareStringW+0x105
	  0184fb28  02012a5c  00030002 00177008 0184fb90 KERNEL32!lstrcmpiW+0x19
	  0184fb38  02025d17  00177008 00000000 0184fc1c
	  MAD!CString::strcmpi+0xf(0x00177008)
	  0184fb90  02025925  002dff00 0184fbdc 002dfcc4
	  MAD!CRecipProxyBuilder::ScRealGetProxies+0x306(0x002DFF00, 0x0184FBDC,
	  0x002DFCC4, 0x00000001, 0x00000001, 0x00000000, 0x0184FBF0, 0x0184FBD0,
	  0x0184FBF4, 0x0184FBD8, 0x0184FBD4)
	  0184fbfc  0201cecc  002d1f38 002dff00 0184fc1c
	  MAD!CRecipProxyBuilder::ScGetProxies+0x13a(0x002D1F38, 0x002DFF00,
	  0x0184FC1C)
	  0184fce4  0201f4c2  0184fee8 00164908 00164a8c
	  MAD!EcGetProxies+0x85d(0x0184FEE8, 0x00164908, 0x00164A8C)
	  0184fde4  77e613ae  0184ff30 0184fe6c 00000000
	  MAD!TriggerPublicRPC_EcGetProxies+0xd8(0x0184FF30)
	  0184fe20  77e61306  0201f3ea 0184ff30 0184ff5c
	  RPCRT4!DispatchToStubInC+0x34
	  0184fe74  77e61527  0184ff30 00000000 0184ff5c
	  RPCRT4!?DispatchToStubWorker@RPC_INTERFACE@@AAEJPAU_RPC_MESSAGE@@IPAJ@Z
	  +0xa4
	  0184fe94  77e7db5e  0184ff30 00000000 0184ff5c
	  RPCRT4!?DispatchToStub@RPC_INTERFACE@@QAEJPAU_RPC_MESSAGE@@IPAJ@Z+0x42
	  0184fec4  77e6e1b0  0184ff30 0184ff08 00000000
	  RPCRT4!?DispatchToStubWithObject@RPC_INTERFACE@@QAEJPAU_RPC_MESSAGE
	  @@PAVRPC
	  _UUID@@IPAJ@Z+0xb3
	  0184ff64  77e62479  00166e60 00166f60 00168f18
	  RPCRT4!?DealWithRequestMessage@LRPC_ASSOCIATION@@QAEXPAT_LRPC_MESSAGE
	  @@0@Z+
	  0xc019
	  0184ff8c  77e6214f  77e63b24 0014bc98 00000000
	  RPCRT4!?ReceiveLotsaCalls@LRPC_ADDRESS@@AAEXXZ+0xea
	  0184ff90  77e63b24  0014bc98 00000000 001677d0
	  RPCRT4!?RecvLotsaCallsWrapper@@YGXPAVLRPC_ADDRESS@@@Z+0x9
	  0184ffac  77e63b5b  00168f18 0014000c 77f26c2a
	  RPCRT4!?BaseCachedThreadRoutine@@YGXPAVCACHED_THREAD@@@Z+0xae
	  0184ffb8  77f26c2a  001677d0 00000000 0014000c
	  RPCRT4!?ThreadStartRoutine@@YGJPAVTHREAD@@@Z+0x16
	  0184ffec  00000000  77e63b45 001677d0 00000000
	  KERNEL32!BaseThreadStart+0x61
	
	
	Additional query words: AV GPF general protection invalid page fault illegal operation crash fail failure
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
