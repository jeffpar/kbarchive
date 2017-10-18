---
layout: page
title: "Q75095: CLS Does Not Clear Screen on AT&amp;T 6300"
permalink: kb/075/Q75095/
---

## Q75095: CLS Does Not Clear Screen on AT&amp;T 6300

	Article: Q75095
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After starting an AT&T 6300, MS-DOS uses only one line of the screen to
	display commands such as DIR, TREE, and so on; however, the startup information
	remains on the screen even after issuing the CLS command. In the other cases,
	the system will hang at the DOS prompt after pressing ENTER a few times.
	
	WORKAROUND
	==========
	
	To work around this problem, add the following line to the CONFIG.SYS file, or
	use the debug script listed below.
	
	     device=ansi.sys /s
	
	The same behavior occurs on AT&T 6310 machines.
	
	MORE INFORMATION
	================
	
	The ANSI.SYS /S switch is an undocumented switch that will force the video to
	display in 25-line mode. MS-DOS 5.0 or 6.0 relies on byte 40h:84h of the BIOS to
	work in 43/30 line mode. The earlier version of MS-DOS did not use this byte.
	The following is a short program to patch the BIOS area into having the 25
	(actually 24, because it is is 0-based) value required for a CGA/MDA adapter.
	
	At the DOS prompt, type "debug" (without the quotation marks).
	
	You will then see the Debug prompt (a hyphen). Type the following, pressing ENTER
	after each line:
	
	Debug              User
	Response           Input
	--------           -----
	
	C:\>               debug
	-                  n patch.com
	-                  a
	xxxx:xxxx          mov ax,40
	xxxx:xxxx          mov es,ax
	xxxx:xxxx          es:
	xxxx:xxxx          mov byte ptr [84],18
	xxxx:xxxx          int 20
	xxxx:xxxx          <press ENTER>
	                  <press ENTER>
	-                  r cx
	:                  d
	-                  w
	-                  q
	
	This will create PATCH.COM, a file you can execute from the command prompt. If
	the problem is resolved, put an entry to execute the PATCH.COM file in the
	AUTOEXEC.BAT file.
	
	Additional query words: 6.22 boot ATT att6300 scroll scrolling 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
