---
layout: page
title: "Q71511: Programs to Turn CAPS LOCK Key Off or On"
permalink: /kb/071/Q71511/
---

## Q71511: Programs to Turn CAPS LOCK Key Off or On

{% raw %}

	Article: Q71511
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the MS-DOS DEBUG utility to create a program (CAPS_ON.COM) that
	turns on the CAPS LOCK key. (Note: You can modify CAPS_ON.COM to turn CAPS LOCK
	off; see the instructions following the steps for creation of CAPS_ON.COM.)
	
	MORE INFORMATION
	================
	
	Follow the steps below to create CAPS_ON.COM:
	
	1. Create a DEBUG script file (CAPS_ON.SCR) using a text editor such as the
	  MS-DOS EDLIN line editor. (See the "Microsoft MS-DOS User's Guide" for more
	  information on EDLIN.) The CAPS_ON.SCR file must contain the following lines
	  exactly (where <ENTER> means to press the ENTER key on the keyboard):
	
	  a 100<ENTER>
	  mov ax,0040<ENTER>
	  mov ds,ax<ENTER>
	  or byte ptr [0017],40<ENTER>
	  mov ax,4c00<ENTER>
	  int 21<ENTER>
	  <ENTER>
	  r cx<ENTER>
	  000f<ENTER>
	  n caps_on.com<ENTER>
	  w<ENTER>
	  q<ENTER>
	
	2. Redirect this script file into the DEBUG utility by entering the following
	  command at the DOS prompt:
	
	  " C:\>debug < caps_on.scr" (without the quotation marks)
	
	3. The CAPS_ON.COM program has now been created. To test the program, turn off
	  the CAPS LOCK key, then call the CAPS_ON.COM program by entering the
	  following command:
	
	  " C:\>caps_on.com" (without the quotation marks)
	
	  This should result in the CAPS LOCK indicator light coming on just as if you
	  had pressed the CAPS LOCK key.
	
	This program can be modified to turn CAPS LOCK off rather than on. To do this,
	follow the steps in the example above, replacing all instances of "CAPS_ON" with
	"CAPS_OFF" and substituting the following line for the fourth line of the DEBUG
	script file:
	
	  and byte ptr [0017],bf<ENTER>
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
