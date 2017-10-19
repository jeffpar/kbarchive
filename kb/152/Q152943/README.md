---
layout: page
title: "Q152943: XCLN: Error When Receiving Schedule+ Confirmation Message"
permalink: /kb/152/Q152943/
---

## Q152943: XCLN: Error When Receiving Schedule+ Confirmation Message

	Article: Q152943
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,7.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 31-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Exchange MS-DOS client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Schedule+, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Exchange Server with Microsoft Mail and the Microsoft
	Mail Interchange Connector (MSMI), an invalid error message might appear when
	you receive meeting confirmations or denials from a user on another Microsoft
	Mail Postoffice located on the other side of the MSMI. At the top of the
	confirmation or denial message, the following error message will appear:
	
	  You are not this person's assistant.
	
	MORE INFORMATION
	================
	
	The following is a diagram of this configuration:
	
	                      (MS Exchange MTA)
	  ExchSrvr1-----------------------------------------ExchSrvr2
	      |                                                 |
	      |                                                 |
	  Shadow PO  (Shadow PO's have same Net/PO Name)    Shadow PO
	      |      (since they belong to the same site.)      |
	      |                                                 |
	      |             (MS Mail Connector and)             |
	      |             (MSMI used between SFS)             |
	  SFS Postoffice 1  (postoffices. Routing is in-)   SFS Postoffice 2
	      |             (direct via Shadow PO's.)           |
	      |                                                 |
	    User1                                             UserA
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbZNotKeyword3 kbExchange400DOS kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0,7.0; winnt:4.0
	
	=============================================================================
	
