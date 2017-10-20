---
layout: page
title: "Q254552: XADM: Slow Information Store Startup From Public Folder Cleanup"
permalink: /kb/254/Q254552/
---

## Q254552: XADM: Slow Information Store Startup From Public Folder Cleanup

{% raw %}

	Article: Q254552
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
	
	The Microsoft Exchange Server Information Store service may take a considerable
	amount of time to start (under certain conditions, up to several hours).
	
	CAUSE
	=====
	
	This issue can occur if the information store shutdown process places an
	inconsistent flag on the database, regardless of whether the database is shut
	down cleanly or not. This causes any restrictions or views in the database that
	are based on read/unread counts to be deleted. If enough restrictions or views
	have built up in the database, this deletion process can take a considerable
	amount of time
	
	The deletion process is required because read/unread counts for the public
	information store are cached. If the information store does not shut down
	cleanly, the read/unread counts in the database may be out of synchronization
	with the cached restrictions, which can cause errors and instability.
	
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
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5. This
	problem was first corrected in Exchange Server 5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
