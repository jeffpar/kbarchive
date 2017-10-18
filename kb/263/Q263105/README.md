---
layout: page
title: "Q263105: Environment Variables Not Set by &quot;Double-Click&quot;"
permalink: kb/263/Q263105/
---

## Q263105: Environment Variables Not Set by &quot;Double-Click&quot;

	Article: Q263105
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an environment varibale is defined from a batch file or from the
	command-line, the defined variable and value do not appear in other command-line
	windows (Ntvdm.exe instances) and/or are not available to programs.
	
	CAUSE
	=====
	
	The set command defines a variable only for the current command line session,
	(Ntvdm.exe).
	
	When you double-click a batch file, the batch file runs in its own NTVDM session
	and then closes, so the environment variable does not show up when you open a
	new session or look in another session to see the values.
	
	RESOLUTION
	==========
	
	The solution is to use setx from the Windows NT resource kit, because it can
	establish environment variables for a user session or define a system variable.
	
	Setx has three modes of operation: it can define a variable for the user's
	session, or the system overall, or it can extract a value from the registry and
	set the result to the user session or the system. See the examples below:
	
	To set a system variable:
	setx color blue -m
	
	To set a user variable:
	setx color green
	
	To extract a registry value and set a variable to a system variable:
	setx color -k HKEY_CURRENT_USER\Console\ScreenColors -m
	(To set a registry key value to a user session variable simply omit the -m
	switch)
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Component         : ResKit Utilities,VDM VDM
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:3.5,3.51,4.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
