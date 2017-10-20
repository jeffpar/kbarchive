---
layout: page
title: "Q84753: Manually Installing the CGA Display Driver"
permalink: /kb/084/Q84753/
---

## Q84753: Manually Installing the CGA Display Driver

{% raw %}

	Article: Q84753
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CGA display driver can be installed using the Microsoft Windows operating
	system version 3.1 maintenance mode of Setup from inside Windows or from
	MS-DOS.
	
	Also, the Windows 3.0 CGA display driver can be manually installed into Windows
	3.1.
	
	MORE INFORMATION
	================
	
	Windows version 3.1 does not ship a CGA display driver.
	
	If a Windows 3.0 system was using the CGA driver, during an upgrade the Windows
	3.1 Setup program will preserve the display driver.
	
	The CGA driver can be installed using the maintenance mode of Setup from inside
	Windows or from MS-DOS. The Windows 3.0 CGA display driver can also be manually
	installed.
	
	Manually Installing the Windows 3.0 CGA Driver
	----------------------------------------------
	
	To manually change the display driver to CGA, the following Windows 3.0 files
	must be in the WINDOWS\SYSTEM directory:
	
	  CGA40WOA  FON      6704  10-31-90   3:00a
	  CGA80WOA  FON      4672  10-31-90   3:00a
	  CGA       DRV      45680 10-31-90   3:00a
	  CGASYS    FON      4368  10-31-90   3:00a
	  CGAOEM    FON      4576  10-31-90   3:00a
	  CGAFIX    FON      4208  10-31-90   3:00a
	  CGA       GR2      2104  10-31-90   3:00a
	  CGA       GR3      9728  10-31-90   3:00a
	  VDDCGA    386      15131 10-31-90   3:00a
	
	After obtaining these files, make a backup copy of the SYSTEM.INI file contained
	in the Windows directory.
	
	Make the following changes to the SYSTEM.INI file:
	
	     [boot]
	     display.drv=cga.drv
	     286grabber=cga.gr2
	     386grabber=cga.gr3
	     fixedfon.fon=cgafix.fon
	     oemfonts.fon=cgaoem.fon
	     fonts.fon=cgasys.fon
	
	     [boot.description]
	     display.drv=CGA
	
	     [386Enh]
	     CGA80WOA.FON=CGA80WOA.FON
	     CGA40WOA.FON=CGA40WOA.FON
	     display=vddcga.386
	
	Additional query words: 3.10 3.11 CGA.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
