---
layout: page
title: "Q130382: X400: Err Msg: Outgoing Mail Remains in Queue"
permalink: kb/130/Q130382/
---

## Q130382: X400: Err Msg: Outgoing Mail Remains in Queue

	Article: Q130382
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail Gateway to X.400 does not successfully extract outbound mail from
	.MAI files.
	
	CAUSE
	=====
	
	When the gateway extracts a message bound for X.400, it does not check to see
	that the end of any FIPS field is in the internal FIPS buffer; it only checks
	the beginning. As a result, if a FIPS field starts within the buffer but ends
	outside of it (and therefore is still on disk), the code decodes to the end of
	the buffer and then attempts to decode whatever is in memory following the
	buffer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail Gateway to X.400. This problem is corrected in X400GATE.EXE
	version 3.2.15. If you do not have version 3.2.15 (or later), you can download
	X400GA.EXE, a self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile X400GA.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get X400GA.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download X400GA.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320
	Version           : MS-DOS:3.0,3.2
	
	=============================================================================
	
