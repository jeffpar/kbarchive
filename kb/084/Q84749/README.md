---
layout: page
title: "Q84749: Dell CMOS Password Setup Hangs with Microsoft Mouse 8.2"
permalink: kb/084/Q84749/
---

## Q84749: Dell CMOS Password Setup Hangs with Microsoft Mouse 8.2

	Article: Q84749
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Microsoft mouse driver version 8.2 for MS-DOS (MOUSE.COM or
	MOUSE.SYS which comes with Microsoft Windows operating system version 3.1) with
	Dell CMOS's system password set for "after boot," the computer may hang after
	the password has been entered and any external command is executed (any
	executable).
	
	Dell has confirmed this to be a problem and is researching solutions.
	
	MORE INFORMATION
	================
	
	Mouse Driver in AUTOEXEC.BAT
	----------------------------
	
	If the mouse driver is used in the AUTOEXEC.BAT
	
	  C:\WINDOWS\MOUSE.COM
	
	then after the computer starts and you enter your password, the system will lock
	up after you press ENTER for any external command. This problem will not occur
	for any internal command (DIR, CD, and so on).
	
	Once the computer has locked up, pressing CTRL+ALT+DEL will not have any effect.
	
	Mouse Driver in CONFIG.SYS
	--------------------------
	
	If the mouse driver is used in the CONFIG.SYS file
	
	      DEVICE=C:\WINDOWS\MOUSE.SYS
	
	the system will lock up when you start the system and the mouse driver will be
	reported as not loaded.
	
	Note: At this point it will be necessary to start with a system disk that also
	contains a CONFIG.SYS and AUTOEXEC.BAT file.
	
	If the system password is set to be activated "before boot," then the problem
	does not exist.
	
	How to Activate Dell CMOS Password
	----------------------------------
	
	The Dell CMOS setup is activated by the following keys pressed simultaneously:
	
	  CTRL+ALT+ENTER
	
	To get to the screen containing the password options, press the following keys
	simultaneously:
	
	  ALT+N  (N = next screen)
	
	Additional query words: 3.10 hang dead lock
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
