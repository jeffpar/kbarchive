---
layout: page
title: "Q256315: XADM: Information Store Stops Writing to Message Tracking Log"
permalink: /kb/256/Q256315/
---

## Q256315: XADM: Information Store Stops Writing to Message Tracking Log

	Article: Q256315
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During normal operation of the Exchange Server information store (Store.exe), if
	a non-delivery report (NDR) is returned that has a blank e-mail address and
	message tracking enabled, the Exchange Server information store service may stop
	unexpectedly with an access violation when it tries to write the message details
	to the tracking logs. If the correct Microsoft Windows NT and Exchange Server
	debug symbols are installed, the resulting Dr. Watson log may contain a stack
	dump that is similar to the following:
	
	  
	
	  0232fc4c  00412074  STORE!CchStrlenW
	  0232fc60  00600c15  STORE!CchStrlen+0x88
	  0232fd90  004fcef1  STORE!EcGenerateGWNDR+0xbc3
	  0232ffa0  004dfd21  STORE!FStartTransferOut+0xd00
	
	CAUSE
	=====
	
	This issue can occur if the Exchange Server information store erroneously
	handled the NULL value for the NDR e-mail address when the Exchange Server
	information store attempted to write the message details to the tracking logs.
	This causes the Exchange Server information store to try to access invalid
	memory.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191914 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Q248838engi.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25443)
	  Alpha: DownloadDownload Q248838enga.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=25444)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
