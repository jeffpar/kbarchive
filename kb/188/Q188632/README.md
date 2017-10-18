---
layout: page
title: "Q188632: XFOR: Internet Mail Service Missing from Control Panel"
permalink: kb/188/Q188632/
---

## Q188632: XFOR: Internet Mail Service Missing from Control Panel

	Article: Q188632
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Remove All and Reinstall to recover a Microsoft Exchange Server
	computer, and you recover the database files (Priv.edb or Dir.edb), the Internet
	Mail Service Connector may appear in the Organization\ Site\ Configuration
	Container\ Connections Container, but the Internet Mail Service service may be
	missing from the Control Panel Services.
	
	CAUSE
	=====
	
	If the Internet Mail Service was previously installed and configured on this
	Exchange Server computer, the directory or information store database may have
	had knowledge of that connector and restored that information to the Exchange
	Server computer, but removed the service reference from the registry.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Delete the Internet Mail Service Connector from the three connections
	  containers in the Organization, Site, and Configuration containers.
	
	2. Run the Internet Mail Service Wizard to configure the Internet Mail Service
	  connector and create the Internet Mail Service in Control Panel Services.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
