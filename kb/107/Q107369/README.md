---
layout: page
title: "Q107369: Os2LibPath Variable Requires &quot;Set&quot; to Change"
permalink: kb/107/Q107369/
---

## Q107369: Os2LibPath Variable Requires &quot;Set&quot; to Change

	Article: Q107369
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	Page 321 of the Microsoft Windows NT System Guide states the following:
	
	  "At the command prompt, you can change the library path for OS/2
	  applications by using the "Os2libpath" command."
	
	This is a documentation error. The "Os2libpath" command must be used with
	the "Set" command in order change the environment variable settings. Using
	the "Set" command in an MS-DOS VDM only changes the variable in that
	particular MS-DOS VDM.
	
	To "permanently" change the "Os2libpath" variable, use the Set command
	dialog button in the System icon of Control Panel. Even using this, it will
	only append the change to the default system "Os2libpath" which is
	%SYSTEMROOT%\SYSTEM32\OS2\DLL. The default System path itself cannot be
	changed.
	
	For more information about the Windows NT operating system, query on the
	following words in the Microsoft Knowledge Base:
	
	  environment and variable and Windows and NT
	
	Additional query words: prodnt libpath os/2libpath
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
