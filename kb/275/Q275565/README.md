---
layout: page
title: "Q275565: Multiple-Threaded 3270/LUA App May Hang When Opening LU"
permalink: /kb/275/Q275565/
---

## Q275565: Multiple-Threaded 3270/LUA App May Hang When Opening LU

	Article: Q275565
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 3270 and/or Logical Unit Application (LUA) applications that use multiple
	threads to open multiple 3270/LUA logical units (LUs) may enter a state where a
	thread stops responding (hangs) when it attempts to open one of the 3270/LUA
	LUs. When this problem occurs, the application may not be to open one (or more)
	of the requested LUs, which causes the thread requesting the session to hang.
	
	For example, if an application runs on a client that is randomly connecting to
	several LUs (for example, 20), a thread may hang, while the other threads of the
	same client may continue to run properly.
	
	Actual results may vary depending upon what the application is doing during this
	time.
	
	CAUSE
	=====
	
	Because of a small timing window in the logon code for SNADMOD, you can lose an
	"OPEN Message" if an application activates several sessions asynchronously.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 (all
	Service Packs), 4.0, 4.0 SP1, 4.0 SP2 and 4.0 SP3..
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: SP
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
