---
layout: page
title: "Q129781: PC DB: Move User Err: A User Already Exists on the Postoffice"
permalink: /kb/129/Q129781/
---

## Q129781: PC DB: Move User Err: A User Already Exists on the Postoffice

	Article: Q129781
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the Move User utility, and attempt to move a single user from one
	postoffice (PO) to another PO, the following error message can occur on the
	destination PO:
	
	  A user already exists on the Postoffice Address List with the same user name.
	  Change the user name assigned to this user.
	
	RESOLUTION
	==========
	
	Delete the externally defined name in the Postoffice Address List (POL) from the
	Microsoft Mail for PC Networks Administration program (ADMIN.EXE); from the
	Address menu, choose Delete.
	
	MORE INFORMATION
	================
	
	On page 136 of the Microsoft Mail 3.2 "Administrator's Guide." it explains why
	you may want externally defined addresses in your POL.
	
	  "You want to add a group containing external addresses to the Global Address
	  List (GAL). You do this by adding the external addresses to the POL, creating
	  a group, and then rebuilding the GAL either via directory synchronization or
	  with the Rebuild utility. Groups that were on the Postoffice Address List are
	  automatically added to the GAL."
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
