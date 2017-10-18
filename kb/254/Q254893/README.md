---
layout: page
title: "Q254893: XFOR: Internet Mail Service Does Not Generate the NDR"
permalink: kb/254/Q254893/
---

## Q254893: XFOR: Internet Mail Service Does Not Generate the NDR

	Article: Q254893
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send an e-mail message to an invalid domain name that contains a trailing
	space (for example, SMTP:joeuser@invaliddomain.com ), a non-delivery report
	(NDR) that indicates an invalid host is generated as expected. But if you click
	Send Again, you do not receive an additional NDR message. Instead, the Internet
	Mail Service logs the following event 4120 error message, and moves the message
	into the Archive folder:
	
	  Event Type: Error
	  Event Source: MSExchangeIMC
	  Event Category: Internal Processing
	  Event ID: 4120
	  Date: 1/11/2000
	  Time: 3:17:57 PM
	  User: N/A
	  Computer: BACON610
	  Description:
	  In the process of creating a notification of delivery failure to the sender of
	  a message, an error occurred causing the notification to be aborted. The
	  sender is not informed that his original message failed to be delivered.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191914 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Q248838engi.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25443)
	  Alpha: DownloadDownload Q248838enga.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25444)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
