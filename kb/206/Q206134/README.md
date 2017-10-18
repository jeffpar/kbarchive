---
layout: page
title: "Q206134: Windows NT 4.0 Does Not Recognize Jaz Drive During Setup"
permalink: kb/206/Q206134/
---

## Q206134: Windows NT 4.0 Does Not Recognize Jaz Drive During Setup

	Article: Q206134
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Windows NT Workstation 4.0 on a small computer system
	interface (SCSI) system with an Iomega Jaz drive that can be used as a bootable
	device, Windows NT Setup does not recognize the drive as a fixed disk.
	Installation to the Jaz drive will not succeed.
	
	RESOLUTION
	==========
	
	To resolve this behavior, set the computer's BIOS boot sequence so that SCSI is
	recognized first.
	
	MORE INFORMATION
	================
	
	1. In the regular CMOS, set the boot sequence to be as follows:
	
	  SCSI,A:,C:
	
	  NOTE: The Jaz-Jet SCSI has a basic input/output system (BIOS) also, and you
	  can press CTRL+A to get to it upon startup. You must enable support for the
	  removable media under this BIOS.
	
	2. Boot from one of the three Windows NT Setup disks.
	
	  NOTE: If you attempt to install from the CD-ROM first, Setup does not
	  recognize the Jaz drive as an installable drive. Also, disable the integrated
	  device electronics (IDE) hard drive in CMOS. After Setup is complete, you are
	  still able to see the IDE drive from Windows NT.
	
	3. In Windows NT Setup, select the option for the Jaz drive to recognize mass
	  storage (IDE) in order to see the CD-ROM so you can run the rest of Setup.
	
	4. In the same folder as Setup, press S to recognize SCSI devices.
	
	5. Insert the Windows NT disk that comes with the Jaz drive.
	
	6. Proceed with the rest of the installation. You should be able to boot from
	  the Jaz drive and also see your IDE hard drive when the computer restarts.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
