---
layout: page
title: "Q96604: MS-DOS Setup Error Message: Hard Disk Is Not Readable"
permalink: /kb/096/Q96604/
---

## Q96604: MS-DOS Setup Error Message: Hard Disk Is Not Readable

{% raw %}

	Article: Q96604
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the error messages "Hard disk is not readable" and/or "Critical disk
	error" when you start your computer.
	
	CAUSE
	=====
	
	The most common cause of these errors is including the device driver
	ASPI4DOS.SYS in your CONFIG.SYS file. If you use this device driver, remark it
	out in your CONFIG.SYS file, along with any expanded memory managers (such as
	EMM386.EXE or Qemm). You can then install MS-DOS 6 (or later) Upgrade and later
	restore the line(s) in your CONFIG.SYS file. This problem commonly occurs when
	you have a second SCSI device (such as a CD-ROM drive).
	
	These errors can also occur if any of the following conditions exist:
	
	- You have a second disk controller in your system for an external drive or a
	  SCSI device, such as a CD-ROM or optical disk.
	
	  To work around this problem, physically disconnect the device from the
	  controller and then install MS-DOS 6 (or later) Upgrade. If this does not
	  correct the problem, you may need to remove the controller card from the
	  computer and then install MS-DOS 6 or 6.2 Upgrade. After the upgrade is
	  successfully installed, you can reinstall the controller card or device.
	
	
	- You have a Syquest removable drive connected as a secondary hard disk drive,
	  and this secondary drive doesn't contain a cartridge. (Your primary drive can
	  be either a non-removable hard disk drive or another Syquest drive).
	
	  To correct this problem, insert a Syquest data cartridge into the empty drive.
	
	- A sector read error occurs when reading the master boot records or the
	  partition boot records. Setup reads this information from the hard disk and
	  then writes the MBOOT?.DAT and PBOOT?.DAT files to the Uninstall disk.
	
	- A sector read error occurs when reading the BIOS parameter block (BPB). Setup
	  reads this information from the hard disk and then writes the BPB?.DAT files
	  to the Uninstall disk.
	
	- A sector read error occurs when reading the root directory from the
	  destination hard disk. Setup reads this information from the hard disk and
	  then writes the ROOT.DAT file to the Uninstall disk.
	
	- A sector read error occurs when reading the file allocation table (FAT) from
	  the destination hard disk. Setup reads this information from the hard disk
	  and then writes the ROOT.DAT file to the Uninstall disk.
	
	- A sector read error occurs when performing the partition table updates on the
	  attached hard disk drives. Partition table updates involve converting
	  MS-DOS-compatible partitions to type 1, 4, or 6 and then converting logical
	  sectors into 512-byte sectors in the partition boot record.
	
	- A sector read error occurs when reading the master boot record and partition
	  boot records to check for unformatted partitions.
	
	- A sector read error occurs when reading the root directory as Setup tries to
	  obtain the first two root directory entries and determine if they are MS-DOS
	  system files (IO.SYS and MSDOS.SYS). The above error can also occur if a
	  sector read error occurs when moving non-MS-DOS system file entries to make
	  room for the MS-DOS system files in the first two directory entries.
	
	- Your computer is infected with the Stoned, Stoned 1, or NOINT virus.
	
	  To correct this problem, run Microsoft Anti-Virus (MSAV.EXE) from your
	  original MS-DOS 6.x setup disks. MSAV.EXE is located on Disk 3 of the
	  3.5-inch 1.44-megabyte disk set and Disk 4 of the 5.25-inch 1.2-megabyte disk
	  set.
	
	- You have a second hard disk set in the CMOS settings, but you do not have two
	  physical hard disks.
	
	Additional query words: 6.22 6.00 6.20 unrecoverable error hard drive scsi scuzzy host adapter card board stepup boot bootup system
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch
	Version           : MS-DOS:
	
	=============================================================================
	

{% endraw %}
