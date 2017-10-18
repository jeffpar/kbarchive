---
layout: page
title: "Q242134: Err Msg: Request Is Not Accepted by the Network"
permalink: kb/242/Q242134/
---

## Q242134: Err Msg: Request Is Not Accepted by the Network

	Article: Q242134
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to the network from a Microsoft Windows 95-based
	client, you may receive the following error message:
	
	  Request is not accepted by the network
	
	Also, Event Viewer may record Event ID 202, indicating that the server is out of
	licenses.
	
	CAUSE
	=====
	
	This behavior can occur if the server is out of licenses.
	
	RESOLUTION
	==========
	
	To resolve this issue, either change the licensing option from Per Server to Per
	Seat, or add more licenses in the Per Server configuration. In either case, you
	must have the proper number of licenses.
	
	To change the licensing option:
	
	NOTE: You are legally permitted to convert from a Per Server to a Per Seat
	configuration once at no additional cost. This is a one-time, one-way conversion
	option. It is not necessary for you to notify Microsoft if you elect to make
	this change. However, you are not legally permitted to change the licensing
	option from Per Seat to Per Server.
	
	1. In Control Panel, double-click Licensing.
	
	2. In the Client Licensing Mode box, click Per Seat.
	
	3. In the License Violation box, click No.
	
	To add more licenses in the Per Server licensing configuration:
	
	1. In Control Panel, double-click Licensing.
	
	2. In the Product list, click NT Server, and then click Add Licenses.
	
	3. In the Concurrent Connections box, type the number of additional concurrent
	  connections to permit on your server, and then click OK.
	
	4. Click to select the I Agree check box to indicate that you have read the
	  license agreement and agree to be bound by it, and then click OK.
	
	MORE INFORMATION
	================
	
	Per Server Licensing: The number of client access licenses purchased is applied
	to a specific computer running Microsoft Windows NT Server 4.0. There is no
	restriction on who may use the server; the restriction is only on the number of
	clients that have simultaneous use of the server.
	
	Per Seat Licensing: A client access license is purchased for each computer that
	obtains access to a server product. If you need to add an additional server for
	your licensed clients, you need to purchase a server license rather than more
	client licenses.
	
	Additional query words: per seat concurrent connections license logging
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
