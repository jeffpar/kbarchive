---
layout: page
title: "Q260063: XADM: News Article with Followup-To Property Defined Not Posted"
permalink: /kb/260/Q260063/
---

## Q260063: XADM: News Article with Followup-To Property Defined Not Posted

	Article: Q260063
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
	
	After you install a post-Exchange Server 5.5 Service Pack 3 information store
	fix that has a version later than version 5.5.2651.41 on a computer running
	Exchange Server 5.5 Service Pack 3, you cannot post a news article that has the
	Followup-To property defined to a newsgroup on the server. The following error
	message is displayed in Microsoft Outlook Express:
	
	  441 posting failed
	
	Also, if you have a newsfeed configured on the server to accept replication from
	an external news server, all news articles that have the Followup-To property
	defined are rejected. If you enable the Network News Transfer Protocol (NNTP)
	log, the following error message is logged in the log file:
	
	  437 article rejected = do not try again
	
	CAUSE
	=====
	
	This issue can occur because the fix for another issue causes the type of the
	PR_INTERNET_FOLLOWUP_TO property to be processed incorrectly.
	
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
	
