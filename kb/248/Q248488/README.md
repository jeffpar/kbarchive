---
layout: page
title: "Q248488: XCON: Event ID 9318 Occurs Within Site Operating Over a WAN"
permalink: kb/248/Q248488/
---

## Q248488: XCON: Event ID 9318 Occurs Within Site Operating Over a WAN

	Article: Q248488
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you review the Event Viewer application log for Microsoft Exchange Server
	5.0 Service Pack 1, you notice that the message transfer agent (MTA) is logging
	Event ID 9318 at random intervals. The entry is similar to the following
	example, though the index and Microsoft Windows NT error code numbers vary:
	
	  Event ID: 9318
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: Interface
	  Description: An RPC communications error occurred. Unable to bind over RPC.
	  The locality table (LTAB) index is 76. Windows NT error code: XXXX. [BASE IL
	  MAIN BASE 1 500] (12)
	
	CAUSE
	=====
	
	This behavior can occur when you have more than one server in a site, but the
	servers are connected across a wide area network (WAN) rather than a local area
	network (LAN). Event Viewer logs this event when WAN traffic is heavy or when
	network connectivity is unstable.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. Open the MTA Site Configuration Properties dialog box, and then click the
	  Messaging Defaults tab.
	
	2. Type "15" (without the quotation marks) in the Checkpoint Size (K) box.
	
	3. Type "90" (without the quotation marks) in the Recovery Timeout (sec) box.
	
	4. Type "3" (without the quotation marks) in the Window Size box.
	
	NOTE: If most of the WAN is regularly experiencing heavy traffic, this workaround
	may not completely alleviate the problem. It may be necessary to redesign the
	Exchange Server organization.
	
	MORE INFORMATION
	================
	
	Checkpoints are markers for data transmission. The checkpoint size is the amount
	of data that is to be transferred before a checkpoint. If a transmission error
	occurs and the message must be transferred again, the transfer can resume from
	the most recent checkpoint. The default checkpoint amount is 30 kilobytes.
	
	The recovery timeout setting is used for specifying the amount of time after a
	transmission error occurs that the MTA waits for a connection before deleting
	all checkpoints and restarting the transfer from the beginning. The default time
	is 60 seconds.
	
	The window size indicates the number of checkpoints that can go unacknowledged
	before data transfer is suspended. The window size determines the amount of
	resources that are set aside for the receiving station. It is only useful to set
	a window size when the checkpoint size is set to something greater than zero.
	The default window size is 5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
