---
layout: page
title: "Q128470: PROFS: Err Msg: PWABFUP Unable to Spool PUNCH to MSCAL..."
permalink: kb/128/Q128470/
---

## Q128470: PROFS: Err Msg: PWABFUP Unable to Spool PUNCH to MSCAL...

	Article: Q128470
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.4a
	Operating System(s): 
	Keyword(s): kbfile
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
	  PWABFUP Unable to spool PUNCH to MSCAL M RC=3D1003
	
	CAUSE
	=====
	
	PWAFSCSI EXEC did not release STEM variable prior to calling PWACKCSI EXEC.
	There were three sets of local arrays (called STEM variables in REXX) which
	contained lines of attachments, message body and addressing information related
	to currently processed mail item from mailbag. Those variables took significant
	memory space.
	
	RESOLUTION
	==========
	
	ONE LINE added to the program to free up memory:
	
	  DROP ATT_TEXT. MSG_TEXT. MESSAGE_TO,
	
	Added prior to calling PWACKCSI EXEC which is responsible for processing of mail
	item.
	
	New PWAFSCSI.XEC built to fix logic errors in code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.4 of Microsoft Mail
	Gateway to PROFS and OfficeVision. This problem was corrected in version 3.4.041
	of PWAFSCSI.XEC.
	
	You can find PWAFSCSI.EXE
	(http://support.microsoft.com/download/support/mslfiles/PWAFSCSI.EXE,), a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile PWAFSCSI.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get PWAFSCSI.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download PWAFSCSI.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailGateIBMPROFS340a
	Version           : :3.4a
	
	=============================================================================
	
