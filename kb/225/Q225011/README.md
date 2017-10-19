---
layout: page
title: "Q225011: XADM: Error c1037996 Installing  Exchange Server 5.5 on Cluster"
permalink: /kb/225/Q225011/
---

## Q225011: XADM: Error c1037996 Installing  Exchange Server 5.5 on Cluster

	Article: Q225011
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the Microsoft Exchange Server 5.5 Setup program on a Microsoft
	Cluster Server for the first node, you may receive the following error message:
	
	  Setup has detected that you are not running a set of Windows NT related fixes
	  required for clustering to work with Microsoft Exchange Server.
	
	  Microsoft Exchange Server Setup ID no: c1037996
	
	CAUSE
	=====
	
	You need additional Microsoft Windows NT files to support Exchange Server on a
	Microsoft Cluster Server.
	
	WORKAROUND
	==========
	
	To workaround this issue perform one of the following:
	
	- Apply the set of Windows NT post-Service Pack 3 (English) fixes for Microsoft
	  Cluster Server from the following FTP location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/roll-up/cluster/
	
	  -or-
	
	- Apply Windows NT Service Pack 4 from the following FTP location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/ussp4
	
	Additional query words: MSCS, clustering
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
