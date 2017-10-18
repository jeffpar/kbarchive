---
layout: page
title: "Q149133: BUG: Fixed-Form Source in Column 7 Is Shifted to Column 6"
permalink: kb/149/Q149133/
---

## Q149133: BUG: Fixed-Form Source in Column 7 Is Shifted to Column 6

	Article: Q149133
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Developer Studio editor, fixed-form source code that is indented to
	column 7 with a preceding tab is shifted to column 6 when you press the ENTER
	key.
	
	RESOLUTION
	==========
	
	Place the pointer in column 1 and press the ENTER key to work around the
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From the Developer Studio Tools menu, choose Options, and then click the Tabs
	  folder. Set the auto-indent option to Default, and select the Keep tabs
	  option.
	
	2. Create a new text file, and save it with the .for file extension.
	
	3. Press the TAB key to move to column 7, and type some text.
	
	4. Place the insertion point in column 7 at the beginning of the typed text, and
	  press ENTER several times. Note the text is moved to the next line but is
	  shifted back to column 6.
	
	If the text typed in step 3 is preceded by a tab character, press ENTER once to
	reproduce the problem. If the text typed in step 3 is preceded by spaces, press
	ENTER twice to reproduce the problem.
	
	This problem can also occur if on the Tools menu, you choose Options, click Tabs,
	and then select Insert spaces. This occurs because auto-indent still uses a Tab
	character to indent the code to column 7.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
