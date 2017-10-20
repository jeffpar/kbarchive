---
layout: page
title: "Q127769: PC Win: MoveUser Does Not Change Access Privileges"
permalink: /kb/127/Q127769/
---

## Q127769: PC Win: MoveUser Does Not Change Access Privileges

{% raw %}

	Article: Q127769
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use version 3.2 of Microsoft Mail for Windows, you may only have the
	following two address lists available in the Open Directory dialog box:
	
	  Personal Address Book (PAB)
	  Post Office List (POL)
	
	The Global Address List (GAL), as well as Other Post Offices and Gateways, if
	installed, may not available.
	
	RESOLUTION
	==========
	
	The postoffice administrator should modify the user's access privileges to
	include external with the Administration program (ADMIN.EXE), under Local-
	Admin, Modify.
	
	MORE INFORMATION
	================
	
	On page 335 of the Microsoft Mail 3.2 "Administrator's Guide":
	
	  "You can use Move User to move users from Microsoft Windows for Workgroups
	  postoffices, and from Microsoft Mail 2.1 and 3.0 postoffices."
	
	A Windows for Workgroups (WFW) postoffice is not designed to exchange mail with
	other postoffices. Therefore, the users on the WFW postoffice do not have
	external privileges.
	
	If the MoveUser utility, available with version 3.2 of Microsoft Mail for PC
	Networks, is used to move a user from a WFW to a Microsoft Mail for PC Networks
	postoffice, that user will not have external access privileges. The user will
	not be able to view any address lists except for the POL and the PAB.
	
	The mail system administrator must use ADMIN.EXE to modify the user's access
	privileges to include external. Once modified, all normal external address lists
	will be available to the user.
	
	Additional query words: 3.20 missing
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	

{% endraw %}
