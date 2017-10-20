---
layout: page
title: "Q132739: Setup Disks Created With WINNT /O Fail To Find Hard Disk"
permalink: /kb/132/Q132739/
---

## Q132739: Setup Disks Created With WINNT /O Fail To Find Hard Disk

{% raw %}

	Article: Q132739
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Setup disks created with the WINNT /O or WINNT32 /O command or when
	you run the gui mode WINNT command, select options, and select create boot
	floppy disk, Windows NT Setup fails and the following error message appears:
	
	  Setup is unable to locate the hard drive partition prepared by the MS-DOS
	  portion of Setup.
	
	  When you run the MS-DOS Windows NT Setup program, you must specify a temporary
	  drive that is supported by Windows NT. See your System Guide for more
	  information.
	
	CAUSE
	=====
	
	The WINNT /O or WINNT32 /O command creates three Windows NT Setup disks and a
	file called WINNT.SIF (on Disk 2) for Windows NT Setup. The WINNT.SIF file
	contains information about the location of Temporary files copied your hard disk
	drive. If the temporary NT installation files are not accessible or missing the
	above message will be displayed.
	
	WORKAROUND
	==========
	
	To work around this problem, delete or rename the WINNT.SIF file on Disk 2 or
	remake the setup disks using WINNT /OX or WINNT32 /OX and restart Windows NT
	Setup.
	
	STATUS
	======
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q110695 Err Msg: Setup is Unable to Locate the Hard Drive...
	
	Additional query words: prodnt upgrade install sbs
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : 3.51 4.0
	
	=============================================================================
	

{% endraw %}
