---
layout: page
title: "Q82459: Procom Technology's SCSI Driver Causes Windows Setup to Hang"
permalink: /kb/082/Q82459/
---

## Q82459: Procom Technology's SCSI Driver Causes Windows Setup to Hang

	Article: Q82459
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are using a Procom Technology SCSI disk driver, and the Microsoft Windows
	Setup program stops responding (hangs) when checking the system configuration.
	
	CAUSE
	=====
	
	Procom Technology's SCSI disk driver revision 1.3, September 1991, (filename:
	SCSIDISK.SYS) causes this problem.
	
	WORKAROUND
	==========
	
	Doing one of the following allows the Windows 3.1 Setup program to function
	properly:
	
	- Comment (remark) out the SMARTDRV line in the CONFIG.SYS or AUTOEXEC.BAT
	  file. (To do this, open the CONFIG.SYS or AUTOEXEC.BAT file in a text editor
	  and type REM at the beginning of the SMARTDRV line.)
	
	  -or-
	
	- Comment (remark) out the DEVICE=SCSIDISK.SYS line in the CONFIG.SYS file. (To
	  do this, open the CONFIG.SYS file in a text editor and type REM at the
	  beginning of the DEVICE=SCSIDISK.SYS line.)
	
	After Windows 3.1 Setup has completed, you can reactivate the commented-out line.
	(To do this, open the CONFIG.SYS or AUTOEXEC.BAT file in a text editor and
	delete REM from the beginning of the line.)
	
	MORE INFORMATION
	================
	
	For more information, contact Procom Technology.
	
	The SCSI product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.1 3.11 third party procomm pro comm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
