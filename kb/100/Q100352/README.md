---
layout: page
title: "Q100352: SMTP: 550 Huh? Extended HELO (EHLO) Not Supported"
permalink: kb/100/Q100352/
---

## Q100352: SMTP: 550 Huh? Extended HELO (EHLO) Not Supported

	Article: Q100352
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.0 of Microsoft Mail Gateway to SMTP does not accept the extended hello
	greeting (EHLO). If a host contacts the SMTP gateway computer with "EHLO"
	instead of "HELO," the gateway replies with a "550 Huh?" and promptly closes the
	connection so the host can't send the standard "HELO."
	
	STATUS
	======
	
	Microsoft has confirmed this to be problem in version 3.0 of Microsoft Mail
	Gateway to SMTP. This problem was corrected in version 3.0.2 of SMTPGATE.EXE. If
	you do not have version 3.0.2 (or later), you can obtain the latest version from
	the Microsoft Software Library (MSL). Download SMTPGW.EXE (S14223), a
	self-extracting file, from any of the following services:
	
	- Microsoft's World Wide Web Site on the Internet On the www.microsoft.com home
	  page, click the Support icon. Click Knowledge Base, and select the product.
	  Enter kbfile SMTPGW.EXE, and click GO! Open the article, and click the button
	  to download the file.
	
	- Internet (anonymous FTP) ftp ftp.microsoft.com Change to the Softlib/Mslfiles
	  folder. Get SMTPGW.EXE
	
	- The Microsoft Network On the Edit menu, click Go To, and then click Other
	  Location. Type "mssupport" (without the quotation marks). Double-click the MS
	  Software Library icon. Find the appropriate product area. Locate and Download
	  SMTPGW.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Additional query words: 3.00 errmsg ehlo rfc 821 1425
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
