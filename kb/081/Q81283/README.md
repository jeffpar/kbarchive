---
layout: page
title: "Q81283: Replacement Utilities for MS-DOS FORMAT"
permalink: kb/081/Q81283/
---

## Q81283: Replacement Utilities for MS-DOS FORMAT

	Article: Q81283
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:1.x,2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 1.x, 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Third-party utilities, such as Norton Utilities by Symantec and PC Tools by
	Central Point Software, give you the option of choosing an alternative method of
	formatting hard disks and floppy disks.
	
	These utilities rename the FORMAT utility that comes with MS-DOS. If you are
	using one of these third-party utilities and you invoke the FORMAT command, you
	are probably formatting with that third-party utility.
	
	To use the MS-DOS FORMAT utility, change to the MS-DOS directory and use the
	XXFORMAT or FORMAT! command.
	
	MORE INFORMATION
	================
	
	Both Norton Utilities version 6.0 and PC Tools version 7.0 open a graphical
	dialog box that gives you formatting options, in contrast to MS-DOS, where
	options are text based. Other utilities and versions of these products may or
	may not produce graphical dialog boxes, but the messages displayed differ from
	those that MS-DOS displays.
	
	Norton Utilities renames the MS-DOS FORMAT utility to XXFORMAT.*., and PC Tools
	changes the name to FORMAT!.*. For example, if your version of MS-DOS has a
	FORMAT.EXE file, it is renamed to XXFORMAT.EXE or FORMAT!.EXE; if you have a
	FORMAT.COM file, it is renamed to XXFORMAT.COM or FORMAT!.COM.)
	
	If you want all future FORMAT commands to be the MS-DOS version of FORMAT, you
	can rename it to FORMAT.* from its present name, or retrieve it from the
	original MS-DOS floppy disk set. Microsoft also recommends that the MS-DOS
	directory be placed in the path before any other utility, or the alternative
	(third-party) FORMAT utility may be inadvertently used.
	
	If PC Tools is installed after Norton Utilities, PC Tools also renames the FORMAT
	utility associated with Norton Utilities, and any other FORMAT program on the
	hard drive(s) to FORMAT!.*.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 Safe Format, PCFormat 1.00 1.10 2.10 2.11 3.00 3.10 3.20 3.21 3.30 4.00 4.01 5.00 5.00a 6.00 6.20 PCTools 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS1xSearch kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:1.x,2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
