---
layout: page
title: "Q193260: XADM: OWA Stops when Replying to Message with Inline Image"
permalink: kb/193/Q193260/
---

## Q193260: XADM: OWA Stops when Replying to Message with Inline Image

	Article: Q193260
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5; winnt:5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Outlook Web Access (OWA) to reply to a message with an inline
	image, an access violation may occur. This may result in a Drwtsn32.log file
	with the following information:
	
	  Application exception occurred:
	     App: exe\inetinfo.dbg (pid=152)
	     When: 9/3/1998 @ 11:37:55.310
	     Exception number: c0000005 (access violation)
	
	The following is the thread that caused the fault. Note that the thread
	information below was seen on an Alpha platform; however, the problem exists in
	both x86 and Alpha builds of Exchange Outlook Web Access.
	
	  function: <nosymbols>
	     780137f0: 201ffffa lda     v0,-6(zero)
	     780137f4: 6bfa8001 ret     zero,(ra),1  FMatchLinkname+160
	     780137f8: 201ffff9 lda     v0,-7(zero)
	     780137fc: 6bfa8001 ret     zero,(ra),1  FMatchLinkname+160
	     78013800: 201ffff8 lda     v0,-8(zero)
	     78013804: 6bfa8001 ret     zero,(ra),1  FMatchLinkname+160
	     78013808: 00000000 halt
	     7801380c: 00000000 halt
	     78013810: 2f700000 ldq_u   t12,0(a0)
	     78013814: 4600f015 and     a0,#7,a5
	     FAULT ->78013818: 2e510000 ldq_u   a2,0(a1)
	     7801381c: 4620f014 and     a1,#7,a4
	     78013820: 42950520 subq    a4,a5,v0
	     78013824: 43fb01f3 cmpbge  zero,t12,a3
	     78013828: 4b60077c insql   t12,v0,at
	     7801382c: fc000026 bgt     v0,780138c8  780138c8
	     78013830: 4a750693 srl     a3,a5,a3
	     78013834: f4000057 bne     v0,78013994  78013994
	     78013838: 4772081c xor     t12,a2,at
	     7801383c: 4b950e5c mskqh   at,a5,at
	     78013840: 4a750720 sll     a3,a5,v0
	     78013844: f6600008 bne     a3,78013868  78013868
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  0407e050 0238ed90 080fd360 37140003 00000001 00000000 <nosymbols>
	  0407e050 0238ebc8 0813fdc8 37140003 00000001 00000000
	   cdohtml!FMatchLinkname
	  0407e4a0 02397234 0813fdc8 00000001 00000001 37140003
	   cdohtml!MSGHOOK::HrSeekAttach
	  0407e8c0 0237ed3c 080fc2d8 00000001 00000001 37140003
	   cdohtml!ScProcessHtmlbase
	  0407ea00 0237eaf8 080fc2d8 00000000 00000000 37140003
	   cdohtml!RTFHTML::ScUnwindTokens
	  0407ea50 023967d8 080fc2d8 00000000 00000000 00000000
	   cdohtml!RTFHTML::ScPopRTFState
	  0407ea80 0237dc6c 080fc2d8 00000000 00000000 00000000
	   cdohtml!ScProcessHtmltag
	  0407ead0 02382cbc 080fc2d8 080fd310 00000000 00000000
	   cdohtml!RTFHTML::ScNInterpret
	  0407eb20 0238bf90 080fc2d8 080fd310 00000000 00000000
	   cdohtml!RTFHTML::ScInterpret
	  0407eb30 0238c3f4 0813fc68 080c6010 00001000 00000000
	   cdohtml!OUTPOP::Read
	  0407eb80 0234ce74 0813fc68 02a9e840 ffffffff 00000000
	   cdohtml!OUTPOP::CopyTo
	  0407ec00 00090002 0813fc68 00000001 0813fc68 7101001f
	   cdohtml!HrEmitBody
	  02a9e960 00090006 0813fc68 00000001 0813fc68 7101001f <nosymbols>
	  02a9e960 00000000 0813fc68 00000001 0813fc68 7101001f <nosymbols>
	
	CAUSE
	=====
	
	The access violation is the result of a bad pointer in the conversion to plain
	text when using OWA to reply to a message. The pointer references a property
	that is not available in the cache.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Components: Information Store and Outlook Web Access (OWA)
	
	  File Name     Version
	  ------------------------
	  Cdohtml.dll   5.5.2402.0
	  Gapi32.dll    5.5.2402.0
	  Mdbmsg.dll    5.5.2402.0
	  Store.exe     5.5.2402.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was first corrected in Exchange
	Server 5.5 Service Pack 2.
	
	
	Additional query words: exfclnfaq XWEB OWA CDOHTML crash conversion image inline
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550 kbExchange550SP1
	Version           : WINDOWS:5.5; winnt:5.5,5.5 SP1
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
