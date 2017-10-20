---
layout: page
title: "Q102107: SMTP: Err Msg: ERROR Network_Read: Lost Network Connection"
permalink: /kb/102/Q102107/
---

## Q102107: SMTP: Err Msg: ERROR Network_Read: Lost Network Connection

{% raw %}

	Article: Q102107
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a connection begins for the Microsoft Mail Gateway to SMTP, the first thing
	that occurs is a greeting exchange between the TCP/IP host and the SMTP gateway
	computer. RFC 822 specifies that these greeting replies include host names.
	However, the SMTP gateway does not include the host names in its greeting
	replies. Most hosts ignore this particular piece of the 822 RFC.
	
	When communicating with an IBM VM host running IBM VM SMTP V2R2, an error may
	occur because IBM VM requires that the host name be included. As a result, the
	gateway log file, SMTPGATE.LOG, will record the following error message:
	
	  ERROR Network_read: Lost network connection
	
	STATUS
	======
	
	Microsoft has confirmed this to be problem in version 3.0 of Microsoft Mail
	Gateway to SMTP. This problem was corrected in version 3.0.1 of SMTPGATE.EXE. If
	you do not have version 3.0.1 (or later), you can obtain the latest version from
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
	
	
	MORE INFORMATION
	================
	
	The following is an example of what happens when you connect to the IBM VM host
	with a telnet session on port 25:
	
	  $ telnet 128.227.212.10 25
	  Trying...
	  Connected to 128.227.212.10.
	  Escape character is '^]'.
	  220 yourhost.yourdomain.com running IBM VM SMTP V2R2 on Fri, 19 Mar 93
	  12:19:29 EST
	  HELO
	  501 Syntax Error. Domain name missing
	  helo myhost.mydomain.com
	  250 yourhost.yourdomain.com is my domain name.
	  quit
	  221 yourhost.yourdomain.com IBM VM SMTP V2R2 closing connection
	  Connection closed by foreign host.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
