---
layout: page
title: "Q72890: Uninstall Hangs at 7% Complete from &quot;Bloody&quot; Virus"
permalink: /kb/072/Q72890/
---

## Q72890: Uninstall Hangs at 7% Complete from &quot;Bloody&quot; Virus

	Article: Q72890
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS 5 Upgrade Setup program may hang at 7% complete if a virus is present
	on the computer. To work around this problem, boot from an original MS-DOS
	floppy disk.
	
	MORE INFORMATION
	================
	
	This problem has been observed in two specific situations:
	
	- Setup hangs if the Bloody virus is present on the hard drive. The Bloody
	  virus installs itself in memory, infects the boot sector of a floppy disk and
	  the partition table of the hard disk. After approximately 128 reboots, the
	  virus displays the message "Bloody! Jun. 4,1989" during bootup. The message
	  refers to the date of the Tiananmen Square massacre in Beijing, China.
	
	- Setup hangs if the Stoned virus is present. The Stoned virus can corrupt
	  system or overlay files, including *.COM files such as the COMMAND.COM.
	
	In both situations, the solution is to boot from an original MS-DOS floppy disk,
	then run Setup again. Write-protect the original MS-DOS floppy disk so that it
	does not get infected with any viruses.
	
	This work around may enable MS-DOS 5 Upgrade to complete the installation
	program. Use virus checking software as soon as possible to eliminate any
	potential viruses.
	
	Additional query words: 5.00 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a
	
	=============================================================================
	
