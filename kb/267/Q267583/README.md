---
layout: page
title: "Q267583: XADM: Exchange Server 5.5 Fix Setup.exe Won't Work"
permalink: /kb/267/Q267583/
---

## Q267583: XADM: Exchange Server 5.5 Fix Setup.exe Won't Work

	Article: Q267583
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to run an Exchange Server 5.5 Setup.exe file from a fix on a
	Microsoft Windows 2000 Cluster Server, you may receive the following error
	message:
	
	  Setup has detected that you are not running a set of Windows NT related fixes
	  required for clustering to work with Microsoft Exchange Server.
	
	  Microsoft Exchange Server Setup ID no: c1037996
	
	CAUSE
	=====
	
	This issue can occur because when you run a non-RTM (release to manufacturing)
	Setup.exe file on a Cluster Server, the Setup.exe file first determines whether
	the Cluster Server is at the correct Microsoft Windows NT version and service
	pack. If the server is running Windows NT 4.0 and Windows NT 4.0 Service Pack 3,
	a set of rollup fixes needs to be applied before Exchange Server 5.5 can be
	installed. The Exchange Server Setup.exe file checks the current service pack
	version. If the current service pack version is earlier than Service Pack 4, the
	Setup.exe file determines whether the fixes have been applied. If the fixes have
	not been applied, the error message in the "Symptoms" section of this article is
	displayed. Because, at this time, no service packs have been released for
	Windows 2000 Server, the Setup.exe file finds no service pack entry in the
	registry, and Setup does not work.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
