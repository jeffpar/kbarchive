---
layout: page
title: "Q271199: XADM: Netscape IMAP Clients Can't Deter. Attachment Content Type"
permalink: /kb/271/Q271199/
---

## Q271199: XADM: Netscape IMAP Clients Can't Deter. Attachment Content Type

	Article: Q271199
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 03-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, on platform(s):
	   - the hardware: DEC Alpha 
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Netscape Internet Message Access Protocol (IMAP) clients may be unable to
	determine the content type of attachments.
	
	The Netscape client cannot determine which application to start to open a
	particular attachment. In some situations, the file names of the attachments are
	not rendered in the e-mail client correctly. This occurs in Netscape Internet
	Message Access Protocol, Version 4rev1 (IMAP4) clients on computers that are
	running either UNIX or Microsoft Windows, and that are downloading e-mail from
	an Exchange Server 5.5 Service Pack 3 computer. This does not occur in the
	Microsoft Outlook Express IMAP client.
	
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
	
	NOTE: When you start this version of the information store, the information store
	databases are automatically upgraded to a new format. After the databases have
	been upgraded, you can restore an earlier version of the Store.exe file on the
	server, but only if it is version 5.5.2652.68 or later. If you restore a
	Store.exe file earlier than version 5.5.2652.68 after the database has been
	upgraded, you are no longer able to start the information store. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q244976 XADM: Event ID 1197 and 1005 When Starting the Information Store
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
