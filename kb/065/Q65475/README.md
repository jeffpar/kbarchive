---
layout: page
title: "Q65475: OS/2 LAN Manager: How to Remove Local and User-Level Security"
permalink: kb/065/Q65475/
---

## Q65475: OS/2 LAN Manager: How to Remove Local and User-Level Security

	Article: Q65475
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Question:
	
	I accidentally installed local and user-level security on my server. I only
	wanted to have share-level security installed. How do I remove local and
	user-level security?
	
	Response:
	
	Using the Setup program, perform the following steps to first remove local
	security, and then remove user-level security:
	
	1. Log on under local security with a NET LOGON command as "admin", with a
	  password of "password" (or whatever you may have changed it to).
	
	2. Run the Setup program in the LANMAN directory and turn the local security
	  option off.
	
	3. Shut down OS/2 and reboot the computer.
	
	4. Log onto the network using a NET LOGON command as "admin", with a password of
	  "password" (or whatever you may have changed it to).
	
	5. Stop all LAN Manager services with a NET STOP RDR command.
	
	6. Run the Setup program in the LANMAN directory and change from user-level to
	  share-level security.
	
	7. Start the server with a NET START SERVER command.
	
	You should now be running only share-level security.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
