---
layout: page
title: "Q106517: Setup Hangs with NEC Ultralight Versalinear Display"
permalink: /kb/106/Q106517/
---

## Q106517: Setup Hangs with NEC Ultralight Versalinear Display

{% raw %}

	Article: Q106517
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the NEC Ultralight Versalinear display driver is installed when you run the
	upgrade setup program for Windows or Windows for Workgroups, Setup may stop
	responding (hang) when you switch from MS-DOS mode to the graphical Windows mode
	portion.
	
	
	CAUSE
	=====
	
	The NEC Ultralight Versalinear display driver is designed to run only in 386
	enhanced mode Windows. Since the graphical portion of Setup runs in standard
	mode, Setup hangs when this display driver is installed. The behavior of the
	Versalinear driver is similar to that of the ATI Mach 32 driver. The Versalinear
	may or may not display a warning message indicating that the driver requires 386
	enhanced mode.
	
	RESOLUTION
	==========
	
	To successfully run Setup, do the following:
	
	1. Run Setup from Disk 1.
	
	2. From the Setup screen, choose Custom Setup.
	
	3. On the System Information screen, change the display type from Ultralight
	  Versalinear to VGA.
	
	4. Continue through Setup. Once Setup is finished, run Setup within Windows and
	  change the display back to Ultralight Versalinear.
	
	MORE INFORMATION
	================
	
	The Ultralight Versalinear is manufactured by NEC, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.1 3.11 versa linear AT&T freeze frozen hung crash pad ultra light
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
