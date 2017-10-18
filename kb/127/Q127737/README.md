---
layout: page
title: "Q127737: PC Win: Cannot Sort Shared Folders with the Windows Client"
permalink: kb/127/Q127737/
---

## Q127737: PC Win: Cannot Sort Shared Folders with the Windows Client

	Article: Q127737
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0b, 3.2, and 3.2a of Microsoft Mail for Windows, you cannot sort
	the shared folders.
	
	
	WORKAROUND
	==========
	
	You can use the Microsoft Mail for PC Networks, MS-DOS workstation to sort the
	shared folders, and then use the newly sorted folders in the Windows client.
	
	To sort the shared folders
	--------------------------
	
	1. In the MS-DOS client, logon as the owner.
	
	  If the owner of the file is not known, run the Administrators program
	  (ADMIN.EXE) against this postoffice and choose Folders, Print. This will
	  print a listing of all folders with their corresponding owners name.
	
	2. Choose Options, Folder, Modify, and select the desired shared folder. Change
	  the sort order.
	
	3. Update the folder, and exit the MS-DOS client.
	
	4. Run the Windows client.
	
	  The Windows client will now show the modified sort of the shared folders.
	
	
	Additional query words: 3.20 can't unable
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail300b kbMail320a
	Version           : WINDOWS:3.0b,3.2,3.2a
	
	=============================================================================
	
