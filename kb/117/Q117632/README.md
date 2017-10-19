---
layout: page
title: "Q117632: Column Delimiter Options Toggle Incorrectly"
permalink: /kb/117/Q117632/
---

## Q117632: Column Delimiter Options Toggle Incorrectly

	Article: Q117632
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you press ALT+C or ALT+A several times in the Export As dialog box in
	Performance Monitor, it toggles between Tab and Comma under Column Delimiters.
	ALT+A should select the Tab option only and ALT+C should select the Comma option
	only.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. We are researching this problem and will post new
	information in the Microsoft KnowledgeBase as it becomes available.
	
	Steps to Reproduce Problem
	--------------------------
	
	In Performance Monitor, do the following:
	
	1. Start any counter.
	
	2. Choose Export from the File menu.
	
	3. Press ALT+C or ALT+A many times.
	
	Tab and Comma toggle back and forth.
	
	Additional query words: prodnt perfmon
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
