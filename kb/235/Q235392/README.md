---
layout: page
title: "Q235392: XADM: Slow Intra-Site Replication on Multi-Processor Server"
permalink: kb/235/Q235392/
---

## Q235392: XADM: Slow Intra-Site Replication on Multi-Processor Server

	Article: Q235392
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a multi-server site, intra-site replication may be slow on a multi-processor
	server. This may occur when a multi-processor server needs to replicate many
	changes out to other servers in the site, for example, after many mailboxes have
	been modified or added. A multi-processor server may be slower compared to a
	single-processor server performing the same task. Replication between different
	sites is not affected.
	
	The behavior described can be observed when you monitor the following counter in
	the Windows NT Server Performance Monitor:
	
	  Object: MSExchangeDS
	  Counter: Objects Replicated Out/sec
	
	The value of this counter may be higher on a single-processor server compared to
	a multi-processor server. At the same time, the processor time used by the
	Microsoft Exchange Server directory service is high.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2600.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2600.0 | 
	+-------------------------+
	| Netif.dll  | 5.5.2600.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2600.0 | 
	+-------------------------+
	
	Component: Directory
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Dsamain.exe | 5.5.2630.0 | 
	+--------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
