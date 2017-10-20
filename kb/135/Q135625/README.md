---
layout: page
title: "Q135625: BUG: Grid Valid Event Fires Before Grid Control Valid Fires"
permalink: /kb/135/Q135625/
---

## Q135625: BUG: Grid Valid Event Fires Before Grid Control Valid Fires

{% raw %}

	Article: Q135625
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 02-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a form that contains a grid object, clicking outside the grid fires
	the Valid event of the grid before it fires the valid event of the current
	control in the grid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form.
	
	2. Add a grid, and set its ColumnCount property to 1.
	
	3. Add a command button to the form, outside the grid.
	
	4. In the Valid event procedure of the grid, place this code:
	
	     WAIT WINDOW "Valid of the Grid"
	
	5. In the Valid event of Text1, the current control for the grid column, add
	  this code:
	
	     WAIT WINDOW "Valid of Grid Control"
	
	6. From the Command window, open any table and then run the form. Position the
	  cursor in the text box of the grid. Click the command button and note that
	  the Valid event of the grid fires before the Valid event of Text1 fires.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbtool kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
