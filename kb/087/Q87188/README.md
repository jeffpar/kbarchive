---
layout: page
title: "Q87188: PROFS: Attachment File Handling"
permalink: kb/087/Q87188/
---

## Q87188: PROFS: Attachment File Handling

	Article: Q87188
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When sending mail from Microsoft Mail to a host-based user, files can be
	attached to a message in the same way as when sending to another local MS Mail
	user. However, the recipient will receive one note and one file per attachment
	in their reader list.
	
	When an MS Mail user receives files from a host-based user, the message text and
	each file arrive in the recipient's mailbox as a separate mail item.
	
	When sending to another MS Mail user via the Microsoft Mail Gateway to PROFS,
	attached files are encapsulated so that the recipient cannot tell that the mail
	item traveled through any gateways. This is known as HUB mail, and is documented
	in the "Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide." In this case, one message with attachments arrives in the recipient's
	mailbag.
	
	
	Additional query words: 3.00 pcmail profslan attachments HUB mail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
