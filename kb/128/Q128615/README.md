---
layout: page
title: "Q128615: Detection Process Stops at 80 Percent Complete During Setup"
permalink: /kb/128/Q128615/
---

## Q128615: Detection Process Stops at 80 Percent Complete During Setup

	Article: Q128615
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Windows 95 Setup on a Dell computer with a PCI bus, the
	detection process may stop at 80 percent complete. When this occurs, you see the
	error message "Divide By Zero."
	
	If you restart the computer and use Safe Recovery to finish Setup, more than one
	logical drive letter may be assigned to a single SCSI drive in the computer. For
	example, when you try to access drive E you see the contents of drive C instead.
	
	CAUSE
	=====
	
	This problem can occur on a Dell computer with a PCI bus and the following
	configuration:
	
	- The computer has a built-in NCR 810 SCSI controller without an external SCSI
	  connection.
	
	- The computer has a second SCSI controller connected to the same SCSI bus
	  cable as the first SCSI controller. The connection path for the SCSI
	  controllers and devices is as follows:
	
	     Built-in SCSI controller
	        |
	     Internal devices attached to the built-in SCSI controller (such as
	     logical drive C)
	        |
	     Second SCSI controller
	        |
	     External devices attached to the second SCSI controller
	
	This connection path causes both controllers to drive the same SCSI bus,
	resulting in the symptoms described above.
	
	
	RESOLUTION
	==========
	
	Use either of the following methods to work around this problem:
	
	- Disable the built-in SCSI controller and use the new controller for all the
	  SCSI devices.
	
	- Use the second SCSI controller only for external devices. Use the built-in
	  SCSI controller only for internal devices. Do not connect the two SCSI
	  controllers to the same SCSI bus.
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
