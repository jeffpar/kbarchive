---
layout: page
title: "Q201314: XFOR: Exchange Internet Mail Pickup Directory Usage"
permalink: /kb/201/Q201314/
---

## Q201314: XFOR: Exchange Internet Mail Pickup Directory Usage

	Article: Q201314
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Microsoft Exchange Internet Mail Service now provides a directory to allow a
	"drop-off" for SMTP RFC-821 formatted messages for delivery.
	
	This functionality was added primarily for use with Active Messaging but can be
	used for other mechanisms and troubleshooting also.
	
	MORE INFORMATION
	================
	
	The Internet Mail Service attempts to create the RFC-821 (SMTP) Mail From and
	Rcpt To information from the "dropped" message. The preferred source for this
	information is through the X-Sender and X-Receiver headers normally found in an
	Active Messaging submission before the RFC-822 header information. If this
	source is not found, the Internet Mail Service attempts to figure it out from
	the RFC-822 header information (To, From, Sender). If both the Sender and From
	fields are present, the Internet Mail Service will take the Sender field over
	the From field.
	
	If a file is placed in the Pickup directory that the Internet Mail Service
	(through the Service Account) doesn't have permissions to move or delete, the
	message will not be delivered. This is to prevent the Internet Mail Service from
	sending messages multiple times. When this occurs, an event is logged. Also, the
	Internet Mail Service will not pick up files larger than the maximum message
	size configured for the Internet Mail Service.
	
	Upon startup, the Internet Mail Service checks for the existence of a Pickup
	directory under the Imcdata directory and checks for an Archive directory under
	the Pickup directory. If one does not exist, the Internet Mail Service will
	attempt to create it. If the Internet Mail Service is unsuccessful at creating
	these directories, the Pickup directory functionality is disabled. Thus to
	disable the Pickup functionality, just stop the Internet Mail Service, remove
	permissions on the Pickup directory, and then restart the Internet Mail Service.
	
	Additional query words: PICKUP REPLAY SMTP RFC-822 RFC-821 folder
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
