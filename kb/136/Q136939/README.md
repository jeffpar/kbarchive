---
layout: page
title: "Q136939: MS Backup Error Message: A Serious Error Has Occurred..."
permalink: kb/136/Q136939/
---

## Q136939: MS Backup Error Message: A Serious Error Has Occurred...

	Article: Q136939
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the Backup tool, if you click the Start Restore button to
	begin restoring files from a backup set that spans multiple disks, and you then
	click the Cancel button while the "Preparing Restore Operation" message is
	displayed, you may receive the following error message:
	
	  A serious error has occurred in Microsoft Backup. Quit Microsoft Backup and
	  all other running programs, restart Backup, and then try again. If the
	  problem persists, try reinstalling Backup. To reinstall Backup, look up
	  'Add/Remove Programs' in the Windows Help Index.
	
	If you click OK, Backup closes.
	
	If you click the Cancel button at any time after Backup prompts you for the first
	disk, or while the "Preparing Restore Operation" message is displayed when you
	are restoring files from a backup set that does not span multiple disks, this
	problem does not occur.
	
	RESOLUTION
	==========
	
	If you want to cancel the restore process after you click the Start Restore
	button when you are restoring files from a backup set that spans multiple disks,
	wait until Backup prompts you for the first disk. You can then cancel the
	process without receiving an error message.
	
	If you do receive the error message stated above, click OK to quit Backup. If you
	want to restore files, start Backup again.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
