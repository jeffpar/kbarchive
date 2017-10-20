---
layout: page
title: "Q170148: FIX: Cannot Trap Error Number 1884 on Form"
permalink: /kb/170/Q170148/
---

## Q170148: FIX: Cannot Trap Error Number 1884 on Form

{% raw %}

	Article: Q170148
	Product(s): Microsoft FoxPro
	Version(s): 3.0 3.0b 5.0 5.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp kbvfp600fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot trap duplicate key errors such as the following when the error is
	caused by a user's interaction with a grid on a form:
	
	  Uniqueness of index "name" is violated (Error 1884)
	
	RESOLUTION
	==========
	
	For a workaround that uses record buffering, place the following code in the
	Valid method of a TextBox of the Grid:
	
	     IF .NOT. TABLEUPDATE()
	     *Invalid Primary Key Trapped here since Error method of Grid does not.
	        =AERROR(arrtemp)
	        =MESSAGEBOX('Error:'+STR(arrtemp(1,1));
	             +CHR(13)+arrtemp(1,2),0,'Error')
	        RETURN 0
	     ENDIF
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Issue the following two lines in the Command window:
	
	        CREATE DATABASE primerr
	        CREATE TABLE tblprim (fld1 c(3) PRIMARY KEY, fld2 c(2), fld3 c(3))
	
	2. Add several records to the above table.
	
	3. Create a new form by selecting New from the File menu.
	
	4. Select Form in the dialog box and click the New File button.
	
	5. When the form appears, right-click on the form to invoke the shortcut menu
	  and click DataEnvironment.
	
	6. When the DataEnvironment window comes up, right-click in the window to invoke
	  the shortcut menu and click Add Table.
	
	7. When the Open dialog box appears, select the table created in Step 1.
	
	8. Drag and drop the table from the DataEnvironment to the form to make a grid.
	
	9. Run the form and type in a duplicate value for a record in fld1 column and
	  move off the record. Note that Visual FoxPro presents an error message.
	
	10. Click Revert and close the form.
	
	11. Modify the form.
	
	12. On the property sheet, select Grid from the drop down box at the top.
	
	13. Find the grid's Error method and add in a WAIT WINDOW command.
	
	14. Repeat step 9.
	
	In version 3.0 and 3.0b, step 14 behaves exactly the same as it did when step 9
	was executed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbvfp kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : 3.0 3.0b 5.0 5.0a
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
