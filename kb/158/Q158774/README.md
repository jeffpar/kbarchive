---
layout: page
title: "Q158774: Sage.dat Files Do Not Match When Compared After Backup"
permalink: /kb/158/Q158774/
---

## Q158774: Sage.dat Files Do Not Match When Compared After Backup

	Article: Q158774
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compare files after performing a backup operation, the Sage.dat files
	may not match.
	
	CAUSE
	=====
	
	System Agent accesses this file when it runs an event (such as a check for low
	disk space notification). If this occurs after the Sage.dat file is backed up,
	but before the comparison is completed, the date and time stamps differ.
	
	RESOLUTION
	==========
	
	To work around this behavior, disable System Agent before you perform a backup
	operation. To disable System Agent, use the right mouse button to click the
	System Agent icon on the taskbar, and then click Suspend System Agent on the
	menu that appears.
	
	When the backup operation is finished, activate System Agent again by using the
	right mouse button to click the System Agent icon on the taskbar, and then
	clicking Suspend System Agent on the menu that appears.
	
	Additional query words: sage
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
