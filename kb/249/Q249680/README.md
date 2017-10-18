---
layout: page
title: "Q249680: XADM: Deleted Item Retention and Message Delete Process"
permalink: kb/249/Q249680/
---

## Q249680: XADM: Deleted Item Retention and Message Delete Process

	Article: Q249680
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the message deletion process and the method that Exchange
	Server uses to handle delete requests when the Deleted Item Retention option is
	selected, to help Exchange Server administrators understand this process and
	plan for this process accordingly.
	
	MORE INFORMATION
	================
	
	Client Perspective
	------------------
	
	When a client profile is configured to store messages on the server, a message
	exists in a folder, and a delete operation is requested, under normal
	circumstances, the message is moved to the Deleted Items folder. When you empty
	the Deleted Items folder, a request to delete the message is sent to the
	Exchange Server information store. You can also force the deletion of messages
	from any folder by pressing SHIFT+DELETE while the messages are selected.
	
	If a client profile is configured to deliver to a personal folder file (.pst)
	instead of to an Exchange Server mailbox, the message is actually deleted from
	the Inbox folder after the message is copied to the local .pst file, instead of
	being moved to the Deleted Items folder. For additional information about how to
	view the contents of the dumpster that contains items that have been deleted
	from folders other than the Deleted Items folder, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q178630 XADM: How to Recover Items That Do Not Touch the Deleted Items Folder
	
	Information Store Perspective
	-----------------------------
	
	When the information store receives a request to delete a message in a particular
	folder referenced by the Message ID, the information store determines if the
	message should be soft deleted (also referred to as logical deletion) or hard
	deleted (also referred to as physical deletion). A hard deletion of a message is
	performed when any of the following criteria are met:
	
	- The client specifically requests a hard deletion.
	
	- The effective item retention time is zero.
	
	- The registry key that indicates "Force Hard Deletes" is enabled for the
	  private or public information store.
	
	- The account requesting the deletion is a gateway.
	
	- The account requesting the deletion is a system.
	
	Soft Deletion
	-------------
	
	A soft deletion is performed if none of the criteria for a hard deletion are met.
	A flag is set on the entry in the MsgFolder table that indicates that the
	message has been soft deleted from the folder. Message counts for the mailbox
	and folder are also updated. At this point, the message is available to deleted
	item recovery.
	
	During the next scheduled information store maintenance process, each folder is
	examined to determine if any of the soft-deleted messages that the folder
	contains have passed the deleted item retention time. The deleted item retention
	time for the private and public information store is configured in the Exchange
	Server Administrator program. If such a message is found, the message is hard
	deleted. For more information about hard deletion, see the "Hard Deletion"
	section of this article. You can also control information store maintenance
	scheduling by using the Exchange Server Administrator program.
	
	For additional information about how to configure deleted item retention, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q246283 XADM: Set Deleted Mail Message Retention Time in Exchange Server 5.5
	
	For additional information about information store maintenance and scheduling,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q159196 XADM: Tasks Controlled by the IS Maintenance Schedule
	
	Hard Deletion
	-------------
	
	When a message is hard deleted, the message reference is immediately removed from
	the MsgFolder table, which is a mapping between entries in the folder table and
	the messages table. At this point, the message is no longer available to the
	mailbox that contains the folder, even if you use deleted item recovery. The
	reference count of the message is checked. When the message reference count
	drops to zero, which means that no other mailbox has a copy of the message, an
	entry is made in the DeletedMessages Table that indicates that the message is
	ready to be removed from the messages table.
	
	During the next background cleanup process, the entries in the DeletedMessages
	table are examined and the corresponding entries in the messages table are
	deleted. This process occurs every hour by default, but you can control this
	schedule by editing the following registry entries:
	
	- HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS
	  \ParametersPublic\Background Cleanup (value in milliseconds)
	
	- HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\
	  ParametersPrivate\Background Cleanup (value in milliseconds)
	
	For additional information about the background cleanup process, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q159306 XADM: IS Maintenance Tasks Not on IS Schedule
	
	Conclusion
	----------
	
	If you enable and increase the deleted item retention time, you may need to
	perform additional capacity planning. The following example demonstrates that
	messages can be present for an extended duration even after the messages have
	been deleted by the user:
	
	- Deleted item retention is set for 48 hours.
	
	- Information store maintenance is set to run between 3:00 A.M. and 7:00 A.M.
	
	- Background cleanup is configured to run every hour.
	
	In this example, if you delete a message at 8:00 A.M., the message does not
	become a candidate for hard deletion for 48 hours. The next information store
	maintenance procedure is scheduled to finish at 6 A.M., so the message is not
	hard deleted (the record is not removed) for 71 hours.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
