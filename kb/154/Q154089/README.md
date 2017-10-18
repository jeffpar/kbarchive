---
layout: page
title: "Q154089: XCLN: Cannot Send Sealed Message when Offline"
permalink: kb/154/Q154089/
---

## Q154089: XCLN: Cannot Send Sealed Message when Offline

	Article: Q154089
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the key management features while you are offline, the
	following error message is displayed:
	
	  The client operation failed. The recipients could not be validated.
	
	CAUSE
	=====
	
	The key management component does not support working offline.
	
	RESOLUTION
	==========
	
	To use the key management features, you must log on to the Microsoft Exchange
	Server computer.
	
	MORE INFORMATION
	================
	
	When you attempt to send a sealed message, the Microsoft Exchange Client obtains
	the recipient's public sealing key from the directory service and uses that key
	to encrypt the first encryption key. That information is then sent to the
	information store to be delivered. If you are working offline, the directory
	service and information store are not available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
