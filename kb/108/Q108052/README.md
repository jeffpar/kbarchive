---
layout: page
title: "Q108052: SMTP: Err Msg: Recipient Unknown"
permalink: /kb/108/Q108052/
---

## Q108052: SMTP: Err Msg: Recipient Unknown

	Article: Q108052
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.0 of Microsoft Mail Gateway to SMTP generates non-delivery notices for
	non-existent recipients, and reports the following error message:
	
	  Recipient unknown
	
	CAUSE
	=====
	
	The gateway parses the comment part of an address as additional addresses. When
	the intended recipient tries to reply to all the addresses saved, some addresses
	are invalid and do not represent real recipients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be problem in version 3.0 of Microsoft Mail
	Gateway to SMTP. This problem was corrected in version 3.0.8 of SMTPGATE.EXE. If
	you do not have version 3.0.8 (or later), you can obtain the latest version from
	the Microsoft Software Library (MSL). Download SMTPGW.EXE (S14223), a
	self-extracting file, from any of the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile SMTPGW.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get SMTPGW.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download SMTPGW.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
