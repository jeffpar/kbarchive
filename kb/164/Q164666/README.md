---
layout: page
title: "Q164666: Err Msg: While Initializing Device IOS..."
permalink: kb/164/Q164666/
---

## Q164666: Err Msg: While Initializing Device IOS...

	Article: Q164666
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw osr2 win95 kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95 you may receive the following error message:
	
	  While initializing device IOS
	  A Windows Protection Error occurred.
	  You need to restart your computer.
	
	CAUSE
	=====
	
	You may have a Quantum Bigfoot hard disk that requires a BIOS upgrade to work
	properly with Windows 95 OEM Service Release 2 or 2.1.
	
	RESOLUTION
	==========
	
	Quantum Bigfoot hard disks that meet both the following criteria are confirmed
	by Quantum to exhibit the behavior described in this article:
	
	- Part number: P/N BFxx011-Rev03-D
	
	- A serial number ending in "S"
	
	If you have one of these hard disks, you need to update the hard disk BIOS. You
	can obtain the update from your local dealer or from Quantum. To determine if
	your hard disk meets the criteria listed above, contact your dealer or Quantum.
	
	
	MORE INFORMATION
	================
	
	Note that the error message does not occur if you boot to MS-DOS prior to
	starting Windows 95. You may also be able to boot to Safe mode after receiving
	the error message, shut down, and then restart Windows 95 normally without an
	error message. The error message occurs only in a cold boot situation.
	
	For information about how to contact Quantum, see the following article in the
	Microsoft Knowledge Base:
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	Additional query words: hang
	
	======================================================================
	Keywords          : kb3rdparty kbhw osr2 win95 kbHardware 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
