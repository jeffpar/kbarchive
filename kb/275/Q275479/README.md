---
layout: page
title: "Q275479: Access Violation in 5250 Application While in TN5250 Mode"
permalink: /kb/275/Q275479/
---

## Q275479: Access Violation in 5250 Application While in TN5250 Mode

	Article: Q275479
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 5250 application (Win5250.exe) that is included with SNA Server may generate
	an access violation when it is configured in TN5250 mode to connect to the
	TN5250 service on SNA Server. If Drwtsn32.exe is configured as the default
	debugger on the system on which the 5250 application is running, an error
	similar to the following may be included in the Drwtsn32.log:
	
	  Application exception occurred:
	          App: exe\win5250.dbg (pid=517)
	          When: 10/4/2000 @ 10:58:16.19
	          Exception number: c0000005 (access violation)
	
	  [data omitted]
	
	  function: CBufferPool::Get
	          64d02970 56               push    esi
	          64d02971 8bf1             mov     esi,ecx
	          64d02973 57               push    edi
	          64d02974 b900100000       mov     ecx,0x1000
	  FAULT ->64d02979 8b5604           mov     edx,[esi+0x4]          ds:01d3ea06=????????
	          64d0297c 33c0             xor     eax,eax
	          64d0297e 85d2             test    edx,edx
	          64d02980 8d7a0c           lea     edi,[edx+0xc]          ds:01e7eb86=????????
	          64d02983 c7420800000000   mov    dword ptr [edx+0x8],0x0 ds:01e7eb86=????????
	          64d0298a f3ab             rep     stosd                  es:00000000=????????
	          64d0298c 740d             jz      CBufferPool::Get+0x2b (64d0299b)
	          64d0298e 8b02             mov     eax,[edx]              ds:00140180=????????
	          64d02990 894604           mov     [esi+0x4],eax          ds:01d3ea06=????????
	          64d02993 c70200000000     mov     dword ptr [edx],0x0    ds:00140180=????????
	          64d02999 ff0e             dec     dword ptr [esi]        ds:00000000=????????
	          64d0299b 5f               pop     edi
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  0006eef8 64d01fc4 00000001 00243b40 00243b40 64d01f39 WSTN5250!CBufferPool::Get  (FPO: [0,0,2])
	  0006ef08 64d01f39 00000001 64d01ed8 00140180 000000a4 WSTN5250!WsTn5250::HandleReceive  (FPO: [0,1,2])
	  0006ef10 64d01ed8 00140180 000000a4 00000000 00000001 WSTN5250!WsTn5250::OnSocketSelect  (FPO: [4,0,1])
	  0006ef28 64d01e8e 00000464 000000a4 00000001 0100801a WSTN5250!WsTn5250::ReceiveTnMessage  (FPO: [3,0,1])
	  0006ef38 0100801a 00000464 000000a4 00000001 0023b948 WSTN5250!WsTn5250::WindowsMessageProc  (FPO: [3,0,0])
	  0006ef58 5f40163b 00000464 000000a4 00000001 007a0838 win5250!WUserView::WindowProc  (FPO: [EBP 0x0023b948] [3,0,4])
	  0023b948 00000001 00000000 00000000 00000000 00000001 mfc42!Ordinal1109 
	
	This problem occurs only if the TN5250 AS/400 Definition on the SNA Server is
	configured to restrict access to specific NetBIOS names or Transfer Control
	Protocol/Internet Protocol (TCP/IP) addresses and the failing client or clients
	are not granted access to the AS/400 Definition.
	
	CAUSE
	=====
	
	The access violation occurs when the 5250 application attempts to switch its
	context from the emulator window to an error message pop-up dialog box. The
	attempt is made to display the error message pop-up dialog box to indicate that
	the 5250 application cannot connect to the TN5250 server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	WORKAROUND
	==========
	
	Add the failing client's NetBIOS name or TCP/IP address to the IP Address tab of
	the AS/400 Definition on the SNA Server so that the client can access the TN5250
	server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
