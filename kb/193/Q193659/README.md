---
layout: page
title: "Q193659: SNA Server Access Violation in s1prfrcb()"
permalink: /kb/193/Q193659/
---

## Q193659: SNA Server Access Violation in s1prfrcb()

{% raw %}

	Article: Q193659
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While supporting a large number of concurrent APPC or CPIC allocation requests,
	the SNA Server service may terminate unexpectedly with an access violation. This
	failure will cause SNA Server to log the following event:
	
	  Source: SNA Server
	  Event: 624
	  Creating dump file SNADUMP.LOG for snaservr.exe
	
	If Drwtsn32.exe is the default debugger, the Drwtsn32.log file will indicate an
	access violation fault in s1prfrcb(), s1puc62() or s1prssbd().
	
	The following Knowledge Base article describes other symptoms this problem may
	generate:
	
	Article ID: Q195996 Title: SNA Server Incorrectly Handles Cancelled Allocate
	Requests
	
	CAUSE
	=====
	
	This problem is due to an internal error within the SNA Server service.
	
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
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 (through
	SP3) and SNA Server 4.0 (through SP1). This problem was first corrected in SNA
	Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Here's an example of how this failure may appear in the Drwtsn32.log file.
	
	Application exception occurred:
	       App: exe\snaservr.dbg (pid=197)
	       When: 9/23/1998 @ 8:52:14.78
	       Exception number: c0000005 (access violation)
	
	  [ data omitted ]
	
	  State Dump for Thread Id 0x4d
	
	  eax=00000001 ebx=0117ff3c ecx=00000000 edx=003a3530 esi=0c140230
	  edi=003a3320
	  eip=0101cc92 esp=0117ff08 ebp=0117ff14 iopl=0    nv up ei pl nz na pe nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	  efl=00000202
	
	  function: s1prfrcb
	          0101cc73 6685c9           test    cx,cx
	          0101cc76 7464             jz      s1prfrcb+0xab
	(0101ccdc)
	          0101cc78 0fbfc1           movsx   eax,cx
	          0101cc7b 8b348540780b01    mov     esi,[s1scb+0x4e20
	  (010b7840)+eax*4]
	          0101cc82 33c0             xor     eax,eax
	          0101cc84 6639460c         cmp     [esi+0xc],ax
	          0101cc88 0f94c0           sete    al
	          0101cc8b 84c0             test    al,al
	          0101cc8d 7443             jz      s1prfrcb+0xa1
	(0101ccd2)
	          0101cc8f 8b4e38           mov     ecx,[esi+0x38]
	  FAULT ->0101cc92 8b4904           mov     ecx,[ecx+0x4]
	          0101cc95 8a5123           mov     dl,[ecx+0x23]
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
