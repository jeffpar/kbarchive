---
layout: page
title: "Q248456: XADM: OOF Does Not Start If a Rule Stops Processing Other Rules"
permalink: /kb/248/Q248456/
---

## Q248456: XADM: OOF Does Not Start If a Rule Stops Processing Other Rules

{% raw %}

	Article: Q248456
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a mailbox with the Out Of Office Assistant (OOF) enabled has other rules
	configured, and one of the rules is configured to Stop Processing More Rules,
	when mail that starts the Stop Processing More Rules rule is sent to that
	mailbox, the mailbox does not generate an OOF message.
	
	CAUSE
	=====
	
	The Out Of Office Assistant is a rule. A list is generated of rules that are
	enabled for a particular mailbox, and the OOF is one of them. The OOF is always
	the last rule that is executed in this list. If any of the rules in the list has
	the Stop Processing More Rules check box selected, then the OOF rule is not
	processed and an OOF message is not generated.
	
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
	databases are automatically upgraded to a new format. After the databases are
	upgraded, you can restore an earlier version of the Store.exe file on the
	server, but only if it is version 5.5.2651.32 or later. If you restore a
	Store.exe file that is earlier than version 5.5.2651.32 after the databases are
	upgraded, you cannot start the information store. For additional information,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q244976 XADM: Event ID 1197 and 1005 After You Attempt to Start the
	  Information Store
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words: OOF rule stop processing
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
