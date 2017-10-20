---
layout: page
title: "Q125755: Using START to Run Program Information Files (PIFs)"
permalink: /kb/125/Q125755/
---

## Q125755: Using START to Run Program Information Files (PIFs)

{% raw %}

	Article: Q125755
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
	
	When you use the Windows NT START command to run a program information file
	(PIF) from Command Prompt or a batch file, the following error message
	appears:
	
	  The name specified is not recognized as in internal or external command,
	  operable program or batch file.
	
	The Windows NT Workstation 3.5 System Guide on page 336 (page 342 of the
	Windows NT Server 3.5 System Guide) notes that you can start a PIF using
	the following command line:
	
	  start <myapp>
	
	where <myapp> is the name of the PIF you wish to run. This only works if
	the filename of the PIF is the same as the filename of the application
	being called in the PIF. If the name of the PIF is different than the name
	of the application being called from the PIF, you need to include the .PIF
	extension, as in the following example:
	
	  start myapp.pif
	
	If you fail to include the .PIF extension, you will receive the error
	message noted above.
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
