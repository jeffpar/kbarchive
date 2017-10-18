---
layout: page
title: "Q100373: BootSafe Warning with DoubleSpace: Partition / Boot Sector..."
permalink: kb/100/Q100373/
---

## Q100373: BootSafe Warning with DoubleSpace: Partition / Boot Sector...

	Article: Q100373
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	Central Point Software (CPS) BootSafe reports the following error message after
	you install MS-DOS 6 or 6.2, or when you resize your DoubleSpace- compressed
	drive:
	
	  W A R N I N G
	
	  Partition / Boot Sector was Modified
	
	CAUSE
	=====
	
	This situation occurs because the BIOS parameter block (BPB) is rewritten when
	you install MS-DOS and when you resize a DoubleSpace-compressed drive.
	
	BootSafe stores BPB information in a hidden-system file called BOOT.CPS. When
	BootSafe sees the BPB has changed, it displays the above error message.
	
	WORKAROUND
	==========
	
	To work around the situation, choose Update when you receive the warning message
	from BootSafe.
	
	MORE INFORMATION
	================
	
	BootSafe is manufactured by Central Point Software, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.00 6.20 bootsave 1.3 boot safe save 3rdparty double space dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
