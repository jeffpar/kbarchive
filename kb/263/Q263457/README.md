---
layout: page
title: "Q263457: XADM: Information Store Access Violation w. Long One-Off Addr."
permalink: /kb/263/Q263457/
---

## Q263457: XADM: Information Store Access Violation w. Long One-Off Addr.

{% raw %}

	Article: Q263457
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
	
	During normal operation, the Exchange Server information store service may cause
	an access violation (Dr. Watson) when the information store attempts to process
	an outbound message that contains a X.400 address that is greater than 1,024
	characters. The Drwatson.log file may contain a call stack similar to the
	following if symbols are properly installed:
	
	  
	
	  ChildEBP RetAddr  
	  0112fa04 004c003d store!EcORNameFromSzX400+0x341
	  0112fa6c 004c003d store!EcMDBEFFromPtag+0xc7 
	  0112fad4 004c003d store!EcMDBEFFromPtag+0xc7
	  0112fb3c 004c003d store!EcMDBEFFromPtag+0xc7
	  0112fba4 004c003d store!EcMDBEFFromPtag+0xc7
	  0112fc0c 004c003d store!EcMDBEFFromPtag+0xc7
	  0112fc74 004c003d store!EcMDBEFFromPtag+0xc7
	  0112fcdc 004c003d store!EcMDBEFFromPtag+0xc7
	  0112fd44 004c003d store!EcMDBEFFromPtag+0xc7
	  0112fdac 004c003d store!EcMDBEFFromPtag+0xc7
	  0112fe14 004c003d store!EcMDBEFFromPtag+0xc7
	  0112fe7c 004c003d store!EcMDBEFFromPtag+0xc7
	  0112fee4 004c003d store!EcMDBEFFromPtag+0xc7
	  0112ffb4 004c003d store!EcMDBEFFromPtag+0xc7
	
	CAUSE
	=====
	
	This issue can occur because no check is made to determine whether an X.400
	address is longer than 1,024 characters. When an X.400 address is longer than
	1,024 characters, stack corruption occurs and causes the access violation.
	
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
