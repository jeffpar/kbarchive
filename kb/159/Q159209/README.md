---
layout: page
title: "Q159209: XFOR: IMC Delivers Only the Mail in the Queue at Dial-Up"
permalink: kb/159/Q159209/
---

## Q159209: XFOR: IMC Delivers Only the Mail in the Queue at Dial-Up

	Article: Q159209
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Internet Mail Connector only delivers mail that was in the queue when the
	dial-up took place and then begins queuing up mail even though a connection
	still exists.
	
	MORE INFORMATION
	================
	
	This is by design. A dial-up connection was never meant to be used as a
	persistent connection. Should you require this functionality, see the following
	article in the Microsoft Knowledge Base for an alternative method of dial-up
	connectivity:
	
	  Q140184 How to Get the IMC to Use an Internet Provider
	
	REFERENCES
	==========
	
	See the online help for the Dial-Up Connections on "Time-out after" for details.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
