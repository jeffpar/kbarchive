---
layout: page
title: "Q189614: Internet Mail Service Event Descriptions Could Not Be Found"
permalink: kb/189/Q189614/
---

## Q189614: Internet Mail Service Event Descriptions Could Not Be Found

	Article: Q189614
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Internet Mail Connector (IMC) on the Exchange Server 4.0 disk is
	installed on a computer running Exchange Server 5.0, you may get Event IDs
	4125,4120, and 4118. The description for each is in the following format:
	
	  The description for Event ID ( 4118 ) in Source ( MSExchange IMC ) could not
	  be found. It contains the following insertion string(s): M4XD8MB3
	
	WORKAROUND
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Remove the IMC using the connector disk.
	
	2. Run the Exchange Server Setup program and choose to reinstall.
	
	3. In the Exchange Server Administrator program, from the File menu, choose New,
	  Other, and then choose Internet Mail Service.
	
	4. The Internet Mail Service Wizard will start, proceed through the wizard to
	  configure the Internet Mail Service.
	
	MORE INFORMATION
	================
	
	If you have the Internet Mail Service configured to notify the Internet Mail
	Connector administrator of non-delivery reports (NDR), the administrator may not
	be receiving the notification.
	
	Additional query words: disk IMS IMC
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
