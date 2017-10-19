---
layout: page
title: "Q99263: Installing Compaq 32-bit Fast SCSI-2 Drivers"
permalink: /kb/099/Q99263/
---

## Q99263: Installing Compaq 32-bit Fast SCSI-2 Drivers

	Article: Q99263
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The CPQC710.BID driver supports disk, tape and CD-ROM drives with the integrated
	32-bit fast-SCSI-2 controller found on COMPAQ ProSignia systems and the 32-bit
	fast-SCSI-2 controller.
	
	This article explains how to install the 32-bit fast-SCSI-2 controller support
	(which comes with the Compaq Prosignia and Systempro XLs) and how to adapt HPFS
	recovery disks just in case. The procedure is excerpted from a readme file on
	Compaq OS/2 support diskette.
	
	This driver is not included with the Microsoft OS/2 1.3 installation disks.
	
	MORE INFORMATION
	================
	
	Installing on New Systems
	-------------------------
	
	1. Make a backup copy of the MS OS/2 1.3 Install A diskette using the DISKCOPY
	  command.
	
	2. Boot the system from this backup copy.
	
	3. At the Microsoft Operating System/2 Installation screen, press the ESC key.
	  This displays an OS/2 command prompt.
	
	4. Insert the COMPAQ OS/2 support software diskette in drive A:.
	
	5. At the OS/2 command prompt type the command:
	
	  " CPQC710 NEW" (without the quotation marks)
	
	6. Follow the directions and insert the requested diskettes when prompted.
	
	  This command file modifies the backup copy of the MS OS/2 Install A diskette
	  by expanding and copying a new BASEDD01.SYS file (renaming the existing
	  version BASEDD01.OLD) and the CPQC710.BID file to the root directory of the
	  diskette.
	
	7. If the system will be booting from the fast SCSI-2 controller but contains
	  other disk controllers, rename CPQC710.BID to BOOTBID.BID on the modified
	  backup copy of the MS OS/2 Install A diskette.
	
	8. Reboot the system with the backup copy of the MS OS/2 Install A diskette in
	  drive A:.
	
	9. Install OS/2.
	
	Installing on Systems with MS OS/2 1.3 Already Installed
	--------------------------------------------------------
	
	1. Insert the COMPAQ OS/2 support software diskette in drive A:.
	
	2. Change the current directory to the root directory of drive A: and type this
	  command:
	
	  " CPQC710 UPDATE" (without the quotation marks)
	
	  This renames the original BASEDD01.SYS as BASEDD01.OLD, should it ever be
	  needed again, and copies and expands the CPQC710.BID and BASEDD01.SYS
	  fast-SCSI-2 controller LADDR driver files.
	
	3. Shut down OS/2 and reboot the system to load the new driver.
	
	Creating an HPFS Recovery Disk 1
	--------------------------------
	
	IMPORTANT: Perform this procedure as soon as you finish installing
	
	  Microsoft OS/2 and LAN Manager.
	
	1. After you have completed installation, make a backup copy of the LAN Manager
	  HPFS recovery disk 1 using the DISKCOPY command.
	
	2. Insert the COMPAQ OS/2 support software diskette in drive A:.
	
	3. Change to drive A: and type this command:
	
	  " CPQC710 RECOVERY" (without the quotation marks)
	
	4. Follow the directions and insert the requested diskettes when prompted.
	
	  This command file modifies the backup copy of the LAN Manager HPFS recovery
	  disk 1 by expanding and copying a new BASEDD01.SYS file (renaming the
	  existing version BASEDD01.OLD) and the CPQC710.BID file to the root directory
	  of the diskette.
	
	5. If the system will be booting from the fast-SCSI-2 controller but there will
	  be other disk controllers present, rename CPQC710.BID to BOOTBID.BID on the
	  modified backup copy of the LAN Manager HPFS recovery disk 1.
	
	Using the 32-Bit Fast-SCSI-2 Controller with Other Disk Controllers
	-------------------------------------------------------------------
	
	If the fast-SCSI-2 controller is the primary disk controller in a system with
	other disk controllers such as ESDI, IDA IAES, or IDE, you must rename the
	CPQC710.BID driver to BOOTBID.BID. DO NOT JUST COPY IT: under no circumstances
	should two drivers named CPQC710.BID and BOOTBID.BID appear in the root
	directory.
	
	If you are installing onto a new system by creating a modified Install A
	diskette, you must copy CPQC710.BID to BOOTBID.BID onto Install A.
	
	Additional query words: 2.20 2.2 Compaq Prosignia System Pro Systempro
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
