---
layout: page
title: "Q139769: How to Add a New Value to a List of Values in a Combo Box"
permalink: /kb/139/Q139769/
---

## Q139769: How to Add a New Value to a List of Values in a Combo Box

{% raw %}

	Article: Q139769
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The RowSourceType property of a combo box can be set to Value, and a list of
	values can be specified for the row source. This article illustrates how you can
	input a value that is not in the list.
	
	MORE INFORMATION
	================
	
	If the ControlSource property for the combo box is set to a field in the
	underlying table, the value chosen from the combo box will be written to that
	field when the record is saved. But if the value to be stored is not in the list
	assigned to the row source, the value is not written to the field.
	
	To store that non-list value to the field, you need a way to:
	
	1. Store the value, which by default is not stored.
	
	2. Update or refresh the list in the combo box so that if a non-list value is
	  stored to the table, that value reappears in the list for that record and
	  only that record.
	
	Step-by-Step Example
	--------------------
	
	The following steps illustrate how to input a value that is not in the list of
	values for a combo box:
	
	1. Create a table called Test that has a single character field that is also
	  called Test by entering the following code in a program file and then running
	  the program. (Make sure you don't already have a table named Test in your
	  current directory:
	
	     CREATE TABLE test (test c(10))
	     INSERT INTO test (test) VALUES("pigs")
	     INSERT INTO test (test) VALUES("sheep")
	     INSERT INTO test (test) VALUES("hippos")
	     INSERT INTO test (test) VALUES("pigs")
	     INSERT INTO test (test) VALUES("sheep")
	     INSERT INTO test (test) VALUES("hippos")
	
	2. Create a new form (Form1), and add a combo box (Combo1) to it.
	
	3. Add the Test table to the form's data environment.
	
	4. Set the RowSourceType property of the combo box to 1-Value.
	
	5. Enter the following for the RowSource property of the combo box:
	
	  " pigs,sheep,hippos " (without the quotation marks)
	
	6. Set the ControlSource property of the combo box to a field in your table.
	  This example assumes that the field is called Test, so the entry would be:
	
	     Test.Test
	
	7. Add a property to the form and name it cdspval. This property will be used to
	  keep track of the current DisplayValue of the Combo Box.
	
	8. Place the following code in the Combo1 Valid event:
	
	     * This code writes the user's value to the test.test field
	     * if the value does not appear in the list:
	   if upper(this.displayvalue) != 'PIGS' and;
	           upper(this.displayvalue) != 'SHEEP' and;
	           upper(this.displayvalue) != 'HIPPOS'
	
	        replace test.test with thisform.cdspval
	     endif
	     thisform.cdspval=""
	     thisform.refresh
	
	9. Place the following code in the Combo1 GotFocus event:
	
	        thisform.cdspval=this.displayvalue
	        thisform.combo1.rowsource = 'pigs,sheep,hippos'
	        if alltrim(upper(test.test))!="PIGS" and;
	        alltrim(upper(test.test))!="SHEEP" and;
	        alltrim(upper(test.test))!="HIPPOS"
	
	         if !empty(test.test)
	              thisform.combo1.additem(alltrim(test.test))
	           endif
	        endif
	
	10. Place the following code in the Combo1 LostFocus event:
	
	     * This code returns the combo1.rowsource list to its original value
	     * before another object gains the focus
	     this.rowsource = 'pigs,sheep,hippos'
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
