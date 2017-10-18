---
layout: page
title: "Q172799: Extra Form Feed Printed With LU3 Print Job"
permalink: kb/172/Q172799/
---

## Q172799: Extra Form Feed Printed With LU3 Print Job

	Article: Q172799
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print an LU3 host print job through Microsoft SNA Server, an extra form
	feed occurs after the job is printed.
	
	CAUSE
	=====
	
	The host was sending the following characters at the end of the print job:
	
	0C 0D 19    *or*   0C 19
	
	where:
	
	0C = form feed (FF)
	0D = carriage return (CR)
	19 = end of medium/end of message (EM)
	
	Both FF and EM were resulting in form feeds, causing an extra form feed to occur.
	
	RESOLUTION
	==========
	
	To correct this problem, a PDF file can be used which eliminates the form feed
	sent at the end of the print job. To configure this, follow these steps:
	
	1. Copy the default <SNARoot>\System\Hplj2.pdf file to Noff.pdf (or
	  whatever name you wish).
	
	2. Edit the Noff.pdf file and change the END_JOB entry to read as follows:
	  END_JOB = CUL CBP CS1
	
	  The default is "END_JOB = CUL CBP CS1 FFF", where FFF = form feed.
	
	3. Compile the Noff.pdf file as follows: PDFCOMP NOFF.PDF NOFF.PDT
	
	4. Configure the SNA Print Server session to use the PDT file using SNA Manager.
	  To do this, choose the Print Server session property page, and focus on the
	  Overrides folder. At the bottom of this folder, choose the following:
	
	  [X] PDF C:\sna\system\noff.pdt
	
	  and click OK.
	
	5. Save the configuration file, Noff.pdf, then stop and start the SNA Print
	  Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	Microsoft is researching this problem and will post more information here in the
	Microsoft Knowledge Base when it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	
	=============================================================================
	
