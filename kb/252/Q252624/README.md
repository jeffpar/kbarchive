---
layout: page
title: "Q252624: XIMS: Internet Mail w. Illegal X-Mac-Creator Attribute Archived"
permalink: /kb/252/Q252624/
---

## Q252624: XIMS: Internet Mail w. Illegal X-Mac-Creator Attribute Archived

	Article: Q252624
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
	
	After you apply Exchange Server version 5.5 Service Pack 3, you cannot send an
	Internet mail message that contains an illegal X-Mac-Creator attribute in the
	mail header. The Internet mail message is archived and Event ID 12006 and Event
	ID 4117 are displayed in the Windows NT Event Viewer. An illegal X-Mac-Creator
	attribute is created if you attach Macintosh binary files to some Internet mail
	applications for Macintosh.
	
	CAUSE
	=====
	
	Exchange Server version 5.5 Service Pack 2 and earlier ignored the X-Mac-Type
	and X-Mac-Creator attributes. Exchange Server version 5.5 Service Pack 3
	supports headers that contain these attributes in messages. But if the
	attributes in these headers contain illegal data format, Exchange Server version
	5.5 Service Pack 3 moves the message to the archive folder instead of delivering
	it.
	
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
	
