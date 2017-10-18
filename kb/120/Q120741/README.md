---
layout: page
title: "Q120741: MacFile Applet Does Not Show Up After Changing Drive Letters"
permalink: kb/120/Q120741/
---

## Q120741: MacFile Applet Does Not Show Up After Changing Drive Letters

	Article: Q120741
	Product(s): Microsoft Windows NT
	Version(s): 3.10
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10
	
	WINDOWS
	
	kbenv kbbug3.10 kbfix3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Services For Macintosh (SFM) version 3.1, then change the drive
	letter of the drive that NT is installed on, the MacFile control panel applet no
	longer appears in File Manager. This can also happen if you upgrade by
	installing Windows NT version 3.5 over Windows NT version 3.1 and the drive
	letters had been changed the same way.
	
	CAUSE
	=====
	
	In Windows NT 3.1 the path to the .CPL file for the MacFile menu item was hard
	coded to the system root directory:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\
	  FileManager\AddOns\AfpManager: REG_SZ: E:\NTS612\System32\sfmmgr.cpl
	  (in this example E:\NTS612 is where Windows NT 3.1 was installed)
	
	Changing the drive letter renders this path invalid.
	
	RESOLUTION
	==========
	
	In Windows NT version 3.5 the path is not hard coded in the registry. Edit it to
	read as shown below using REGEDT32.EXE:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\
	  FileManager\AddOns\Afp Manager: REG_SZ: sfmmgr.cpl
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1. This
	problem has been corrected in Windows NT version 3.5.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10
	
	=============================================================================
	
