---
layout: page
title: "Q81740: CON, Switches=/K, ANSI.SYS /K, and Reading Keyboard Input"
permalink: kb/081/Q81740/
---

## Q81740: CON, Switches=/K, ANSI.SYS /K, and Reading Keyboard Input

	Article: Q81740
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS versions 4.x and later read information from extended or enhanced (101
	and 102 key) keyboards differently than from standard (84 key) keyboards. This
	allows, for example, MS-DOS to determine which ENTER key is pressed on enhanced
	keyboards.
	
	Some older terminate-and-stay-resident (TSR) programs that hook into the keyboard
	interrupt don't recognize there are two ways to read from enhanced keyboards. It
	is possible in MS-DOS 4.x and later for TSRs (and other applications) to fail
	because of this change in how MS-DOS reads from enhanced keyboards.
	
	If you encounter problems using the keyboard after upgrading to MS-DOS 4.x or
	later, it may be related to this change. You can force MS-DOS to read from
	enhanced keyboards like standard keyboards. If you are not using ANSI.SYS, use
	the following command in the CONFIG.SYS file:
	
	  switches=/k
	
	If you are using ANSI.SYS, load it using the /K switch. For example:
	
	  device=c:\dos\ansi.sys /k
	
	MORE INFORMATION
	================
	
	The internal MS-DOS CON[sole] device driver is responsible for reading input
	from the keyboard and displaying character output on the screen. Whenever
	possible, MS-DOS operates through the ROM BIOS, and CON is no exception. CON
	uses the ROM BIOS Interrupt 16h service to access the keyboard.
	
	In MS-DOS 1.x, 2.x, and 3.x, CON always uses INT 16h function 0h to read
	characters from the BIOS keyboard buffer and function 1h to check the keyboard
	status.
	
	In MS-DOS 4.x, 5.x, 6.0, and 6.2, MS-DOS uses INT 16h functions 10h and 11h if an
	enhanced keyboard is present. Functions 10h and 11h were added to these versions
	to support enhanced keyboards on ATs and PS/2s.
	
	Enhanced keyboards have two of each of the following keys in addition to ARROW
	keys.
	
	- CTRL
	
	- ALT
	
	- ENTER
	
	- HOME
	
	- END
	
	- INSERT
	
	- PAGE UP
	
	- PAGE DOWN
	
	When using INT 16h functions 0h and 1h to read these keys, they both appear the
	same. When using INT 16h functions 10h and 11h, it is possible to tell which
	ENTER or HOME key is pressed. Functions 10h and 11h also allow MS-DOS to read
	function keys F11 and F12.
	
	The CONFIG.SYS command SWITCHES=/K causes CON to use functions 0h and 1h when
	reading from enhanced keyboards. This is necessary when an application program
	assumes that MS-DOS uses functions 0h and 1h to read input.
	
	ANSI.SYS is an enhanced console device driver that substitutes itself for the
	default CON device driver. When ANSI (or any other substitute console device
	driver) loads, it overrides the default CON device driver by reporting itself as
	"CON" (MEM /D reports device names). Like the default CON driver, ANSI.SYS uses
	functions 10h and 11h in MS-DOS 4.x and later. To force ANSI.SYS to read
	keyboard input using functions 0h and 1h, load ANSI.SYS with the /K switch.
	
	NOTE: Although ANSI.SYS useS functions 10h and 11h when reading from enhanced
	keyboards, to remap the extended keys separately from their 84-key counterparts
	using ANSI escape sequences, you must load ANSI.SYS using the /X switch.
	
	Additional query words: 6.22 4.0 4.0a 4.00 4.00a 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
