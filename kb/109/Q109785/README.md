---
layout: page
title: "Q109785: Command Line NTBACKUP /B Omits Registry Files"
permalink: /kb/109/Q109785/
---

## Q109785: Command Line NTBACKUP /B Omits Registry Files

	Article: Q109785
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run NTBACKUP from a command line, setting the parameter /B (backup the
	registry) fails to properly back up the registry. The command excutes and
	properly backs up the files in the path specified, but the registry files WILL
	NOT be backed up.
	
	Using the Administrative Tools Backup program correctly backs up the registry
	files.
	
	WORKAROUND
	==========
	
	To work around this problem, do one the following:
	
	- Back up the registry files interactively by selecting the Backup Local
	  Registry option in the Administrative Tools Backup program.
	
	-or-
	
	- Use the Windows NT Resource Kit utility REGBACK from the command line or in
	  batch files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt BAT
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
