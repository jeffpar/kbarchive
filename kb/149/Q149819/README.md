---
layout: page
title: "Q149819: RPC Causes Exchange Server to Hang All Connected Clients"
permalink: /kb/149/Q149819/
---

## Q149819: RPC Causes Exchange Server to Hang All Connected Clients

	Article: Q149819
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 3.51 
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	All Microsoft Exchange clients connected to a Microsoft Exchange server
	periodically hang for several minutes. If the clients are left alone, then they
	will all resume normal operation without loss of data.
	
	This symptom occurs sporadically.
	
	CAUSE
	=====
	
	The Microsoft Exchange server received only part of the Remote Procedure Call
	(RPC) data sent by a Microsoft Exchange client and is waiting for the remaining
	part.
	
	If a busy Microsoft Exchange server receives RPC data from a Microsoft Exchange
	client, and it accepts a part of the RPC fragment but not the entire amount,
	then if the client is rebooted or powered off before the remainder of the
	fragment is sent, the server can stop processing all RPC requests until the
	network transport detects the client failure and terminates the connection. If
	you use a "patient" transport protocol such as TCP/IP, this may take up to five
	minutes.
	
	
	RESOLUTION
	==========
	
	To resolve this problem on Exchange Servers running on Windows NT 3.51 Server,
	obtain the fix mentioned below, install Windows NT service pack 5 for NT 3.51 or
	upgrade to Windows NT Server version 4.0.
	
	STATUS
	======
	
	This problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base:
	
	  SERVPACK
	
	
	Additional query words: prodnt 3.51 exchng
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbOSWinNT351 kbExchangeSearch kbExchange400 kbZNotKeyword2 kbOSWinNTSearch
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
