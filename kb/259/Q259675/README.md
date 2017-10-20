---
layout: page
title: "Q259675: XADM: Isinteg Utility Does Not Correct Mailbox Item Count"
permalink: /kb/259/Q259675/
---

## Q259675: XADM: Isinteg Utility Does Not Correct Mailbox Item Count

{% raw %}

	Article: Q259675
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
	
	The Exchange Server Administrator program allows administrators to view
	statistics of the mailboxes that belong to the users of that server by clicking
	the Mailbox Resources tab (located in the Private Information Store properties).
	One of the columns that is displayed on the Mailbox Resources tab is Total No.
	Items, which is the total number of items that belong to a mailbox. At times,
	there may be an inconsistency between the value that is listed in Total No.
	Items on the Mailbox Resources tab and the total number of items that are
	actually visible when you log on to this same mailbox with a client such as
	Microsoft Outlook.
	
	To repair this inconsistency, an administrator may run the Exchange Server
	Information Store Integrity Checker (Isinteg.exe) in repair mode against the
	server's private store. However, after the Isinteg utility finishes, the
	inconsistency between the Mailbox Resources tab and the mailbox as displayed
	from the client persists.
	
	CAUSE
	=====
	
	This issue can occur because the Exchange Server Information Store Integrity
	Checker (Isinteg.exe) does not support the identification or correction of
	inconsistencies in the Total No. Items column for mailboxes.
	
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
	
	MORE INFORMATION
	================
	
	This fix is dependent upon build 5.5.2651.23 of the Store.exe program. If you
	are running a build earlier than build 5.5.2651.23, first upgrade the version of
	the Store.exe program to the latest build that is available. After you complete
	the upgrade, start and stop the Exchange Server Information Store service to
	allow for the schema upgrade that is made after build 5.5.2651.23. After the
	schema upgrade is finished, run the Isinteg.exe utility by using the following
	command line to correct the mailbox item counts:
	
	  isinteg -pri -fix -detailed -l isinteg.log -test mailbox
	
	The cause of the incorrectly incremented item count value has been identified and
	corrected. Please note that this fix is included in the latest build of the
	Store.exe program. Upgrade to the latest build of the Store.exe program that is
	available, instead of the build that is listed in the following knowledge base
	article:
	
	  Q235528 XADM: Mailbox Item and Size Counts Are Incorrect
	
	It is also important to note that many types of items are stored in a mailbox,
	some of which are not visible in Outlook. The most common visible items are
	messages, calendar entries, journal entries, task items, and contacts. However,
	other types of objects are stored in the mailbox, such as views, that are not
	visible. After you use the Isinteg utility to correct the item count values, a
	discrepancy may still exist between the number of visible items and the mailbox
	item count. This is to be expected.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
