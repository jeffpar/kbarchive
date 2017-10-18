---
layout: page
title: "Q72404: MASM 6.0 Contains Windows 3.0a Device Drivers"
permalink: kb/072/Q72404/
---

## Q72404: MASM 6.0 Contains Windows 3.0a Device Drivers

	Article: Q72404
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Macro Assembler (MASM) version 6.0 ships with HIMEM.SYS, SMARTDRV.SYS,
	RAMDRIVE.SYS, and MOUSE.COM. These device drivers are the same drivers from the
	Windows 3.0a disk set, yet the file dates on all but SMARTDRV.SYS do not match
	the Windows 3.0a file dates.
	
	You should treat the MASM 6.0 drivers as if they came with Windows 3.0a, because
	they are the same. Using the MASM 6.0 drivers with Windows does not create any
	compatibility problems with Windows 3.0.
	
	This information applies to Microsoft Windows versions 3.0 and 3.0a. This
	information does not apply to later versions of Windows.
	
	MORE INFORMATION
	================
	
	Although the files are exactly the same, the file dates on the MASM 6.0 files do
	not match the Windows 3.0a file dates, with the exception of SMARTDRV.SYS. The
	following is a file comparison:
	
	Filename        Windows 3.0a    MASM 6.0     File Size
	--------        ------------    --------     ---------
	
	HIMEM.SYS       10-31-90        4-06-90      11304
	MOUSE.COM       10-31-90        2-16-90      31833
	RAMDRIVE.SYS    10-31-90        2-05-90      5719
	SMARTDRV.SYS    10-31-90        10-31-90     7749  <- same date
	
	Additional query words: 3.0 3.00 3.0a 3.00a windrvr win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
