---
layout: page
title: "Q190267: PRB: Negative Numbers Do Not Display in a Combo Box"
permalink: /kb/190/Q190267/
---

## Q190267: PRB: Negative Numbers Do Not Display in a Combo Box

{% raw %}

	Article: Q190267
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a combo box has the RowSourceType set to SQL Statement and the BoundTo
	property is set to true, negative numeric values do not display in the combo
	box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If the RowSourceType property is set to any other value, negative numbers will
	display in the combo box. Also, if the BoundTo property is set to false,
	negative numbers will display in the combo box, but the positive value of that
	number is written to the table.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Save the following code to a program file and run it to create a table named
	  "test" with a numeric field called "numfld".
	
	        CREATE TABLE test (numfld N(3))
	        INSERT INTO test (numfld) VALUES (1)
	        INSERT INTO test (numfld) VALUES (2)
	        INSERT INTO test (numfld) VALUES (-1)
	        INSERT INTO test (numfld) VALUES (-2)
	
	2. Create a form, add the table to the Data Environment, and add a combo box to
	  the form.
	
	3. Change the following properties of the combo box:
	
	        BoundTo = .T.
	        ControlSource = numfld
	        RowSource = SELECT * FROM test INTO CURSOR mytest
	        RowSourceType = SQL Statement
	
	4. Run the form and select a negative number from the drop-down combo box. Note
	  that once a negative number is selected, it does not display in the combo
	  box.
	
	Additional query words: FxtoolFormdes kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
