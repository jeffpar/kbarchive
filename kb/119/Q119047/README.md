---
layout: page
title: "Q119047: CONN: &quot;Mail Failure&quot; Responding to Unlabeled Return Receipt"
permalink: kb/119/Q119047/
---

## Q119047: CONN: &quot;Mail Failure&quot; Responding to Unlabeled Return Receipt

	Article: Q119047
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The differences in the Return Receipt option in Microsoft Mail for PC Networks
	and MS Mail for AppleTalk networks may result in "Mail failure" error messages.
	
	The "Mail Failure" error occurs if an AppleTalk Mail user sends a message to a PC
	Mail user with the return-receipt option turned on. If the PC Mail user reads or
	deletes the message, the return receipt comes back to the Mac account addressed
	from POSTOFFICE. Since it is not a return-receipt message, the AppleTalk Mail
	user can reply to it; however, doing so results in a "Mail failure" message.
	
	CAUSE
	=====
	
	This problem occurs because of the difference in functionality between the
	AppleTalk and PC Mail systems. On the AppleTalk Mail side, you cannot reply to a
	return-receipt message, but in this instance the Mail Connection Gateway creates
	the message without labeling it as type "return receipt." As a result, the
	AppleTalk Mail user can reply to the message. The reply goes to the user
	POSTOFFICE, resulting in the "Mail failure" message.
	
	RESOLUTION
	==========
	
	You can avoid the "Mail failure" message by not deleting the message that is
	sent from a Macintosh to a PC with a return receipt. Since you may not want to
	keep that message around forever, you can delete it and ignore the "Mail
	failure" message. You can also avoid using the Return Receipt feature when
	mailing to combinations of AppleTalk Mail and PC Mail mailboxes.
	
	MORE INFORMATION
	================
	
	The following is an example of the "Mail failure" message from the MSGATE.LOG
	file:
	
	Mac-PC From: johndoe.al Date: 10-22-92 16:19:00 Subject: From Mac Side
	PC-Mac From: POSTOFFICE Date: 10-22-92 16:15:00 Subject: Registered: Joh
	Mac-PC From: johndoe.al Date: 10-22-92 16:22:00 Subject: RE: Registered:
	170 - # - # - Bad address NETWORK/POSTOFFICE/POSTOFFICE -- ignored.
	PC-Mac From: POSTMASTER Date: 10-22-92 16:19:00 Subject: Mail failure
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
