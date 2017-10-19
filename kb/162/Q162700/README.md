---
layout: page
title: "Q162700: WD97: &quot;All Active Templates and Documents&quot; Missing Macros"
permalink: /kb/162/Q162700/
---

## Q162700: WD97: &quot;All Active Templates and Documents&quot; Missing Macros

	Article: Q162700
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbwordvba
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you display the Macros dialog box, you have the option to list available
	macros from different sources in the "Macros in" box. One of the options to
	choose is "All Active Templates and Documents." When you select this option, you
	may not see the macros you expect.
	
	CAUSE
	=====
	
	The "All Active Templates and Documents" option lists macros available in:
	
	- Templates or documents placed in the Office Start Up folder.
	
	- Templates or documents made available when you click "Templates and Add- Ins"
	  on the Tools menu.
	
	- The currently active document and its attached template.
	
	The "All Active Templates and Documents" option does NOT show:
	
	- Macros in non-active but currently open documents or templates
	
	- New, Open, or Close events for any document.
	
	- Visual Basic for Applications code placed in UserForm event procedures and
	  subroutines or functions.
	
	- Subroutines or functions that expect arguments, as in the following
	  examples:
	
	        Sub MySub (MyString As String)
	
	  -and-
	
	        Function MyFunction (MyString As String)
	
	- Subroutines or Functions declared as Private, as in the following examples:
	
	        Private Sub MySub ()
	
	  -and-
	
	  Private Function MyFunction ()
	
	WORKAROUND
	==========
	
	Activate the document or template containing the macros you want to see before
	you display the Macros dialog box.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: wordcon vba vb vbe
	
	======================================================================
	Keywords          : kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
