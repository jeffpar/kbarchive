---
layout: page
title: "Q101754: PC Win: MOVEUSER.EXE May Lose Password If Imported from .MMU"
permalink: /kb/101/Q101754/
---

## Q101754: PC Win: MOVEUSER.EXE May Lose Password If Imported from .MMU

	Article: Q101754
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Move User utility (MOVEUSER.EXE) to move users in the following
	three ways:
	
	- Drag the users to specified postoffices (POs).
	
	-or-
	
	- Export a user to an .MMU file, and then import that user into the
	  destination.
	
	-or-
	
	- Highlight the user to be moved, and then choose Move from the File menu.
	
	If you use one of the latter two ways to move a user, there is a 50 percent
	chance that the user will lose his or her password.
	
	MORE INFORMATION
	================
	
	The environment where users lose their passwords is predictable and is dependent
	on enhanced security (EN). There are four scenarios that administrators
	preparing to use MOVEUSER.EXE should be aware of:
	
	  Source PO          Destination PO          Password Moved
	  ---------------------------------------------------------
	  EN = on               EN = on                   Yes
	  EN = on               EN = off                  Yes
	  EN = off              EN = off                  No
	  EN = off              EN = on                   No
	
	The Move User utility is dependent on enhanced security because MOVEUSER.EXE
	re-encrypts or doesn't encrypt the user's password, depending on how the
	MASTER.GLB recorded enhanced security.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
