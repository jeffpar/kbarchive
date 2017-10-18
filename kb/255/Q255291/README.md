---
layout: page
title: "Q255291: XADM: Event ID 1356 - LDAP Modify Request Fails with Error 16"
permalink: kb/255/Q255291/
---

## Q255291: XADM: Event ID 1356 - LDAP Modify Request Fails with Error 16

	Article: Q255291
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Exchange Server 5.5, the Lightweight Directory Access Protocol
	(LDAP) modify request fails and logs the following event:
	
	  Event ID: 1356
	  Type: Warning
	  Category: LDAP Interface
	  Description:
	  LDAP modify request failed with error: 16
	
	MORE INFORMATION
	================
	
	This behavior can occur when you use an Active Directory Service Interface
	(ADSI) or an LDAP-based application to modify a directory object on an Exchange
	Server computer. The error 16 (decimal) maps to hex error 0x10. When the LDAP.h
	file is referenced, this error maps to LDAP_NO_SUCH_ATTRIBUTE.
	
	To prevent this behavior from occurring, increase the diagnostic logging level on
	the LDAP interface for the MSExchangeDS service object. To do so, follow these
	steps:
	
	1. Start Exchange Server Administrator.
	
	2. In the Servers container, select the server that you want to modify, point to
	  File, and then right-click Properties.
	
	3. Click Diagnostic Logging, and then click MSExchangeDS.
	
	4. In the Category pane, select LDAP Interface.
	
	5. In the Logging Level box, click Maximum.
	
	After you increase the diagnostic logging level, you must modify the ADSI/LDAP
	application to produce an event ID 1356. To do so, follow these steps:
	
	  a. Click "Windows NT Event Viewer" to view the application log.
	
	  b. Locate the event ID 1356 and note any previous event ID 1326. The earlier
	     event ID 1326 identifies the attribute that is producing the present
	     event.
	
	  c. Revise the initial LDAP modify request to search for a valid attribute.
	
	Additional query words: query code
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
