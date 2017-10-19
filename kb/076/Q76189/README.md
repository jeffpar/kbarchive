---
layout: page
title: "Q76189: PPT: Cannot Run Workstation Setup from a Floppy Disk"
permalink: /kb/076/Q76189/
---

## Q76189: PPT: Cannot Run Workstation Setup from a Floppy Disk

	Article: Q76189
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:2.0e,3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbsetup kbdta
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 2.0e, 3.0, 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You cannot run a workstation installation of PowerPoint from the floppy disks.
	In PowerPoint for Windows, versions 2.0e and 3.0, the /N parameter is for
	running PowerPoint Setup from a shared network installation of PowerPoint. In
	PowerPoint 4.0, and 7.0, the /N parameter for Setup has an entirely different
	meaning; however, you still cannot run a workstation installation from the
	floppy disks.
	
	MORE INFORMATION
	================
	
	In Program Manager, if you choose Run from the File menu and enter "a:setup /n"
	(without the quotation marks) while attempting to run a workstation installation
	of PowerPoint from the floppy disks, you receive the following error message in
	PowerPoint 2.0e:
	
	  The "/N" option is not available for this version of PowerPoint Setup. To run
	  "Setup /N", make sure that your network administrator has installed
	  PowerPoint onto the network using the "Setup /Expand" option.
	
	You receive the following error message in PowerPoint 3.0:
	
	  This shared installation of PowerPoint has not been properly installed.
	  Please contact your System Administrator
	
	You receive the following error message in PowerPoint 4.0, and 7.0:
	
	  The command line user name option (/N) must provide a double quoted string of
	  no more than 52 characters.
	
	To correctly run a workstation installation of PowerPoint versions 2.0 and 3.0,
	run Setup from the shared network administrative installation of PowerPoint
	(using the /N parameter).
	
	Note that for PowerPoint 4.0, and 7.0, the /N option does not specify an
	installation of a shared version of a product to be run from a network location.
	To install a shared version of this product, run Setup from the shared network
	administrative installation of PowerPoint 4.0, or 7.0 and select Workstation
	from the four installation options in the Setup dialog box.
	
	
	Additional query words: 2.00e 3.00 4.00 4.00a 4.00c 7.00 ppt20 ppt30 ppt40 powerpt winppt ppt95 unable
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbsetup kbdta 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt300 kbPowerPt200e kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:2.0e,3.0,4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
