---
layout: page
title: "Q85119: Using Zenith TurbosPorts with Windows"
permalink: /kb/085/Q85119/
---

## Q85119: Using Zenith TurbosPorts with Windows

{% raw %}

	Article: Q85119
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to run MS-DOS-based applications under Microsoft Windows version
	3.0 or 3.1 in standard or 386 enhance mode on a Zenith TurbosPort 386 (CGA), you
	may receive the following error message:
	
	  386 Display Type Mismatch
	
	WORKAROUND
	==========
	
	To work around this problem, you can either obtain a modified version of the CGA
	virtual display driver (VDDCGA.386) from Zenith, or attempt to use the CGA
	Plasma video grabber.
	
	MORE INFORMATION
	================
	
	To Obtain an Modified Version of VDDCGA.386
	-------------------------------------------
	
	A modified version of the VDDCGA.386 driver is available from the Zenith bulletin
	board (BBS). After you have downloaded the driver, it should be copied to your
	WINDOWS\SYSTEM directory.
	
	Using the Windows Plasma CGA Video Display Grabber
	--------------------------------------------------
	
	1. If you are not already using the CGA video drivers, run Setup from the
	  WINDOWS directory and change the Display entry to CGA.
	
	2. Using a text editor, edit the SYSTEM.INI file.
	
	3. Change the [Boot] section. Change the 386grabber= setting from CGA.GR3 to
	  PLASMA.GR3 for Windows 3.0 or PLASMA.3GR for Windows 3.1, as in the following
	  example:
	
	        386grabber=plasma.gr3
	
	  -or-
	
	        386grabber=plasma.3gr
	
	4. If you are using Windows 3.0, expand the PLASMA.GR3 file from the Windows
	  disks as follows:
	
	        expand a:plasma.gr_ c:\WINDOWS\SYSTEM\plasma.gr3
	
	  The driver is located on Disk 4 for 5.25-inch disks, and Disk 5 for 3.5-inch
	  disks.
	
	  If you are using Windows 3.1, the file is called PLASMA.3GR. Expand the
	  PLASMA.GR3 file from the Windows 3.1 disk number 2 as follows:
	
	        expand a:plasma.3g_ c:\WINDOWS\SYSTEM\plasma.3gr
	
	  The driver is located on Disk 2 for both the 5.25-inch disks and 3.5-inch
	  disks.
	
	BIOS Upgrade May Be Required
	----------------------------
	
	The TurbosPort 386 (CGA) ships with a BIOS version of 2.4, but requires a BIOS
	upgrade to 2.4D or later to run Windows properly. However, the BIOS upgrade will
	not affect the problem described above. The latest version is 2.7B; the chip
	number is 44465103.
	
	MS-DOS Versions
	---------------
	
	The TurbosPort computers will run Windows with MS-DOS version 3.1. To run the
	Zenith version of Windows, you need the Zenith version of MS-DOS 3.3 or later.
	
	Additional query words: laptop 3.10 3.00 3.00a 3.11 turbo sport vdd
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
