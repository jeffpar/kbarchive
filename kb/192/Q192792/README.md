---
layout: page
title: "Q192792: XFOR: Server Stops Responding Running a Print Service and INS"
permalink: kb/192/Q192792/
---

## Q192792: XFOR: Server Stops Responding Running a Print Service and INS

	Article: Q192792
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have printers shared on a computer running Windows NT Server, the
	server stops responding with a high kernel mode CPU usage by SPOOLSS.
	
	Depending on the printing load and the speed of the server, this problem appears
	only after the computer has been running without interruptions for quite some
	time, at least a couple of days.
	
	CAUSE
	=====
	
	When jobs are queued to the printer, a message is added to the queue of the
	window opened by the Exchins.exe process. However, the Internet News Service
	does not process these messages, and the queue grows until it is too large to be
	handled in a reasonable time. Therefore, the server appears to stops responding.
	
	RESOLUTION
	==========
	
	Exchange Server 5.5
	-------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 GEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: NNTP
	
	  File Name     Version
	  ------------------------
	  Exchins.exe   5.5.2383.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5. This problem was first corrected in Exchange Server 5.5
	Service Pack 2.
	
	Additional query words: spooler
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
