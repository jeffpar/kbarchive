---
layout: page
title: "Q216892: How to Disable the Default Exchange Mail Client Installation"
permalink: kb/216/Q216892/
---

## Q216892: How to Disable the Default Exchange Mail Client Installation

	Article: Q216892
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbinterop kbsetup
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	As part of the default installation process in Windows NT, the Microsoft
	Exchange Mail client software is included without providing the user with an
	option to manually disable the installation of the client.
	
	MORE INFORMATION
	================
	
	To prevent the Exchange Mail client from loading during a Windows NT
	installation (before beginning the installation process), do the following:
	
	1. Copy the <\i386> folder from the installation CD to a partition on a
	  computer running Windows NT. For example, if your CD-ROM drive is drive D,
	  and you want to copy the folder to your drive C, type "copy d:\i386 c:\i386"
	  (without the quotation marks) and press ENTER.
	
	2. At a command prompt, change to the new <\i386> folder's location, type
	  "expand Syssetup.in_ Syssetup.inf" (without the quotation marks), and then
	  press ENTER.
	
	3. At the same command prompt, rename the Syssetup.in_ file. To do this, type
	  "ren syssetup.in_ syssetup.old" (without the quotation marks) and then press
	  ENTER.
	
	4. Use a standard text editor, such as Microsoft Notepad, to edit the
	  Syssetup.inf file. In the [BaseWinOptionsInfs] section, locate the line
	  containing the Msmail.inf entry and type a semicolon at the beginning of the
	  line.
	
	5. Save and exit the Syssetup.inf file.
	
	You can now begin the Windows NT installation process from the <\i386>
	folder containing the modified Syssetup.inf file (which will prevent the
	Exchange Mail client from loading).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
