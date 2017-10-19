---
layout: page
title: "Q246597: XADM: OOF Received for Msg Sent to a DL Configured Not to Send"
permalink: /kb/246/Q246597/
---

## Q246597: XADM: OOF Received for Msg Sent to a DL Configured Not to Send

	Article: Q246597
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
	
	A message is sent to a Distribution List (DL) configured to not generate Out of
	Office (OOF) messages. If the message is sent to another Exchange Server site
	connected with the Microsoft Exchange Internet Mail Service, an OOF message may
	be generated for recipients that are out of the office.
	
	CAUSE
	=====
	
	The default behavior in the information store is to send an OOF message for a
	recipient that receives a message and that is configured to generate an OOF
	message. In the case of message delivery to a DL, when the message is being
	delivered to a user that is configured to generate an OOF, the DL configuration
	must be queried to see if it allows OOF responses. In the case of a message
	delivery path across the Internet Mail Service, the DL configuration is not
	being queried and the information store performs its default behavior, which
	results in an OOF message being returned.
	
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
	
	NOTE: When you start this version of the information store, the information store
	databases are automatically upgraded to a new format. After the databases have
	been upgraded, you can restore an earlier version of the Store.exe file on the
	server, but only if it is version 5.5.2651.32 or later. If you restore a
	Store.exe file earlier than version 5.5.2651.32 after the database has been
	upgraded, you are no longer able to start the information store. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q244976 XADM: Event ID 1197 and 1005 When Starting the Information Store
	
	WORKAROUND
	==========
	
	To work around this issue, use the X.400 Connector or remote procedure call
	(RPC) Site Connector to connect your.
	
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
	
