---
layout: page
title: "Q84782: Norton Utilities Version 6.01 and Windows 3.1"
permalink: kb/084/Q84782/
---

## Q84782: Norton Utilities Version 6.01 and Windows 3.1

	Article: Q84782
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article discusses information from the Symantec application note #4103
	about Norton Utilities version 6.01 and Microsoft Windows operating system
	version 3.1.
	
	MORE INFORMATION
	================
	
	1. NCACHE, the Norton disk caching software, may cause system lockups when
	  Windows 3.1 is run in standard mode. Norton recommends configuring NCACHE for
	  extended memory. If the problem continues, then disable the Write cache.
	  Consult your Norton manual for instructions.
	
	2. NCACHE is not compatible with Windows 3.1's 32-Bit-Disk-Access. If using
	  32-Bit-Disk-Access, then use SMARTDRV.EXE version 4.0.
	
	3. The following error message will occur if you run Norton's Calibrate utility
	  while SMARTDRV.EXE is caching the drive:
	
	  Disk Mapping Error
	
	  Disable SMARTDRV.EXE when using the Calibrate program.
	
	4. Microsoft recommends not running Norton Disk Monitor, DISKMON.EXE, while
	  Windows is running. It may cause a prolonged beeping noise.
	
	5. Erase Protect is normally configured to use as much free hard drive space as
	  necessary, this will sometimes cause Windows to experience printing and
	  temporary swap file problems, due to lack of space for temporary files.
	  Norton recommends configuring Erase Protect not to protect files with the
	  extensions of .TMP and .SWP, and limiting the size of the of Erase Protect to
	  2048. Consult your Norton manual for instructions.
	
	6. 
	
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: appnote 3.10 Smartdrive
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
