---
layout: page
title: "Q135522: PRB: Error Occurs When Using DynamicCurrentControl Property"
permalink: kb/135/Q135522/
---

## Q135522: PRB: Error Occurs When Using DynamicCurrentControl Property

	Article: Q135522
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When setting the DynamicCurrentControl property of a column contained within a
	grid, you may get the error message "Expression is invalid. Use a valid
	expression for DynamicCurrentControl property."
	
	CAUSE
	=====
	
	This error message may occur if you used the Expression Builder to create your
	DynamicCurrentControl property expression. The DynamicCurrentControl property
	sets the active control of a column based on a certain condition. This is
	typically accomplished with an in-line if (IIF) statement. When you add an IIF
	statement to the DynamicCurrentControl property, Visual FoxPro assumes that an
	equal sign (=) resides at the beginning of the statement. If you have the
	Expression Builder creates your IIF statement, it adds an equal sign as the
	first character and thus cause the error message.
	
	RESOLUTION
	==========
	
	Remove the equal sign inserted by the Expression Builder, or do not use the
	expression builder to create your IIF statements for the DynamicCurrentControl
	property.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open or switch to Microsoft Visual FoxPro.
	
	2. Open a new form and add a grid to it.
	
	3. Add the Employee.dbf table, located in the \Samples\Data subdirectory of
	  Visual FoxPro, to the data environment of the form.
	
	4. In the form's Property window, set the grid's ColumnCount property to 1, and
	  set the Bound property of Column1 to false (.F.).
	
	5. Add a text frame to the Column (this will be Text2 as there will be a text
	  frame called Text1 in the Column by default).
	
	6. In the form's Property window, set the Value property of Text2 to Test.
	
	7. Set the ControlSource property of Text1 to Employee.emp_id.
	
	8. Use the Expression Builder to create the following statement for the
	  DynamicCurrentControl property of Column1:
	
	     IIF((LEFT(ALLTRIM(EMPLOYEE.EMP_ID),1) = "1"), "TEXT1", "TEXT2")
	
	9. Close the Expression Builder. Note that it adds an equal sign (=) to the
	  beginning of the statement.
	
	10. Save and run the Form. Note that the error "Expression is invalid. Use a
	  valid expression for DynamicCurrentControl property" appears.
	
	11. Remove the equal sign added by the Expression Builder, and run the form.
	  Note that if now functions as expected.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
