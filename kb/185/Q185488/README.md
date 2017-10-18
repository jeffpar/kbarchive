---
layout: page
title: "Q185488: HP Printers May Print Multiple Copies of Jobs or Separator Pages"
permalink: kb/185/Q185488/
---

## Q185488: HP Printers May Print Multiple Copies of Jobs or Separator Pages

	Article: Q185488
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Service Pack 3 on a computer running Windows NT 4.0,
	Hewlett-Packard (HP) printers may function erratically. They may start printing
	multiple copies of jobs, multiple or duplicate separator pages, or print
	separator pages even though none are selected.
	
	CAUSE
	=====
	
	SP3 overwrites the Hprasddui.dll and Hprasdd.dll files installed with HP
	drivers.
	
	RESOLUTION
	==========
	
	Reinstall the latest version of the Hewlett Packard printer driver to ensure
	that the Hprasddui.dll and Hprasdd.dll files are replaced.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
