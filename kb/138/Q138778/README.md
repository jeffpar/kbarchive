---
layout: page
title: "Q138778: PRB: Numeric Value Not Written to Table from Text Box"
permalink: /kb/138/Q138778/
---

## Q138778: PRB: Numeric Value Not Written to Table from Text Box

{% raw %}

	Article: Q138778
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you place the insertion point in the middle of numerical field on a form
	and press ENTER, the displayed value becomes the integer value of the digits to
	the left of the insertion point. For example, if the displayed field value is
	12345.678, and you place the insertion point between the 2 and the 3 and press
	ENTER, the new displayed value becomes 12.000. However, unlike the behavior when
	directly editing a table in FoxPro 2.6, the value is not written to the table
	after you press the ENTER key.
	
	WORKAROUND
	==========
	
	A numerical field from a table added to a FoxPro for Windows, version 2.6 screen
	displays the truncated results and writes the changes to the table as soon as
	you move off of the field. In Visual FoxPro, if you manually change the field,
	the ControlSource updates and changes are written to the table. To force Visual
	FoxPro to behave as FoxPro 2.6 does, you must either use the REPLACE command or
	enable data buffering. Both methods are discussed below.
	
	Using the REPLACE Command to Edit the Table Directly
	----------------------------------------------------
	
	1. Add a text box to a form, and set its ControlSource property to a numerical
	  field from a table.
	
	2. In the LostFocus event of the text box, add these commands:
	
	     REPLACE <fieldname> WITH This.Value
	     This.Refresh
	
	Data buffering
	--------------
	
	1. Set the BufferMode property of the form to either Optimistic or Pessimistic
	  buffering.
	
	2. Add a text box to a form, and set its ControlSource property to a numerical
	  field from a table.
	
	3. In the LostFocus event of the text box, add these commands:
	
	     REPLACE <fieldname> WITH This.Value
	     =TABLEUPDATE(.T.)
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If you don't want to have Visual FoxPro write the changes to the table or
	display the changed value, place the following code in the LostFocus event of
	the textbox:
	
	     This.Refresh
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Add a numeric field from a table to a form.
	
	2. Set the ControlSource of the text box to a numeric field from a table.
	
	3. Add a two command buttons, one for Skip and one for Prior. For an example
	  showing how to add navigation buttons or a toolbar to a form, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q130683 How to Create a General Purpose Reusable Navigation Toolbar
	
	4. Run the form.
	
	5. Place the insertion point between two numbers in the field, and press ENTER.
	
	6. The value displayed in the field will truncate to the integer value that lies
	  to the left of the insertion point.
	
	7. To see the display value revert to previous value, move back onto the field.
	
	8. To see that the new value was not written to table, move the record pointer
	  by clicking Skip and then clicking Prior.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
