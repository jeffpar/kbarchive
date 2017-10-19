---
layout: page
title: "Q268830: BUG: Floppy Drive Inaccessible on Computer with 512 MB of Memory"
permalink: /kb/268/Q268830/
---

## Q268830: BUG: Floppy Drive Inaccessible on Computer with 512 MB of Memory

	Article: Q268830
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT400bug kbDSupport kbGrpDSOPK
	Last Modified: 02-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The floppy disk drive is inaccessible on computers with Intel 810e or 815
	motherboards with 512 megabytes (MB) of memory installed, and on computers with
	Intel 830 motherboards with 256 MB or more of memory installed, until Service
	Pack 4 (SP4) or higher is installed. This problem limits how Microsoft Windows
	NT 4.0 can be installed on these computers because the Windows NT 4.0 CD-ROM
	does not contain Service Pack 4. The three-floppy-disk method of installation
	does not work correctly. You will see a blue screen with an error message that
	is similar to the following:
	
	  STOP 0x0000007B (0xF2813BD4, 0xc0000034, 0x00000000, 0x00000000)
	  INACCESSIBLE_BOOT_DEVICE
	
	You can install by starting from the Windows NT 4.0 CD, but you cannot load
	third-party drivers from the floppy disk drive until Windows NT 4.0 is installed
	and Service Pack 4 (or higher) is installed.
	
	CAUSE
	=====
	
	Windows NT 4.0 does not correctly allocate resources for floppy disk drives on
	these computers (as described in the "Symptoms" section).
	
	
	RESOLUTION
	==========
	
	To work around the problem:
	
	1. Install Windows NT 4.0 from the CD-ROM.
	
	2. Restart the computer and log on.
	
	3. Install Service Pack 4 or higher from the CD and restart the computer.
	
	4. Install a third-party driver from the floppy disk.
	
	5. Reinstall the Service Pack if networking or some other operating system
	  component was installed with the driver.
	
	You can also work around this problem by installing Windows NT 4.0 from a network
	install share that includes the third-party drivers. This method is described in
	the Windows NT 4.0 Resource Kit.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	
	
	
	Additional query words: sp4 sp5 sp6
	
	======================================================================
	Keywords          : kbOSWinNT400bug kbDSupport kbGrpDSOPK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
