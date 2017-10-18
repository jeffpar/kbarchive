---
layout: page
title: "Q139429: Problems Using TekRam VLB Controller with Windows 95"
permalink: kb/139/Q139429/
---

## Q139429: Problems Using TekRam VLB Controller with Windows 95

	Article: Q139429
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
	
	When you are using a TekRam VLB controller with Windows 95, you may experience
	performance or MS-DOS Compatibility mode issues with hard disks with a capacity
	greater than 528 megabytes (MB).
	
	When you experience such issues, the Ios.log file may contain the following
	information:
	
	  ESDI sector mismatch
	  Unit number 02 going through real mode drivers.
	  Unit number 03 going through real mode drivers.
	  Unit number 04 going through real mode drivers.
	
	
	CAUSE
	=====
	
	The Esdi_506.pdr driver supports only standard INT13 functions. It does not
	support sector remapping. This behavior is by design.
	
	RESOLUTION
	==========
	
	To enable protected-mode support for the TekRam VLB controller, please contact
	TekRam to inquire about obtaining a Windows 95-compatible driver for the
	controller.
	
	For additional information about using the TekRam VLB disk controller, please
	consult the controller's documentation or manufacturer.
	
	
	MORE INFORMATION
	================
	
	When you use a TekRam VLB controller with hard disks with a capacity greater
	than 528 MB, the track remapping and enhanced INT13 options must be enabled on
	the controller. Such translation schemes are not compatible with the Windows 95
	Esdi_506.pdr driver. protected-mode support for this controller is limited to
	hard disks with a capacity less than 528 MB.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
