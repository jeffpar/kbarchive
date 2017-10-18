---
layout: page
title: "Q90569: Toshiba Laptops Should Be Configured as MS-DOS System"
permalink: kb/090/Q90569/
---

## Q90569: Toshiba Laptops Should Be Configured as MS-DOS System

	Article: Q90569
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Toshiba product support has confirmed that its T2200SX, T3300SL, T4400SX, and
	T6400 laptop computers should be configured in Windows Setup as "MS-DOS System,"
	not as "MS-DOS System with APM" or "Intel 386SL Based System with APM."
	
	MORE INFORMATION
	================
	
	Although Toshiba laptops have power-saving features to extend battery life, they
	do not support Advanced Power Management (APM). To correct the setup:
	
	1. Type "setup" (without the quotation marks) from the WINDOWS directory at the
	  MS-DOS command prompt.
	
	2. Choose "MS-DOS System" from the list displayed for the Computer selection.
	
	Setting up any machine for use with the Windows APM support that does not fully
	implement the APM specification can cause loss of data, system clock
	inaccuracies, or corrupted files.
	
	For more information, contact Toshiba technical support.
	
	The Toshiba products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 T2200 T3300 T4400 T6400 power saving 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
