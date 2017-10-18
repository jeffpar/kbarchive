---
layout: page
title: "Q139712: Removable SCSI Media Not Visible in Windows Explorer"
permalink: kb/139/Q139712/
---

## Q139712: Removable SCSI Media Not Visible in Windows Explorer

	Article: Q139712
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95 on a computer with a SCSI adapter and two
	removable-media devices on the SCSI chain, the removable-media devices may have
	no drive letter in My Computer or Windows Explorer.
	
	Or, if you start Windows 95 without a disk in the last drive on the SCSI chain,
	neither drive letter is available in My Computer or Windows Explorer.
	
	CAUSE
	=====
	
	The Windows 95 protected-mode SCSI drivers do not map a drive letter for an
	INT13h removable SCSI drive if the removable media is not present.
	
	Windows 95 can map a drive letter for a removable-media drive on a SCSI chain if
	the following conditions are true:
	
	- There is a real-mode ASPI or CAM driver that can be used to allocate the
	  drive letter.
	
	- There are no drive letters available in real mode that cannot be accessed
	  correctly for any reason.
	
	RESOLUTION
	==========
	
	The following four workarounds are listed in order of preference. These
	workarounds allow you to access removable media in Windows 95:
	
	- Assign a permanent drive letter to each removable drive. To do so, follow
	  these steps:
	
	  a. In Control Panel, double-click the System icon.
	
	  b. On the Device Manager tab, double-click the SCSI device, click the SCSI
	     adapter, and then click Properties.
	
	  c. On the Settings tab, set the Reserved Drive Letter parameters.
	
	  d. Click OK. When you are prompted to restart your computer, do so.
	
	- Place the removable media in the drive before you start Windows 95 and do not
	  remove it until Windows 95 starts.
	
	- Load the real-mode ASPI drivers included with the SCSI adapter in the
	  Config.sys and Autoexec.bat files. For information about how to do so, please
	  consult the adapter's documentation or manufacturer.
	
	- Turn off the BIOS on the SCSI adapter. For information about how to do so,
	  please consult the adapter's documentation or manufacturer.
	
	MORE INFORMATION
	================
	
	The Windows 95 protected-mode SCSI adapter drivers always enumerate the devices
	through the SCSI chain. Therefore, all devices on the SCSI chain are child
	devices of the SCSI adapter. All drives and devices on the SCSI chain need to be
	working correctly and have full protected-mode support through Windows 95 before
	they can be visible in the user interface.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
