---
layout: page
title: "Q198548: XWEB: OWA Causes an Access Violation in MAPI"
permalink: kb/198/Q198548/
---

## Q198548: XWEB: OWA Causes an Access Violation in MAPI

	Article: Q198548
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Outlook Web Access (OWA) on a separate computer to access the
	Microsoft Exchange Server computer, an access violation may occur. The access
	violation may result in a Dr. Watson with the following information in the file
	Drwtsn32.log:
	
	  Microsoft (R) Windows NT (TM) Version 4.00 DrWtsn32
	  Copyright (C) 1985-1996 Microsoft Corp. All rights reserved.
	
	  Application exception occurred:
	     App: exe\inetinfo.dbg (pid=144)
	     When: 11/8/1998 @ 22:36:8.750
	     Exception number: c0000005 (access violation)
	
	Below is the thread that displays the fault. Please note that the thread
	information below was seen on an Alpha platform, however, the problem exists in
	both the x86 and Alpha builds of OWA.
	
	  function: MAPILogonX
	     6fb230d0: b02b0058 stl     t0,58(s2)
	     6fb230d4: b00a0000 stl     v0,0(s1)
	     6fb230d8: a06b0000 ldl     t2,0(s2)
	     6fb230dc: 40603003 addl    t2,#1,t2
	     6fb230e0: b06b0000 stl     t2,0(s2)
	     6fb230e4: 25df6fa9 ldah    s5,6fa9(zero)
	     6fb230e8: a0be00a4 ldl     t4,a4(sp)
	     6fb230ec: a09e0070 ldl     t3,70(sp)
	     6fb230f0: a0c50000 ldl     t5,0(t4)
	     6fb230f4: a0840054 ldl     t3,54(t3)
	     FAULT ->6fb230f8: a10b000c ldl     t7,c(s2)
	     6fb230fc: a21e0098 ldl     a0,98(sp)
	     6fb23100: a23e0080 ldl     a1,80(sp)
	     6fb23104: a13e0078 ldl     s0,78(sp)
	     6fb23108: 46011010 and     a0,#8,a0
	     6fb2310c: 40c40004 addl    t5,t3,t3
	     6fb23110: b09e00a8 stl     t3,a8(sp)
	     6fb23114: e560002d beq     s2,6fb231cc  MAPILogonX+acc
	     6fb23118: f500002c bne     t7,6fb231cc  MAPILogonX+acc
	     6fb2311c: e600002b beq     a0,6fb231cc  MAPILogonX+acc
	     6fb23120: a00e28c0 ldl     v0,28c0(s5)
	     6fb23124: a2110064 ldl     a0,64(a1)
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  039ded10 6fb226a0 00000000 00000000 815c06f4 00000000 mapi32!MAPILogonX
	  039dee00 6f08edc4 066a6864 815c06f4 815c06f4 00000000
	   mapi32!MAPILogonEx
	  039dee50 6f08db04 066a6864 00000000 815c06f4 00000000
	   cdo!CSession::M_ScDo_Logon
	  039def20 066a761c 066a6864 00000000 815c06f4 00000000
	   cdo!CSession::V_HrInvoke
	  039dedc0 066a7620 066a6864 00000000 815c06f4 00000000 <nosymbols>
	  039dedc0 00000000 066a6864 00000000 815c06f4 00000000 <nosymbols>
	
	CAUSE
	=====
	
	A function call to a member of psprof, in MapiLogonX, was made outside of a NULL
	check statement. In the case above, psprof was null, hence an access violation
	occurred.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MAPI
	
	  File Name    Version
	  ---------------------
	  Mapi32.dll   5.5.2503
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: Dr Watson
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
