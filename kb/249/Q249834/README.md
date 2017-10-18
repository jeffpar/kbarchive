---
layout: page
title: "Q249834: XADM: Mailbox Manager Fails When Installing on Cluster"
permalink: kb/249/Q249834/
---

## Q249834: XADM: Mailbox Manager Fails When Installing on Cluster

	Article: Q249834
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 05-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Mailbox Manager included in SP3 generates an error
	80004005 when you attempt to install it on a cluster server.
	
	CAUSE
	=====
	
	Installation doesn't work when the server name and cluster name are different.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	Rename the cluster to have the same name as the server until the Mailbox Manager
	is installed, then rename the cluster to its original name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The updated Mailbox Manager files are located in the Support file for Exchange
	Server 5.5 Service Pack 4. The download location is
	
	  http://www.microsoft.com/exchange/downloads/55/sp4dl_en.asp
	
	and the file is SP4_55SS1.exe. For more information on Mailbox Manager, download
	the Support file, unzip into a directory and read the file located at
	\ENG\server\support\mbmngr\setup\i386\mbmanug.htm.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
