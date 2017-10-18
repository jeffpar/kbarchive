---
layout: page
title: "Q245417: PC WSPlus: Recovering Lost Installation of Schedule+ Information"
permalink: kb/245/Q245417/
---

## Q245417: PC WSPlus: Recovering Lost Installation of Schedule+ Information

	Article: Q245417
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes a procedure to recover Microsoft Schedule+ version 1.0
	information that a user has lost because of a catastrophic event such as a local
	hard disk failure with no back up, or a lost computer.
	
	MORE INFORMATION
	================
	
	You can use this procedure if the following conditions existed when the
	Schedule+ 1.0 information was lost:
	
	- The mail message file (MMF) was stored on the server.
	
	- The user was using Microsoft Mail (MS Mail) 3.x.
	
	- The user was using Schedule+ 1.0.
	
	To recover lost Schedule+ 1.0 information:
	
	1. Install the new operating system on the user's computer. The new operating
	  system does not need to be the same operating system that was previously
	  used.
	
	2. Install MS Mail 3.x.
	
	3. Install Schedule+.
	
	4. Map a drive to the user's postoffice, where drive M is mapped to the root of
	  the Maildata folder.
	
	5. Start Schedule+.
	
	6. In the dialog box, type the user's mailbox name.
	
	7. In the next prompt dialog box, type the user's password.
	
	After you perform these steps, the computer pauses, and then automatically loads
	all old information from both messaging and calendar files from the server. The
	user's Schedule+ information should now be current.
	
	After this procedure, if you want to, you can add the following universal naming
	convention (UNC) statement to the Msmail.ini file (located in the Windows
	folder)
	
	  <server_path>=\\<server>\<share>
	
	and then remove the drive M mapping.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail3xSearch
	Version           : WINDOWS:3.x
	Issue type        : kbhowto
	
	=============================================================================
	
