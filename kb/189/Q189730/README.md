---
layout: page
title: "Q189730: XFOR: IMC Fails to Start After Upgrading to Windows NT 4.0"
permalink: kb/189/Q189730/
---

## Q189730: XFOR: IMC Fails to Start After Upgrading to Windows NT 4.0

	Article: Q189730
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to manually start the Microsoft Exchange Internet Mail
	Connector (IMC) on a Windows NT 4.0 computer, the following error may occur:
	
	  Services
	
	  Could not start the Microsoft Exchange Internet Mail Connector
	  service on
	  \\machinename.
	  Error 2140: An internal Windows NT error occurred.
	
	In the application event log the following may be logged:
	
	  Event ID: 4086
	  Source:   MSExchangeIMC
	  Type: Error
	  Category: Initialization/Termination
	  Description: Unable to start the service because the
	  configuration could not be loaded from the Microsoft Exchange
	  directory or Windows NT Registry.
	
	CAUSE
	=====
	
	Windows NT 4.0 has become more restrictive in its control of the registry.
	
	WORKAROUND
	==========
	
	To work around this issue, add the Exchange Server Service account to the
	Administrators group for the domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
