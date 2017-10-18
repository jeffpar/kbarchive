---
layout: page
title: "Q175100: XADM: Unexpected Error 0xc0040000 Upgrading to Exchange 5.5"
permalink: kb/175/Q175100/
---

## Q175100: XADM: Unexpected Error 0xc0040000 Upgrading to Exchange 5.5

	Article: Q175100
	Product(s): Microsoft Exchange
	Version(s): 5.0 SP2,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0 SP2, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you complete an installation of Exchange Server version 5.5 over a
	previous version of Exchange Server, or upgrade Exchange Server version 5.0
	Service Pack 1 to Service Pack 2, the following events will be logged in Event
	Viewer and will appear to be a problem with the installation:
	
	  Event ID: 1005
	  Source: MSExchangeSA
	  Type: Error
	  Category: Monitoring
	
	  Unexpected error <<0xc0040000 - The Microsoft Exchange Server computer
	  is not available. Either there are network problems or the Microsoft
	  Exchange Server computer is down for maintenance. Microsoft Exchange
	  Server Information Store ED no.: 8004011d-0526-00000000>> occurred.
	
	CAUSE
	=====
	
	Though the event appears to be a problem with the server, it is actually an
	expected behavior. The Exchange system attendant is attempting to contact the
	information store, which is not available at the specified time. After the
	Exchange Setup program has completed, it begins restarting all the related
	services. When you check further in the Event Viewer log, you will see a display
	of the successful startup of the information store, as follows:
	
	  Event ID: 1001
	  Source: MSExchange IS Private
	  Type: Error
	  Category: Monitoring
	
	  The Microsoft Exchange Information Store has started. Service startup
	  complete, version 5.5.
	
	Additional query words: IS
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange500SP2
	Version           : :5.0 SP2,5.5
	
	=============================================================================
	
