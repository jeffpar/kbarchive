---
layout: page
title: "Q81774: SUBST Command Doesn't Work with CD-ROM Drive"
permalink: /kb/081/Q81774/
---

## Q81774: SUBST Command Doesn't Work with CD-ROM Drive

	Article: Q81774
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
	
	The following error message will appear when attempting to use the MS-DOS SUBST
	command with a CD-ROM drive:
	
	  Cannot SUBST a network drive
	
	The MS-DOS SUBST command does not work on CD-ROM drives.
	
	CAUSE
	=====
	
	CD-ROM drives are connected to a computer via a network interface. The
	MSCDEX.EXE CD-ROM driver informs MS-DOS that the CD-ROM drive is a network
	drive.
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS User's Guide and Reference," versions 5.0 and 5.0a, pages
	571-573
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 DOS cdrom cd rom
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
