---
layout: page
title: "Q166585: XADM: Msg with Bad TNEF Causes Store to Access Violate"
permalink: /kb/166/Q166585/
---

## Q166585: XADM: Msg with Bad TNEF Causes Store to Access Violate

{% raw %}

	Article: Q166585
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Sometimes a message with bad transport-neutral encapsulation format (TNEF) can
	cause the information store to raise a general protection fault (GPF), resulting
	in a Drwtsn32.log file entry similar to the following:
	
	  Application exception occurred:
	     App: store.dbg (pid=218)
	     When: 9/2/1997 @ 9:8:27.62
	     Exception number: c0000005 (access violation)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	From the Dr. Watson log:
	
	  State Dump for Thread Id 0x144
	
	  eax=1635cf18 ebx=00000000 ecx=00000000 edx=00000058 esi=00000000
	  edi=01205ae4
	  eip=77f64b41 esp=14fbf5dc ebp=14fbf5f4 iopl=0         nv up ei pl nz ac
	  po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	  efl=00000216
	
	  function: RtlFreeHeap
	       77f64b27 8b442410         mov     eax,[esp+0x10]
	  ss:15ecdfe3=????????
	       77f64b2b 8bec             mov     ebp,esp
	       77f64b2d 83ec0c           sub     esp,0xc
	       77f64b30 85c0             test    eax,eax
	       77f64b32 53               push    ebx
	       77f64b33 56               push    esi
	       77f64b34 57               push    edi
	       77f64b35 0f84d7010000     je      RtlFreeHeap+0x1ec (77f64d12)
	       77f64b3b 8b7508           mov     esi,[ebp+0x8]
	  ss:15ecdffa=????????
	       77f64b3e 8b5d0c           mov     ebx,[ebp+0xc]
	  ss:15ecdffa=????????
	  FAULT ->77f64b41 0b5e10           or      ebx,[esi+0x10]
	  ds:00f0ea06=00000000
	       77f64b44 f7c3600f036f     test    ebx,0x6f030f60
	       77f64b4a 0f85b8010000     jne     RtlFreeHeap+0x1e2 (77f64d08)
	       77f64b50 8d78f8           lea     edi,[eax-0x8]
	  ds:1726b91e=????????
	       77f64b53 f6470501         test    byte ptr [edi+0x5],0x1
	  ds:021144ea=??
	       77f64b57 0f8485010000     je      RtlFreeHeap+0x1bc (77f64ce2)
	       77f64b5d a807             test    al,0x7
	       77f64b5f 0f857d010000     jne     RtlFreeHeap+0x1bc (77f64ce2)
	       77f64b65 807f0410         cmp     byte ptr [edi+0x4],0x10
	  ds:021144ea=??
	       77f64b69 0f8373010000     jnb     RtlFreeHeap+0x1bc (77f64ce2)
	       77f64b6f 83e301           and     ebx,0x1
	       77f64b72 750b             jnz     RtlFreeHeap+0x59 (77f64b7f)
	
	*----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  14fbf5f4 6d0b14f9 00000000 00000000 1635cf18 00000064 ntdll!RtlFreeHeap
	  00000180 00000000 00000000 00000000 00000000 00000000
	  exchmem!ExchMHeapFree
	
	From the User.dmp file:
	
	  kb
	  kb
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  14fbf5f4  6d0b14f9  00000000 00000000 1635cf18 NTDLL!RtlFreeHeap+0x1b
	  14fbf608  004d42ee  1635cf1c 00000180 011f2a24
	  EXCHMEM!ExchMHeapFree+0x19
	  14fbf650  00502a27  000004e4 00000018 01205984
	  STORE!CVTOMSG::HrSetProps+0x33e
	  14fbf674  00502e06  011f2a24 00000018 0120b994
	  STORE!CMAPIMessage::SetProps+0x67
	  14fbf6c0  004f5725  00000000 00000018 0120b994 STORE!HrCommitLast+0x46
	  14fbf738  004f50e3  ffffffff 00000000 00405058
	  STORE!HrExtractProperties+0x615
	  14fbf75c  004fef0d  1635b42c 00000002 00405058
	  STORE!TNEF_ExtractProps+0x133
	  14fbf798  004e6601  16356e8c 0120f4dc 00000000
	  STORE!CmnBptMessage::hrExtractTNEF+0x11d
	  14fbf7bc  004d6cd3  16356e8c 0120f4dc 012052f4
	  STORE!CmcvtrBptEnd::hrExtract+0x141
	  14fbf7ec  004e64b4  14fbf800 00000000 14fbf800
	  STORE!CINETextr::hrExtract+0xa3
	  14fbf800  004e6456  00000000 0120582c 00405ec8
	  STORE!CConvertStream::HrFlush+0x24
	  14fbf830  004e62da  1635a16c 00000000 00000000
	  STORE!CConvertStream::Commit+0xb6
	  14fbf84c  0047164b  1636320e 00001f40 00002142
	  STORE!CSTREAM::HrCommit+0x2a
	  14fbf874  00471515  00001f40 1636320e 14fbf89c
	  STORE!EcWriteStreamOp+0xfb
	  14fbf89c  0040f3eb  00000001 00000012 00000001 STORE!EcWriteStream+0x95
	  14fbf90c  0040ec1e  14fbf928 00002400 14fbf92c STORE!EcRpc+0x78b
	  14fbf928  77e11841  00195fa8 1636300c 0017f006 STORE!EcDoRpc+0x3e
	  14fbf948  77e52265  0040ebe0 14fbfb3c 00000004 RPCRT4!Invoke+0x28
	  14fbf964  77e52236  0040ebe0 14fbfb3c 00000004 RPCRT4!NdrStubCall2+0x745
	  14fbfc28  77e51f9e  00000000 00000000 14fbfe08 0x77e52236
	  14fbfc40  77e1134f  14fbfe08 14fbfe08 0015d530 RPCRT4!NdrStubCall2+0x47e
	  14fbfc7c  77e11122  00410230 14fbfe08 14fbfdc4
	  RPCRT4!DispatchToStubInC+0x34
	  14fbfcd0  77e112fb  14fbfe08 00000000 14fbfdc4
	  RPCRT4!?DispatchToStubWorker@RPC_INTERFACE@@AAEJPAU_RPC_MESSAGE@
	  @IPAJ@Z+0xb0
	  14fbfcf0  77e119cf  14fbfe08 00000000 14fbfdc4
	  RPCRT4!?DispatchToStub@RPC_INTERFACE@@QAEJPAU_RPC_MESSAGE@@IPAJ@Z+0x41
	  14fbfdc8  77e12b98  00143d68 14fbfe68 14fbfe08
	  RPCRT4!?DealWithRequestMessage@WMSG_SASSOCIATION@@QAEXPAT_WMSG_MESSAGE@
	  @0PAU_RPC_MESSAGE@@PAPAVWMSG_SBINDING@@IHH@Z+0x182
	   14fbfe40  77e15fff  00143d68 14fbfe68 00000000
	  RPCRT4!?DealWithLRPCRequest@WMSG_ADDRESS@@AAEPAT_WMSG_MESSAGE@
	  @PAT2@0HPAVWMSG_ASSOCIATION@@@Z+0xab
	  14fbff90  77e162f0  77e163e5 0014bc30 14fbffec
	  RPCRT4!?ReceiveLotsaCalls@WMSG_ADDRESS@@AAEXXZ+0x38
	
	
	Additional query words: PR_REPLY_RECIPIENT_ENTRIES
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
