---
layout: page
title: "Q98312: How to Install MS-DOS 6 Upgrade to a Drive Other Than C"
permalink: /kb/098/Q98312/
---

## Q98312: How to Install MS-DOS 6 Upgrade to a Drive Other Than C

	Article: Q98312
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run MS-DOS 6.0 Setup without any parameters, your only choice for the
	destination of the MS-DOS 6.0 files is drive C. To use another drive, use the
	procedure in this article.
	
	MORE INFORMATION
	================
	
	NOTE: You must have at least 3-4 megabytes of free space on drive C to use this
	procedure.
	
	1. Run Setup with the /Q switch by typing the following at the MS-DOS command
	  prompt and then pressing ENTER:
	
	  " setup /q" (without the quotation marks)
	
	2. Press ENTER at the Welcome to Setup screen.
	
	3. The next screen gives you the option to change your computer type, MS-DOS
	  path, and display type. Use the arrow keys to select MS-DOS Path, then press
	  ENTER.
	
	4. Type the drive and path to which you want to install MS-DOS.
	
	5. To transfer the new system files (IO.SYS, MS-DOS.SYS, COMMAND.COM, and
	  DBLSPACE.BIN) to the proper places on your boot drive, type the following and
	  then press ENTER:
	
	  " setup /" (without the quotation marks)
	
	You have now upgraded your operating system to MS-DOS 6.0. The boot drive (C)
	contains the new system files, and the path you specified in step 4 contains all
	the MS-DOS programs and drivers (92 files total).
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
