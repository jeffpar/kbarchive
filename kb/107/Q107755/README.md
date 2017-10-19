---
layout: page
title: "Q107755: PC MAPI: MAPIFindNext Not Recognizing MAPISaveMail Message IDs"
permalink: /kb/107/Q107755/
---

## Q107755: PC MAPI: MAPIFindNext Not Recognizing MAPISaveMail Message IDs

	Article: Q107755
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Messaging Application Program Interface (MAPI) MAPIFindNext function may not
	find a MAPISaveMail ID when the last 24 characters of that message ID contain
	nonzero values.
	
	MORE INFORMATION
	================
	
	MAPISaveMail saves a message ID with the first 16 characters containing possible
	nonzero values. The remaining 24 characters always contain zero values. When
	MAPIFindNext is used to search through messages, it will not find a MAPISaveMail
	message ID if the last 24 characters of that message ID contain nonzero values.
	The characters beyond 16 characters contain information MAPI uses to speed up
	MAPIFindNext calls.
	
	In order to access a message saved with MAPISaveMail, use MAPIReadMail. The first
	16 bytes is the only information necessary for MAPIReadMail to open the message.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
