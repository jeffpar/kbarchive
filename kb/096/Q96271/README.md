---
layout: page
title: "Q96271: Chaining Parent PSP Environment Variables"
permalink: kb/096/Q96271/
---

## Q96271: Chaining Parent PSP Environment Variables

	Article: Q96271
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some MS-DOS-based applications change the environment variables of their parent
	applications by chaining through the program segment prefix (PSP). This
	functionality is not provided under Windows NT if the parent is a 32-bit
	application.
	
	When an MS-DOS-based application starts from a single command shell (SCS), it
	inherits a new copy of environment variables. Any attempts by the application to
	modify its parent's environment variables are unsuccessful. When the application
	closes, the SCS is restored to its original state. If another MS-DOS-based
	application starts, none of the changes the first application made exist.
	
	However, if the parent is another MS-DOS-based application, environment variables
	can be modified by the child application and used by the parent.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
