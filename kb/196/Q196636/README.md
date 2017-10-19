---
layout: page
title: "Q196636: XADM: RPC Server Unavailable Error During Setup On Cluster"
permalink: /kb/196/Q196636/
---

## Q196636: XADM: RPC Server Unavailable Error During Setup On Cluster

	Article: Q196636
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following errors may be seen when you install Microsoft Exchange Server 5.5
	on a Windows NT Cluster Server:
	
	  While attempting to stop the Exchange ATMTA service, the
	  following error was encountered:
	
	  The RPC server is unavailable.
	
	  Microsoft Windows NT
	  ID no: 0xc00206ba
	
	  and
	
	  "Processing file '\Server\Setup\i386\msmcon.uns', at or near
	  line 12
	
	  The RPC server is unavailable.
	
	  Microsoft Windows NT
	  ID no: 0xc00206ba"
	
	CAUSE
	=====
	
	The Windows NT cluster resource group created for Exchange Server is not online.
	
	WORKAROUND
	==========
	
	Bring the cluster resource group for Exchange Server online, then run setup for
	Microsoft Exchange Server 5.5.
	
	MORE INFORMATION
	================
	
	Before Exchange Server 5.5 can be installed on a Windows NT Cluster Server
	computer, the administrator must first create a resource group for Exchange
	Server that contains a disk resource or resources, an IP address resource, and a
	network name resource. The administrator must then bring this group online by
	performing the following steps:
	
	1. Open the Cluster Administrator program.
	
	2. Highlight the resource group that was created for Exchange Server.
	
	3. On the File menu, click Bring Online.
	
	For further information regarding clustering Microsoft Exchange Servers, please
	refer to the Cluster.doc file on the Exchange Server 5.5 CD-ROM.
	
	Additional query words: mscs
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbprb
	
	=============================================================================
	
