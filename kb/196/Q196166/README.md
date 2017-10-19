---
layout: page
title: "Q196166: XADM: Move Server Wizard and Microsoft Exchange Event Service"
permalink: /kb/196/Q196166/
---

## Q196166: XADM: Move Server Wizard and Microsoft Exchange Event Service

	Article: Q196166
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When running the Microsoft Exchange Move Server Wizard (MSW) the following error
	occurs:
	
	The Move Server Wizard detected that the Microsoft Exchange Event Service is
	installed on the server being moved. Remove the Event Service before moving this
	server.
	
	Microsoft Exchange Move Server Wizard ID no: c103755a
	
	MORE INFORMATION
	================
	
	The information is also available in the Readme.htm file provided with Move
	Server component.
	
	WORKAROUND
	==========
	
	You must remove the Microsoft Exchange Event Service before running the Move
	Server Wizard. The wizard will not run with the Event Service installed.
	
	To remove the Microsoft Exchange Event Service:
	
	1. Run the Setup.exe program for Microsoft Exchange Server version 5.5.
	
	2. From the Microsoft Exchange Server Setup screen, choose Add/Remove.
	
	3. From the Microsoft Exchange Server Setup Complete/Custom screen, under
	  Options, select Microsoft Exchange Server. Under Description, choose Change
	  Option.
	
	4. From the Microsoft Exchange Server Setup Microsoft Exchange Server screen,
	  under Options, clear the Microsoft Exchange Event Service option, and then
	  choose OK.
	
	5. From the Microsoft Exchange Server Setup Complete/Custom screen, choose
	  Continue.
	
	6. The Setup program will remove the Microsoft Exchange Event Service
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
