---
layout: page
title: "Q109497: Copies of CONFIG.SYS or AUTOEXEC.BAT Files on Compressed Drive"
permalink: kb/109/Q109497/
---

## Q109497: Copies of CONFIG.SYS or AUTOEXEC.BAT Files on Compressed Drive

	Article: Q109497
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to upgrade to MS-DOS while running AddStor's SuperStor, you may
	receive the following error message:
	
	  Error: Setup cannot install MS-DOS on you computer. The copy of the
	  CONFIG.SYS or AUTOEXEC.BAT file on your compressed drive does not match the
	  corresponding file on your uncompressed drive.
	
	
	CAUSE
	=====
	
	SuperStor maintains two copies of the CONFIG.SYS and AUTOEXEC.BAT files: one on
	the compressed drive and the other on the uncompressed drive. If the copies of
	these files on both drives are not identical, you receive the above message.
	
	RESOLUTION
	==========
	
	In most cases, the copies of the CONFIG.SYS and AUTOEXEC.BAT files on the
	compressed drive are more current than the ones on the uncompressed drive. To
	verify this, do the following:
	
	1. Change to the MS-DOS command prompt on the uncompressed drive (usually this
	  is the drive D). For example, type "d:" (without the quotation marks) at the
	  MS-DOS command prompt and then press ENTER.
	
	2. Change to the root directory of the uncompressed drive. For example, type
	  "cd\" (without the quotation marks) at the MS-DOS command prompt and then
	  press ENTER.
	
	3. Check the file dates of the CONFIG.SYS and AUTOEXEC.BAT file. To do this,
	  type the following at the MS-DOS command prompt and press ENTER after each
	  line:
	
	  " dir config.sys
	  dir autoexec.bat" (without the quotation marks)
	
	  Write down the date and time for both files.
	
	4. Change to the MS-DOS command prompt on the compressed drive (typically drive
	  C). For example, type "c:" (without the quotation marks) at the MS-DOS
	  command prompt and then press ENTER.
	
	5. Check the file dates of the CONFIG.SYS and AUTOEXEC.BAT file. To do this,
	  type the following at the MS-DOS command prompt and press ENTER after each
	  line:
	
	  " dir config.sys
	  dir autoexec.bat" (without the quotation marks)
	
	  Write down the date and time for both files, then follow the appropriate
	  procedure below.
	
	If the compressed drive (C) has more current versions of the CONFIG.SYS and
	AUTOEXEC.BAT files:
	
	1. Delete the CONFIG.SYS and AUTOEXEC.BAT files from the uncompressed drive (D)
	  by typing the following at the MS-DOS command prompt and pressing ENTER after
	  each line:
	
	  " del d:\config.sys
	  del d:\autoexec.bat" (without the quotation marks)
	
	2. Copy the CONFIG.SYS and AUTOEXEC.BAT files from the compressed drive (C) to
	  the uncompressed drive (D) by typing the following at the MS-DOS command
	  prompt and pressing ENTER after each line:
	
	  " copy c:\config.sys d:\config.sys
	  copy c:\autoexec.bat d:\autoexec.bat" (without the quotation marks)
	
	3. Run MS-DOS 6.2 Setup again.
	
	If the uncompressed drive (D) has more current versions of the CONFIG.SYS and
	AUTOEXEC.BAT files:
	
	1. Delete the CONFIG.SYS and AUTOEXEC.BAT files from the compressed drive (C) by
	  typing the following at the MS-DOS command prompt and pressing ENTER after
	  each line:
	
	  " del c:\config.sys
	  del c:\autoexec.bat" (without the quotation marks)
	
	2. Copy the CONFIG.SYS and AUTOEXEC.BAT files from the uncompressed drive (D) to
	  the compressed drive (C) by typing the following at the MS-DOS command prompt
	  and pressing ENTER after each line:
	
	  " copy d:\config.sys c:\config.sys
	  copy d:\autoexec.bat c:\autoexec.bat" (without the quotation marks)
	
	3. Run MS-DOS 6.2 Setup again.
	
	MORE INFORMATION
	================
	
	SuperStor is a disk compression utility program similar to Stacker.
	
	The SuperStor and Stacker products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 6.22 6.20 setup stepup msdos step-up
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	
