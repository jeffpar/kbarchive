---
layout: page
title: "Q94335: DoubleSpace Installation Fails to Update SYSTEM.INI File"
permalink: kb/094/Q94335/
---

## Q94335: DoubleSpace Installation Fails to Update SYSTEM.INI File

	Article: Q94335
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If you have multiple installations of Windows on your hard drive, DoubleSpace may
	not correctly update the SYSTEM.INI file.
	
	CAUSE
	=====
	
	Windows stores the location of the permanent swapfile in the [386Enh] section of
	the SYSTEM.INI file. When you install DoubleSpace, it must find the SYSTEM.INI
	file and update the PermSwapDosDrive= setting to point to the correct drive. If
	you have multiple copies of Windows installed, or Windows is not in the path,
	DoubleSpace cannot find the SYSTEM.INI file.
	
	WORKAROUND
	==========
	
	To work around this problem, edit the SYSTEM.INI file and change the drive
	letter for the PermSwapDosDrive= setting to the DoubleSpace host drive. For
	example, if Windows is installed on drive C: and you installed DoubleSpace,
	creating drive H:, you would need to edit you SYSTEM.INI file and change the
	PermSwapDosDrive=c to PermSwapDosDrive=h.
	
	Additional query words: 6.00 dblspace 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
