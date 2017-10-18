---
layout: page
title: "Q83532: Kurta Tablet Requires New Driver for Windows 3.1"
permalink: kb/083/Q83532/
---

## Q83532: Kurta Tablet Requires New Driver for Windows 3.1

	Article: Q83532
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Kurta digitizing tablet models IS/ONE, XLC, and Series 1 require an updated
	driver to work properly with Microsoft Windows version 3.1.
	
	Filename        Size    Date
	-------------------------------
	
	K_DRIVER.DRV    10080   4/3/92
	K_HELP.DRV      42082   2/5/92
	K_TM.DRV        85360   4/3/92
	K_VIRT.DRV      14499   1/23/92
	UPDATE.BAT      1750    4/3/92
	README          1732    4/6/92
	README.EXE      12080   1/20/91
	
	The driver comes on a disk that only contains the updated driver for Windows 3.1,
	and does not update drivers for any other applications.
	
	The driver can also be obtained from Kurta or downloaded from Kurta's bulletin
	board service (BBS). Download the file KURTA31.EXE, size 105363, date 4/15/92.
	When the file is run outside of Windows, it decompress into the necessary
	drivers.
	
	MORE INFORMATION
	================
	
	To install the update Kurta drivers:
	
	1. Exit Windows.
	
	2. Run KURTA31.EXE (this step decompresses the files).
	
	3. Run README.EXE.
	
	4. Run the UPGRADE.BAT file:
	
	  UPGRADE C:\WINDOWS
	
	If you have a Kurta XLP tablet, this driver does not work; contact Kurta
	technical support to obtain the correct driver.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 mouse pointer graphics
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
