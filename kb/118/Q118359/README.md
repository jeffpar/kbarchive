---
layout: page
title: "Q118359: Mac Srv: Mail Data Files Can Increase in Size Quickly"
permalink: kb/118/Q118359/
---

## Q118359: Mac Srv: Mail Data Files Can Increase in Size Quickly

	Article: Q118359
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 3.0 and 3.1 of Microsoft Mail for ApleTalk Networks, the Mail Data
	file can grow large quickly in some known cases. Many of Mail's operations or
	algorithms use a lot of disk space, to be reclaimed during compression in the
	interest of making the Mail server faster.
	
	MORE INFORMATION
	================
	
	Sending an enclosure to a user on another server is expected to temporarily
	increase the destination server's data file by twice the size of the enclosure.
	This is because a server to server "wrapper" containing the enclosure and the
	message is sent across the network, which the destination server then must
	unpack into its parts: the enclosure and the message.
	
	The original wrapper is then "deleted," but its space in the data file may not be
	reclaimed until the server has been relatively idle for a while (for example,
	overnight). This unreclaimed space may actually be used by the server before the
	compression routines kick in. In some cases (for example, an active server with
	lots of free space in its data file), an incoming message or enclosure may
	actually not increase the size of the data file at all; free space within the
	data file (of the right size) can be used for the wrapper and its parts.
	
	Breaking up this wrapper is called "message delivery." This is where all
	recipients of the message get a copy in their mailboxes. Mail does not duplicate
	the message for each recipient, but puts a reference to the message in each
	recipient's mailbox.
	
	This means copying the mailbox, adding a reference to the message, and deleting
	the old mailbox. Each of these mailbox updates temporarily requires twice the
	size of the mailbox being updated since the mailbox is copied to a new place in
	the data file and the new message appended to the mailbox. For a message to many
	users with big mailboxes, this could easily increase, by a lot, the space
	temporarily required for message delivery.
	
	In addition, a completely compressed data file tends to increase in size more
	quickly when it gets busy. Any new mail requires that the mailbox and the new
	message be appended to the end of the data file. Each new message to the same
	user in a short period of time means more and more space at the end of the data
	file, even though there is a lot of free space inside the data file, but is not
	big enough to accommodate the users mailbox and the new incoming message.
	
	When a message is deleted, the user's mailbox is updated, which can use up to
	twice the mailbox size on disk, just like at message delivery time.
	
	NOTE: The message and any enclosures are not actually deleted until all users
	have deleted the message.
	
	Additional query words: 3.00 3.10 Mac Server
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
