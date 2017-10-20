---
layout: page
title: "Q253478: XADM: Determining Default Permissions of Folders Using Mdbview"
permalink: /kb/253/Q253478/
---

## Q253478: XADM: Determining Default Permissions of Folders Using Mdbview

{% raw %}

	Article: Q253478
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 10-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The mailbox Default permissions may become out of synchronization with the
	permissions that are displayed in the shortcut menu for that mailbox. The
	shortcut menu permissions are displayed if you right-click a folder (for
	example, the Inbox or Calendar folders), click Properties in the shortcut menu,
	and then click the Permissions tab. If the Default permissions are displayed as
	None, this information may be inaccurate, and other mailboxes may be able to
	access the mailbox folders even though it appears that no permissions have been
	granted.
	
	For example, on the mailbox of user A, the default permissions are out of
	synchronization on the Inbox folder of user A. Another user, user B, logs on to
	mailbox B; user B has not been granted any special rights. After user B logs on
	to mailbox B, if user B clicks Open on the File menu, clicks Other User's
	Folder, and then clicks the Inbox folder of user A, user B has full access to
	the Inbox folder of user A. This behavior appears to be a security hole, but it
	is not; the permissions settings for that folder allow user B to connect to the
	folder.
	
	MORE INFORMATION
	================
	
	This article only applies if the Default permissions are the only permissions
	granted to a folder. Once multiple user permissions are granted, the issues
	becomes more complicated. However, the basics stay the same: if a user is not
	granted explicit permission to access a folder he can reset the default
	permission.
	
	This article assumes that you know how to log on to mailboxes by using the
	Mdbvu32 utility.
	
	After you log on to the appropriate mailbox by using the Mdbvu32 utility, select
	the folder in question. A Messaging Application Programming Interface (MAPI)
	field determines the default permissions of the folder that you have selected.
	Depending on the version of Mdbvu32 that you use, this field is displayed as one
	of the following:
	
	- PR_ACL_TABLE
	
	- 0x3FE0
	
	Following this entry, the values that correspond to the mapped permissions are
	displayed. The following table contains the permissions that are associated with
	these values.
	
	+-----------------------------------------+
	| Permission         | Value              | 
	+-----------------------------------------+
	| None               | =00                | 
	+-----------------------------------------+
	| Owner              | =00 FB 05 00 00 00 | 
	+-----------------------------------------+
	| Publishing Editor  | =00 FB 04 00 00 00 | 
	+-----------------------------------------+
	| Editor             | =00 7B 04 00 00 00 | 
	+-----------------------------------------+
	| Publishing Author  | =00 9B 04 00 00 00 | 
	+-----------------------------------------+
	| Author             | =00 1B 04 00 00 00 | 
	+-----------------------------------------+
	| Non-Editing Author | =00 13 04 00 00 00 | 
	+-----------------------------------------+
	| Reviewer           | =00 01 04 00 00 00 | 
	+-----------------------------------------+
	| Contributor        | =00 02 04 00 00 00 | 
	+-----------------------------------------+
	
	To reset the permissions back to None, remove the None setting and allow the
	entry to repopulate. After you do this, no one can access the folders.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
