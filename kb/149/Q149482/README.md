---
layout: page
title: "Q149482: BUG: MSDEV Does Not Report Error When It Cannot Find Make File"
permalink: kb/149/Q149482/
---

## Q149482: BUG: MSDEV Does Not Report Error When It Cannot Find Make File

	Article: Q149482
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbide kbVC kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Developer Studio (Msdev.exe) cannot find the make (.mak) file that
	corresponds to the workspace (.mdp file) you are attempting to open, it does not
	give you any indication of the problem. It does not report an error, and most of
	the commands on the Insert or Build menus are disabled.
	
	RESOLUTION
	==========
	
	Make sure that the .mak file that corresponds to the workspace is in the same
	directory as the .mdp file and has the same base name. For example, if the
	workspace file is Myproject.mdp, make sure that a file named Myproject.mak
	exists in the same directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbVC400bug 4.00 4.10 4.20
	
	======================================================================
	Keywords          : kbide kbVC kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420
	Version           : :4.0,4.1,4.2
	
	=============================================================================
	
