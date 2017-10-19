---
layout: page
title: "Q131999: PC Adm: Restoring a Deleted Mail Account"
permalink: /kb/131/Q131999/
---

## Q131999: PC Adm: Restoring a Deleted Mail Account

	Article: Q131999
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be necessary to restore a user mail account that was accidentally
	deleted.
	
	If the user was using Microsoft Mail for Windows, you can restore the old mail
	message file (MMF) from backup and import it to the new account.
	
	If the user was using Microsoft Mail for PC Networks, MS-DOS workstation, you can
	use the steps below to access the old mail account:
	
	1. Restore from backup a copy of the postoffice prior to the deletion. Restore
	  it to a location other than the existing postoffice location.
	
	2. Using MOVEUSER, login to the current postoffice and the restored copy of the
	  postoffice.
	
	3. Drag and drop the user from the restored copy of the postoffice to the
	  current postoffice.
	
	4. The user will then have access to old mail, and any private and shared
	  folders that the user created. The user will not be readded to groups that he
	  or she was a part of before deletion. Consequently, group folders created by
	  the user will no longer be available.
	
	MORE INFORMATION
	================
	
	This process simplifies the restore by not requiring archiving/unarchiving of
	folders. However, the user will now have a new hexid, and all PAB entries
	referencing this user will be invalid.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
