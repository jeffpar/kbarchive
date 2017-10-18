---
layout: page
title: "Q238498: XFOR: NDR to SMTP Report If Prohibit Receive Enabled"
permalink: kb/238/Q238498/
---

## Q238498: XFOR: NDR to SMTP Report If Prohibit Receive Enabled

	Article: Q238498
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The information store generates a non-delivery report (NDR) to an SMTP report
	when an SMTP report is returned to a mailbox that meets all of the following
	conditions:
	
	- The mailbox size currently exceeds the set limit.
	
	- The "Prohibit send and receive (K)" option is selected.
	
	- The Internet Mail Service is on a server different from the mailbox.
	
	This could cause a message loop as the report is addressed to a null (<>)
	address, which means the Internet Mail Service cannot deliver the message. At
	this point, the NDR is returned to the originator, which was the mailbox
	currently unable to accept mail. This may generate yet another NDR, and the
	whole process repeat itself.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 How to Obtain the Latest Exchange
	
	
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
	Version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
