---
layout: page
title: "Q276047: Application Exception in DMODInitReceiveAllocate"
permalink: /kb/276/Q276047/
---

## Q276047: Application Exception in DMODInitReceiveAllocate

	Article: Q276047
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running an Advanced Program-to-Program Communications (APPC) or
	Common Programming Interface for Communications (CPI-C) application, you may
	encounter an Access Violation (AV) in DMODInitReceiveAllocate.
	
	If Dr. Watson is configured as the default debugger, an entry similar to the
	following may be appended to the Drwtsn32.log file:
	
	function: DMODInitReceiveAlloc
	       6721a1c4 8d54d034         lea     edx,[eax+edx*8+0x34]   ds:040cbeef=????????
	       6721a1c8 83c9ff           or      ecx,0xff
	       6721a1cb 33c0             xor     eax,eax
	       6721a1cd f2ae             repne   scasb                        es:02ced4e8=??
	       6721a1cf f7d1             not     ecx
	       6721a1d1 2bf9             sub     edi,ecx
	       6721a1d3 8bc1             mov     eax,ecx
	       6721a1d5 8bf7             mov     esi,edi
	       6721a1d7 8bfa             mov     edi,edx
	       6721a1d9 c1e902           shr     ecx,0x2
	FAULT ->6721a1dc f3a5            rep  movsd ds:0284f79c=20202020 es:02ced4e8=????????
	       6721a1de 8bc8             mov     ecx,eax
	       6721a1e0 83e103           and     ecx,0x3
	       6721a1e3 f3a4             rep     movsb         ds:0284f79c=20 es:02ced4e8=??
	       6721a1e5 33c0             xor     eax,eax
	       6721a1e7 8b7dc4           mov     edi,[ebp-0x3c]         ss:03c2e26e=????????
	       6721a1ea 668b4704         mov     ax,[edi+0x4]               ds:040cbeef=????
	       6721a1ee 8d0c40           lea     ecx,[eax+eax*2]        ds:0000001b=????????
	       6721a1f1 c1e103           shl     ecx,0x3
	       6721a1f4 2bc8             sub     ecx,eax
	       6721a1f6 8bb548ffffff     mov     esi,[ebp+0xffffff48]   ss:0284f7b0=02cc025c
	       6721a1fc c744ce1004000000                                ds:013dea0d=????????
	                                 mov     dword ptr [esi+ecx*8+0x10],0x4
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0284f868 63404de3 62e1b5b0 00000001 00a9a4bc 00a9a4d8 snadmod!DMODInitReceiveAlloc (FPO: Non-FPO [5,128,3])
	0284f89c 63403254 00000000 63401bb6 0284fa0c 0f7e0000 wappc32!receive_allocate_proc  (FPO: [EBP 0x00014000] [0,3,4])
	0284f8a4 63401bb6 0284fa0c 0f7e0000 00000000 77f674c0 wappc32!ps_verb_router  (FPO: [0,0,1])
	0284f9bc 63401737 0f7e0000 00000002 62e018a0 00000000 wappc32!Appc_Main  (FPO: [EBP 0x0284fa0c] [4,65,4])
	
	CAUSE
	=====
	
	The application exception is caused by a buffer overrun during Dynamic Load
	processing.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 3 (SP3).
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: dmod dload trap sp3 service pack 3
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3
	Version           : :4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
