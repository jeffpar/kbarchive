---
layout: page
title: "Q271591: XFOR: Virus Scan Software Interferes with Message Delivery"
permalink: kb/271/Q271591/
---

## Q271591: XFOR: Virus Scan Software Interferes with Message Delivery

	Article: Q271591
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When third-party antivirus programs that use the Exchange Antivirus API are
	running on a server with the Internet Mail Service, messages with large
	attachments or compression percentage are directed to the Internet Mail Service
	virtual Bad folder. This behavior most frequently occurs when multiple Internet
	Mail Service servers exist within the same Exchange Server site.
	
	CAUSE
	=====
	
	The ecVirusScanInProgress return code is being checked only once. If Exchange
	Server gets the return code again when the information store retries to open the
	same attachment, the return code is mapped to Mapi_call_failed, which causes the
	Internet Mail Service to move the mail to the Bad folder.
	
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
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server, 5.5
	Service Pack 3 (SP3). This problem was first corrected in Exchange Server 5.5
	Service Pack 4.
	
	Additional query words: VAPI
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
