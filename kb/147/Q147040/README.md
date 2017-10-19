---
layout: page
title: "Q147040: PC Win: Large Recipient List Stops Download of New Mail"
permalink: /kb/147/Q147040/
---

## Q147040: PC Win: Large Recipient List Stops Download of New Mail

	Article: Q147040
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you receive a message with a very large recipient list, you will not be
	able to download new mail, and the broken network icon will appear in the lower
	right corner of the Mail client.
	
	After you try to download the message several times, you will get the following
	error message:
	
	  Mail cannot send or receive messages because of problems downloading a
	  message.
	
	CAUSE
	=====
	
	The size of the To: list has exceeded the limit of the client. The message
	cannot be moved to the mail message file (.MMF) because of the size of the To:
	list.
	
	WORKAROUND
	==========
	
	To restore the client to normal operation, sign into your Mail account with the
	Microsoft Mail for PC Networks, MS-DOS workstation and delete the message.
	
	Another workaround, with the assistance of Microsoft Product Support, is to
	delete the .MAI file associated with the message from the shared file system
	database.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.5 of the Microsoft
	Mail for Windows. A fix for this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments.
	
	Contact Microsoft Product Support Services for more information on the
	availability of this fix.
	
	Additional query words: rQFE552 crash disconnected spoole pump outbox inbox
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail350 kbMail320
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	
