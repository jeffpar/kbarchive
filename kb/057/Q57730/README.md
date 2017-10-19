---
layout: page
title: "Q57730: Err Msg: &quot;No Room for System on Destination Disk&quot; with SYS"
permalink: /kb/057/Q57730/
---

## Q57730: Err Msg: &quot;No Room for System on Destination Disk&quot; with SYS

	Article: Q57730
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft MS-DOS user's manuals, the SYS command entry states that you do
	not need to reformat your disk when you upgrade to a later version of MS-DOS.
	SYS updates system disks even though the new system files are larger and must be
	broken up to fit in the available disk space.
	
	However, when upgrading some system disks, SYS returns the following error
	message:
	
	  No room for system on destination disk
	
	CAUSE
	=====
	
	This error message is caused by one of the following:
	
	- There is not enough free space anywhere on the destination disk for the
	  relocatable part of the system files.
	
	  Solution
	
	  Delete some files to make room for the system files. This is documented in
	  Appendix F of the "Microsoft MS-DOS User's Guide and Reference" for versions
	  4.01 and earlier, under the "No room for system on destination disk" error
	  message.
	
	- A file occupies the first clusters of the disk on a non-system disk.
	
	  Solution
	
	  If a disk utility is available to find which file(s) occupy the first clusters
	  of the disk, erase or move those files to clear the space needed for the
	  system.
	
	  If you have the MS-DOS 5, 6, or 6.2 Upgrade, you can run Setup with the /M
	  parameter.
	
	  If the previous two options are not available, you must reformat the disk.
	
	- The disk has an original equipment manufacturer (OEM) version of MS-DOS that
	  does not use the Microsoft naming convention for the hidden system files.
	
	  Solution
	
	  Contact the OEM supplier for an MS-DOS upgrade. You should continue running
	  the OEM version of MS-DOS. However, if you must change to the Microsoft
	  MS-DOS packaged product, see the information provided below.
	
	- Cluster 2 is a lost cluster and cannot be used to hold IO.SYS.
	
	  Solution
	
	  Run MS-DOS CHKDSK /F to correct the lost allocation unit.
	
	  If you are using MS-DOS 6.2 or later, run SCANDISK.
	
	MORE INFORMATION
	================
	
	There is a quick solution for the OEM MS-DOS problem mentioned above. This
	solution requires that you have a good understanding of MS-DOS, and that you
	have a third-party utility to remove the Hidden, System, and Read-Only
	attributes from the system files.
	
	The MS-DOS SYS command looks for the files named IO.SYS and MSDOS.SYS on the
	destination disk. If these files are not found, because they do not exist or are
	named differently, SYS assumes the disk is not a system disk and attempts to
	install the new system files starting at cluster 2 (IO.SYS must be contiguous
	starting at cluster 2).
	
	Some OEMs, such as IBM, use different names for the system files. To make SYS
	work with these disks, you can rename the two files to IO.SYS and MSDOS.SYS, as
	in the following example. (The following example uses IBM PC-DOS naming
	conventions.)
	
	1. Using a third-party attribute change utility, remove the Hidden, Read-Only,
	  and System attributes from IBMBIO.COM and IBMDOS.COM. MS-DOS does not provide
	  a utility to set or reset the Hidden and System attributes of a file, because
	  you should not tamper with these files.
	
	2. Rename these two files as follows:
	
	  ren ibmbio.com io.sys
	  ren ibmdos.com msdos.sys
	
	3. Use the attribute utility to replace the Hidden, Read-Only, and System
	  attributes.
	
	The SYS command should work correctly after you make the above changes. The SYS
	command does not transfer COMMAND.COM to the destination floppy disk in MS-DOS
	versions 3.3x through 4.x, so you must do that manually.
	
	Additional query words: appnote 6.22 3.30 3.30a 4.00 4.00a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
