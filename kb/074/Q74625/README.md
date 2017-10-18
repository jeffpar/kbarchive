---
layout: page
title: "Q74625: MS-DOS Upgrade: Unable to Start Premier 200, 210"
permalink: kb/074/Q74625/
---

## Q74625: MS-DOS Upgrade: Unable to Start Premier 200, 210

	Article: Q74625
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
	
	You install MS-DOS on a Premier 200 or 210 computer, and the computer doesn't
	restart or operate properly.
	
	CAUSE
	=====
	
	The CMOS startup program used on the Premier 200 and 210 computers may cause
	these computers to have problems after you upgrade you current installation of
	MS-DOS. The Premier 200 and 210 computers use an internal ROM startup instead of
	a floppy disk or hard drive CONFIG.SYS and AUTOEXEC.BAT. MS-DOS cannot be copied
	to the internal ROM bootup.
	
	WORKAROUND
	==========
	
	The ROM startup must be disabled to configure the system correctly. (Note that
	while MS-DOS cannot be copied to the internal ROM bootup, it can be copied to a
	disk, allowing the system to start properly after the ROM startup is disabled.)
	
	To disable the ROM startup, follow these steps:
	
	1. Start the computer.
	
	2. Type CTRL+ALT+S to run the CMOS startup. (Note: You may have to do this
	  during startup, before problems occur.)
	
	3. Set the "boot device" to the hard disk or floppy disk, using F6 to change
	  selections.
	
	4. Set the CONFIG.SYS and AUTOEXEC.BAT files to the fixed disk, using F6 to
	  change selections.
	
	5. Press ESC to restart the computer.
	
	The Premier products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 6.22 5.00 3rdparty 6 6.00 premiere 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
