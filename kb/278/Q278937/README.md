---
layout: page
title: "Q278937: APPC Print Job with AVM Commands May Print Extra Lines"
permalink: kb/278/Q278937/
---

## Q278937: APPC Print Job with AVM Commands May Print Extra Lines

	Article: Q278937
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP4,4.0 SP2
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp4 kbsna400sp2
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP4, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Advanced Program-to-Program Communication (APPC) print job that contains
	Absolute Vertical Move (AVM) commands may print with extra blank lines when you
	print through the host print service that is included with SNA Server 3.0
	Service Pack 4 (SP4) and 4.0 SP2. This problems occurs only if the print session
	in SNA Server is configured to use a Printer Definition Table (PDT) file that
	includes a New Line (NL) definition.
	
	CAUSE
	=====
	
	The virtual print driver (Winvprt.dll) that is used by the host print service is
	not correctly updating the current print line when it processes a NL for a print
	session by using a PDT that contains a NL definition. An AVM command that is
	issued after a NL causes an incorrect number of Line Feeds (LF) to be issued
	because of the incorrect value for the current print line.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 SP4 and SNA
	Server 4.0 SP2. This problem was first corrected in SNA Server 4.0 Service Pack
	3.
	
	MORE INFORMATION
	================
	
	For additional information about APPC printing, AVM commands, and PDTs, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q195402 Absolute Vertical Move Command Handled Incorrectly If PDT Used
	
	Additional query words: 2 3
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp4 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2 kbSNAServ300SP4
	Version           : :3.0 SP4,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
