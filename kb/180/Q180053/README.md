---
layout: page
title: "Q180053: SNA Server Access Violation in Function S1pimcrc"
permalink: /kb/180/Q180053/
---

## Q180053: SNA Server Access Violation in Function S1pimcrc

{% raw %}

	Article: Q180053
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server service (Snaservr.exe) may fail unexpectedly with an access
	violation. When the problem occurs, all users connecting through SNA Server will
	lose their host sessions and the SNA Server service will no longer be running.
	The Windows NT application event log should indicate an Event 624, logged by SNA
	Server. Also, the following entry will be logged in the
	<Ntroot>\Drwtsn32.log file, indicating an access violation in function
	"s1pimcrc":
	
	  Application exception occurred:
	       App: snaservr.exe (<process ID>)
	       Exception number: c0000005 (access violation)
	
	  [...]
	
	  State Dump for Thread Id 0x8c
	
	  eax=00000000 ebx=002bff62 ecx=000056f1 edx=04000400 esi=00cc4480 
	  edi=00000000
	  eip=00426412 esp=002bff28 ebp=00000000 iopl=0  nv up ei pl nz ac po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000             efl=00000216
	
	function: s1pimcrc
	  004263f0 56               push    esi
	  004263f1 33c0             xor     eax,eax
	  004263f3 a0aa6f4800       mov     al,[sncurrnt (00486faa)] ds:00486faa=4a
	  004263f8 8d0440           lea     eax,[eax+eax*2]  ds:00000000=????????
	  004263fb c1e002           shl     eax,0x2
	  004263fe 0fbf888ef64800   movsx  ecx,word ptr [eax+0x48f68e] ds:0048f68e=0000
	
	  00426405 8bb084f64800     mov     esi,[eax+0x48f684]     ds:0048f684=00000000
	  0042640b 8b048d7c3f4a00                 ds:000056f1=????????
	                            mov     eax,[s1seccb+0x1335c (004a3f7c)+ecx*4]
	FAULT ->00426412 80781701    cmp     byte ptr [eax+0x17],0x1      
	  ds:005de922=??
	
	*----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  00000000 00000000 00000000 00000000 00000000 00000000 snaservr!s1pimcrc
	  00000010 00000000 00000000 00000000 00000000 00000000 snaservr!<nosymbols>
	
	CAUSE
	=====
	
	In one instance, the SNA Server failed to check if an LU6.2 control block was
	valid when receiving a message from a client machine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 SP2,
	3.0, 3.0 SP1, 3.0 SP2 and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
