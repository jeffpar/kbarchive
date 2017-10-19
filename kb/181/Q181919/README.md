---
layout: page
title: "Q181919: XADM: Offline Address Book Not Updated After Changing Server"
permalink: /kb/181/Q181919/
---

## Q181919: XADM: Offline Address Book Not Updated After Changing Server

	Article: Q181919
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you move the offline Address Book from an Exchange Server 4.0 computer to
	another Exchange Server computer, using the Administrator program of a computer
	running Exchange Server 5.0 or 5.5, the offline Address Book (OAB) will no
	longer be updated.
	
	CAUSE
	=====
	
	Exchange 4.0 does not set any values to the raw object "Off-Line-AB-
	Containers". If this object does not contain any value, Exchange 4.0 takes the
	global address list (GAL) to create the OAB. In Exchange 5.0 and 5.5, it's
	possible to specify more than one address container, so the Exchange 5.0 and 5.5
	Administrator program always fills the raw object "Off-Line-AB- Containers" with
	nonviewable characters.
	
	WORKAROUND
	==========
	
	Two possible workarounds are:
	
	- Do not use the global address list to create the OAB.
	
	  -or-
	
	- Use the Exchange 4.0 Administrator program to change the OAB settings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0, 5.0, and 5.5. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
