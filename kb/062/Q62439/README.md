---
layout: page
title: "Q62439: During Reconfiguration, Setup Won't Accept Correct Disk"
permalink: /kb/062/Q62439/
---

## Q62439: During Reconfiguration, Setup Won't Accept Correct Disk

	Article: Q62439
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run SETUP.EXE from Microsoft Windows to change the system
	configuration, the Setup program checks the hard drive for the necessary files.
	If the files are not already on the hard drive, SETUP.EXE refers to the
	SETUP.INF file for the locations of the files on the source disks and prompts
	you to insert the correct disk in drive A.
	
	If you attempt to use 5.25-inch disks after originally installing from 3.5-inch
	disks or attempt to use 3.5-inch disks after originally installing from
	5.25-inch disks, the Setup program may continue to prompt for the correct disk
	at some point during installation.
	
	CAUSE
	=====
	
	This problem occurs because the SETUP.INF files differ between the 3.5-inch and
	5.25-inch versions.
	
	WORKAROUND
	==========
	
	If you no longer have the same size disks from which you originally installed,
	you can work around this problem by backing up the SETUP.INF file in the Windows
	SYSTEM subdirectory. Then replace it with the SETUP.INF file (which is not
	compressed) on Disk 1 of the source disks that you want to use.
	
	MORE INFORMATION
	================
	
	This behavior can be reproduced as follows:
	
	1. Install for a VGA monitor from 3.5-inch disks.
	
	2. Run SETUP.EXE.
	
	3. From the Options menu, choose Change System Configuration.
	
	4. Choose EGA.
	
	5. When prompted for a disk, try all five 5.25-inch disks. By trying all five
	  disks each time Setup prompts you for a new disk, you can get past several
	  prompts. However, eventually Setup prompts you for Disk 5 and refuses to
	  accept any of the 5.25-inch disks.
	
	NOTE: This test does not work if you have previously installed for EGA because
	the required files will already be on the hard drive.
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
