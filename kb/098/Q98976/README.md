---
layout: page
title: "Q98976: Mac Hyp: Out of the Office Stack Sends Only One Message"
permalink: /kb/098/Q98976/
---

## Q98976: Mac Hyp: Out of the Office Stack Sends Only One Message

	Article: Q98976
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 3.0 and 3.1 of Microsoft Mail for AppleTalk Network, the Out of the
	Office (OOF) message Hypercard stack sends only one OOF message per user from
	whom mail is received.
	
	MORE INFORMATION
	================
	
	The OOF stack keeps a table of users it has returned OOF messages to. Additional
	messages received from those users are not responded to.
	
	The table containing this information is cleared each time the OOF stack is
	restarted.
	
	In addition, the OOF stack does not send a message to another OOF stack running
	because this would create an endless loop of messages.
	
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard300 kbSDKMailHypercard310
	Version           : :3.0,3.1
	
	=============================================================================
	
