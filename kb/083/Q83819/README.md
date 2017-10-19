---
layout: page
title: "Q83819: Express Setup Does Not Update MSNET.DRV"
permalink: /kb/083/Q83819/
---

## Q83819: Express Setup Does Not Update MSNET.DRV

	Article: Q83819
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Express Setup feature is used to upgrade Microsoft Windows operating
	system versions 3.0 and 3.0a to Microsoft Windows operating system version 3.1,
	Setup does not update the MSNET.DRV network driver.
	
	This information applies to a system running a Microsoft Network (MS-NET)
	compatible network (that is, Microsoft LAN Manager versions 1.x or 100-percent
	compatible or MS-NET 100-percent compatible).
	
	MORE INFORMATION
	================
	
	To install the updated driver:
	
	1. Quit Windows.
	
	2. In the WINDOWS directory, run Setup.
	
	3. Select the Network option and press ENTER.
	
	4. From the list of networks, select the original network selected in Windows
	  3.0 or 3.0a.
	
	5. When asked if you want to use the existing MSNET.DRV file, press the ESC key
	  to replace the existing driver.
	
	The Windows 3.1 MSNET.DRV file will now be installed.
	
	Additional query words: 3.00 3.00a 3.10 lanman
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
