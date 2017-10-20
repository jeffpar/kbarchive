---
layout: page
title: "Q119742: Using 32-Bit Disk Access with Quantum LPS540 IDE Disk Drives"
permalink: /kb/119/Q119742/
---

## Q119742: Using 32-Bit Disk Access with Quantum LPS540 IDE Disk Drives

{% raw %}

	Article: Q119742
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	WINDOWS
	kbhw kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows in 386 enhanced mode with 32-bit disk access enabled on a
	Quantum LPS-540AT hard disk drive, the following error message occurs:
	
	  The Microsoft Windows 32-bit disk driver (WDCTRL) validation failed at phase
	  03, 3B.
	
	CAUSE
	=====
	
	Quantum Corporation has confirmed that the LPS-540AT has 1120 cylinders, 59
	sectors, and 16 heads, which makes this drive incompatible with the 32-bit disk
	access device driver included with Windows and Windows for Workgroups (WDCTRL).
	This does not affect 32-bit file access (VFAT) in Windows for Workgroups 3.11.
	
	
	WORKAROUND
	==========
	
	Quantum Corporation recommends setting the BIOS parameters to the following:
	
	  1024  cylinders
	  16    heads
	  63    sectors
	
	NOTE: There is also a file available from the Quantum bulletin board service
	(BBS) called IDE_DOS.EXE. This self-extracting compressed file contains an
	MS-DOS-level utility that allows the drive to be formatted to 540 megabytes.
	Also included is the file IDE_WIN.386, which is the Quantum replacement for
	WDCTRL.
	
	For more information about this procedure, contact Quantum Corporation Technical
	Support.
	
	Additional query words: 3.10 3.1 3.11 32bitdiskaccess fastdisk bda
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
