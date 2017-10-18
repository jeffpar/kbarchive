---
layout: page
title: "Q114579: Word 6.0 for Windows Tutorial Does Not Run on Windows NT"
permalink: kb/114/Q114579/
---

## Q114579: Word 6.0 for Windows Tutorial Does Not Run on Windows NT

	Article: Q114579
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up Word version 6.0 for Windows on a machine using the Windows NT
	or IBM OS/2 version 2.0 operating system, the tutorial will not run.
	
	CAUSE
	=====
	
	The tutorial that ships with Word 6.0 for Windows is designed to run under
	Windows 3.1 and will not run properly under Windows NT or IBM OS/2 version 2.0.
	Word Setup will detect Windows NT or IBM OS/2 version 2.0, and bypass the CBT
	portion of Setup. The WORDCBT directory is not created, and the CBT files are
	not installed.
	
	No informational message is generated to alert you that the CBT has not been
	installed.
	
	Additional query words: prodnt Computer Based Learning Help
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
