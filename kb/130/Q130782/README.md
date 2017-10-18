---
layout: page
title: "Q130782: Access 2.0 Command Line gets Truncated Under Windows NT 3.5"
permalink: kb/130/Q130782/
---

## Q130782: Access 2.0 Command Line gets Truncated Under Windows NT 3.5

	Article: Q130782
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you start Microsoft Access 2.0 with a long command line path under Windows NT
	3.5, the path is truncated to 99 characters. This problem occurs when "Run in
	Separate Memory Space" is selected.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Select the Access Icon from Program Manager, choose Properties, and clear the
	  "Run in Separate Memory Space" check box.
	
	  -or-
	
	- Use a shorter command line.
	
	MORE INFORMATION
	================
	
	Access allows the full path to application, full path to database file, user
	name, full path to INI file, and a macro name to be included on the command
	line.
	
	Additional query words: prodnt truncated access separate
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
