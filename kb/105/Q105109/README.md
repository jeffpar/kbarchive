---
layout: page
title: "Q105109: PC Win: .MMF File Size Increases by Twice the Size of Message"
permalink: kb/105/Q105109/
---

## Q105109: PC Win: .MMF File Size Increases by Twice the Size of Message

	Article: Q105109
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With versions 3.0, 3.0b, and 3.2 of Microsoft Mail for Windows, the size of a
	Mail message file (MMF) may increase by more than twice the size of a message
	received.
	
	Additionally, if the sender of the message selected the Save Copy Of Outgoing
	Message In Sent Mail Folder option, the sender's .MMF file may also increase by
	more than twice the size of the message sent.
	
	MORE INFORMATION
	================
	
	The receiver's .MMF file may increase by more than twice the size of the
	received message because as soon as the message is opened for reading, a
	temporary (duplicate) copy is created. This duplicate is the size of the
	original message. This temporary copy is created to allow the user to modify the
	message received and then be given the Save Changes To Message? option. This
	process allows the user to discard any changes and restore the original
	message.
	
	On the sender's side, a message is created for sending. When the message is sent,
	a copy is made and is put into the Sent Mail folder. The original message then
	is deleted. Thus, two copies of the message were created, and space had to be
	allocated for both these copies. Even though the first copy of the message was
	deleted, the space is only logically freed. Until the .MMF compression runs, the
	space occupied by the first message will not be physically freed. This is done
	so that if another large message (or a set of messages) is sent or received, the
	program will be able to work faster, because it already has the disk space
	allocated.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
