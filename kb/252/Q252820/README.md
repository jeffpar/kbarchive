---
layout: page
title: "Q252820: XADM: Store Stops Responding When an Orphan User Logs On"
permalink: /kb/252/Q252820/
---

## Q252820: XADM: Store Stops Responding When an Orphan User Logs On

{% raw %}

	Article: Q252820
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
	
	If an Internet Message Access Protocol, Version 4rev1 (IMAP4) user logs on to an
	orphaned mailbox that has a home server property that is undefined, the
	information store may stop responding and you may receive an access violation.
	
	The stack trace is displayed as follows:
	
	FramePtr RetAddr Param1 Param2 Param3 Function Name<BR/>
	10f7fe14 006275af 11d53e18 11d53db8 00000000 STORE!SzDupSz+0xb<BR/>
	10f7fe3c 00628731 00000000 11d53ddc 11d30f6e STORE!IMAPCON::EcServerHostFromServerDN+0x1e<BR/>
	10f7fe58 006285a9 11d10150 00000000 00000002 STORE!IMAPCON::EcQueueReferralResponse+0x179<BR/>
	10f7fee0 00501f71 11d10150 11d30f6e 00000012 STORE!IMAPCON::CbSubscribeUnsubscribe+0x258
	
	CAUSE
	=====
	
	When an IMAP4 user issues a subscribe command, the information store tries to
	make a copy of the home server property. If the home server property is null,
	the STRCPY function does not work.
	
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
