---
layout: page
title: "Q112208: PC Win: User Delete Privilege Does Not Apply to Windows Client"
permalink: kb/112/Q112208/
---

## Q112208: PC Win: User Delete Privilege Does Not Apply to Windows Client

	Article: Q112208
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Mail administrator can use the Mail Administrator (ADMIN.EXE) program to
	restrict several user privileges. One of the privileges that can be restricted
	is the delete privilege.
	
	This privilege only applies to Microsoft Mail for PC Networks, MS-DOS
	workstation. Microsoft Mail for Windows users can delete their mail messages
	from their Inbox (since their messages are in their .MMF files), even if they
	have not been granted the delete privilege. Furthermore, the messages will be
	successfully deleted from the .MBG file as soon as they are placed in the user's
	.MMF file. This is by design, to allow Mail for Windows users to work offline
	and control their own mail message file (MMF) storage.
	
	MORE INFORMATION
	================
	
	If you are restricted from deleting mail, the following error message appears
	when you try to delete mail from the Mail for PC Networks MS-DOS client:
	
	  Notice 10
	  This ID cannot delete mail.
	  Press ENTER to continue
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
