---
layout: page
title: "Q93180: HPPCL5A.DRV: Different Settings and Ports, Same Output"
permalink: /kb/093/Q93180/
---

## Q93180: HPPCL5A.DRV: Different Settings and Ports, Same Output

	Article: Q93180
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you install the HPPCL5A.DRV printer driver twice to maintain different
	printer configurations for different ports, the configuration differences are
	ignored.
	
	For example, if you want to configure your HP LaserJet III for two paper sizes,
	so you do the following:
	
	1. Install the HP LaserJet III on LPT1 and configure it for 8.5 by 11 inches.
	
	2. Install the HP LaserJet III again on LPT2 and configure it for 8.5 by 15
	  inches.
	
	In most cases, this allows you to switch quickly between paper sizes without
	changing the printer configuration. You simply choose LPT1 or LPT2. However, for
	all printers supported by the HPPCL5A.DRV printer driver, configuration
	differences are ignored. If you follow the previous example, regardless of the
	selected port, your printer always prints 8.5-by-11-inch pages.
	
	CAUSE
	=====
	
	This is caused by a problem in the printer driver.
	
	WORKAROUND
	==========
	
	The only possible work around for this problem is to install a different printer
	driver to each port. In the previous example, if you had installed an HP
	LaserJet IIID on LPT2, you would then gain the desired functionality of a
	different paper size on each port.
	
	NOTE: The enhanced features of the HP LaserJet IIID should not be used as they
	are not supported by an HP LaserJet III.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	
	Additional query words: 3.10 windrv 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
