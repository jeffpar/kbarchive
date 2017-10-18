---
layout: page
title: "Q71632: Programs to Turn NUM LOCK On and Off"
permalink: kb/071/Q71632/
---

## Q71632: Programs to Turn NUM LOCK On and Off

	Article: Q71632
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.x
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During the power on self test (POST), the ROM BIOS on some computers will
	activate the keyboard's NUM LOCK key. As a result, each time you reboot the
	system, the NUM LOCK key must be manually turned off before you can access the
	editing keys (the arrow keys, and so forth) on the numeric keypad. This behavior
	is a function of the computer's hardware, rather than of MS-DOS.
	
	MORE INFORMATION
	================
	
	
	In MS-DOS version 6.x adding
	
	  NUMLOCK=OFF
	
	to the CONFIG.SYS file will turn off the NUM LOCK key.
	
	The program described below (NUM_OFF.COM) can be called from your AUTOEXEC.BAT to
	turn off the NUM LOCK key automatically each time the system is booted.
	
	You can use the MS-DOS DEBUG command to create a program (NUM_OFF.COM) that will
	turn the NUM LOCK key off. To create NUM_OFF.COM, do the following:
	
	1. Create a DEBUG script file (NUM_OFF.SCR) using a text editor such as the
	  MS-DOS Edlin line editor (see the "MS-DOS User's Guide" for more information
	  on Edlin.) The NUM_OFF.SCR file should contain the following lines exactly
	  (where <ENTER> means to press the ENTER key on the keyboard):
	
	    a 100<ENTER>
	     mov ax,0040<ENTER>
	     mov ds,ax<ENTER>
	     and byte ptr [0017],df<ENTER>
	     mov ax,4c00<ENTER>
	     int 21<ENTER>
	     <ENTER>
	     r cx<ENTER>
	     000f<ENTER>
	     n num_off.com<ENTER>
	     w<ENTER>
	     q<ENTER>
	
	2. Redirect this script file into the DEBUG utility by entering the following
	  command at the DOS prompt:
	
	  " C:\>debug < num_off.scr" (without the quotation marks)
	
	3. The NUM_OFF.COM program has now been created. To test the program, turn the
	  NUM LOCK key on, then call the NUM_OFF.COM program by entering the following
	  command:
	
	  " C:\>num_off.com" (without the quotation marks)
	
	  This procedure should result in the NUM LOCK indicator light going out just as
	  if you had pressed the NUM LOCK key.
	
	This program can be modified to turn the NUM LOCK on rather than off. To do this,
	follow the steps in the example above, replacing all instances of "NUM_OFF" with
	"NUM_ON" and substituting the following line for the fourth line of the DEBUG
	script file:
	
	  or byte ptr [0017],20<ENTER>
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 4.01a 5.00 win95
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.x
	
	=============================================================================
	
