---
layout: page
title: "Q93076: PC Adm: Deleting Users Does Not Delete Users from Groups"
permalink: kb/093/Q93076/
---

## Q93076: PC Adm: Deleting Users Does Not Delete Users from Groups

	Article: Q93076
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Deleting a local user from a postoffice in version 3.0 or 3.0a of Microsoft Mail
	for PC Networks does not remove the user's name from any group listings.
	
	CAUSE
	=====
	
	The Mail Administrator program (ADMIN.EXE) does not search through all groups to
	delete a user's name.
	
	RESOLUTION
	==========
	
	You can leave the user's name in group lists--Mail will not send mail to an
	invalid user name. If you want to remove the name anyway, edit the group list by
	selecting Groups from the Local-Admin menu in ADMIN.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.0a of
	Microsoft Mail for PC Networks. This problem was corrected in version 3.2.
	
	Additional query words: 3.00 3.00a 3.20 Admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300 kbMailPCN300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
