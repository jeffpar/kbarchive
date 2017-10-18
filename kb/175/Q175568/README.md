---
layout: page
title: "Q175568: XADM: Pause Option Not Available With Exchange Admin on Cluster"
permalink: kb/175/Q175568/
---

## Q175568: XADM: Pause Option Not Available With Exchange Admin on Cluster

	Article: Q175568
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Windows NT Cluster Service Administrator page only lists online and offline
	options for the Exchange services; a Pause option is not available. Because
	pausing a service, such as the Directory Exchange Agent (DXA), may be necessary,
	this can be a problem.
	
	CAUSE
	=====
	
	The Windows NT Cluster Service Administrator page does not allow a paused status
	for a service. Therefore, Pause is not an option. Only online and offline
	options are available.
	
	WORKAROUND
	==========
	
	The Pause button and paused status can be viewed from the Control Panel Services
	icon. The following steps are recommended if pausing a service is necessary:
	
	1. In Windows NT Cluster Service Administrator, take the Exchange service
	  offline.
	
	2. From the Control Panel Services icon, start the Exchange service.
	
	3. As required, pause the Exchange service from the Control Panel.
	
	4. When you finish performing any tasks to the Exchange Server computer,
	  continue the service (it should start running again).
	
	5. In Windows NT Cluster Service Administrator, bring the Exchange service
	  online.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	
	=============================================================================
	
