---
layout: page
title: "Q85957: BUG: CVW 4.0 May Pause When Stepping Through a Program"
permalink: kb/085/Q85957/
---

## Q85957: BUG: CVW 4.0 May Pause When Stepping Through a Program

	Article: Q85957
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft CodeView for Windows (CVW) version 4.0 may pause and display the
	output screen when stepping through a program using the Program Step (P [count])
	command.
	
	RESOLUTION
	==========
	
	Pressing any key (for example, the SPACEBAR key) causes the stepping to continue
	a few more steps. This process may have to be repeated until all the steps
	listed in [count] have been completed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft CodeView for Windows,
	version 4.0.
	
	We have not been able to reproduce this problem in CodeView for Windows 4.01,
	4.1, and 4.25, however, we are unable to confirm that the problem has been
	fixed.
	
	Additional query words: 4.00 CVW
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbCodeView400
	Version           : :4.0
	
	=============================================================================
	
