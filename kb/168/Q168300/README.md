---
layout: page
title: "Q168300: XCLN: Err Msg: Cannot Open Attachment - Format is not Consistent"
permalink: /kb/168/Q168300/
---

## Q168300: XCLN: Err Msg: Cannot Open Attachment - Format is not Consistent

	Article: Q168300
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 5.0 
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Macintosh Lotus cc:Mail client to open an attachment forwarded
	from a Microsoft Exchange client, the following error message may appear.
	
	  Cannot open attachment. Its format is not consistent with the property
	  set.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This error can occur under the following circumstances:
	
	1. User A creates a message with an attached Microsoft Excel spreadsheet on an
	  Apple Macintosh running the Lotus cc:Mail client.
	
	2. User B, using a Microsoft Exchange Windows client, receives the message,
	  modifys and then saves the Microsoft Excel spreadsheet, and forwards the
	  message and attachment back to User A.
	
	3. When User A attempts to open the attachment, the error message appears.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT kbExchange500Win95
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	
