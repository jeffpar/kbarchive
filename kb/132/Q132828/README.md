---
layout: page
title: "Q132828: Selecting Empty CD-ROM Drive for Backup Causes Backup to Hang"
permalink: kb/132/Q132828/
---

## Q132828: Selecting Empty CD-ROM Drive for Backup Causes Backup to Hang

	Article: Q132828
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Compare or Restore commands in Windows 95 Backup, Backup may
	stop responding, and then you cannot quit the Backup applet.
	
	CAUSE
	=====
	
	You selected an empty CD-ROM drive for the backup operation.
	
	RESOLUTION
	==========
	
	To quit the Backup applet, press CTL+ALT+DELETE to bring up the Close Program
	dialog box. In the Close Program dialog box, click Backup, and then click the
	End Task button.
	
	MORE INFORMATION
	================
	
	An empty CD-ROM drive can be selected for a backup operation; however, doing so
	can eventually cause the Backup applet to stop responding during a compare or
	restore operation.
	
	When you first select an empty CD-ROM drive for a backup operation, you receive
	an error message. When you cancel the error message, if you do not also deselect
	the drive, the drive remains selected during a backup of other drives or files.
	
	Although the backup operation appears to complete successfully, the Backup applet
	stops when you try to compare or restore the backup files.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
