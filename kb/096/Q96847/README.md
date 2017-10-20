---
layout: page
title: "Q96847: MS-DOS 6.0 Installation/Partitioning Sequence Q&amp;A"
permalink: /kb/096/Q96847/
---

## Q96847: MS-DOS 6.0 Installation/Partitioning Sequence Q&amp;A

{% raw %}

	Article: Q96847
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	1. Q. How can I repartition my hard disk into one large partition?
	
	  A. Changing your hard disk from multiple partitions to a single partition
	  involves backing up your data files, repartitioning your hard disk, and then
	  restoring your data files. To do this, you must use the Fdisk program. The
	  section titled "Using Fdisk to Configure Your Hard Disk" on pages 204-216 of
	  the "Microsoft MS-DOS 6 User's Guide" contains instructions for
	  repartitioning your hard disk. For specific instructions about backing up
	  your data, repartitioning your hard disk, and restoring your data files,
	  order Application Note PD0771, "Installation and Partitioning Sequence
	  Questions & Answers," from Microsoft Product Support Services.
	
	2. Q. When I try to use DoubleSpace to compress drives, I receive the error
	  "Cannot load SMARTDrive with DoubleSpace." How can I correct this problem?
	
	  A. DoubleSpace is incompatible with versions of SMARTDrive earlier than
	  version 4.1. If you are using an earlier version of SMARTDrive, DoubleSpace
	  displays this error message. To correct this problem, make sure you are
	  loading SMARTDRV.EXE version 4.1, which is included with MS-DOS 6.0.
	
	3. Q. I have a hard disk with more than 1024 cylinders. Is there a way to access
	  and use the entire hard disk?
	
	  A. The MS-DOS 6 Upgrade uses the hardware BIOS to read and write to the hard
	  disk drive. Due to the limitations of the standard ROM BIOS, MS-DOS accesses
	  only the first 1024 cylinders of a physical hard disk. If you have formatted
	  your hard disk after upgrading to MS-DOS 6 and the disk has less space
	  available, consult your hardware manual or contact your hardware manufacturer
	  for more information.
	
	4. Q. When I run the Fdisk program, it does not recognize all the disk space on
	  my hard disk. What is causing this problem?
	
	  A. Fdisk relies on the BIOS to report the hard disk size. If Fdisk incorrectly
	  reports that your hard disk is smaller than it actually is, either your BIOS
	  is set for the wrong drive type (that is, it is set incorrectly or it does
	  not support your specific drive's dimensions), or your drive has more than
	  1024 cylinders.
	
	  Contact your hardware manufacturer to determine if your BIOS is set correctly.
	  If it is not, correcting the setting should allow Fdisk to recognize the
	  entire hard disk. If your BIOS does not support your drive type, and your
	  hard disk doesn't exceed 1024 cylinders, you may need to order a new BIOS
	  from your hardware manufacturer. For more information, contact your hardware
	  manufacturer.
	
	Additional query words: 6.00 apd60
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
