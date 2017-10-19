---
layout: page
title: "Q111739: Strange Errors Occur with Resize on DoubleSpace CVF"
permalink: /kb/111/Q111739/
---

## Q111739: Strange Errors Occur with Resize on DoubleSpace CVF

	Article: Q111739
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to resize a DoubleSpace-compressed drive that was created with
	MS-DOS 6.0, you may receive one of the following jumbled error messages if the
	read-only file attribute is set on your AUTOEXEC.BAT file:
	
	  DoubleSpace cannot the file AUTOEXEC.BAT.
	
	  -or-
	
	  DoubleSpace cannot must start your computer from your hard disk drive. the
	  file AUTOEXEC.BAT.
	
	NOTE: These errors can occur whether you try to resize the drive from the command
	line or within DoubleSpace Manager.
	
	The following jumbled error message may occur when you install DoubleSpace if the
	read-only attribute is set on your AUTOEXEC.BAT file:
	
	  DoubleSpace cannot of free space on %2 the file AUTOEXEC.BAT.
	
	CAUSE
	=====
	
	This behavior occurs because DoubleSpace must modify the AUTOEXEC.BAT file so
	that in the event of a power failure during the resize operation, it can
	correctly resume operation at the point at which it failed. DoubleSpace cannot
	modify and save the file if AUTOEXEC.BAT is marked as read-only.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS version 6.0. This problem
	was corrected in MS-DOS version 6.2.
	
	RESOLUTION
	==========
	
	To return the computer to its original state and complete the resizing of the
	DoubleSpace-compressed drive, copy AUTOEXEC.00<n> to <compressed
	drive>:\AUTOEXEC.BAT. Then, check the file attribute of the file by typing
	"attrib autoexec.bat" (without the quotation marks) at the MS-DOS command
	prompt. If an uppercase letter R is displayed to the left of the AUTOEXEC.BAT
	file, the read-only attribute is set and must be removed. To remove this
	attribute, type the following at the MS-DOS command prompt
	
	  " attrib -r autoexec.bat " (without the quotation marks)
	
	and then try to resize the drive again.
	
	If the CONFIG.SYS file also has its read-only attribute set, you must copy
	CONFIG.00<n> to <compressed drive>:\CONFIG.SYS as well.
	
	MORE INFORMATION
	================
	
	When you perform a resizing operation, DoubleSpace makes backup copies of the
	AUTOEXEC.BAT and CONFIG.SYS files and saves them as AUTOEXEC.00<n> and
	CONFIG.00<n> (where <n> is a number between 1 and 9) in the root
	directory of the host drive for drive C. For example, if the host drive for your
	drive C compressed volume file (CVF) is H, these files are located on the root
	directory of drive H, and might have the filenames AUTOEXEC.001 and CONFIG.001.
	
	After the resizing operation fails, the original files, AUTOEXEC.BAT and
	CONFIG.SYS, are deleted from drive C (the CVF).
	
	Additional query words: dblspace 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
