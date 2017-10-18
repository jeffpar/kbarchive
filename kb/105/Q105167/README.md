---
layout: page
title: "Q105167: PC Win: Err Msg: Additional Data... Could Not Be Retrieved"
permalink: kb/105/Q105167/
---

## Q105167: PC Win: Err Msg: Additional Data... Could Not Be Retrieved

	Article: Q105167
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft LAN Manager Extraction utility (LMEXT.EXE) attempts to
	extract more information than the program is capable of using, it may display
	the following error:
	
	  Error 234: Additional data is available but could not be retrieved
	
	CAUSE
	=====
	
	The LMEXT.EXE utility will not record any information into the import file. The
	error message appears when a system is accessed with approximately 600 users or
	when 32K of users are retrieved.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Prevent the users from accessing the system.
	
	2. Back up the server.
	
	3. Delete users until the number of users is fewer than 550.
	
	4. Run the LMEXT.EXE utility.
	
	5. Restore the server from the backup.
	
	6. Delete the 550 users whose definitions were created in the previous import
	  file. (Repeat steps 4 through 6 if more than 1050 users are defined on the
	  system).
	
	7. Run the LMEXT.EXE utility again.
	
	8. Restore the server from the backup.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
