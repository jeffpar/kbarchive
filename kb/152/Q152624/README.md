---
layout: page
title: "Q152624: XADM: Err Msg: Event IDs 9297 and 3161"
permalink: kb/152/Q152624/
---

## Q152624: XADM: Err Msg: Event IDs 9297 and 3161

	Article: Q152624
	Product(s): Microsoft Exchange
	Version(s): 4.0,4.5,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 01-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following Event IDs are logged in the Windows NT Event Viewer application
	log if the account listed on the Override tab of the Site Connector in the
	Microsoft Exchange Administrator program does not have Service Account Admin
	rights on the Configuration and Site containers.
	
	Note: This behavior can also occur by having the wrong password in the startup
	parameters for the message transfer agent (MTA) service.
	
	  Application log:
	
	  Event id: 9297 Source = MS Exchange MTA
	  The user /o=ORGanization /ou=SITE1 /cn=Configuration /cn=Servers /cn=SERVER1
	  /cn=Microsoft Private MDB has caused a security violation. Locality table
	  (LTAB) index: 5. Windows NT error code: 0. [BASE IL MAIN BASE 1 237] (14)
	
	  Event id: 3161 Source = MS Exchange MTA
	  An internal MTA error occurred. The logon violated security. Entity name: .
	  Error code: 0. [XAPI MAIN BASE 1 92] (14)
	
	NOTE: Always use the Small Business Server Console to make changes to user
	accounts as the User Manager for Domains does not update linked modules in Small
	Business Server 4.5. The use of User Manager for Domains in a Small Business
	Server 4.5 Environment may result in this error.
	
	
	MORE INFORMATION
	================
	
	To resolve this, give the account on the Override tab Service Account Admin
	Permissions on the Configuration and Site containers
	
	1. Click the Site Connector, and on the File menu, click Properties. Note the
	  Windows NT account that is specified on the Override tab, and close the Site
	  Connector Properties page.
	
	2. Click the Configuration container, and on the File menu, click Properties. On
	  the Permissions tab, check to see if the account noted in step 1 is listed.
	  If it is, verify that it has Service Account Admin permissions. If it is not
	  listed, add the account, and give it Service Account Admin permissions.
	
	3. Click the Site container, and on the File menu, click Properties. On the
	  Permissions tab, check to see if the account noted in step 1 is listed. If it
	  is, verify that it has Service Account Admin permissions. If it is not
	  listed, add the account, and give it Service Account Admin permissions.
	
	NOTE: Missing permissions can also prevent the Message Transfer Agent from
	transferring mail to its own local information store.
	
	
	Additional query words: awaiting delivery
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbSBServSearch kbSBServ450
	Version           : :4.0,4.5,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
