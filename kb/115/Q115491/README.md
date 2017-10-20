---
layout: page
title: "Q115491: SMTP: Err Msg: Error Bind (110) Smtp_listen System Error"
permalink: /kb/115/Q115491/
---

## Q115491: SMTP: Err Msg: Error Bind (110) Smtp_listen System Error

{% raw %}

	Article: Q115491
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Mail Gateway to SMTP may produce the following error when starting:
	
	  Error bind (110) smtp_listen system error
	
	CAUSE
	=====
	
	When the SMTP gateway starts, it attempts to lock open the first socket from the
	TCP/IP software. If the socket is not available or is already locked open by an
	incoming connection, the error occurs.
	
	
	RESOLUTION
	==========
	
	Try to restart the SMTP gateway. If you still get the error, ensure that the
	mail routing host has nothing queued up for the SMTP gateway and then try to
	restart the gateway again.
	
	You can also disconnect the network cable from the SMTP gateway computer, start
	the gateway and plug the network cable back in to ensure there are no incoming
	connections.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Mail Gateway to SMTP version
	3.0. To resolve this problem, obtain the TCPTSR.EXE upgrade (dated 09/06/95,
	66,816 bytes).
	
	
	MORE INFORMATION
	================
	
	You can find TCPTSRU.EXE,
	(http://support.microsoft.com/download/support/mslfiles/TCPTSRU.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile TCPTSRU.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get TCPTSRU.EXE
	
	- The Microsoft Network
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download TCPTSRU.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft employees should connect to the CROSSPRD database.
	
	Additional query words: 3.00 Lan Manager
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
