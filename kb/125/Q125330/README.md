---
layout: page
title: "Q125330: CONN: Messages Stop Moving Between AppleTalk and PC Mail"
permalink: kb/125/Q125330/
---

## Q125330: CONN: Messages Stop Moving Between AppleTalk and PC Mail

	Article: Q125330
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection Gateway, version 1.0 
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages stop moving through the Mail Connection gateway from Microsoft Mail for
	AppleTalk Networks to Microsoft Mail for PC Networks. The messages begin to
	queue up; however, the log file does not show new mail being picked up.
	
	CAUSE
	=====
	
	This problem may be caused by a stuck or corrupted message in the Microsoft Mail
	Data file on the Microsoft Mail for AppleTalk Networks server.
	
	RESOLUTION
	==========
	
	Remove the stuck messages using the Mail Network Administrator. From the Admin
	menu, choose Queued Mail. View the list by date and delete the oldest message.
	
	NOTE: The "View by Date" option is only available with the Mail Network
	Administrator included with version 3.1d of Microsoft Mail for AppleTalk
	Networks. If you are using Mail 3.1, 3.1a, 3.1b, or 3.1c, you may have to delete
	all messages queued because the messages are sorted in the list by size only and
	it is difficult to ascertain which message is the oldest.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailConn100 kbMailConn320
	Version           : :1.0,3.2
	
	=============================================================================
	
