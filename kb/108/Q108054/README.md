---
layout: page
title: "Q108054: SMTP: Err Msg: Error &lt;Address&gt; Is an Invalid Courier Mailbox"
permalink: /kb/108/Q108054/
---

## Q108054: SMTP: Err Msg: Error &lt;Address&gt; Is an Invalid Courier Mailbox

	Article: Q108054
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.0 of Microsoft Mail Gateway to SMTP generates non-delivery notices,
	and reports the following error message:
	
	  ERROR <address> is an invalid Courier Mailbox
	  ERROR Translating message to Microsoft Mail: out of memory
	  552 Error in local delivery
	
	CAUSE
	=====
	
	The gateway received an invalid Microsoft Mail mailbox in the RFC 822 header
	information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be problem in version 3.0 of Microsoft Mail
	Gateway to SMTP. This problem was corrected in version 3.0.8 of SMTPGATE.EXE. If
	you do not have version 3.0.8 (or later), you can obtain the latest version from
	the Microsoft Download Center. Download SMTPGW.EXE (S14223), a self-extracting
	file, from any of the following services:
	
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
	
	
	MORE INFORMATION
	================
	
	Even if the recipient (RCPT) specified in the RFC 821 part of the message is
	accurate, the gateway still fails the message if it cannot match the RFC 822 To:
	fields to a Microsoft Mail user.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
