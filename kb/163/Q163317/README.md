---
layout: page
title: "Q163317: MS-DOS Compatibility Mode When Booting from Removable Disk"
permalink: kb/163/Q163317/
---

## Q163317: MS-DOS Compatibility Mode When Booting from Removable Disk

	Article: Q163317
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbhw osr1 diskmem win95 kbHardware kbDiskMemory
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your computer is configured to boot from a removable disk, the Performance
	tab in System properties may show that the computer is using MS- DOS
	Compatibility mode for virtual memory. This problem is known to occur with
	Iomega Zip drives, Iomega Jazz drives, and SyQuest EZ drives, and may also occur
	with other IDE or SCSI removable disk drives.
	
	
	Note that this behavior can also occur if you are using a laptop computer with a
	removable or "swappable" hard disk and the Removable check box is selected in
	the drive's properties.
	
	RESOLUTION
	==========
	
	To work around this problem, configure Windows 95 so that the Windows swap file
	is located on a non-removable disk. To do so, follow these steps:
	
	1. In Control Panel, double-click System.
	
	2. Click the Performance tab, and then click Virtual Memory.
	
	3. Click "Let me specify my own virtual memory settings," click a non-removable
	  disk in the Hard Disk box, click OK, and then click OK again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95 and Windows 95 OEM
	Service Release 1. This problem does not occur with Windows 95 OEM Service
	Release 2.
	
	======================================================================
	Keywords          : kbhw osr1 diskmem win95 kbHardware kbDiskMemory 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
