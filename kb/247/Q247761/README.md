---
layout: page
title: "Q247761: XCLN: Read Notifications Don't Appear on Outlook Tracking Tab"
permalink: kb/247/Q247761/
---

## Q247761: XCLN: Read Notifications Don't Appear on Outlook Tracking Tab

	Article: Q247761
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,97,98; winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you receive a Read/Not Read Notification (RN/NRN) over an X.400 connection
	(no Exchange Server-specific settings), it does not show up on the Tracking tab
	of the sent message in Outlook.
	
	CAUSE
	=====
	
	Outlook uses the PR_REPORT_TAG property to correlate the RN/NRN with the
	original sent message in the Sent Items folder. This property is not set when
	the RN/NRN is processed by the information store. As result, Outlook cannot find
	the original message to add the information to the Tracking tab.
	
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
	version 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3. This problem was first corrected in
	Exchange Server 5.5 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : WINDOWS:2000,97,98; winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
