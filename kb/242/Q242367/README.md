---
layout: page
title: "Q242367: XADM: Limitation Warning Message Has Wrong Words"
permalink: kb/242/Q242367/
---

## Q242367: XADM: Limitation Warning Message Has Wrong Words

	Article: Q242367
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
	
	In the Chinese Traditional (CHT) version of Exchange Server 5.5, the mailbox
	limitation-warning message contains wrong words. The incorrect message states:
	
	  "<B1>z"H1/2c<AA><BA><A4>j<A4>p<AC><B0>"
	
	The correct text is:
	
	  "<B1>z"H1/2c<AA><BA><A4>j<A4>p<A8>?"
	
	WARNING: Because of display limitations in ASCII, the characters in the preceding warning messages may not be correct. 
	Please view this article in HTML, if possible, to see the correct version of the messages.
	
	CAUSE
	=====
	
	The corresponding string in the Mdbsz.dll file is wrong.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
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
	
