---
layout: page
title: "Q258222: XADM: How Mailbox Manager Uses the System Cleanup Folder"
permalink: /kb/258/Q258222/
---

## Q258222: XADM: How Mailbox Manager Uses the System Cleanup Folder

{% raw %}

	Article: Q258222
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 29-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how Mailbox Manager uses the System Cleanup folder, and
	the way that deleted item retention interacts with the System Cleanup folder.
	
	MORE INFORMATION
	================
	
	When you set the deletion mode to "Move to System Cleanup Folders", a replica of
	the existing mailbox folder hierarchy is created in a top-level folder called
	the System Cleanup folder. Targeted messages are moved to the corresponding
	folder in the System Cleanup folder, which retains the folder location of a
	given message.
	
	If a user deletes a message from the System Cleanup folder, it is moved to the
	Deleted Items folder. If a message is deleted from the Deleted Items folder, you
	may be able to recover the message, depending on the deleted item retention
	time.
	
	If items are deleted from the System Cleanup folder based on the policies for
	folder age limits on System Cleanup folders, these items are deleted permanently
	from the user's mailbox and cannot be recovered.
	
	Additional query words: item recovery
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
