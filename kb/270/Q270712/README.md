---
layout: page
title: "Q270712: XADM: Store.exe Process Stops Responding w/Large No. of Threads"
permalink: /kb/270/Q270712/
---

## Q270712: XADM: Store.exe Process Stops Responding w/Large No. of Threads

{% raw %}

	Article: Q270712
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
	
	Messaging Application Programming Interface (MAPI), Post Office Protocol version
	3 (POP3), Internet Message Access Protocol, Version 4rev1 (IMAP4), and Hypertext
	Transfer Protocol (HTTP) e-mail clients may experience very slow response from
	the Exchange Server information store, and gradually the information store may
	stop responding to the clients.
	
	When a Microsoft Outlook user tries to log on, the user receives the following
	error message:
	
	  The Microsoft Exchange Server computer is not available. Either there are
	  network issues or the Microsoft Exchange server is down for maintenance.
	
	The Microsoft Windows Task Manager displays high CPU use for the Exchange Server
	information store and a large number of threads in the Store.exe process. The
	number of threads in the Store.exe process continues to increase, which causes
	the Store.exe process to stop responding.
	
	CAUSE
	=====
	
	This issue can occur if the information store process becomes stuck indefinitely
	in a loop when a folder cannot be deleted.
	
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
