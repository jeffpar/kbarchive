---
layout: page
title: "Q256467: XADM: Information Store Doesn't Log Message in Event Log"
permalink: /kb/256/Q256467/
---

## Q256467: XADM: Information Store Doesn't Log Message in Event Log

{% raw %}

	Article: Q256467
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
	
	The Exchange Server information store may not log application events, or the
	information store may stop responding with an access violation. This issue
	occurs only if the information store diagnostics Transport Delivering option is
	set to medium or higher and you receive a message that contains many recipients.
	
	CAUSE
	=====
	
	This issue can occur if the information store attempts to log an application
	event and submits more than 32 kilobytes (KB) of data to the Microsoft Windows
	NT ReportEvent() application programming interface (API). In Windows NT 4.0, if
	more than 32 KB of data is passed to this API, the API may stop responding and
	may cause unpredictable behavior such as a crash, or an inability to log
	subsequent events.
	
	
	Any attempt to submit more than 32 KB of data to the ReportEvent() API is an
	error, and the attempt to log the event does not work (which results in the
	absence of this diagnostic event).
	
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
	
	
	WORKAROUND
	==========
	
	To work around this issue, change the Transport Delivering diagnostic option to
	a setting of minimum or less.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
