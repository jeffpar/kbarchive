---
layout: page
title: "Q119089: PC Win: How the Inbox Received Time Stamp Is Set"
permalink: kb/119/Q119089/
---

## Q119089: PC Win: How the Inbox Received Time Stamp Is Set

	Article: Q119089
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Mail for Windows, the Inbox contains the message header
	with the time the message was received. This Inbox time stamp is set by the
	delivery agent. If the message is from another user on the same postoffice, the
	time is stamped by the sending client. If the message is from an external
	postoffice or a downstream postoffice, the time is stamped by the External Mail
	program (EXTERNAL.EXE). If the message is from a gateway directly serving the
	postoffice, the time is stamped by the gateway.
	
	The External Mail program sometimes does not time stamp messages transferred
	asynchronously or through an X.25 connection. Therefore, the received time stamp
	reflects the time when the message was composed and not the time it was received
	by EXTERNAL.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for PC Networks. This problem was corrected in version 3.2a
	(which includes EXTERNAL.EXE version 3.2.9).
	
	For information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base:
	
	  mailupd
	
	There is also a newer version of EXTERNAL.EXE, which is available from the
	Microsoft Software Library (MSL).
	
	You can find EXTUPD.EXE,
	(http://support.microsoft.com/download/support/mslfiles/EXTUPD.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet On the www.microsoft.com home
	  page, click the Support icon.
	
	  Click Knowledge Base, and select the product.
	  Enter kbfile EXTUPD.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get EXTUPD.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location. Type "mssupport"
	  (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area. Locate and Download EXTUPD.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Additional query words: 3.00 3.00b 3.20 time stamp external
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : :3.0,3.0b,3.2
	
	=============================================================================
	
