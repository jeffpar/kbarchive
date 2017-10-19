---
layout: page
title: "Q153824: CPS Winntp Ignores Defaults.inf During Profile"
permalink: /kb/153/Q153824/
---

## Q153824: CPS Winntp Ignores Defaults.inf During Profile

	Article: Q153824
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you're using the Windows NT Computer Profile Setup utility (CPS), the
	Answer file is ignored during the Winntp.exe portion of setup. Network settings
	are bypassed and often the computer displays dialog boxes prompting you for such
	information as the machine name and user name.
	
	CAUSE
	=====
	
	The values are now being ignored even though they may have worked previously.
	This is caused by profiling a system with Winntp then making changes to the
	configuration of that same computer and running Uplodprf.exe to upload those
	changes onto the distribution server.
	
	There is a key in the registry (at HKEY_LOCAL_MACHINE\System\Setup) that shows
	the command line setup uses. A normal setup (winnt /b, floppy initiated) will
	show:
	
	  CmdLine: REG_SZ: setup -g -i initial.inf... (partial line shown)
	
	A profiled setup (Winntp.exe initiated) will show:
	
	  CmdLine: REG_SZ: setup -g -i profile.inf...
	
	WORKAROUND
	==========
	
	Make all changes to the master system, not the target systems.
	
	
	Additional query words: prodnt 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbMSPressSearch kbWinNTS351search kbWinNTS350search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : :3.5,3.51
	
	=============================================================================
	
