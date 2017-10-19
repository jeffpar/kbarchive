---
layout: page
title: "Q95347: Problems with Microsolutions Compaticard Controllers"
permalink: /kb/095/Q95347/
---

## Q95347: Problems with Microsolutions Compaticard Controllers

	Article: Q95347
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the following two problems associated with Microsolutions
	Compaticard floppy drive controllers:
	
	- Volume Serial Number Always 0000-0000
	
	-and-
	
	- Required Device Driver Versions
	
	MORE INFORMATION
	================
	
	Volume Serial Number Always 0000-0000
	-------------------------------------
	
	If you format a floppy disk drive other than A or B, the volume serial number is
	always set to 0000-0000. According to Microsolutions, you can use DEBUG to
	correct this problem when using the following:
	
	  Compaticard      Version
	  ----------------------------
	  Compaticard 1       1.27
	  Compaticard 2       2.01
	  Compaticard 4       2.02
	
	To obtain more information about this solution or to obtain an updated driver,
	call Microsolutions technical support.
	
	Required Device Driver Versions
	-------------------------------
	
	The following error messages may be displayed if you are using an early version
	of a Compaticard device driver:
	
	  General Failure Reading Drive X
	
	  -or-
	
	  Invalid Media
	
	The following device driver versions are required:
	
	  Compaticard       Version         Driver Filename
	  -------------------------------------------------
	  Compaticard 1        1.7          CCDRIVER.SYS
	  Compaticard 2        2.01         CCDRIVER.SYS
	  Compaticard 4        2.02         CC4DRV.SYS
	
	Compaticard is manufactured by Microsolutions, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this products' performance
	or reliability.
	
	To obtain a phone number for Microsolutions technical support, query on the
	following in the Microsoft Knowledge Base:
	
	  PSS vendor phone list Microsolutions
	
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
