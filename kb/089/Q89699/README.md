---
layout: page
title: "Q89699: HIMEM.SYS Err Msg: ERROR: Can't Enable A20"
permalink: /kb/089/Q89699/
---

## Q89699: HIMEM.SYS Err Msg: ERROR: Can't Enable A20

{% raw %}

	Article: Q89699
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	3.00 3.00a 3.10 3.11
	
	WINDOWS
	
	kbother kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may see one of the following error messages when youstart your system:
	
	  ERROR: Can't enable A20!
	
	-or-
	
	  WARNING: The A20 Line Was Already Enabled.
	
	CAUSE
	=====
	
	These error messages indicate that HIMEM.SYS is unable to control the A20 gate
	and affect the extended-memory handling system in your computer.
	
	The following can cause these errors to occur:
	
	- You are loading another memory manager or device driver before loading
	  HIMEM.SYS, and it is not allowing HIMEM.SYS access to the A20. Try making a
	  bootable system floppy, and in the CONFIG.SYS file make sure that HIMEM.SYS
	  is the first device loaded.
	
	- HIMEM.SYS has incorrectly identified the extended-memory handling mechanism
	  on your computer. Try specifying an alternate A20 handler by using the /M:
	  command line parameter from a bootable system floppy.
	
	   - Windows 3.0 HIMEM.SYS Version 2.60
	     Refer to the README.TXT file that is located in your Windows directory.
	
	   - Windows 3.0 with MS-DOS 5.0 HIMEM.SYS Version 2.77
	     Refer to the README.TXT file that is located in your DOS directory and to
	     page 610-613 of the "Microsoft MS-DOS User's Guide and Reference" for
	     version 5.0.
	
	   - Windows 3.1 HIMEM.SYS Version 3.07
	     Refer to pages 543-547 of the "Microsoft Windows User's Guide."
	
	   - MS-DOS 6.0 and 6.2 Systems
	     Refer to pages 217-220 of the Microsoft MS-DOS User's Guide for version 6.0
	     and 6.2.
	
	- The machine's BIOS uses an extended-memory handling method that is unknown to
	  HIMEM.SYS.
	
	   - If the BIOS is shadowing ROM, then contact your hardware vendor and see if
	     this option can be disabled to allow HIMEM.SYS to load.
	
	   - If the BIOS is doing any special handling of the A20, then contact your
	     hardware vendor and see if this option can be disabled to allow HIMEM.SYS
	     to load.
	
	   - In some cases, a BIOS upgrade from the manufacturer may solve the problem.
	
	Additional query words: err msg winboot 3.10 3.00a 6.00 6.20 3.00 3.11 himemver extended memory
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
