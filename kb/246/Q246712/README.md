---
layout: page
title: "Q246712: PRB: Can't Reduce Time Interval for Timer Event in Exchange"
permalink: kb/246/Q246712/
---

## Q246712: PRB: Can't Reduce Time Interval for Timer Event in Exchange

	Article: Q246712
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to set the time interval for the Timer event in the Microsoft
	Exchange Server Event Scripting Agent (and the time event in the Routing Object)
	from the Agent Schedule dialog box, you can only set the time to be a multiple
	of 15 minutes, such as 0, 15, 30, and so on.
	
	You can programmatically set the time interval to anything you want. However, it
	might take the event longer to fire than the setting you specify. For example,
	if you set it to fire every 20 minutes, the event would actually be fired in 30
	minutes.
	
	CAUSE
	=====
	
	The Exchange Server Event Scripting Agent and the Routing Engine are built on
	the Exchange Event Service. The Event Service is implemented as a Microsoft
	Windows NT service that receives notifications from server-based folders about
	the state of folder items. The Event Service fires events when an item is added,
	changed, or deleted in a folder. The Event Service also periodically checks
	whether Timer events have come due and fires them. The interval between checks
	is 15 minutes.
	
	This means that a Timer event that is set to wait a number of minutes that is not
	a multiple of 15 (for instance, 20) must wait until the end of the next 15
	minute interval (in this case, 30 minutes) before it fires.
	
	RESOLUTION
	==========
	
	Set Timer events to fire on multiples of 15 minutes.
	
	REFERENCES
	==========
	
	For additional information on how to use Microsoft Exchange Server Event
	Scripting Agent and Routing Objects, please refer to Microsoft Developer
	Network.
	
	Additional query words: Event Scripting Agent, Routing Objects
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
