---
layout: page
title: "Q96717: PC WRmt: Message Header Listing Incorrect"
permalink: /kb/096/Q96717/
---

## Q96717: PC WRmt: Message Header Listing Incorrect

	Article: Q96717
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.2 of Microsoft Mail Remote for Windows, some mail items are marked
	as unread after they are downloaded even though it appears that the messages
	should be marked as read.
	
	CAUSE
	=====
	
	This problem occurs because Mail does not mark an item as read until it is
	successfully downloaded to the remote client. The External Mail program
	(EXTERNAL.EXE) does not mark an item as successfully downloaded until the
	connection closes.
	
	RESOLUTION
	==========
	
	This behavior is part of the design of EXTERNAL.EXE.
	
	MORE INFORMATION
	================
	
	The External Mail program builds the header list before it downloads message
	items. It would be very difficult to build the header list after Mail downloads
	the last header item.
	
	The message number on the client is different from the message number on the
	postoffice. Therefore, Mail cannot compare message numbers to determine which
	messages have been read. One possible method would be to compare the user ID and
	the message subject. However, this method is ineffective because more than one
	message can have the same user ID and message subject (for example, an exchange
	of messages about a subject). Therefore, there is no easy method to track read
	messages other than tracking downloaded messages.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
