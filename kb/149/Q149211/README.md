---
layout: page
title: "Q149211: Interlnk May Report Drive Letters Incorrectly"
permalink: /kb/149/Q149211/
---

## Q149211: Interlnk May Report Drive Letters Incorrectly

	Article: Q149211
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Interlnk.exe driver to connect to a computer running
	Intersvr.exe, the drive letters reported by Interlnk may be incorrect if your
	computer is using disk compression or PC Card (PCMCIA) drives.
	
	CAUSE
	=====
	
	Interlnk chooses drive letters based on the MS-DOS convention, which does not
	apply if you are using disk compression or PC Card drives.
	
	For example, on a computer with two floppy disk drives and a compressed hard disk
	with host drive F, Interlnk displays redirected drives starting at drive G,
	although the actual redirected drives start at drive D.
	
	To determine the correct drive letters, assume that neither disk compression nor
	PC Card drives are active, and determine the next drive letter after the last
	physical drive. Assign drive letters from that point on, skipping any letters
	that are actually assigned. Using the example in the paragraph above, three
	drives redirected by Interlnk would be drives D, E, and G. (Note that drive F,
	the host drive for drive C, is skipped.)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the Interlnk.exe program
	included with MS-DOS versions 6.0, 6.2, 6.21, and 6.22. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	
	Additional query words: 6.00 6.20 6.21 6.22
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
