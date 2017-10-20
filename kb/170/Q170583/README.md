---
layout: page
title: "Q170583: Zero Length RU Causes a Blank Page to be Printed"
permalink: /kb/170/Q170583/
---

## Q170583: Zero Length RU Causes a Blank Page to be Printed

{% raw %}

	Article: Q170583
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a zero-length RU is sent to the SNA print server as part of a host print
	job, a blank page will be printed. The following is an example of a zero-length
	RU as captured in a SNA Server Data Link Control Message trace:
	
	     04160080->01020101 DLC DATA     
	        DAF:EC OAF:01 ODAI:off Normal 
	        RQE FMD BC EC DR1 PI BB EB 
	
	     ---- Header  at address 01034418, 1 elements ----
	     04B00004 00002C00 EC010004 01002102     <......,.......!.>
	
	     ---- Element at address 0152D5A4, start 10, end 12 ----
	     0391C0                                  <.j.             >
	
	The Element portion of the preceding frame contains a Request Header (RH) of
	x'0391C0', but no actual data.
	
	CAUSE
	=====
	
	Print Server treats the zero-length RU as a unique print job where 0D 0C (CR FF)
	is sent to the printer. The print server calls "StartDoc" to start a new
	document as soon as it receives a request, and "EndDoc" when the document is
	complete. Even though there is no data submitted to the printer between the
	"StartDoc" and "EndDoc" calls, the printer will still print a form feed (FF).
	
	RESOLUTION
	==========
	
	There are two possible workarounds for this issue:
	
	1. Configure the print session to use a PDF file. The PDF file uses
	  "StartDocPrinter" and "EndDocPrinter" which do not automatically produce a
	  FF. For instructions on configuring PDF files, refer to the SNA Server online
	  help Chapter 6 Printer Definition Files.
	
	  -OR-
	
	2. Use the DelayPrintStart Registry parameter as discussed in the following
	  Microsoft Knowledge Base article:
	
	  Q172283 Title: Blank Page Is Printed Between Each Print Job
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
