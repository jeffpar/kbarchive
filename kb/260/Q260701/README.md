---
layout: page
title: "Q260701: XADM: Reducing the Large Number of Public Folder Status Messages"
permalink: /kb/260/Q260701/
---

## Q260701: XADM: Reducing the Large Number of Public Folder Status Messages

	Article: Q260701
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
	
	In large systems, public folder replication status messages may grow to a large
	number and size.
	
	CAUSE
	=====
	
	This issue can occur because in Exchange Server 5.5, each server in the Exchange
	Server organization that has a public information store sends at least one
	status message each day to every other server in the organization that has a
	public information store. In an Exchange Server organization that has hundreds
	of servers that have public information stores, these public folder status
	messages can overload the low bandwidth links.
	
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
	
	MORE INFORMATION
	================
	
	A new algorithm is implemented in this fix that dramatically reduces the number
	of public folder status messages in most systems.
	
	The following are the changes that the new algorithm provides:
	
	- The unconditional status broadcast and site-folder broadcasts during the
	  information store startup are now removed.
	
	- When the status of a public folder is broadcast once, another status
	  broadcast is not sent unless some changes are made locally to that public
	  folder.
	
	- Each time a change is made, the status send time is set to 24 hours from the
	  time that the change was made. The network is not flooded with the same
	  status message over and over. Instead, the message is sent more than once
	  only if something has changed.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
