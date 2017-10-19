---
layout: page
title: "Q268227: XCON: Event ID 9406 and 2240 Occur When Starting the MTA"
permalink: /kb/268/Q268227/
---

## Q268227: XCON: Event ID 9406 and 2240 Occur When Starting the MTA

	Article: Q268227
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Exchange Server, the message transfer agent (MTA) does not start
	and you may receive the following event ID messages:
	
	Date:		7/6/00		Event ID: 	168
	Time:		4:00:06 PM	Source:		MSExchangeMTA
	User:		N/A		Type:		Warning
	Computer:	SERVER  	Category;	Directory access
	
	Unable to find the global domain information for the /o=ORGANIZATION/ou=SITE
	/cn=Configuration/cn=Site-Addressing Microsoft Exchange site.
	[MTA MAIN BASE 1 273] (12) 
	
	Date:		7/6/00		Event ID: 	2240
	Time:		5:10:01 PM	Source:		MSExchangeMTA
	User:		N/A		Type:		Warning
	Computer:	SERVER  	Category;	Directory Access
	
	Directory operation (ds_bind) failed with problem DS_E_INSUFFICIENT_ACCESS_RIGHTS.
	[RD Server MAIN BASE 1 116] (12) 
	
	Date:		7/6/00		Event ID: 	9406
	Time:		4:00:06 PM	Source:		MSExchangeMTA
	User:		N/A		Type:		Warning
	Computer:	SERVER  	Category;	Directory access
	
	There is not enough Performance Monitor memory to display the MTA Connections information.
	Stop attached Performance Monitors and re-start the MTA. [BASE MAIN BASE 1] (14)
	
	RESOLUTION
	==========
	
	To resolve this behavior, verify that the service account role is set to service
	account administrator on the site object.
	
	MORE INFORMATION
	================
	
	This behavior occurs after a disaster recovery process. If you change the
	Directory Access, Field Engineering and X.400 MTA logging levels to maximum,
	more accurate events are logged.
	
	
	Additional query words: control panel
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
