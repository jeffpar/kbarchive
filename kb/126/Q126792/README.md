---
layout: page
title: "Q126792: PC Win WRmt: Err Msg: Following Recipient(s) Could Not Be..."
permalink: kb/126/Q126792/
---

## Q126792: PC Win WRmt: Err Msg: Following Recipient(s) Could Not Be...

	Article: Q126792
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2, 3.2a 
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a mail message in Microsoft Mail Remote for Windows using the
	Mail Remote driver and attempt to send the message with the Microsoft Mail for
	PC Networks driver, the following error may occur:
	
	  Message Undeliverable:
	  The following recipient(s) could not be reached:
	
	  Mailbox(es)
	
	  The recipient has been deleted or has no e-mail address.
	
	The same error may also occur when you create a message with the Mail for PC
	Networks driver and send it from the Mail Remote driver.
	
	RESOLUTION
	==========
	
	To be able to address and compose a message with the Mail Remote for Windows
	driver and send it from Mail for PC Networks driver, the recipient should be
	selected from the Personal Address Book (PAB).
	
	
	MORE INFORMATION
	================
	
	This error is to be expected, because the mail message address was resolved and
	prepared to be sent using the driver that created it. See the "Important"
	section on page 15 of the Mail Remote "User's Guide."
	
	Additional query words: 3.20 sending
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b kbMail320a kbMailRemote320
	Version           : WINDOWS:3.0,3.0b,3.2,3.2a
	
	=============================================================================
	
