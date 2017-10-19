---
layout: page
title: "Q72044: Deleting Files with Stacker Installed"
permalink: /kb/072/Q72044/
---

## Q72044: Deleting Files with Stacker Installed

	Article: Q72044
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the error message "Access Denied" is given when you attempt to delete a file
	that does not have the read-only bit set, check to see if you are running
	Stacker.
	
	MORE INFORMATION
	================
	
	STAC Electronics of Carlsbad, California, has released a disk compression
	utility that creates logical drives and makes exact copies of the old drives in
	them, except that everything except MSDOS.SYS, IO.SYS, COMMAND.COM, CONFIG.SYS,
	and AUTOEXEC.BAT are compressed to save space.
	
	It is possible for the "Stacker volume" (the logical drive that contains the
	compressed files) to be marked as "read only". If this is the case, there is no
	standard way from within MS-DOS to delete the file.
	
	To see if the Stacker volume has been marked as "read only," reboot the computer
	and look for the message:
	
	  Volume Damage Read Only Write Protect
	  .
	  .
	  .
	  Press any key to continue...
	
	If this message appears, call STAC Electronics Technical Support at (619)
	431-6712. International customers should call (619) 431-7474.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 4.01a 5.00 3rdparty noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	
