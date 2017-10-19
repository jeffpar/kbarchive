---
layout: page
title: "Q83734: HP Vectra QS/20 Wrong HIMEM.SYS Slows Machine"
permalink: /kb/083/Q83734/
---

## Q83734: HP Vectra QS/20 Wrong HIMEM.SYS Slows Machine

	Article: Q83734
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The HIMEM.SYS file in the Microsoft Windows operating system version 3.1 may not
	select the correct A20 handler when loading on a Hewlett-Packard (HP) Vectra
	QS/20. This causes the machine to run slower in Windows 3.1 than in Windows 3.0.
	To correct this problem, do the following:
	
	- Edit the CONFIG.SYS file with a standard ASCII text editor. Modify the
	  HIMEM.SYS line as follows:
	
	  device=C:\WINDOWS\HIMEM.SYS /M:14
	
	Note: It is always a good idea to have a system startup floppy disk whenever you
	modify the HIMEM.SYS file.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
