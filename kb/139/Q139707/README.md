---
layout: page
title: "Q139707: Err Msg: System Agent Error - Cannot Find the File..."
permalink: kb/139/Q139707/
---

## Q139707: Err Msg: System Agent Error - Cannot Find the File...

	Article: Q139707
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Tasks scheduled in System Agent as file associations with installed programs do
	not run, or you receive the following error message when System Agent tries to
	run a scheduled task:
	
	  System Agent Error - Cannot find the file 'filename.ext'.
	  Make sure the path and filename are correct.
	
	CAUSE
	=====
	
	System Agent did not append the executable program name to the associated file
	name.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. In System Agent, click the scheduled task, and then click Properties on the
	  Program menu.
	
	2. In the Cmd Line box, type the full path for the associated file, or click
	  Browse and then double-click the appropriate file.
	
	3. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Plus! version 1.0 for
	Windows 95. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sage
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
