---
layout: page
title: "Q268141: XADM: Information Store Stops Resp. Retrieving S/MIME Message"
permalink: /kb/268/Q268141/
---

## Q268141: XADM: Information Store Stops Resp. Retrieving S/MIME Message

	Article: Q268141
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an Internet Message Access Protocol (IMAP) client tries to gain access to
	the information store, the information store may stop responding.
	
	CAUSE
	=====
	
	This issue can occur when you convert a digitally signed Secure/Multipurpose
	Internet Mail Extension (S/MIME) message that contains a corrupted body part to
	be delivered to a mail client that is Request for Comments (RFC) 822 compliant.
	Exchange Server may generate an access violation because of a NULL content
	pointer.
	
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
	
	MORE INFORMATION
	================
	
	After this fix is applied, when this error occurs:
	
	- The following error code is returned:
	
	  0x8004011B (MAPI_E_CORRUPT_DATA)
	
	- The server logs the following message in the application event log:
	
	  Event: 1300
	  Source: MS Exchange IMAP4
	  An error 0x8004011B occured while rendering a message for download on mailbox:
	  <DN_of_the_mailbox>
	
	- The client notifies the user that the message could not be downloaded.
	
	Additional query words: IMAP MIME SMIME IMAIL
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
