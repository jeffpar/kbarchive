---
layout: page
title: "Q83585: Windows Err Msg: Unable to Initialize Ports (Control Panel)"
permalink: /kb/083/Q83585/
---

## Q83585: Windows Err Msg: Unable to Initialize Ports (Control Panel)

	Article: Q83585
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access the 386 Enhanced icon in the Control Panel, the following
	error may appear:
	
	  Unable to initialize ports
	
	After this message is displayed, the 386 Enhanced window can be accessed;
	however, no ports appear in the Device Contention box.
	
	CAUSE
	=====
	
	This problem can be caused by either of the following:
	
	- There are no Base I/O address values in the BIOS table for any of the COM or
	  parallel ports in the BIOS table.
	
	  -or-
	
	- There is no DEVICE=*VCD statement in the [386Enh] section of the SYSTEM.INI.
	
	NOTE: VCD is the virtual communications device driver that virtualizes the COM
	ports. It arbitrates COM port usage between virtual machines.
	
	MORE INFORMATION
	================
	
	To check the Base I/O address values, proceed as follows:
	
	1. Type
	
	  debug
	
	2. At the hyphen (-) prompt, type
	
	  d40:0
	
	  For example:
	
	  debug -d40:0
	
	  After you type debug d40:00, the following HEX string appears:
	
	  0040:0000 F8 03 F8 02 00 00 00 00-78 03 00 00 00 00 00 0
	
	  The values displayed may vary from machine to machine (the values listed above
	  are the most common values).
	
	  The error message occurs if all the values after 0040:0000 are zeros.
	
	3. To exit DEBUG, at the hyphen (-) prompt, type
	
	  Q
	
	Additional query words: 3.0 3.0a 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : :3.0,3.0a,3.1,3.11
	
	=============================================================================
	
