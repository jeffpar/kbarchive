---
layout: page
title: "Q128463: PROFS: Err Msg: PWABFRD XEDIT EPSSACSS LISTFILE Failed RC=88"
permalink: /kb/128/Q128463/
---

## Q128463: PROFS: Err Msg: PWABFRD XEDIT EPSSACSS LISTFILE Failed RC=88

	Article: Q128463
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
	
	  Incident report xx/xx/xx xx:xx:xx
	  PWABFRD XEDIT EPSSACSS LISTFILE failed RC=88
	
	CAUSE
	=====
	
	When PWABFRD has built the EPSSACSS LISTFILE, it attempts to XEDIT the file.
	With large user lists, XEDIT stops with the following error:
	
	  RC=88 - File too large for virtual storage.
	
	RESOLUTION
	==========
	
	PWABFRD was rewritten to build the EPSSACSS LISTFILE in sections. This helped
	cut down on the massive virtual storage requirement. Thus, we are not as likely
	to run out of virtual storage.
	
	New PWABFRD.CEX built to fix logic errors in code. PWABFH2L and PWABFL2H rebuilt
	to expand counters from 2 bytes to 4 bytes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.4 of Microsoft Mail
	Gateway to PROFS and OfficeVision. This problem was corrected in version 3.4.041
	of PWABFRD.EXE. You can download PWABFRD.EXE, a self- extracting file, on the
	following services:
	
	- Microsoft's World Wide Web Site on the Internet
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile "PWABFRD.EXE" (without the quotation marks), and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get PWABFRD.EXE
	
	- The Microsoft Network
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download PWABFRD.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	MORE INFORMATION
	================
	
	
	Additional query words: 3.40
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailGateIBMPROFS340a
	Version           : :3.4a
	
	=============================================================================
	
