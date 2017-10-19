---
layout: page
title: "Q169674: XADM: Read Receipt May Not Be Delivered If Message Read Offline"
permalink: /kb/169/Q169674/
---

## Q169674: XADM: Read Receipt May Not Be Delivered If Message Read Offline

	Article: Q169674
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are working offline and read a message that requests a Read Receipt, the
	Read Receipt notification message should be sent the next time you connect to
	the computer running Microsoft Exchange Server. However, if you have exceeded
	your mailbox quota, the Read Receipt notification will not be delivered. In
	addition, a message similar to the following will be in the Deleted Items
	folder:
	
	  13:21:53 Synchronizing Mailbox 'John Doe'
	  13:21:53 Sending off-line mail
	  13:21:53 Error sending message
	  13:21:53[8004010F-501-0-0]
	  13:21:53The client operation failed.
	  13:21:53Microsoft Exchange Server Information Store
	  13:22:00 Synchronizing Folder 'Inbox'
	  13:22:011 item(s) updated in online folder
	  12:22:011 item(s) changed read-state in online folder
	  13:22:01 Synchronizing Views
	  13:22:01 Done
	
	CAUSE
	=====
	
	When the Read Receipt message is submitted to Microsoft Exchange Information
	Store (IS), the message is marked as a normal message, rather than a system
	generated message. Since the Read Receipt message appears to be a regular
	message, quota checks are performed against it. Because the quota check fails,
	the message is not sent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
