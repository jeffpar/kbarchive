---
layout: page
title: "Q214491: SNA Server Access Violation in Function S1PWHSES()"
permalink: /kb/214/Q214491/
---

## Q214491: SNA Server Access Violation in Function S1PWHSES()

	Article: Q214491
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsna300sp4fix kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server service may terminate unexpectedly causing all connected users to
	lose their existing host sessions. If Drwtsn32.exe is configured as the default
	debugger on the system, a Drwtsn32.log file similar to the following will be
	generated when this problem occurs:
	
	  Application exception occurred:
	          App: exe\snaservr.dbg (pid=<process id>)
	          When: <date> @ <time>
	          Exception number: c0000005 (access violation)
	
	  [...]
	
	  function: s1pwhses
	          0105ca83 0fbf542420       movsx   edx,word ptr [esp+0x20]
	  ss:020de930=????
	          0105ca88 4a               dec     edx
	          0105ca89 bf02000000       mov     edi,0x2
	          0105ca8e 83fa09           cmp     edx,0x9
	          0105ca91 0f8754040000     jnbe    s1pwhses+0x4ab (0105ceeb)
	          0105ca97 ff2495bccf0501
	  ds:0000001d=????????
	                                    jmp     dword ptr [s1pwhses+0x57c
	  (0105cfbc)+edx*4]
	          0105ca9e 66837d1401       cmp     word ptr [ebp+0x14],0x1
	  ss:03f0ea09=????
	          0105caa3 0f8542040000     jne     s1pwhses+0x4ab (0105ceeb)
	          0105caa9 e928040000       jmp     s1pwhses+0x496 (0105ced6)
	          0105caae 660fb65015       movzx   dx,byte ptr [eax+0x15]
	  ds:02475074=??
	  FAULT ->0105cab3 6689551c         mov     [ebp+0x1c],dx
	  ss:03f0ea09=????
	          0105cab7 668b5022         mov     dx,[eax+0x22]
	  ds:02475073=????
	          0105cabb 66895508         mov     [ebp+0x8],dx
	  ss:03f0ea09=????
	          0105cabf 8a5024           mov     dl,[eax+0x24]
	  ds:02475072=??
	          0105cac2 88550a           mov     [ebp+0xa],dl
	  ss:03f0ea08=??
	          0105cac5 668b400c         mov     ax,[eax+0xc]
	  ds:02475073=????
	          0105cac9 6689450c         mov     [ebp+0xc],ax
	  ss:03f0ea09=????
	          0105cacd 0fbf5104         movsx   edx,word ptr [ecx+0x4]
	  ds:02e735fb=????
	          0105cad1 8a440a29         mov     al,[edx+ecx+0x29]
	  ds:02e735fb=??
	          0105cad5 884520           mov     [ebp+0x20],al
	  ss:03f0ea08=??
	          0105cad8 8b5109           mov     edx,[ecx+0x9]
	  ds:02e735fa=????????
	          0105cadb 895530           mov     [ebp+0x30],edx
	  ss:03f0ea08=????????
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  03000002 00000000 00000000 00000000 00000000 00000000 snaservr!s1pwhses
	  (FPO: [EBP 0x00000000] [2,3,4])
	  03000012 00000000 00000000 00000000 00000000 00000000 snaservr!<nosymbols>
	
	In addition, the SNA Server will log a message similar to the following in the
	Windows NT Application Event Log:
	
	  Event ID: 624
	  Source: SNA Server
	  Description: Creating dump file <snaroot>\traces\snadump.log for
	  snaservr.exe.
	
	For additional information about another SNA Server access violation caused by an
	invalid emulator message, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q196921
	  TITLE : SNA Server Access Violation in Function S1PWLUSE()
	
	CAUSE
	=====
	
	The access violation in the S1PWHSES() function is caused because the SNA Server
	service attempts to process an incorrectly formatted message that it received
	from a client across the native 3270 emulator interface (3270 Emulator Interface
	Specification).
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, and 4.0
	SP2. This problem was first corrected in SNA Server version 3.0 Service Pack 4
	and SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	After applying the update, the SNA Server service will discard the invalid
	message that caused this access violation. In addition, the following message
	will be logged in the Windows NT Application Event Log when one of these invalid
	messages is detected:
	
	  Event ID: 98
	  Source: SNA Server
	  Description: A 3270 emulator sent an invalid message, which has been discarded
	  by SNA Server.
	
	  Client Workstation: <workstation name>
	  Client Domain: <domain name>
	  Client User: <user name>
	
	
	For additional information about configuring Drwtsn32.exe as the default
	debugger, please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q188296
	  TITLE : How to Disable Dr. Watson for Windows NT
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
