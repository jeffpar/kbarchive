---
layout: page
title: "Q149141: BUG: Hanging Indents Not Preserved in Developer Studio Editor"
permalink: kb/149/Q149141/
---

## Q149141: BUG: Hanging Indents Not Preserved in Developer Studio Editor

	Article: Q149141
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Developer Studio editor, hanging indents beyond column 7 are not
	preserved when editing fixed-form source code files. This does not occur when
	editing free-form source code files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From the Developer Studio Tools menu, choose Options. Click the Tabs folder,
	  and set the auto-indent option to Default.
	
	2. Create a new text file, and save it with the .for file extension.
	
	3. Type in a new line of text in any column beyond column 7, and press the ENTER
	  key. This will position the cursor in the same starting column on the next
	  line.
	
	4. Type some text on the new line to move the cursor back to column 7.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
