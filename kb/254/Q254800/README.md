---
layout: page
title: "Q254800: XADM: Rules Do Not Work When Using Custom Recipient from the GAL"
permalink: kb/254/Q254800/
---

## Q254800: XADM: Rules Do Not Work When Using Custom Recipient from the GAL

	Article: Q254800
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbnetwork kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a rule in Microsoft Outlook 2000 to process new e-mail messages
	from a custom global address list recipient (SMTP) that is not in the
	organization and you configure the rule to forward the e-mail messages to
	another custom global address list recipient (SMTP) that is not in the
	organization, the rule does not work and Event ID 1033 is written to the
	application log.
	
	CAUSE
	=====
	
	When you create the rule the information store uses the Distinguished Name (DN)
	internally to compare the addresses, instead of both the SMTP proxy address and
	the DN.
	
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
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5. This
	problem was first corrected in Exchange Server 5.5 Service Pack 4.
	
	Additional query words: gal fire fired
	
	======================================================================
	Keywords          : kbnetwork kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
