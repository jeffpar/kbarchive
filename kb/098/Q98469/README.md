---
layout: page
title: "Q98469: Razzle Dazzle 1.0 and MS-DOS 6.0"
permalink: /kb/098/Q98469/
---

## Q98469: Razzle Dazzle 1.0 and MS-DOS 6.0

	Article: Q98469
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Razzle Dazzle version 1.0 and the temporary file for this
	screen saver is located on a DoubleSpace-compressed drive, you may encounter
	problems returning to your system after the screen saver has engaged. The video
	screen may become unclear and difficult to read.
	
	CAUSE
	=====
	
	Razzle Dazzle writes a temporary file to your hard disk drive for its use. Video
	corruption occurs because the screen saver cannot write to the temporary file
	when that file is located on a compressed drive.
	
	WORKAROUND
	==========
	
	To correct this problem, point the temporary file to the uncompressed drive. To
	do this, change the following line in the AUTOEXEC.BAT file from:
	
	  C:\RAZDAZ\DAZTSR /fC:\RAZDAZ\ /QN /S=300 /e or /x
	
	to:
	
	  C:\RAZDAZ\DAZTSR /fC:\RAZDAZ\ /QN /S=300 /IH:\XXXXXXXX.$$$
	
	where "H:" represents the host (uncompressed) drive and "XXXXXXXX" is the
	temporary filename.
	
	For more information, contact Rhodes Scholar Software.
	
	Razzle Dazzle is manufactured by Rhodes Scholar Software, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.00 Razzle Dazzle Saver 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
