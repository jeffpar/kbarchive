---
layout: page
title: "Q183408: XADM: Err Msg: MAPI_E_NOT_FOUND When Running LoadSim"
permalink: /kb/183/Q183408/
---

## Q183408: XADM: Err Msg: MAPI_E_NOT_FOUND When Running LoadSim

{% raw %}

	Article: Q183408
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the Microsoft Exchange Load Simulator (LoadSim), the
	following error message may appear:
	
	  MAPI_E_NOT_FOUND
	
	CAUSE
	=====
	
	The MAPI files required by Load Simulator are not installed on the computer you
	are running LoadSim from.
	
	WORKAROUND
	==========
	
	Install the Microsoft Exchange Client on the system you will be running Load
	Simulator from.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
