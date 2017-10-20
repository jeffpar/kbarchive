---
layout: page
title: "Q178278: Boot Partition Using CPQArray has Limits if Using scsi() Syntax"
permalink: /kb/178/Q178278/
---

## Q178278: Boot Partition Using CPQArray has Limits if Using scsi() Syntax

{% raw %}

	Article: Q178278
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to install Windows NT using a Compaq Array controller whose BIOS
	is disabled or to a boot partition that extends beyond 1024 cylinders, you may
	see one of the following errors after the text mode portion of setup reboots:
	
	(NOTE: The type of error depends on if you are using a PCI Based Compaq Smart-2/P
	Array controller or an EISA based Compaq Smart-2/E Array controller)
	
	If you are using a Compaq Smart-2/P Array controller (PCI based) or Fast and
	Wide-2 controller:
	
	  The system did not load because of a computer disk hardware
	  configuration problem.
	
	  Could not read from the selected boot disk. Check the boot path
	  and disk hardware.
	
	  Please check the Windows NT documentation about hardware disk
	  configuration and your hardware reference manuals for additional
	  information. Boot failed.
	
	  -or-
	
	  boot signature aa55 not found error
	
	  -or-
	
	  If you are using a Compaq Smart-2/E Array controller (EISA based):
	
	  TRAP 0000000E ============ PAGE FAULT =============
	
	  ** at linear address 00000002
	
	  tr=0028 cr0=80000011 cr2=00000002 cr3=00300000 .
	  .
	  .
	
	CAUSE
	=====
	
	If the boot partition extends beyond 1,024 cylinders or the boot partition is
	created on a drive attached to a SCSI controller whose BIOS is disabled, use the
	scsi() syntax in the Boot.ini file.
	
	The scsi() syntax is not supported while using a Compaq Smart 2/P Array
	controller.
	
	-or-
	
	The Cpqarray.sys driver that ships with Windows NT does not support using the
	scsi() syntax for addressing a Compaq Smart 2/E Array controller.
	
	RESOLUTION
	==========
	
	1. Install Windows NT to a boot partition that does not extend beyond the 1,024
	  cylinder limitation of Interrupt 13 BIOS calls.
	
	2. Use an updated Cpqarray.sys driver for Ntbootdd.sys when using scsi() syntax
	  in the Boot.ini file and an EISA based Compaq Smart-2/E Array controller.
	
	3. Use a different SCSI Controller and driver that supports booting from a boot
	  partition that extends beyond 1,024 cylinders.
	
	4. Contact Compaq Technical Support about this limitation when using scsi()
	  syntax with the PCI based Compaq Smart-2/P Raid Controller.
	
	
	STATUS
	======
	
	The products discussed here are manufactured by Compaq Corporation, A vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	the products' performance or reliability.
	
	
	MORE INFORMATION
	================
	
	Interrupt 13 compatibility is required so the master boot record (MBR) can
	locate the boot sector. The boot sector then finds and loads the NT boot loader
	(NTLDR) and continues to load the operating system. NT uses interrupt 13 calls
	until a disk driver is loaded.
	
	If the boot partition can be accessed with Interrupt 13 BIOS calls then Windows
	NT will use the multi() syntax which does not load a driver for the disk
	controller until the Operating System starts loading from this partition.
	
	When using the scsi() syntax in the BOOT.INI, Windows NT needs to load a SCSI
	device driver and uses that driver to access the boot partition. The SCSI
	controller driver is renamed NTBOOTDD.SYS and placed in the root of the system
	partition.
	
	Two reasons for using scsi() syntax in the c:\boot.ini file:
	
	- The BIOS is disabled on the disk controller that Windows NT is installed on,
	  so Interrupt 13 Bios calls cannot be used.
	
	- The boot partition extends beyond the 1024th cylinder on the drive which is a
	  limitation of Interrupt 13 BIOS calls.
	
	For more information about ARC Path Names, see NT 4.0 Server Resource Guide or NT
	4.0 Workstation Resource Kit or refer to the following article in the Microsoft
	Knowledge Base.
	
	  ARTICLE ID: Q102873
	  TITLE : BOOT.INI and ARC Path Naming Conventions and Usage.
	
	  ARTICLE ID: Q114841
	  TITLE : Windows NT Boot Process and Hard Disk Constraints
	
	Additional query words: Smart raid Array 2E 2P cpqfs.sys
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
