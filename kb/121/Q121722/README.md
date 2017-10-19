---
layout: page
title: "Q121722: PRB: &quot;Memo File Missing/Invalid&quot; Error with Project File"
permalink: /kb/121/Q121722/
---

## Q121722: PRB: &quot;Memo File Missing/Invalid&quot; Error with Project File

	Article: Q121722
	Product(s): Microsoft FoxPro
	Version(s): 2.5x 2.60 2.60a 3.00 | 2.00 2.5x
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to modify or build a project, one of the following error
	messages appear:
	
	- FoxPro 2.x:
	
	  Memo file missing/invalid
	
	-or-
	
	- Visual FoxPro:
	
	  Memo file <file_name> is missing or is invalid
	
	After this error occurs, the project cannot be built or compiled.
	
	CAUSE
	=====
	
	This error is usually caused by one of the following two problems:
	
	- The project's memo file (.PJT) is damaged, missing, or corrupt.
	
	  -or-
	
	- A file referenced in the project contains a faulty memo file. FoxPro report,
	  menu, and screen files all contain corresponding memo files. These files have
	  extensions of .FRT, .MNT, and .SCT, respectively.
	
	MORE INFORMATION
	================
	
	A FoxPro project contains two separate files: a .PJX file (database) and a .PJT
	file (memo). Both of these files store crucial information about the project.
	
	To Troubleshoot This Problem
	----------------------------
	
	1. Check that both the .PJX and .PJT files exist in the same directory. After
	  moving a project to a new location, the memo file is sometimes left in the
	  previous directory.
	
	2. Create a new project and add the main program to it. Build the new project
	  into an application. If the project memo file (.PJT) is damaged or corrupt,
	  this technique corrects the problem.
	
	3. Open each file referenced in the project to determine if that file has a
	  damaged or corrupt memo file. For example, to open a screen file as a
	  database, type "USE <screen-name>.scx" (without the quotation marks) in
	  the Command window. If FoxPro detects a bad memo file, an error message will
	  appear.
	
	Additional query words: VFoxWin FoxUnix FoxMac FoxDos FoxWin 2.50 2.50a 2.50b 2.50c tshoot errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : 2.5x 2.60 2.60a 3.00 | 2.00 2.5x
	
	=============================================================================
	
