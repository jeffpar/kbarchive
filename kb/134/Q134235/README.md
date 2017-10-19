---
layout: page
title: "Q134235: Mac Srv: Group Messages w/ Gateway Users May Go to Wrong User"
permalink: /kb/134/Q134235/
---

## Q134235: Mac Srv: Group Messages w/ Gateway Users May Go to Wrong User

	Article: Q134235
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1d
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1d 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message to a Macintosh global group defined on another Macintosh
	postoffice, and that group contains gateway addresses, the message may go to the
	wrong gateway user.
	
	This only affects those gateway users who may have been deleted from the
	originating Macintosh server when those changes did not propagate properly to
	the downstream servers; Mail for AppleTalk Network users who are deleted do
	propagate correctly.
	
	CAUSE
	=====
	
	Normally, when you delete a user all groups containing that user are
	automatically updated. For gateway users, the situation is different.
	
	There are a limited number of identifiers for gateway users in Mail for AppleTalk
	Networks, and when a gateway user is deleted and a new gateway user is added,
	the ID of the deleted user can be reused for the new address. When this occurs,
	the group entry may not be removed.
	
	One of two situations may occur:
	
	- The old user remains in the group on the downstream server, and any message
	  to the group will go to an unknown user.
	
	-or-
	
	- The group will contain the new gateway user and not the old, deleted user. As
	  a result, the message goes to the wrong user.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.1d of Microsoft Mail
	for AppleTalk Networks. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.10d
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310d
	Version           : WINDOWS:3.1d
	
	=============================================================================
	
