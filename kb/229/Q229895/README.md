---
layout: page
title: "Q229895: Err Msg: Setup Was Unable to Copy the Following File Cdrom.sys"
permalink: /kb/229/Q229895/
---

## Q229895: Err Msg: Setup Was Unable to Copy the Following File Cdrom.sys

{% raw %}

	Article: Q229895
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start an unattended installation of Windows NT 4.0 from an MS-DOS
	prompt, you may receive the following error message:
	
	  Setup was unable to copy the following file, cdrom.sys.
	
	Also, in MS-DOS mode you may not be able to create or manipulate any file called
	Cdrom.sys.
	
	CAUSE
	=====
	
	This problem can occur if you load ATAPI Real Mode CD-ROM driver in the
	Config.sys file.
	
	RESOLUTION
	==========
	
	To resolve this problem, edit the Config.sys file. To do this, follow these
	steps:
	
	1. At the MS-DOS prompt, type "edit config.sys" (without the quotation marks),
	  and then press ENTER.
	
	2. Find the Device= line that contains the ATAPI Real Mode CD-ROM driver.
	
	3. Edit the line so the /D: switch does not contain the word value "cdrom."
	
	For example change the following line from
	
	  Device=<driver> /d:cdrom
	
	to
	
	  Device=<driver> /d:test1
	
	where <driver> is the path and file name of your CD-ROM driver.
	
	Additional query words: msdos cdrom.sys cdrom unattend install nt 4.0
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
