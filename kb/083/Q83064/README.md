---
layout: page
title: "Q83064: Using ANSI.SYS /X to Remap Extended Keys"
permalink: /kb/083/Q83064/
---

## Q83064: Using ANSI.SYS /X to Remap Extended Keys

	Article: Q83064
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.0,4.01,4.01a,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 4.01a, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft MS-DOS version 4.0 introduced a new feature to the ANSI.SYS console
	device driver, used by specifying the /X switch. With the /X switch, ANSI.SYS
	can distinguish the extended keys (RIGHT ARROW, HOME, and so on) from the keypad
	keys (with NUM LOCK off) on some extended keyboards. This allows you to redefine
	the keys separately using ANSI escape sequences. Extended keyboards are also
	called 101- or 102-key keyboards.
	
	If you have an extended keyboard and want to redefine an extended key (or keypad
	key) without also redefining the corresponding keypad key (or extended key) to
	another character, you must load ANSI.SYS with the /X switch.
	
	MORE INFORMATION
	================
	
	Non-ASCII keys (function keys, SHIFT keys, extended keys, and, when NUMLOCK is
	off, the keypad keys) differ from the ASCII keys in that they send an
	identifying code to the input buffer, followed by the key's value. ANSI.SYS
	recognizes this and reads the input buffer a second time after receiving the
	identifying scan code.
	
	Most keyboards only send the 00H scan code for all non-ASCII keys. Many extended
	keyboards send a scan code of 0EH (224 decimal) for the extended keys and a 00H
	for the corresponding keypad keys. ANSI.SYS can only detect the difference
	between extended and keypad keys with the latter type of keyboard.
	
	The following example remaps both HOME keys to issue the DIR command on an
	extended keyboard. In CONFIG.SYS:
	
	  device=c:\dos\ansi.sys
	
	In AUTOEXEC.BAT:
	
	  set prompt= $e[0;71;"dir";13p $p$g
	
	The following example remaps the HOME key on the number pad to issue the DIR
	command, and the gray HOME key to issue the CLS command on an extended keyboard.
	Add the following to the CONFIG.SYS file:
	
	  device=c:\dos\ansi.sys /x
	
	In AUTOEXEC.BAT, add the following:
	
	  set prompt= $e[0;71;"dir";13p $e[224;71;"CLS";13p $p$g
	
	NOTE: The lowercase "p" characters in the above command must be lowercase. In the
	above commands, the space included before each dollar sign ($) is optional, and
	is only added for clarity.
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS User's Guide and Reference," version 5.0, page 593
	
	Additional query words: appnote 6.22 4.00 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.0,4.01,4.01a,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
