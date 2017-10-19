---
layout: page
title: "Q105074: MS-DOS 6.2 Partitioning Questions and Answers"
permalink: /kb/105/Q105074/
---

## Q105074: MS-DOS 6.2 Partitioning Questions and Answers

	Article: Q105074
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	1. Q. How can I repartition my hard disk into one large partition?
	
	  A. Changing your hard disk from multiple partitions to a single partition
	  involves backing up your program and data files, repartitioning your hard
	  disk, and then restoring your program and data files. For specific
	  instructions, see the following article in the Microsoft Knowledge Base:
	
	  Q106423 Repartitioning Your Hard Disk to Upgrade to 6.0 or 6.2
	
	2. Q. I have a hard disk with more than 1024 cylinders. Is there a way to access
	  and use the entire hard disk?
	
	  A. MS-DOS 6.2 uses the hardware BIOS to read and write to the hard disk drive.
	  Due to the limitations of the standard ROM BIOS, MS- DOS accesses only the
	  first 1024 cylinders of a physical hard disk. If you have repartitioned and
	  formatted your hard disk after upgrading to MS-DOS 6.2 and the disk has less
	  space available, consult your hardware manual or contact your hardware
	  manufacturer for more information.
	
	3. Q. When I run the Fdisk program, it does not recognize all the disk space on
	  my hard disk. What is causing this problem?
	
	  A. Fdisk relies on the BIOS to report the hard disk size. If Fdisk incorrectly
	  reports that your hard disk is smaller than it actually is, either your BIOS
	  is set for the wrong drive type (that is, it is set incorrectly or it does
	  not support your specific drive's dimensions), or your drive has more than
	  1024 cylinders.
	
	  Contact your hardware manufacturer to determine if your BIOS is set correctly.
	  If it is not, correcting the setting should allow Fdisk to recognize the
	  entire hard disk. If your BIOS does not support your drive type and your hard
	  disk doesn't exceed 1024 cylinders, you may need to order a new BIOS from
	  your hardware manufacturer.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	Issue type        : kbinfo
	
	=============================================================================
	
