---
layout: page
title: "Q195040: XFOR: Internet News Service Sends Long &quot;newnews&quot; Command"
permalink: kb/195/Q195040/
---

## Q195040: XFOR: Internet News Service Sends Long &quot;newnews&quot; Command

	Article: Q195040
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	While using the Exchange Server Internet News Service in conjunction with
	another NNTP server, you may encounter a problem where the Internet News Service
	sends an NNTP newnews command that is greater than 512 characters. This violates
	RFC 977, and could result in the other NNTP server rejecting the newnews
	command.
	
	This extract from the Exchange Server Internet News Service protocol log shows an
	example of the problem:
	
	  9/30/98 1:15:14 PM : Connection to [w.x.y.z] established
	  9/30/98 1:15:14 PM : <<< 200 nntpserver.domain.com InterNetNews NNRP
	   server INN 1.7 16-Oct-1997 ready (posting ok).
	  9/30/98 1:15:15 PM : >>> mode reader
	  9/30/98 1:15:15 PM : <<< 200 nntpserver.domain.com InterNetNews NNRP
	   server INN 1.7 16-Oct-1997 ready (posting ok).
	  9/30/98 1:15:15 PM : >>> date
	  9/30/98 1:15:15 PM : <<< 111 19980929141134
	  9/30/98 1:15:15 PM : >>> newnews <list of news groups to download>
	   980929 135848 GMT
	  9/30/98 1:15:16 PM : <<< 500 Line too long
	  9/30/98 1:15:16 PM : >>> QUIT
	
	For more information on how to enable Exchange Server Internet News Service
	protocol logging, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q164126 XFOR: How to Enable Diagnostic Logging for NNTP
	
	CAUSE
	=====
	
	The number of characters in the list of newsgroups to download (also known as
	the WILDMAT) was too long. This pushed the entire command length over the 512
	character limit when the newnews command and other parameters were taken into
	account.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Internet News Service
	
	  File Name     Version
	  ------------------------
	  Exchins.exe   5.5.2427.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: INN pull feed
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
