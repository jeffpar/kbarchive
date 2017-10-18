---
layout: page
title: "Q105257: Floppy Disk Drive Lights Flash Under MS-DOS 6.2"
permalink: kb/105/Q105257/
---

## Q105257: Floppy Disk Drive Lights Flash Under MS-DOS 6.2

	Article: Q105257
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	When you start some software packages under MS-DOS 6.2, the floppy disk drive
	lights may flash.
	
	CAUSE
	=====
	
	This situation occurs when a software program (for example, Microsoft
	Anti-Virus, GEO Works Ensemble (GEOS), or a terminate-and-stay- resident (TSR)
	program loaded in memory calls the Int 21h Function 44h Get Device Parameter
	IOCTL. This IOCTL causes the DoubleSpace Automount code to check the floppy disk
	drives for possible DoubleSpace-compressed floppy disks.
	
	The following list includes some of the applications that make this call that
	otherwise would not access the floppy disk drives:
	
	  Norton Desktop for Windows
	  Central Point PCTools Data Monitor (DATAMON.EXE)
	
	This situation does not occur with earlier versions of MS-DOS, nor does it occur
	if the DoubleSpace Automount switch is disabled.
	
	RESOLUTION
	==========
	
	You can either ignore the floppy drive light indicators when you start
	applications or you can disable the DoubleSpace Automount switch.
	
	To disable the DoubleSpace Automount switch, type "dblspace /automount=0"
	(without the quotation marks) at the MS-DOS command prompt, press ENTER, and
	then press CTRL+ALT+DEL to reboot your computer.
	
	Additional query words: ndw 6.20 removable media data
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
