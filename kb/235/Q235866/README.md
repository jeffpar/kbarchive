---
layout: page
title: "Q235866: TPstart Fails to Run Applications if Path Name Contains Blanks"
permalink: kb/235/Q235866/
---

## Q235866: TPstart Fails to Run Applications if Path Name Contains Blanks

	Article: Q235866
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	TPstart fails to run TPs (Transaction Programs) that reside in a path containing
	blanks. For example, "c:\Program Files\...." would exhibit this problem.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this problem, move the transaction program to a path without
	spaces, or use the short file name (for example, progr~1).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft has confirmed this to
	be a problem in SNA Server 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, SNA Server 4.0, 4.0
	SP1, 4.0 SP2. This problem was first corrected in SNA Server version 4.0 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
