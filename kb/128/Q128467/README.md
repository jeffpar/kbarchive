---
layout: page
title: "Q128467: PROFS: Err Msg: Intermittent 'ABEND 0C4' Would Be Reported..."
permalink: /kb/128/Q128467/
---

## Q128467: PROFS: Err Msg: Intermittent 'ABEND 0C4' Would Be Reported...

	Article: Q128467
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.4a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Host Access for IBM PROFS and OfficeVision, version 3.4a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	You are running the Microsoft Mail Gateway to PROFS Host Access and an incident
	report is sent to the "inform id" defined in "pwainit data." The first two lines
	of the incident report are:
	
	  Description: intermittent 'ABEND 0C4' would be reported by MS-RSCS.
	  No data lost, becomes a PSS issue regarding cause.
	
	CAUSE
	=====
	
	There is a flaw in the CSIEXIT Routine (MS3EXITF).
	
	RESOLUTION
	==========
	
	When parsing through NJE header an had incorrect end condition was being tested.
	There were 2 conditions: 1) I was testing if the next section is outside the
	header, by comparing displacement with header length; 2) I was testing if
	section type is zero. This was really "just in case" test, which usual worked.
	
	Apparently the header length includes 4 bytes taken by length description word.
	As a result one more section (which does not exist, but usually had zero in
	"type" field) was being tested. In the case of one customer there was a file
	from MVS which did not have zeroes at the end of last section, so the algorithm
	went on until it hit memory boundary, resulting in an 0C4 abend.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.4 of Microsoft Mail
	Gateway to PROFS and OfficeVision. This problem was corrected in version 3.4.041
	of CSIEXIT (CSIEXIT.LOA). You can download CSIEXIT.EXE, a self-extracting file,
	on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile "CSIEXIT.EXE" (without the quotation marks), and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get CSIEXIT.EXE
	
	- The Microsoft Network
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download CSIEXIT.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words: 3.40
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailGateIBMPROFS340a
	Version           : :3.4a
	
	=============================================================================
	
