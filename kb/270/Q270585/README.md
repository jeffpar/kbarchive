---
layout: page
title: "Q270585: PC Gen: Usrdmp Utility Lists Deleted Users"
permalink: kb/270/Q270585/
---

## Q270585: PC Gen: Usrdmp Utility Lists Deleted Users

	Article: Q270585
	Product(s): Microsoft Mail For PC Networks
	Version(s): 
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the Usrdmp utility (Usrdmp.exe), the output may display both
	deleted and active mailboxes.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the Listuser utility (Listuser.exe) to list the user
	mailboxes instead of the Usrdmp utility. The Listuser utility only displays
	active mailboxes. The Listuser utility is the replacement for the Usrdmp
	utility.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For additional information about the Listuser utility for Microsoft Mail for PC
	Networks, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities [Complete]
	
	
	Additional query words: userdump pcmail 3.2
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
