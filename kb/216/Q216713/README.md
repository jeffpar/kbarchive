---
layout: page
title: "Q216713: Server Access Violation in S1PXSND Using Persistent Verification"
permalink: /kb/216/Q216713/
---

## Q216713: Server Access Violation in S1PXSND Using Persistent Verification

{% raw %}

	Article: Q216713
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0SP3,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna300sp4fix kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0SP3, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server service (Snaservr.exe) may fail unexpectedly with an access
	violation in routine s1pxsnd(). This specific failure can occur when using LU6.2
	persistent verification with SNA Server. When this problem occurs, a Dr. Watson
	log similar to the following may be generated:
	
	  Application exception occurred:
	  App: exe\snaservr.dbg (pid=process id)
	  When: date time
	  Exception number: c0000005 (access violation)
	
	  (data omitted )
	
	  eax=ffffff11 ebx=00000000 ecx=019fc9e0 edx=014e0000 esi=00000285 edi=00001000
	  eip=0105ca33 esp=0118fda8 ebp=15070ff9 iopl=0 nv up ei ng nz na po cy
	  cs=001b ss=0023 ds=0023 es=0023 fs=003b gs=0000 efl=00000287
	
	  function: s1pxsnd
	  0105ca18 8b4c2410 mov ecx,[esp+0x10]
	  0105ca1c b001 mov al,0x1
	  0105ca1e 8b4904 mov ecx,[ecx+0x4]
	  0105ca21 8bd9 mov ebx,ecx
	  0105ca23 668b6b06 mov bp,[ebx+0x6]
	  0105ca27 662b6b04 sub bp,[ebx+0x4]
	  0105ca2b 45 inc ebp
	  0105ca2c 663bef cmp bp,di
	  0105ca2f 7d15 jge s1pxsnd+0xf16 (0105ca46)
	  0105ca31 8b1b mov ebx,[ebx]
	  FAULT ->0105ca33 668b5306 mov dx,[ebx+0x6] ds:0142ea07=1400
	
	NOTE: The following Knowledge Base articles refer to similar failure symptoms,
	though these problems have been fixed in SNA Server 4.0 Service Pack 2. While
	the failure is similar, the cause of this issue is specific to the use of
	persistent verification.
	
	  Q185689 Snaserver.exe May Trap in Function S1PXSND()
	
	(fixed in SNA Server 4.0 SP1)
	
	  Q195998 SNA Server Fails With Access Violation in Routine s1pxsnd
	
	(fixed in SNA Server 4.0 SP2)
	
	CAUSE
	=====
	
	To support persistent verification, the SNA Server service may be required to
	remove the password vector from the FMH-5 Attach request received from the SNA
	Server APPC DLL. In some cases, SNA Server failed to decrement the internal
	message size of the element, resulting in an access violation when transmitting
	the message to the SNA Server link service.
	
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
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 SP3, SNA Server
	4.0, 4.0 SP1, 4.0 SP2. This problem was first corrected in SNA Server version
	3.0 Service Pack 4 and SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0SP3,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
