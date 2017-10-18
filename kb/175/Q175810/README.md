---
layout: page
title: "Q175810: XADM: Upgrade to Exchange Server 5.0 Takes a Long Time"
permalink: kb/175/Q175810/
---

## Q175810: XADM: Upgrade to Exchange Server 5.0 Takes a Long Time

	Article: Q175810
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Microsoft Exchange Server 4.0 to Microsoft Exchange Server
	5.0, the setup program upgrades the Information Store databases to a new
	format.
	
	On average, the setup process usually takes thirty minutes to an hour to upgrade
	1 GB of information. However, sometimes this can take longer. The setup program
	displays no status messages, and normal disk activity occurs.
	
	The upgrade process to Exchange Server 5.0 can be monitored by examining the
	Application Event Log in the event viewer for the following event:
	
	  Event ID: 1185
	  Source: MSExchangeISPrivate
	  Description:
	  Successfully upgraded to database version X.XX.
	
	NOTE: The final database version for Exchange Server 5.0 is version 2.35. If the
	information store has been upgraded correctly then it will display the above
	message for both the private information store and the public information store,
	provided they both exist on the server.
	
	CAUSE
	=====
	
	This behavior is by product design.
	
	
	Additional query words: 1185 2.18 2.19
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
