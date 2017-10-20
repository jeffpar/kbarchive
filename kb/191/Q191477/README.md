---
layout: page
title: "Q191477: BUG: Overflow of Number in RowHeight Property Allowed"
permalink: /kb/191/Q191477/
---

## Q191477: BUG: Overflow of Number in RowHeight Property Allowed

{% raw %}

	Article: Q191477
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When entering a number too large for the RowHeight property of the DataGrid (not
	DBGrid) control, it either overflows or underflows to a completely different
	random number.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Under Project/Components, select "Microsoft DataGrid Control 6.0 (OLEDB).
	
	3. Add the DataGrid Control to the form.
	
	4. Right-click on DataGrid, and choose "Properties."
	
	5. Enter the number '57109660' for the RowHeight, and choose Apply. Note that
	  the RowHeight becomes '6381691.'
	
	Additional query words: kbCtrl kbActiveX kbdse kbDSupport kbVBp kbVBp600bug
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
