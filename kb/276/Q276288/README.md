---
layout: page
title: "Q276288: WritePrinter() Error Recovery with SNA Server Print Service"
permalink: kb/276/Q276288/
---

## Q276288: WritePrinter() Error Recovery with SNA Server Print Service

	Article: Q276288
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fixkbb
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Print Service of SNA Server uses the WritePrinter function call to send data
	to the printer. Errors may sometimes occur when this function is called, which
	may cause such problems as incorrect output (dropped characters) to be printed.
	
	CAUSE
	=====
	
	Because all errors to WritePrinter are intermittent and appear to be related to
	stress conditions, Print Service was modified as follows:
	
	1. If an error occurs, a retry loop is entered, where the call is made five
	  times with a 20 millisecond delay, which usually resolves stress-related
	  errors.
	
	2. If the WritePrinter call still fails, the failure is marked as a job error,
	  and printing of the job is stopped.
	
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
	
	Additional query words: Winvprt Ppd3270 Ppd5250 sp1 sp2 sp3
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
