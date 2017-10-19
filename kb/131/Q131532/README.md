---
layout: page
title: "Q131532: How to Modify the System.ini File in Windows 95/98"
permalink: /kb/131/Q131532/
---

## Q131532: How to Modify the System.ini File in Windows 95/98

	Article: Q131532
	Product(s): Microsoft Home Miscellaneous Products
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbimu
	Last Modified: 01-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	To modify your System.ini file in Windows 95/98, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line and then click OK:
	
	  " sysedit " (without the quotation marks)
	
	  System Configuration Editor opens on the screen.
	
	3. On the Window menu, click C:\Windows\System.ini, where C:\Windows is the
	  drive and directory in which Windows 95/98 is installed.
	
	4. Make the changes you want to the System.ini file. When you finish making the
	  changes, click Exit on the File menu. When you are prompted to save current
	  changes, click Yes.
	
	5. Click Start, click Shut Down, and then click Restart.
	
	MORE INFORMATION
	================
	
	When you modify the System.ini file, System Configuration Editor creates a
	backup copy of the original System.ini file with an .syd extension. If you need
	to restore the original System.ini file, rename C:\Windows\System.syd to
	C:\Windows\System.ini, and then restart Windows.
	
	For information about how to rename files in Windows 95/98, click Start, click
	Help, click the Index tab, type "renaming" (without the quotation marks), and
	then double-click the "Renaming files" topic.
	
	Additional query words: configure sysconfig win95 win98
	
	======================================================================
	Keywords          : kbenv kbimu 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	
