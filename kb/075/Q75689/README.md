---
layout: page
title: "Q75689: Using Bernoulli Driver Version 7.0 or Later with MS-DOS"
permalink: /kb/075/Q75689/
---

## Q75689: Using Bernoulli Driver Version 7.0 or Later with MS-DOS

	Article: Q75689
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For compatibility with MS-DOS version 5.0 or later, you need version 4.7 or
	later of the Bernoulli driver. If your Bernoulli driver is earlier than 4.7, it
	may lock the machine during startup.
	
	MS-DOS 5.0 or later cannot load the Bernoulli driver high unless version 7.0 or
	later is used.
	
	MORE INFORMATION
	================
	
	Version 7.0 of the Bernoulli driver is the latest driver available from IOMEGA.
	This driver requires a model PC2, PC2B, or PC4B Bernoulli adapter card. If you
	have an earlier model of the adapter card, you can upgrade by contacting
	IOMEGA.
	
	If you have the correct adapter card and boot your machine from the Bernoulli
	drive, you will need to obtain a kit from IOMEGA that includes version 7.0 of
	the driver, a manual, and an EPROM chip. If you have the correct adapter card
	but do not boot from the Bernoulli drive, you will only need to obtain version
	7.0 of the driver and the manual from IOMEGA. The new 7.0 driver is available
	from IOMEGA customer support or by calling their bulletin board and downloading
	700.ZIP and 700.EXE.
	
	Version 5.2 of the Bernoulli driver for the PC3B adapter is available from IOMEGA
	customer support. Version 5.2 is compatible with MS-DOS 5.0 and later as long as
	it is not loaded high.
	
	For more information on any of the above products, call IOMEGA at one of the
	numbers below.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 7.00 RCD.SYS 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
