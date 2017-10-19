---
layout: page
title: "Q245414: PC WSPlus: Recovering Calendar Info to a Schedule+ 1.0 Client"
permalink: /kb/245/Q245414/
---

## Q245414: PC WSPlus: Recovering Calendar Info to a Schedule+ 1.0 Client

	Article: Q245414
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a user loses his or her local Schedule+ 1.0 data because of a catastrophic
	event, such as a hard disk failure or a lost laptop, there is a procedure the
	user can follow to download the lost information from the server to the
	workstation. To perform the procedure, follow the steps as outlined in the "More
	Information" section.
	
	MORE INFORMATION
	================
	
	This article assumes all of the following conditions are true:
	
	- The Mail Message File (MMF) was stored on the server.
	
	- The user was using Microsoft Mail 3.x.
	
	- The user was using Schedule+ 1.0.
	
	To recover:
	
	1. Install a new operating system (OS). It is not necessary that it be the same
	  OS that was previously used.
	
	2. Install Microsoft Mail 3.x.
	
	3. Install Schedule+ 1.0.
	
	4. Map drive letter M:\ to the root of the post office database.
	
	5. Start Schedule+.
	
	6. Type the user's mailbox name in the Logon dialog box.
	
	7. At the next prompt, type the user's password.
	
	  At this point, the local workstation will download the lost data from the
	  server, thus recreating the local storage file.
	
	8. At this point, you may add the following UNC statement to the MsMail.ini file
	  (located in the Windows folder) instead of using the drive mapping if you
	  prefer:
	
	  "Serverpath=\\<server>\<share>" (without the quotation marks)
	
	  Remove the M:\ drive mapping.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN3xSearch
	Version           : WINDOWS:3.x
	Issue type        : kbhowto
	
	=============================================================================
	
