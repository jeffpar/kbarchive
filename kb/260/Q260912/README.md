---
layout: page
title: "Q260912: XADM: Exchange Categorization Count Displays 4294967296"
permalink: /kb/260/Q260912/
---

## Q260912: XADM: Exchange Categorization Count Displays 4294967296

{% raw %}

	Article: Q260912
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical kbExchange2000SP1
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Windows NT Performance Monitor may display a value of 4294967296 when
	you view the Categorization Count counter for the MSExchangeIS Private or
	MSExchangeIS Public objects. When you restart the information store, this count
	starts at a value of 0.
	
	
	CAUSE
	=====
	
	This issue can occur if the information store allows this counter to become
	negative. Performance Monitor displays the value 4294967296 for negative numbers
	(the hexadecimal equivalent to 0x100000000). The value for the Categorization
	Count counter should reflect the total number of categorization tables in the
	private and public information stores, and this count should be preserved when
	you restart the information store. Preservation of this number is not being
	handled properly.
	
	
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
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix kbgraphxlinkcritical kbExchange2000SP1Fix 
	Component         : MDB
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
