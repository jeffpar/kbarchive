---
layout: page
title: "Q184420: XADM: Error 2140 When Attempting To Start Key Management Server"
permalink: kb/184/Q184420/
---

## Q184420: XADM: Error 2140 When Attempting To Start Key Management Server

	Article: Q184420
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange Key Management Server Service
	that is set to manual following a new install of Exchange Server 5.5, you may
	get the following error:
	
	  Could not start the Microsoft Exchange Key Management Server service on
	  \\Server.
	  Error 2140: An internal Windows NT error occurred.
	
	The following event will also be logged in the Windows NT Application Log:
	
	  Event ID: 5057
	  Source:   MSExchangeKMS
	  Type:     None
	  Category: None
	  Description:
	
	The supplied password is not valid.
	
	CAUSE
	=====
	
	When you started the Key Management Server Service that is set to manual (in
	Control Panel, Services), you did not provide the password that was given when
	the Key Management Server Setup was run and the following option was selected:
	
	  Display this password once. I will write it down and enter it manually on
	  startup.
	
	A sample password is:
	
	  Key Management Server Password
	  HZGYYHACWLQACTI
	
	WORKAROUND
	==========
	
	Enter the Key Management Server password in the Startup Parameters Box that
	corresponds to the Key Management Server Service in Control Panel Services by
	performing the following steps:
	
	1. In Control Panel, click the Services icon.
	
	2. Highlight Microsoft Key Management Server Service.
	
	3. Enter the Key Management Server password that was provided during setup to
	  the Startup Parameter box.
	
	MORE INFORMATION
	================
	
	For more information, please refer to page 45 of Microsoft Exchange Server 5.5
	Operations.
	
	
	Additional query words: Advanced Security KM server
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
