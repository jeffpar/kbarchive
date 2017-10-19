---
layout: page
title: "Q119067: Booting MS-DOS with QEMM DOSDATA.SYS Starts Windows 95"
permalink: /kb/119/Q119067/
---

## Q119067: Booting MS-DOS with QEMM DOSDATA.SYS Starts Windows 95

	Article: Q119067
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbtool diskmem win95 appscomp kbAppCompatibility kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you press the F4 key when the "Starting Windows 95" message appears, your
	computer may not start with your previous version of MS-DOS. You may see the
	"Starting MS-DOS" message, but shortly after this message appears, your computer
	restarts and the "Starting Windows 95" message is displayed again.
	
	CAUSE
	=====
	
	QEMM versions 7.03 and later install a utility called DOSDATA.SYS in the
	CONFIG.SYS file. When this file is read, it forces the computer to reboot so
	that it can optimize memory allocations made from the first boot cycle. Windows
	95 does not support the DOSDATA.SYS utility included with QEMM versions 7.03 and
	later.
	
	RESOLUTION
	==========
	
	To boot MS-DOS, follow these steps:
	
	1. Press F4 when you see the "Starting Windows 95" message.
	
	2. The computer reboots after DOSDATA.SYS is read and displays "Starting Windows
	  95" again.
	
	3. Press F4 when you see "Starting Windows 95" the second time. This allows the
	  computer to continue booting MS-DOS.
	
	-or-
	
	1. Remark out any statements for QEMM in the CONFIG.SYS file by placing a
	  semicolon before those statements and then reboot your computer.
	
	  NOTE: If you are running Windows 95 (not your previous version of MS-DOS),
	  modify the CONFIG.DOS file, not the CONFIG.SYS file. If you booted MS-DOS,
	  modify the CONFIG.SYS file.
	
	2. Press F4 when you see the "Starting Windows 95" message.
	
	NOTE: You may have to edit your MSDOS.SYS file to boot your previous version of
	MS-DOS. For additional information, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q118579 Contents of the Windows Msdos.sys File
	
	  Q121963 Requirements to Boot Previous Operating System
	
	MORE INFORMATION
	================
	
	QEMM is manufactured by Quarterdeck Office Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional querey words: 95 qemm386 3rdparty
	
	======================================================================
	Keywords          : kb3rdparty kbsetup kbtool diskmem win95 appscomp kbAppCompatibility kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
