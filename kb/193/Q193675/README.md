---
layout: page
title: "Q193675: XWEB: Bad Error Handling in CfolderRender::put_DataSource"
permalink: kb/193/Q193675/
---

## Q193675: XWEB: Bad Error Handling in CfolderRender::put_DataSource

	Article: Q193675
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Outlook Web Access (OWA) to access folders on Microsoft Exchange
	Server, an access violation may occur. The access violation may result in a Dr.
	Watson error, with the following information in the Drwtsn32.log file:
	
	  Application exception occurred:
	     App: exe\inetinfo.dbg (pid=145)
	     When: 7/10/1998 @ 13:56:52.70
	     Exception number: c0000005 (access violation)
	
	Below is the thread that caused the fault. Please note that the thread
	information below was seen on an Alpha platform; however, the problem exists in
	both the x86 and Alpha builds of OWA.
	
	  function: CContainerRenderer::put_DataSource
	     023de280: 214a001f lda     s1,1f(s1)
	     023de284: b07e0050 stl     t2,50(sp)
	     023de288: b15e004c stl     s1,4c(sp)
	     023de28c: a2090038 ldl     a0,38(s0)
	     023de290: a0b00000 ldl     t4,0(a0)
	     023de294: a0050014 ldl     v0,14(t4)
	     023de298: 6b404000 jsr     ra,(v0),0    8004010c
	     023de29c: a03e0058 ldl     t0,58(sp)
	     023de2a0: 47e0040b bis     zero,v0,s2
	     023de2a4: 263f0243 ldah    a1,243(zero)
	     FAULT ->023de2a8: a0610000 ldl     t2,0(t0)
	     023de2ac: 223176b0 lda     a1,76b0(a1)
	     023de2b0: 406a05a3 cmpeq   t2,s1,t2
	     023de2b4: e460000f beq     t2,023de2f4
	      CContainerRenderer::put_DataSource+404
	     023de2b8: a2010008 ldl     a0,8(t0)
	     023de2bc: d3415744 bsr     ra,02433fd0  wcsicmp
	     023de2c0: f4000003 bne     v0,023de2d0
	      CContainerRenderer::put_DataSource+3e0
	     023de2c4: 47e05401 bis     zero,#2,t0
	     023de2c8: b0290060 stl     t0,60(s0)
	     023de2cc: c3e0000a br      zero,023de2f8
	      CContainerRenderer::put_DataSource+408
	     023de2d0: a07e0058 ldl     t2,58(sp)
	     023de2d4: 263f0243 ldah    a1,243(zero)
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  042bf290 651cbcfc 045d3080 02430000 0532d518 2b2326b0
	   cdohtml!CContainerRenderer::put_DataSource [omap]
	  042bf340 6523a184 0065726f 00000009 072750a0 00000000
	   oleaut32!DispCallFunc
	  042bf3c0 fffffffc 042bf578 00000009 00000009 00000004
	   oleaut32!<nosymbols>
	  042bf3c0 00000000 042bf578 00000009 00000009 00000004 <nosymbols>
	
	CAUSE
	=====
	
	A call to m_pmp->GetProps can return MAPI_E_NOT_FOUND but this condition is
	not handled properly and results in an access violation. This problem was
	introduced in Microsoft Exchange Server 5.5 Service Pack 1.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Outlook Web Access
	
	  File Name     Version
	  ------------------------
	  Cdohtml.dll   5.5.2387.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 1. This problem was first corrected in Exchange Server
	5.5 Service Pack 2.
	
	
	Additional query words: exfclnfaq cdohmtl crash OWA
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
