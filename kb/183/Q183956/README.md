---
layout: page
title: "Q183956: Decreasing Directory Start Time During Off-network Recovery"
permalink: kb/183/Q183956/
---

## Q183956: Decreasing Directory Start Time During Off-network Recovery

	Article: Q183956
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are running Microsoft Exchange Server and doing a recovery of data
	while off the network, you can significantly decrease the startup time of the
	Exchange directory by using a HOSTS file.
	
	MORE INFORMATION
	================
	
	An Exchange Server computer must sometimes be taken off the network to recover
	data from the directory or information store. When the Exchange directory
	starts, it tries to communicate with every other servers in the site by host
	name. If DNS, WINS, and LMHOSTS files are all in place, each name resolution
	method must time out multiple times. If DNS, WINS, and LMHOSTS are not in place,
	the server attempts to broadcast each host name for resolution. However, if a
	HOSTS file is used and points every host name to the recovery server's loopback
	IP address, the IP connection is established immediately and fails on the RPC
	connection. This circumvents the server's attempting to contact the host in any
	other fashion and significantly cut down the directory startup time.
	
	An off-network recovery occurs when the Exchange Server computer is taken off the
	regular corporate network to recover individual data in the directory, private
	information store, or public information store. A couple of examples of this
	would be to export required fields of the directory to a CSV file, or to extract
	permissions (ACLs) from a public folder.
	
	Additional query words: hang 127.0.0.1 restore start
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
