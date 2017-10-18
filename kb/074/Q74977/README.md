---
layout: page
title: "Q74977: EMM386 and Early Versions of HIMEM.SYS"
permalink: kb/074/Q74977/
---

## Q74977: EMM386 and Early Versions of HIMEM.SYS

	Article: Q74977
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	EMM386.EXE and some versions of EMM386.SYS will detect which version of
	HIMEM.SYS is loaded. If an early version of HIMEM.SYS is detected (for example,
	version 2.04), EMM386 will issue the following message:
	
	  Microsoft Expanded Memory Manager 386 Version 4.20.06X
	  (C) Copyright Microsoft Corporation 1986, 1990
	  Warning : This version of HIMEM.SYS may cause conflicts with EMM386.
	
	  Press any key when ready...
	
	EMM386 may load successfully despite the incorrect version of HIMEM.SYS. If
	EMM386 loads, it will allocate all XMS memory available from HIMEM.SYS, which
	may cause problems for other programs that use XMS memory.
	
	Microsoft recommends that any combination of driver versions that yield the above
	message not be used. The latest versions of each driver should be used, and
	these versions should not be mixed. A table of driver versions for MS-DOS
	versions 4.0 and later and Windows versions 3.0 and later is included below.
	
	MORE INFORMATION
	================
	
	Product and Version
	
	Driver         MS-DOS 4.01   Windows 3.0   Windows 3.0a   MS-DOS 5.0
	------         -----------   -----------   ------------   ----------
	
	HIMEM.SYS        2.04          2.60          2.60           2.77
	SMARTDRV.SYS     2.10          3.03          3.03           3.13
	RAMDRIVE.SYS     2.12          3.04          3.06           3.06
	EMM386           4.00        4.10.0419     4.10.0419      *4.20.06x
	
	* EMM386 version 4.20.06x, shipped with MS-DOS 5.0, has an .EXE
	 extension to allow some command line processing. Previous versions
	 of EMM386 had an .SYS extension, which act solely as device drivers.
	
	Additional query words: 3.00 3.00a 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
