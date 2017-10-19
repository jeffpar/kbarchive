---
layout: page
title: "Q121926: Second CD-ROM Drive Not Detected in Windows 95"
permalink: /kb/121/Q121926/
---

## Q121926: Second CD-ROM Drive Not Detected in Windows 95

	Article: Q121926
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
	
	When you install Windows 95 on a system with two CD-ROM drives, one of the
	CD-ROM drives is not detected.
	
	CAUSE
	=====
	
	This problem occurs when Windows 95 loads protected-mode drivers for one of the
	CD-ROM drives and the second CD-ROM drive is running with real-mode drivers
	loading in the CONFIG.SYS and AUTOEXEC.BAT files. Windows 95 assumes that the
	real-mode and protected-mode drivers reference the exact same drive; therefore,
	it assigns the drive letter for the protected-mode drive to be the same as the
	existing real-mode drive letter.
	
	RESOLUTION
	==========
	
	Assign the CD-ROM drive running in protected mode to a different drive letter.
	
	You can change the drive letter of a CD-ROM drive by performing the following
	steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the System icon, then click the Device Manager tab.
	
	3. Select the CD-ROM you want to change from the list, then click the Properties
	  button.
	
	4. Click the Settings tab.
	
	5. In the Reserved Drive Letters section, set Start Drive Letter and End Drive
	  Letter to the drive letter you want the CD-ROM to use. Click the OK button.
	
	6. Click the Start button on the taskbar and click Shut Down. Then click Restart
	  The Computer.
	
	The CD-ROM drive letter should now be the letter you selected and the second
	CD-ROM should be accessible.
	
	To change the drive letter of the CD-ROM using MSCDEX, use the MSCDEX /L: switch
	on the MSCDEX line in the AUTOEXEC.BAT file. For example, inserting a /L:E on
	the MSCDEX line would change the drive letter of the of the CD-ROM using MSCDEX
	to E.
	
	Additional query words: cdrom protected mode
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
