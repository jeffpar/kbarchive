---
layout: page
title: "Q110818: Mac Adm: Failure to Insert User into Group with Long Name"
permalink: /kb/110/Q110818/
---

## Q110818: Mac Adm: Failure to Insert User into Group with Long Name

	Article: Q110818
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
	
	When you use the Mail Network Administrator program in version 3.1d of Microsoft
	Mail for AppleTalk Networks to move a user who belongs to a group whose name is
	longer than 127 characters, the following error message will be displayed:
	
	  <username> could not be added to the group: <groupname> A Server
	  error occurred.
	
	RESOLUTION
	==========
	
	The Move User utility cannot insert a user into a group definition with a name
	whose length exceeds 127 characters. For successful insertion, manually add the
	user to the group or shorten the group name to fewer than 127 characters.
	
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
	
