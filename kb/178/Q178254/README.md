---
layout: page
title: "Q178254: SNA Server Access Violation in Function S1practs"
permalink: kb/178/Q178254/
---

## Q178254: SNA Server Access Violation in Function S1practs

	Article: Q178254
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
	
	SNA Server (Snaservr.exe) may fail unexpectedly with an access violation,
	causing the following symptoms:
	
	- The following event will be logged into the Windows NT application event
	  log:
	
	  
	
	  Event ID: 624
	  Source:   SNA Server
	  Description: Creating dump file <snaroot>\traces\snadump.log for
	  snaservr.exe.
	
	- The following log entry will be created in the <ntroot>\drwtsn32.log
	  file:
	
	  
	
	  Application exception occurred:
	          App: exe\snaservr.dbg (<process id>)
	          Exception number: c0000005 (access violation)
	
	  [...]
	
	  State Dump for Thread Id 0x110
	
	  eax=00000000 ebx=00000000 ecx=00000014 edx=011cff27 esi=0025c4f0
	  edi=015641dc
	  eip=0101b62a esp=011cff08 ebp=011840c0 iopl=0
	  nv up ei pl zr na po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000 efl=00000246
	
	  function: s1practs
	       0101b60d 6a11             push    0x11
	       0101b60f 51               push    ecx
	       0101b610 e88b60feff       call    sapugetc (010016a0)
	       0101b615 84c0             test    al,al
	       0101b617 7543             jnz     s1practs+0x30c (0101b65c)
	       0101b619 0fbf5608         movsx   edx,word ptr [esi+0x8]
	                   ds:0116aef7=0000
	       0101b61d 53               push    ebx
	       0101b61e 8b0495a0190f01
	                   ds:011cff27=00000101
	                     mov     eax,[s1scb+0x4e20 (010f19a0)+edx*4]
	       0101b625 8d54241b         lea     edx,[esp+0x1b]
	                   ss:020de90f=????????
	       0101b629 52               push    edx
	  FAULT ->0101b62a 8b4838           mov     ecx,[eax+0x38]
	                   ds:00f0ea06=????????
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  011840c0 001e0011 000e0000 00000000 001f0011 b1f80008 snaservr!s1practs
	
	CAUSE
	=====
	
	This problem can occur if an SNA Server connection is configured to "Support
	Dynamic Remote APPC LU Definition". The SNA Server service assumes that the TP
	(transaction program) did not end following a session activation failure.
	However, if the TP does end, the SNA Server fails with an access violation. This
	problem may also cause an SNA Server access violation in function s1prfpda().
	
	RESOLUTION
	==========
	
	Obtain the following fix or wait for the next SNA Server 3.0 service pack.
	
	This fix should have the following timestamp:
	
	  11/21/97  10:58a       437,440  <snaroot>\system\snaservr.exe
	  11/21/97  10:58a       412,692  <ntroot>\symbols\exe\snaservr.dbg
	  11/21/97  10:58a       825,072  <snaroot>\system\trcservr.exe
	  11/21/97  10:58a       751,608  <ntroot>\symbols\exe\trcservr.exe
	
	NOTE: SNA Server 3.0 Service Pack 2 should be applied prior to applying this
	fix.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0, version
	3.0 Service Pack 1, and version 3.0 Service Pack 2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
