---
layout: page
title: "Q272659: XFOR: Could Not Load Some Objects Using Application Connector"
permalink: kb/272/Q272659/
---

## Q272659: XFOR: Could Not Load Some Objects Using Application Connector

	Article: Q272659
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 02-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Microsoft Exchange administrators use the Application Connector for Lotus
	Notes, the following message may appear on client workstations accessing the
	public folders into which the Notes folder data was replicated:
	
	  Could not load some objects because they are not available on this machine.
	
	This message appears when the controls associated with the form are not installed
	on the computer.
	
	MORE INFORMATION
	================
	
	The forms work properly only on computers that have Application Connector
	installed. For all other computers, the controls must be installed.
	
	When the Application Connector installs, Mxocx2.exe installs in the Application
	Converters folder. For the forms to work properly, share this file with the
	intended Exchange folder users.
	
	The Exchange folder may contain a message with a pointer to Mxocx2.exe and simple
	instructions.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
