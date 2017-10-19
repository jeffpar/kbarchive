---
layout: page
title: "Q222974: Windows NT 4.0 Enterprise Edition Does Not Use More Than 256 MB"
permalink: /kb/222/Q222974/
---

## Q222974: Windows NT 4.0 Enterprise Edition Does Not Use More Than 256 MB

	Article: Q222974
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 18-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT Server 4.0, Enterprise Edition, the operating
	system may not use all available memory if you have more than 256 megabytes (MB)
	of RAM installed.
	
	CAUSE
	=====
	
	During the installation process, the "/maxmem=256" switch is added to the
	Boot.ini file. This switch is added to prevent problems that may occur when the
	Windows NT base code is installed on computers with more than 256 MB of RAM. The
	Windows NT base code is installed first during a normal Enterprise Edition
	installation.
	
	When you reboot the computer after the installation is complete, the operating
	system is limited to using the first 256 MB of available memory unless you
	remove the "/maxmem=256" switch from the Boot.ini file.
	
	RESOLUTION
	==========
	
	To correct this issue, remove the "/maxmem=256" switch from the Boot.ini file:
	
	1. Use any text editor (such as Notepad) to open the Boot.ini file. Note that
	  the Boot.ini file is a hidden file located in the root folder of the boot
	  drive.
	
	2. Locate the line that contains the "/maxmem=256" switch.
	
	3. Remove the line, or disable it by placing a semicolon (;) at the beginning of
	  the line.
	
	4. Save the Boot.ini file, and then quit the text editor.
	
	5. Restart the computer.
	
	MORE INFORMATION
	================
	
	If you install Windows NT Server, Enterprise Edition, directly from the CD-ROM,
	the installation process automatically removes this switch. If you perform the
	installation using floppy disks or using an unattended installation process, the
	switch remains and must be removed manually.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400xsearch
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
