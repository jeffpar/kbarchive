---
layout: page
title: "Q155867: XADM: Directory Replication Portion of Exchange Setup Fails"
permalink: /kb/155/Q155867/
---

## Q155867: XADM: Directory Replication Portion of Exchange Setup Fails

	Article: Q155867
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During Exchange 4.0 Setup, you may get the following error message:
	
	  A connection could not be made to the remote directory service, possibly due
	  to network failure.
	
	This error message can occur during the directory replication portion of Setup if
	you have elected to add an additional server to an existing site, and can occur
	even though you have initially been able to join an existing site by typing the
	name of any online server in the site when prompted during Exchange Setup.
	
	CAUSE
	=====
	
	The initial connection to the server specified in the "join an existing site"
	dialog box can be successful using any of the available protocols installed on
	the server in the Networks tool in Control Panel.
	
	However, after this initail connection, the replication process is limited to
	protocols specified in the RPC_Srv_Binding_Order registry entry. This may cause
	the directory replication process to time out due to name resolution failure.
	
	For example, the server may use NetBIOS name resolution to make the initial
	connection to the existing server in the site and then use TCP/IP name
	resolution when making the RPC connection to perform directory replication. If
	name resolution fails over TCP/IP, the RPC will time out, aborting the
	replication process and causing Setup to fail.
	
	RESOLUTION
	==========
	
	Normal name resolution troubleshooting will resolve this problem. For example,
	if directory replication is failing due to name resolution failure over TCP/IP,
	the solution is to check and make sure that name resolution is successful using
	HOSTS files, DNS, WINS, or LMHOSTS files.
	
	Additional query words: Exchange Setup Replication Network Failure exfaqad
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
