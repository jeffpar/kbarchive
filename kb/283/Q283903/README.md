---
layout: page
title: "Q283903: XADM: Event ID 8512 Logged by Exchange Server Information Store"
permalink: kb/283/Q283903/
---

## Q283903: XADM: Event ID 8512 Logged by Exchange Server Information Store

	Article: Q283903
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc55
	Last Modified: 08-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Exchange Server computer may periodically generate the following event ID
	8512 error message (which indicates that error 3034 occurred) in the Application
	event log:
	
	  Event ID: 8512
	  Source: MS ExchangeIS priv
	  Category: MTA Connections
	  Type: Warning
	  Description:
	  Unable to connect to the MTA consecutive ma-open calls are failing with error
	  3034.
	
	  There is not enough memory to complete the operation.
	
	CAUSE
	=====
	
	This issue occurs because the Exchange Server information store process creates
	threads to use when sending and receiving mail from the Exchange Server message
	transfer agent (MTA). The number of threads that are created is determined by a
	number of registry values, and these registry values are ordinarily set based on
	adjustments that are made when you run the Exchange Server Performance Optimizer
	(Perfwiz).
	
	If these registry values are set manually to values that exceed 40 when the
	values are added together, the information store generates the event ID 8512
	error message (which indicates error 3034) in the "Symptoms" section of this
	article.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, run Performance Optimizer to reset the registry values to
	values that do not add up to more than 40.
	
	MORE INFORMATION
	================
	
	You can determine the total number of threads that the information store uses to
	communicate with the MTA by adding the following registry values together:
	
	- Under the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate
	
	   - Send Threads
	
	   - Delivery Threads
	
	   - Gateway In Threads
	
	   - Gateway Out Threads
	
	- Under the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	   - Send Threads
	
	   - Delivery Threads
	
	Add 1 or 2 to the sum of the preceding values to account for the internal
	information store process that flushes the e-mail messages of users that are
	being moved.
	
	If this total number of threads exceeds 40 for Exchange Server 5.5, the
	information store process logs the event ID 8512 error message in the
	Application event log.
	
	
	Additional query words: tune tuning
	
	======================================================================
	Keywords          : kberrmsg exc55 
	Component         : MDB
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
