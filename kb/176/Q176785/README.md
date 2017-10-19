---
layout: page
title: "Q176785: PRB: SET MARK TO Does Not Work with &quot;#&quot; and &quot;A&quot;"
permalink: /kb/176/Q176785/
---

## Q176785: PRB: SET MARK TO Does Not Work with &quot;#&quot; and &quot;A&quot;

	Article: Q176785
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use characters like "#", "a", and "A" as date delimiters to enter a
	date value in Visual FoxPro 5.x, the delimiter shifts to the right creating an
	invalid entry.
	
	RESOLUTION
	==========
	
	Use characters other than "#", "a", and "A" as date delimiters.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This problem does not occur in Visual FoxPro version 3.x.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create and run a program (.prg) file with the following code:
	
	         SET MARK TO "#"
	         ldDate = {}
	         @1,1 GET ldDate
	         READ
	
	2. Run the program.
	
	3. Type in the date.
	
	NOTE: The "#" character shifts one space to the right with every character that
	you enter. This eventually results in an invalid date entry.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
