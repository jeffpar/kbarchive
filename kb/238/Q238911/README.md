---
layout: page
title: "Q238911: XADM: Delegate Stops Receiving Meeting Requests"
permalink: /kb/238/Q238911/
---

## Q238911: XADM: Delegate Stops Receiving Meeting Requests

{% raw %}

	Article: Q238911
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
	
	The sender of a meeting request may receive a not read notification (NRN) for a
	meeting request sent to a manager who has a delegate defined. The NRN appears to
	originate from the manager.
	
	For builds of the Exchange Server information store between 5.5.2580.0 and
	5.5.2650.0, the delegate rule may stop working completely. A manager may start
	receiving meeting requests, even though the manager has configured the client
	with the "Send meeting requests and responses only to my delegates, not to me"
	option. The delegate may also stop receiving meeting requests on behalf of the
	manager.
	
	CAUSE
	=====
	
	This problem can occur if the information store incorrectly processes the
	delegate rule when a meeting request with an associated read-notification
	request is sent to the manager.
	
	RESOLUTION
	==========
	
	Sender Receives an NRN
	----------------------
	
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
	
	Rule Stops Working Completely
	-----------------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Sender Receives an NRN
	----------------------
	
	This problem was first corrected in Exchange Server 5.5 Service Pack 4.
	
	Rule Stops Working Completely
	-----------------------------
	
	This problem was first corrected in Exchange Server 5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Component         : MDB
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
