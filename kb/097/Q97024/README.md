---
layout: page
title: "Q97024: PC WRmt: Send All Messages Before Changing Drivers"
permalink: kb/097/Q97024/
---

## Q97024: PC WRmt: Send All Messages Before Changing Drivers

	Article: Q97024
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Mail Remote version 3.2 for Windows, if you want to change mail
	drivers, you must first send all of your messages (empty your Outbox). If you
	change mail drivers, any messages composed before you change drivers never leave
	the Outbox.
	
	Microsoft Mail identifies each message with a mail system type to ensure
	delivery. If your mailbox is not empty before you change drivers, Mail does not
	send the message because no available driver supports the mail system those
	messages require.
	
	Because the message remains in your Outbox, each time you exit Mail Remote for
	Windows, Mail prompts you to send the mail waiting in your Outbox. You must
	reload the driver you used to create the waiting messages to send them.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
