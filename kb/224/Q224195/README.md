---
layout: page
title: "Q224195: XADM: Store Failure During the Processing of a Client Based Rule"
permalink: /kb/224/Q224195/
---

## Q224195: XADM: Store Failure During the Processing of a Client Based Rule

{% raw %}

	Article: Q224195
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During the processing of a client-based messaging rule, the Microsoft Exchange
	Server information store stops and produces a Drwtsn32.log file with an entry
	similar to the one below:
	
	  Application exception occurred:
	  App: exe\store.dbg (pid=227)
	  When: 3/25/1999 @ 14:38:10.484
	  Exception number: c0000005 (access violation)
	
	A messaging client may see an error message dialog box similar to the following:
	
	*****************************************************************************
	* Rules in Error                                                            *
	*****************************************************************************
	* +-----------------------------------------------------------------------+ *
	* | Rule                           | Error                                | *
	* +-----------------------------------------------------------------------+ *
	* | Server-Requested Client Action   MoveCopy, Unable to create dest msg. | *
	* |                                                                       | *
	* |                                                                       | *
	* |                                                                       | *
	* +-----------------------------------------------------------------------+ *
	*                                                                           *
	*                              [ Close ]                                    *
	*                                                                           *
	*****************************************************************************
	
	CAUSE
	=====
	
	The information store is improperly handling the clean-up of a failure to
	transfer a message object. The problem results in the information store
	attempting to access memory which had already been freed, resulting in the
	failure.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Store.exe  | 5.5.2579.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2579.0 | 
	+-------------------------+
	| Gapi32.dll | 5.5.2579.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	Further examination of the Drwtsn32.log file may reveal a faulting thread that
	looks similar to the following:
	
	State Dump for Thread Id 0x119
	
	eax=00000000 ebx=0d7bfca0 ecx=435ecbb4 edx=0d7c0600 esi=0d7bfee0 edi=0d7c0600
	eip=77f05198 esp=0e6cf944 ebp=77f0518c iopl=0         nv up ei pl nz ac pe cy
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000             efl=00000213
	
	function: InterlockedCompareExchange
	       77f0518c 8b4c2404         mov     ecx,[esp+0x4]          ss:0fa2e34b=????????
	       77f05190 8b542408         mov     edx,[esp+0x8]          ss:0fa2e34b=????????
	       77f05194 8b44240c         mov     eax,[esp+0xc]          ss:0fa2e34b=????????
	FAULT ->77f05198 f00fb1           lock    ???
	       77f0519b 11c2             adc     edx,eax
	       77f0519d 0c00             or      al,0x0
	       77f0519f 90               nop
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0e6cf940 6fff1a40 435ecbb4 0d7c0600 00000000 0d7bfca0 kernel32!InterlockedCompareExchange  (FPO: [3,0,0])
	0e6cf960 6fff13c4 01050588 0d7c0608 00422af5 0d7c0608 exchmem!MpHeapFree  (FPO: [EBP 0x0d7bfca0] [2,0,4])
	0e6cf96c 00422af5 0d7c0608 0d7bfca0 0d7bfe78 00000000 exchmem!ExchMHeapFree  (FPO: [1,0,0])
	0e6cf984 005d9852 0d795b10 0d7bfe78 005d7d37 00000000 store!OMSG::~OMSG [omap]  (FPO: [0,1,3])
	0e6cf990 005d7d37 00000000 0d795b10 005d7c2e 0d770048 store!MSGFXSND::Release [omap]  (FPO: [0,0,2])
	0e6cf99c 005d7c2e 0d770048 0d795b10 0e6cfa78 0d7bd160 store!FXSRCCTX::EcScrub [omap]  (FPO: [0,0,2])
	0e6cf9b0 005d7bb7 0d795b10 005d7b93 0d795b10 004cc8ee store!FXSRCCTX::Release [omap]  (FPO: [0,0,1])
	0e6cf9b8 005d7b93 0d795b10 004cc8ee 00000001 0d7bd160 store!FXSRCCTX::~FXSRCCTX [omap]  (FPO: [0,0,1])
	0e6cf9c0 004cc8ee 00000001 0d7bd160 00408920 ffffffff store!FXSRCCTX::`scalar deleting destructor' [omap]  (FPO: [1,0,1])
	0e6cf9cc 00408920 ffffffff 00000000 004229f8 0d770048 store!UNK::Delete_24705_95eEvent_112Pool_7571e [omap]  (FPO: [1,0,1])
	0e6cf9d8 004229f8 0d770048 0d7bd160 0d7a9190 0d7bd160 store!UNKP::DeleteSubObjects [omap]  (FPO: [0,0,1])
	0e6cf9ec 00408986 00000033 0041228e 00000033 0d7a9190 store!OMSG::~OMSG [omap]  (FPO: [0,1,3])
	0e6cf9f4 0041228e 00000033 0d7a9190 0e6cfaa8 0e6cfaf8 store!UNK::Delete [omap]  (FPO: [1,0,1])
	0e6cfa10 004122d6 0e6c0003 00000033 004067c2 00000033 store!EcReleaseOp [omap]  (FPO: [EBP 0x0d7a9190] [1,1,4])
	0e6cfa1c 004067c2 00000033 0e6cfa78 00187d10 0e6cfd1c store!EcRelease [omap]  (FPO: [2,0,1])
	0d7a9190 0d7a9190 00000001 0000000c 00000000 00000000 store!EcRpc [omap] 
	
	Additional query words: crash access violation failure exception processing forward move rule
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Component         : MDB
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
