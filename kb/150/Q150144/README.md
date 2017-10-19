---
layout: page
title: "Q150144: Multihomed Client Fails to Refresh Registration with WINS"
permalink: /kb/150/Q150144/
---

## Q150144: Multihomed Client Fails to Refresh Registration with WINS

	Article: Q150144
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A multihomed WINS client may fail to refresh its registration with a WINS server
	if the client is configured to register with the same WINS server for each
	network adapter card.
	
	MORE INFORMATION
	================
	
	A multihomed computer is one with multiple network cards and/or IP addresses
	bound to NetBIOS over TCP/IP. A multihomed WINS client with multiple IP
	addresses can register one or more addresses by sending one address at a time in
	a multihomed registration packet. A multihomed name in a WINS database can have
	one or more addresses.
	
	If a multihomed client is configured to register with the same WINS server for
	each network adapter card, the client may fail to send a name-refresh request to
	the WINS server asking to renew its registration. Eventually, the WINS server
	will time out the multihomed name and scavenge it from the WINS database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: 3.50 multihome renew refresh
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
