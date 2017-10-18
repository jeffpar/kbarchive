---
layout: page
title: "Q112761: SMTP: Maximum Number of Recipients Allowed"
permalink: kb/112/Q112761/
---

## Q112761: SMTP: Maximum Number of Recipients Allowed

	Article: Q112761
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to SMTP has no maximum number of recipients per mail
	message. The gateway processes as many recipients as it has available memory. In
	testing the gateway before release, the mail messages sent to and from 300
	recipients, with 420K of RAM available before starting the gateway, was
	successfully accomplished.
	
	The number of addresses varies depending on:
	
	- amount of free RAM
	
	- size of the addresses, longer addresses take up more memory
	
	- number of users on the gateway postoffice
	
	- number of Microsoft Mail postoffices defined on the gateway postoffice
	
	NOTE: The successful test of 300 recipients is well over the 100 specified by RFC
	821. Also note that many mail hosts on the Internet may not support more than
	100 recipients.
	
	MORE INFORMATION
	================
	
	As the recipient list goes over 1000 characters, the gateway continues the list
	with the next 1000 characters, using the line wrap standard described in RFC
	821.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
