---
layout: page
title: "Q156653: Disabling the Installation of IE 2.0 During Setup"
permalink: kb/156/Q156653/
---

## Q156653: Disabling the Installation of IE 2.0 During Setup

	Article: Q156653
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, Internet Explorer (IE) 2.0 for Windows NT 4.0 is installed and
	placed on the desktop.
	
	MORE INFORMATION
	================
	
	The method of disabling the installation of IE 2.0 works with a normal network
	installation of Windows NT or an Unattended installation. To enable the
	installation of IE 2.0 again, simply remove the semicolon from the line.
	
	WARNING: Incorrect modifications to INF files can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from modifications of INF files can
	be solved. Use this method at your own risk.
	
	To disable the installation of Internet Explorer 2.0 during setup, the
	Iexplore.inf entry in Syssetup.inf needs to be commented or deleted.
	
	By default Syssetup.inf is compressed on the Windows NT 4.0 CD.
	
	1. Copy the I386 directory from the Windows NT 4.0 CD to a hard disk drive.
	
	2. Expand the Syssetup.in_ to Syssetup.inf
	
	  NOTE: Expand.exe must be run from within Windows NT, that is, expand
	  Syssetup.in_ to Syssetup.inf
	
	3. Rename Syssetup.in_ to Syssetup.old. By default, Setup will use the
	  compressed version if both exist.
	
	4. Open Syssetup.inf and search for Iexplore.inf and insert a semicolon in front
	  of Iexplore.inf.
	
	The change should look like this:
	
	[Infs.Always]
	; iexplore.inf,DefaultInstall
	
	Additional query words: How to
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
