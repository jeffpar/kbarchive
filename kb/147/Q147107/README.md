---
layout: page
title: "Q147107: XADM: Installing Dynamic RAS Connector without RAS Installed"
permalink: /kb/147/Q147107/
---

## Q147107: XADM: Installing Dynamic RAS Connector without RAS Installed

	Article: Q147107
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup kbusage exc4 exc5 exc55
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install a Microsoft Exchange Dynamic Remote Access Service (RAS)
	Connector on an Microsoft Exchange Server that does not have Windows NT RAS
	installed, the required Microsoft Exchange RAS Message Transport Agent (MTA)
	Transport stack will not install. This will prevent the installation of the
	Dynamic RAS Connector.
	
	MORE INFORMATION
	================
	
	The Dynamic RAS Connector is dependent upon Windows NT RAS. When this service is
	not installed, the Dynamic RAS connector will not function.
	
	To install the Dynamic RAS connector, Windows NT RAS will need to be installed
	from the Windows NT Control Panel by starting the Network applet, choosing Add
	Software, and choosing Remote Access Service.
	
	If the Dynamic RAS Connector is going to be scheduled as Remote Initiated, the
	Windows NT RAS can be set to Receive Calls Only.
	
	If the Dynamic RAS Connector is going to scheduled as Always or Scheduled times,
	but will never receive a call, the Windows NT RAS can be set to Dial Out Only.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
