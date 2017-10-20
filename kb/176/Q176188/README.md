---
layout: page
title: "Q176188: SNA Link Access Violation in ibmx25!os_wtime"
permalink: /kb/176/Q176188/
---

## Q176188: SNA Link Access Violation in ibmx25!os_wtime

{% raw %}

	Article: Q176188
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Link Service (snalink.exe) may fail with an access violation in
	ibmx25!os_wtime when the X.25 link to the host is down for an extended period of
	time. Also, an Event ID 320 with an error code of 0xc0000023
	(STATUS_BUFFER_TOO_SMALL) may be logged in the Windows NT Event Viewer
	Application log.
	
	The failure may be recorded in the <ntroot>\DRWTSN32.LOG file as follows:
	
	  
	
	  Application exception occurred:
	       App: exe\snalink.DBG (pid=120)
	       When: 9/24/1997 @ 17:26:12.627
	       Exception number: c0000005 (access violation)
	
	  [...]
	
	  State Dump for Thread Id 0x7f
	
	  eax=00000000 ebx=00000000 ecx=00000000 edx=67274840 esi=00000000
	  edi=007e0148
	  eip=007d75ab esp=0119ff4c ebp=000000ff iopl=0    nv up ei pl zr na po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000
	  efl=00000246
	
	  function: os_wtime
	          007d75a0 6a01             push    0x1
	          007d75a2 e859fdffff       call    os_ftask (007d7300)
	          007d75a7 8b4c2404         mov     ecx,[esp+0x4]
	  ss:024ae953=????????
	  FAULT ->007d75ab c70003000000     mov     dword ptr [eax],0x3
	  ds:00000000=????????
	          007d75b1 894808           mov     [eax+0x8],ecx
	  ds:0130ea06=????????
	          007d75b4 c20400           ret     0x4
	          007d75b7 cc               int     3
	          007d75b8 cc               int     3
	          007d75b9 cc               int     3
	          007d75ba cc               int     3
	          007d75bb cc               int     3
	          007d75bc cc               int     3
	          007d75bd cc               int     3
	          007d75be cc               int     3
	          007d75bf cc               int     3
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  000000ff 00000000 00000000 00000000 00000000 00000000 ibmx25!os_wtime
	  (FPO: [1,0,0])
	  000000ff 00000000 00000000 00000000 00000000 00000000
	  snalink!<nosymbols>
	
	CAUSE
	=====
	
	The Event 320 error indicates that the device driver is unable to transmit a
	frame for the X.25 link service because its transmission buffers are full. The
	access violation occurs when the link service tries to recover after this error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1 (SP1), and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: snalink x.25
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
