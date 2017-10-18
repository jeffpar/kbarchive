---
layout: page
title: "Q193024: BUG: KEYBOARD Multiple Tabs Do Not Work in Browse Window"
permalink: kb/193/Q193024/
---

## Q193024: BUG: KEYBOARD Multiple Tabs Do Not Work in Browse Window

	Article: Q193024
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the KEYBOARD command to issue multiple tabs, to programmatically move from
	column to column in a Browse window, does not work.
	
	RESOLUTION
	==========
	
	Separate the tabs by some non-functional keystroke. For example, to workaround
	the problem, you may use these two techniques:
	
	     KEYBOARD
	     '{TAB}{CTRL+ALT+RIGHTARROW}{TAB}{CTRL+ALT+RIGHTARROW}{TAB}{CTRL+ALT+
	     RIGHTARROW}{TAB}'
	
	  -or-
	
	    #DEFINE TAB '{TAB}{CTRL+ALT+RIGHTARROW}'
	    KEYBOARD TAB+TAB+TAB+'{TAB}'
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, issue the BROWSE command for a table that contains
	  more than four fields.
	
	2. Create a program and enter the following code in the program:
	
	        ACTIVATE WINDOW <Browse name>
	        KEYBOARD '{Tab}{Tab}{Tab}{Tab}'
	
	3. Save and run the program.
	
	In Visual FoxPro 5.0x and 6.0, the highlight cursor moves to the next column
	instead of to the fourth column. In Visual FoxPro 3.0b, the third column of the
	browse appears highlighted. However, In Visual FoxPro 3.0b, if you keyboard less
	than three Tabs, it works properly.
	
	Additional query words: kbVFp600bug kbVFp500abug kbVFp300bbug kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
