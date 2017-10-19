---
layout: page
title: "Q125905: DLL Errors When Running Windows 16-Bit Applications"
permalink: /kb/125/Q125905/
---

## Q125905: DLL Errors When Running Windows 16-Bit Applications

	Article: Q125905
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message will occur when you attempt to run an application on
	Windows NT that requires a Dynamic-Link Library (DLL) file that the application
	cannot find:
	
	  File Error
	
	  Cannot find xxxx.DLL
	
	Where xxxx is the filename of the DLL that cannot be found.
	
	CAUSE
	=====
	
	This happens when Windows NT is installed on a computer that already had Windows
	version 3.1 or Windows for Workgroups (WfWG) installed, and where Windows NT is
	installed in a separate directory and the application was installed under
	Windows or WfWG.
	
	This is also likely to happen when the directory of the application is not in the
	Path.
	
	RESOLUTION
	==========
	
	To avoid this problem, modify the Path statement in Windows NT to include the
	directory of the application DLL files as follows:
	
	1. From Control Panel, choose the System icon.
	
	2. In the System Environment Variables section of the System dialog box, select
	  this line:
	
	  Path=%SystemRoot%\system32;%SystemRoot%
	
	  NOTE: The path may be different if it has been modified. The path listed above
	  is the default Path statement for Windows NT.
	
	3. In the Value box, append one of the following lines to the existing Path
	  (depending on where the DLL files for the application are installed):
	
	  ;c:\windows\system
	
	  Where C:\WINDOWS\SYSTEM is the Windows 3.1 or WfWg system path.
	
	  -or-
	
	  ;c:\appdir
	
	  Where C:\APPDIR is the application directory.
	
	4. Choose the Set button.
	
	5. Choose the OK button.
	
	NOTE: You are not required to log off or restart Windows NT after making this
	change. The next application you start will use the new settings. However,
	applications running before you made the changes will not be affected.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q102424: Migrating Windows 3.1 Program Groups to Windows NT
	
	For more information on Windows NT program groups, query on the following words
	here in the Microsoft Knowledge Base:
	
	  migrated and icons and items and video
	
	Additional query words: prodnt win.ini initialization
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
