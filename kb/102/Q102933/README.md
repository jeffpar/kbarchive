---
layout: page
title: "Q102933: Mac Srv: User Name Retained in Group After User Is Removed"
permalink: kb/102/Q102933/
---

## Q102933: Mac Srv: User Name Retained in Group After User Is Removed

	Article: Q102933
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0 and 3.1 of Microsoft Mail for AppleTalk Networks, groups defined
	by the network manager may contain users that were recently removed from the
	mail system. (To reveal a user who was removed, select the specific group from
	the addressing screen and click Details.)
	
	Mail messages addressed to the group will be correctly delivered to any valid
	user accounts. At the same time, the message will be ignored for the user whose
	account was removed. However, no error message is returned to the sender of the
	message.
	
	In addition, if the same user name is added to the mail system again, that user
	name will propagate to other servers and will be displayed in the All List. At
	the same time, the "old" account information is still displayed in the group
	details. This may confuse some users because the listing in the group details
	does not refer to the newly created user; rather, it refers incorrectly to the
	previously removed user.
	
	CAUSE
	=====
	
	These symptoms occur if a user is added to a group and is then removed from the
	group server's All List before the group's changes propagate to other servers.
	The user name will be retained in the group definition even though the user has
	been deleted.
	
	Specifically, if the group definition propagates to the All List before the
	request to delete the user, the user will correctly be removed from the All
	List, and thus the group as well. However, if the user is removed from the All
	list before the new (or modified) group definition arrives, or if the user is
	deleted before he or she is added to the group server's All List, the Mail
	server does not check the members of the groups to make sure they still exist.
	Therefore, it is possible to encounter a case where a group contains members who
	no longer exist as local users on any server.
	
	RESOLUTION
	==========
	
	To resolve this problem, the network manager must modify any groups the old user
	appears in. This modification must take place on each server where the group was
	originally defined. Once the old user name definition is removed, the group
	details will display correctly. Additionally, the network manager can then add
	the new user definition.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
