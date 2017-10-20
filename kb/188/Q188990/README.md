---
layout: page
title: "Q188990: Application Exception in Snamanag!CSISend"
permalink: /kb/188/Q188990/
---

## Q188990: Application Exception in Snamanag!CSISend

{% raw %}

	Article: Q188990
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server Manage Agent service (MngAgent.exe) may generate an application
	exception when stopping an LU. When this problem occurs, the Windows NT
	Application Event Log contains a message similar to the following:
	
	  Event ID: 624
	  Source: SNA Server
	  Description: Creating dump file C:\SNA\traces\snadump.log for
	  mngagent.exe.
	
	If Drwtsn32.exe is the default debugger on the Windows NT Server computer that is
	running SNA Server, an entry similar to the following will be included in the
	Drwtsn32.log in the Windows NT directory:
	
	  Application exception occurred:
	          App: exe\mngagent.dbg (pid=250)
	          When: 5/20/1998 @ 8:18:57.93
	          Exception number: c0000005 (access violation)
	
	  (...)
	  function: CSISend
	
	          614846d6 50               push    eax
	          614846d7 ff1588104861
	           ds:61481088=77f02df5
	                                    call    dword ptr
	[_imp__LocalLock
	                                             (61481088)]
	          614846dd 8b542414         mov     edx,[esp+0x14]
	           ss:035de73b=????????
	          614846e1 8b5204           mov     edx,[edx+0x4]
	           ds:05873cd2=????????
	          614846e4 66897204         mov     [edx+0x4],si
	           ds:05873cd3=????
	          614846e8 8b4d0c           mov     ecx,[ebp+0xc]
	           ss:01508676=????????
	          614846eb 8bf0             mov     esi,eax
	          614846ed 8bc1             mov     eax,ecx
	          614846ef 8d7a09           lea     edi,[edx+0x9]
	           ds:05873cd2=????????
	          614846f2 c1e902           shr     ecx,0x2
	
	  FAULT -<614846f5 f3a5            rep  movsd
	ds:00114000=????????
	
	           es:044552e5=0004001a
	          614846f7 8bc8             mov     ecx,eax
	          614846f9 83e103           and     ecx,0x3
	          614846fc f3a4             rep     movsb
	ds:00114000=??
	           es:044552e5=1a
	          614846fe 668b4d0c         mov     cx,[ebp+0xc]
	           ss:01508677=????
	          61484702 66894a06         mov     [edx+0x6],cx
	           ds:05873cd3=????
	          61484706 8b5508           mov     edx,[ebp+0x8]
	           ss:01508676=????????
	          61484709 52               push    edx
	          6148470a ff1560104861
	           ds:61481060=77f02d13
	                                    call    dword ptr
	[_imp__LocalUnlock
	                                             (61481060)]
	          61484710 8a4322           mov     al,[ebx+0x22]
	           ds:0150a0d6=??
	          61484713 8d4c2424         lea     ecx,[esp+0x24]
	           ss:035de73b=????????
	          61484717 fec0             inc     al
	
	*----< Stack Back Trace >----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  021bfd4c 6148452f 000eb6d0 000e9c70 00113ffc 000eb6d0 snamanag!CSISend
	   (FPO: [EBP 0x000eb6d0] [2,3,4])
	  021bfd60 61481996 000eb6d0 07087fff 0000050a 00113ff0
	   snamanag!CSIPreQueue  (FPO: [9,0,2])
	  021bff38 60b0530c 040805c4 00252d00 00000004 6098a984
	   snamanag!SNAStopService  (FPO: [EBP 0xffffffff] [1,104,4])
	  021bff48 6098a984 021bff58 00252d00 002bf670 0000064e
	   mngsna!CDispLUServe::OnCommand  (FPO: [1,1,1])
	  021bff64 6098a84d 77e71b04 6098a800 77e719c8 60b045fb
	   mngbase!CNotifyQueue::Dispatch  (FPO: [0,4,1])
	  021bff74 60b045fb ffffffff 7ffdf000 0111ffb8 021bffec
	   mngbase!CNotifyQueue::ProcessWait  (FPO: [1,0,3])
	  021bffb8 77f04f2c 00000000 7ffdf000 0111ffb8 00000000 mngsna!DoMngSna
	  (FPO: [EBP 0x7ffdf000] [1,11,4])
	  7ffdf000 ffffffff 01000000 000805c0 00020000 00000000
	   kernel32!lstrcmpiW
	  00010000 0050004d 00540055 00520045 0041004e 0045004d
	   rpcrt4!<nosymbols>
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest Microsoft SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. This problem was first corrected in SNA
	Server 3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
