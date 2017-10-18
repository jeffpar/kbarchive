---
layout: page
title: "Q74825: MS-DOS 5.0 Setup Doesn't Always Copy HIMEM.SYS"
permalink: kb/074/Q74825/
---

## Q74825: MS-DOS 5.0 Setup Doesn't Always Copy HIMEM.SYS

	Article: Q74825
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft MS-DOS 5 Upgrade includes version 2.77 of the Microsoft XMS driver
	HIMEM.SYS. If SETUP.EXE detects an earlier version of the Microsoft HIMEM.SYS
	driver in use, Setup replaces it. If Setup detects any other XMS 2.0 driver,
	however, Setup does not copy HIMEM.SYS 2.77 to your hard drive to avoid any
	possible conflicts with your present XMS driver.
	
	To use HIMEM.SYS, you must expand it and copy it to the hard drive separately.
	
	MORE INFORMATION
	================
	
	The compressed file HIMEM.SY_ is located on Disk 1 of the 720K MS-DOS disk set
	and Disk 2 of the 360K disk set. If you want to expand and copy it from the
	MS-DOS disk in drive A to your C:\DOS directory, use the following command:
	
	  C:\>expand a:\himem.sy_ c:\dos\himem.sys
	
	If you were using MS-DOS version 4.0x and another XMS driver, it is possible that
	you will still have HIMEM.SYS version 2.04, which was part of MS-DOS 4.0x, in
	your DOS directory. It is possible to load MS-DOS 5.0 high using HIMEM.SYS 2.04,
	but not recommended.
	
	If EMM386.EXE is loaded after HIMEM.SYS 2.04, it will display the following and
	may not work properly with HIMEM.SYS 2.04:
	
	  Warning : This version of HIMEM.SYS may cause conflicts with EMM386.
	
	HIMEM.SYS version 2.77 should be used with MS-DOS 5.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
