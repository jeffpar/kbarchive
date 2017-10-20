---
layout: page
title: "Q254000: SNA Server Access Violation Occurs after Dynamically Adding 3270"
permalink: /kb/254/Q254000/
---

## Q254000: SNA Server Access Violation Occurs after Dynamically Adding 3270

{% raw %}

	Article: Q254000
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server service (Snaservr.exe) may fail with an Access Violation error in
	routine s1pnsfol() after dynamically adding 3270 LUs to the configuration. When
	this occurs, the SNA Server process stops abnormally and logs the following
	event in the Windows NT application event log:
	
	  Event ID: 624
	  Source: SNA Server
	
	If Drwtsn32.exe is configured as the default Windows NT debugger, the following
	Drwtsn32.log entry is also created:
	
	  
	
	  Application exception occurred:
	
	       App: exe\snaservr.dbg (pid)
	
	       When: date time 
	
	       Exception number: c0000005 (access violation)
	
	  [....]
	
	  State Dump for Thread Id 
	
	  eax=00000000 ebx=00000004 ecx=01190000 edx=00000000 esi=00000000 
	
	  edi=013319bc eip=0104e0ad esp=00bcfe6c ebp=0000000a iopl=0 
	     
	  nv up ei pl zr na po nc
	
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000 fl=00000246
	
	  function: s1pnsfol
	
	       0104e08a 8b0db0591801     mov     ecx,[sct (011859b0)]  
	       0104e090 8bc6             mov     eax,esi
	       0104e092 25ffff0000       and     eax,0xffff
	       0104e097 57               push    edi
	       0104e098 6a0d             push    0xd
	       0104e09a 56               push    esi
	       0104e09b 8d0440           lea     ax,[eax+eax*2]  
	                                             ds:00000000=????????
	       0104e09e c744242000000000 mov   dword ptr [esp+0x20],0x0  
	                                             ss:025ce873=????????
	       0104e0a6 c1e003           shl     eax,0x3
	       0104e0a9 89442428         mov     [esp+0x28],eax  
	                                             ss:025ce873=????????
	  FAULT ->0104e0ad 8b5401ec         mov     edx,[ecx+eax-0x14]  
	                                             ds:019fea07=????????
	       0104e0b1 89542434         mov     [esp+0x34],edx  
	                                             ss:025ce873=????????
	
	  *---- Stack Back Trace ----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  00bcfec8 010522c0 01d30d5c 00000000 00000000 00251bd0 snaservr!s1pnsfol
	
	CAUSE
	=====
	
	The SNA Server service encounters a problem creating an internal configuration
	record for the dynamically defined 3270 LU.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 4.0, 4.0
	SP1, 4.0 SP2 and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
