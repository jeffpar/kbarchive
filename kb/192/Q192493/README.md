---
layout: page
title: "Q192493: XADM: Setup Doesn't Add Permission to MSExchangeES Registry Key"
permalink: kb/192/Q192493/
---

## Q192493: XADM: Setup Doesn't Add Permission to MSExchangeES Registry Key

	Article: Q192493
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If Exchange Server is installed in a cluster environment, during failover the
	following event is entered in the system log:
	
	  Event: 1024
	  Source: ClusSvc
	  Type: Error
	  Category: (64)
	  Description: The registry checkpoint for cluster resource Microsoft
	  Exchange Event Service could not be restored to registry key
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeES. The
	  resource may not function correctly. Make sure that no other processes
	  have open handles to registry keys in this registry subtree.
	
	CAUSE
	=====
	
	During the installation of Exchange Server, Setup fails to add the proper
	security permissions to the MSExchangeES registry key. All other Exchange
	services have the service account added to the security permissions, with the
	exception of the event service. This becomes a problem when Exchange is
	installed in a cluster configuration. The service account needs access to this
	key to replicate registry changes to the other node. If the service account
	cannot get access, it reports errors during failover.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: SRVR_SETUP
	
	  File Name     Version
	  ------------------------
	  Srvrmax.exe   5.5.1960.8
	  Srvrmin.exe   5.5.1960.8
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: MCIS EX
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
