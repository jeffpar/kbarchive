---
layout: page
title: "Q177887: XCON: MTA Terminates Suddenly with 2175, 100, and 9405 Events"
permalink: /kb/177/Q177887/
---

## Q177887: XCON: MTA Terminates Suddenly with 2175, 100, and 9405 Events

{% raw %}

	Article: Q177887
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) versions 4.0 and 5.0 may
	terminate unexpectedly at startup with events similar to the following in the
	Windows NT Event Viewer Application log:
	
	  9405
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Exception 0xc0000094 occurred at Address 0x4aac9b. [BASE DISP:
	  ROUTER 10] (16)
	
	  100
	  A fatal MTA database server error was encountered. The MTA work queue
	  could not be created. Internal database error: 2109. [MTA DISP:ROUTER
	  10 118] (16)
	
	  2175
	  An MTA database server error was encountered while an attribute length.
	  Called from MTA. Procedure: 118. Database error code: ODXOINIU - Object
	  does not exist. Object at fault: 0600007B. Attribute identifier: 2.
	  Value number: 1. Referenced object: 00000000 (00000000 => N/A).
	  Referenced object error 0. [DB Server DISP:ROUTER 10 72] (14)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0, and 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	RESOLUTION
	==========
	
	Customers who experience this problem on version 4.0 Exchange servers will need
	to upgrade to Exchange 5.5. Customers experiencing this problem on Exchange 5.0,
	will need to upgrade to Service Pack 2.
	
	MORE INFORMATION
	================
	
	Exception 0xc0000094 is generated when a division by zero error has been
	encountered. The MTA terminates unexpectedly when the MTA attempts to perform
	integer division using the value of an attribute that has been erroneously set
	to a value of zero.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
