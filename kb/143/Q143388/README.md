---
layout: page
title: "Q143388: 16-bit Windows Programs May Not Start"
permalink: /kb/143/Q143388/
---

## Q143388: 16-bit Windows Programs May Not Start

	Article: Q143388
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to run a 16-bit Windows program in its own memory space, an
	error message may briefly appear on the screen, and the program may not start.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions exists:
	
	- Folders in the path to the program (.exe) file contain long file names
	  (LFNs).
	
	- Folders in the path to the program file contain extended characters.
	
	NOTE: There may be other possible causes for this behavior.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use one or more of the following methods:
	
	- Change the folder names in the path so that they do not contain extended
	  characters.
	
	- Rename folders so that they conform to the MS-DOS 8.3 naming convention.
	
	- Do not run the program in a separate memory space. This causes the program to
	  be run in a shared memory space within a single Windows-On- Windows (WOW)
	  environment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT 3.5 and
	3.51. This problem is resolved in Microsoft Windows NT 4.0.
	
	Additional query words: prodnt windows on windows ntvdm
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
