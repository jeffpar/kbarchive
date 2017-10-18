---
layout: page
title: "Q164422: XADM: How to Test the LDAP Functionality of Exchange Server"
permalink: kb/164/Q164422/
---

## Q164422: XADM: How to Test the LDAP Functionality of Exchange Server

	Article: Q164422
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange Server version 5.0 supports LDAP clients accessing the
	Directory. You can test this using Microsoft Internet Mail and News client.
	
	MORE INFORMATION
	================
	
	To test the LDAP functionality of Exchange Server:
	
	1. In Microsoft Internet Mail and News client version 4.70.1160, on the File
	  menu, click Address Book. This opens new windows.
	
	2. On the File menu, click Directory Services, and then click the Add button.
	
	3. In both the Friendly Name and the Directory Service name boxes, type the name
	  of the Exchange Server computer (the one with the directory service with LDAP
	  enabled).
	
	4. Click OK. Then click OK again to close Directory Services.
	
	5. On the Edit menu, click Find and select the name of your Microsoft Exchange
	  Server computer.
	
	6. In the Look For box, type first and/or last name or e-mail name, and then
	  click Find Now.
	
	All matching entries will be displayed at the bottom of the window.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
