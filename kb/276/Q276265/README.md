---
layout: page
title: "Q276265: AS/400 Print Jobs May Print Blank Pages after Job End"
permalink: kb/276/Q276265/
---

## Q276265: AS/400 Print Jobs May Print Blank Pages after Job End

	Article: Q276265
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fixkbb
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a print job from an AS/400 through SNA Server, you may have blank
	pages after the job ends. This problem only occurs when double-byte character
	set (DBCS) print jobs are printed from the AS/400.
	
	CAUSE
	=====
	
	This problem is not a form-feed problem, but rather the result of a "spurious
	job" from the AS/400. The AS/400 is sending a "clear buffer" message after SNA
	Server has already ended the job. This problem was corrected for S/36 print
	jobs; the same fix applies to AS/400 print jobs.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, versions
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: sp1 sp2 sp3 Ppd5250
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
