---
layout: page
title: "Q259541: XADM: Store Hangs During Move Mailbox Process"
permalink: /kb/259/Q259541/
---

## Q259541: XADM: Store Hangs During Move Mailbox Process

{% raw %}

	Article: Q259541
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
	
	When you perform a Move Mailbox procedure (or shortly after), the source or
	destination servers that are involved in the process may stop responding (hang).
	Clients that attempt to log on cannot finish logging on, and e-mail messages do
	not leave the Outbox for clients that are already logged on.
	
	CAUSE
	=====
	
	This issue can occur because the information store regularly checks to determine
	whether a specified user is involved in a move-user operation before the
	information store allows certain activities (such as message delivery, or
	logging on).
	
	If no users are being moved, the check returns immediately with FALSE (this user
	is not being moved).
	
	If users are being moved, the information store enters a critical section object
	and scans a list of users who are being moved to determine whether the specified
	user is on the list. After information store scans the list, the thread exits
	the critical section.
	
	A specific condition exists, in which an information store thread enters a
	critical section, but does not exit the critical section before the information
	store thread returns from the function call. As a result, future threads that
	attempt to check the list of users that are being moved stop responding while
	the threads wait to enter the critical section object.
	
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
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
