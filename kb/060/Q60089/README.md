---
layout: page
title: "Q60089: Using DEBUG to Start a Low-Level Format"
permalink: /kb/060/Q60089/
---

## Q60089: Using DEBUG to Start a Low-Level Format

{% raw %}

	Article: Q60089
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Western Digital 8-bit hard disk controller card ROM contains a low-level
	formatting utility. This utility can be started using the Microsoft MS-DOS DEBUG
	utility. Western Digital 16-bit controller cards need a disk-based formatter to
	do the low-level formatting.
	
	For more information, contact Western Digital technical support and information
	center.
	
	NOTE: Use the method listed below at your own risk.
	
	MORE INFORMATION
	================
	
	Use the following procedure to perform a low-level format:
	
	1. Start DEBUG by typing the following at the command prompt:
	
	  " debug" (without the quotation marks)
	
	2. At the DEBUG hyphen (-) prompt, type one of the following commands:
	
	  " G=C800:5
	  G=CA00:5
	  G=CC00:5
	  G=CE00:5" (without the quotation marks)
	
	  The above commands execute instructions starting at either location C800:0005,
	  CA00:0005, CC00:0005, or CE00:0005, depending on which address is selected.
	  If the computer freezes with the first address listed above, try the second
	  address.
	
	The program in the controller's ROM will execute and will query for interleave
	factor and other parameters. Answer these as appropriate; the hard disk will
	then be low-level formatted.
	
	The following addresses are valid for BIOS low-level format routines on Western
	Digital hard disk controller cards when using DEBUG.COM to perform a low-level
	format:
	
	  Address    Description
	  ----------------------
	  C800:5     Used by most Western Digital hard disk controllers for
	             XT- and AT-compatible computers, including all WD-1007A
	             series cards
	  CA00:5     Alternate address used on some XT hard disk controller
	             cards
	  CC00:5     WD-1007V-SE1 and WD-1007V-SE2 controllers;
	             WD-1003V-SR and WD-1006V-SR controllers, Revision F003
	             and F005 only (other SR-series controllers do not have
	             onboard BIOS)
	  CE00:5     Alternate address used on some XT hard disk controller
	             cards
	
	The above information is valid not only for hard disk controller cards marketed
	directly by Western Digital, but also for hard disk controllers manufactured by
	Western Digital for other companies. For example, the Seagate ST-01 and ST-02
	hard disk controllers are manufactured by Western Digital.
	
	The addresses noted above as alternate addresses can usually be selected by
	installing jumpers on the hard disk controller card, for controllers that have
	alternate addresses. If the jumper on a card with alternate address capability
	is left disconnected, the default address (C800:5) is used.
	
	The information above was obtained from sources independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this information's accuracy or
	usefulness. This information is supplied only for your convenience.
	
	Additional query words: 6.22 3.0 3.00 3.01 3.2 3.20 3.21 3.22 3.3 3.30 3.30a 4.0 4.00 4.01 4.01a 5.00 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
