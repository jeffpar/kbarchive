---
layout: page
title: "Q89073: Windows: CD-ROM Drives and LANMAN10.386"
permalink: /kb/089/Q89073/
---

## Q89073: Windows: CD-ROM Drives and LANMAN10.386

{% raw %}

	Article: Q89073
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	3.00 3.00a 3.10 3.11
	
	WINDOWS
	
	kbnetwork kbusage kbmm kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows supports CD-ROM drives. The following explains how to
	configure a CD-ROM drive for operation with Windows.
	
	MORE INFORMATION
	================
	
	Steps to Configure a CD-ROM Drive for Windows 3.0, 3.0a
	-------------------------------------------------------
	
	1. Edit the SYSTEM.INI file with a text editor such as Notepad.
	
	2. Locate the [386enh] section and add the following:
	
	  device=LANMAN10.386
	
	3. Use the Windows EXPAND.EXE utility to expand the file LANMAN10.386 from the
	  Windows disks into the Windows SYSTEM subdirectory.
	
	4. Restart Windows.
	
	Steps to Configure a CD-ROM Drive for Windows 3.1
	-------------------------------------------------
	
	During Setup, if MSCDEX is loaded, then Windows 3.1 automatically installs
	LANMAN10.386. If you are using a version of MSCDEX greater than version 2.1,
	then you should remove the line
	
	  device=LANMAN10.386
	
	from your SYSTEM.INI's [386enh] section.
	
	General Information About Running a CD-ROM with Windows
	-------------------------------------------------------
	
	MSCDEX.EXE, the terminate-and-stay-resident (TSR) program that implements the
	Microsoft CD-ROM Extensions for MS-DOS, provides access to CD-ROM drives.
	MSCDEX.EXE appears to MS-DOS to be a network redirecter; it uses the same
	interface to MS-DOS as Microsoft LAN Manager.
	
	LANMAN10.386 causes calls from MS-DOS to a redirecter (including LAN Manager or
	MSCDEX.EXE) to be inside an enhanced-mode-critical section. This is required for
	these products to work correctly with Windows running in enhanced mode.
	
	Note that the flowchart on page 21 of the version 3.1 "Microsoft Windows Resource
	Kit" guide incorrectly uses the term LANMAN10.DOS where LANMAN10.386 is
	intended.
	
	Additional query words: 3.10 3.11 3.00 3.00a cd cdrom winfest doc err
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	
	=============================================================================
	

{% endraw %}
