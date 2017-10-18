---
layout: page
title: "Q247255: XADM: Information Store Silently Drops Messages"
permalink: kb/247/Q247255/
---

## Q247255: XADM: Information Store Silently Drops Messages

	Article: Q247255
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
	
	Messages appear to be properly delivered, but are silently deleted by the
	information store when the message transfer agent (MTA) is not started or the
	information store loses session to the MTA. In the client, the message appears
	to be properly delivered because the message leaves the Outbox and becomes
	visible in the Sent Items folder.
	
	CAUSE
	=====
	
	This issue was introduced when fixing the issue outlined in the following
	Microsoft Knowledge Base article:
	
	  Q235455 XCON: Modification in X.400 Blind Copy Implementation
	
	If an MTA session is not available because of insufficient resources in the MTA
	or because the MTA service is currently stopped, the number of MTA recipients is
	incorrectly set to zero. This causes the message to be deleted from the queue in
	the information store.
	
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
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 SP3. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	This issue occurs under the following conditions:
	
	- If a message is handed off from the information store to the MTA (information
	  store-side fix).
	
	- If the MTA is running as well.
	
	- If the system is under stress.
	
	This issue is not in any way related to blind carbon copy (Bcc) messages,
	although the issue was introduced while modifying Bcc message behavior.
	
	NOTE: This issue does not occur on dedicated message switches (if a message never
	reaches the information store). Outbound Internet mail is not affected (it never
	reaches the MTA) but inbound Internet mail is (because it runs through the
	information store for content conversion).
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
