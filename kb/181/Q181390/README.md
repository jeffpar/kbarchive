---
layout: page
title: "Q181390: PRB: Grid with Focus Ignores Alias of Second Form"
permalink: /kb/181/Q181390/
---

## Q181390: PRB: Grid with Focus Ignores Alias of Second Form

{% raw %}

	Article: Q181390
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp500 kbvfp500a
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a grid has focus, opening a second form containing bound controls does not
	change the active alias to the table used by the controls on the form. In
	addition, closing the form with the grid also closes all tables in the data
	session, including the table used by the controls on the second form.
	
	RESOLUTION
	==========
	
	Here are three resolutions:
	
	- Use a private data session on the second form.
	
	-or-
	
	- Add code to the GotFocus event of the second form to SELECT the necessary
	  alias. However, this does not prevent all of the tables closing when you
	  close the form with the grid.
	
	-or-
	
	- Add a command button to the form and add the following code to the Click
	  event:
	
	        DO FORM FORM2
	
	NOTE: Unfortunately, like the preceding option, this does not prevent all the
	tables from closing when the form with the grid is closed.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form (Form1) and add the TasTrade Customer table to the Data
	  Environment. Drag the header of the table to the form to create a grid.
	
	2. Create a second form (Form2) and add the TasTrade Employee table to the Data
	  Environment. Drag a couple of fields to the form.
	
	3. In the Command window type the following:
	
	        ON KEY LABEL F3 DO FORM Form1
	        ON KEY LABEL F4 DO FORM Form2
	
	4. Open the Data Session window. Press F3 to open the first form (Form1). Press
	  F4 to open the second form (Form2).
	
	Additional query words: grid alias
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp500 kbvfp500a 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
