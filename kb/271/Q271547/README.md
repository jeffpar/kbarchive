---
layout: page
title: "Q271547: XADM: Move Mailbox Utility Does Not Work with Antivirus API"
permalink: /kb/271/Q271547/
---

## Q271547: XADM: Move Mailbox Utility Does Not Work with Antivirus API

	Article: Q271547
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 22-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to move a mailbox by using the Move Mailbox utility in the
	Exchange Server Administrator program, if the source server for the mailbox is
	running an antivirus program that uses the antivirus application programming
	interface (API), the move mailbox operation may not work and you may receive the
	following error message:
	
	  The Client Operation Failed
	  Microsoft Exchange Information Store
	  ID No. 80004005-0501-0000050a
	
	CAUSE
	=====
	
	This issue can occur because, based on the architecture of the antivirus API,
	any attachments that a mailbox contains that have not been scanned are submitted
	to the antivirus vendor before those attachments are released to the Move
	Mailbox utility or to a MAPI client.
	
	The Move Mailbox utility does not recognize this condition when an attachment is
	being scanned; therefore the Move Mailbox utility generates the error message in
	the "Symptoms" section of this article.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191914 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	NOTE: When you start this version of the information store, the information store
	databases are automatically upgraded to a new format. After the databases have
	been upgraded, you can restore an earlier version of the Store.exe file on the
	server, but only if it is version 5.5.2652.68 or later. If you restore a
	Store.exe file earlier than version 5.5.2652.68 after the database has been
	upgraded, you are no longer able to start the information store. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q244976 XADM: Event ID 1197 and 1005 When Starting the Information Store
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Q248838engi.exe new
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
	
	
	WORKAROUND
	==========
	
	To work around this issue, remove or disable the antivirus programs that are
	based on the antivirus API before you attempt to use the Move Mailbox utility in
	the Exchange Server Administrator program. For information about disabling your
	antivirus program, please contact your antivirus program vendor.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	After this fix to the Store.exe file is applied, the information store
	determines that the mailbox is being moved and releases the attachment without
	scanning the attachment. It is recommended that the destination server of the
	mailbox also contain an antivirus-based solution, because the attachment is not
	scanned before the attachment is moved.
	
	Additional query words: AVAPI Anti-Virus vapi
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
