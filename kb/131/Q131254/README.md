---
layout: page
title: "Q131254: How to Manipulate DateTime Fields in a Grid"
permalink: /kb/131/Q131254/
---

## Q131254: How to Manipulate DateTime Fields in a Grid

	Article: Q131254
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual FoxPro introduces a new data type (DateTime) that allows a date
	and time value to be stored in a single field. By default, Visual FoxPro
	displays the data stored in a DateTime field in a "MM/DD/YY HH:MM:SS XM" format.
	This article shows by example how to display just the date or just the time
	portion of a DateTime field in a Visual FoxPro Grid.
	
	MORE INFORMATION
	================
	
	Visual FoxPro does not offer a command or function to automatically retrieve
	just the Date or just the Time portion of a DateTime field. The code provided
	below creates two new methods (GetTime and GetDate) that can be called by the
	Grid Column ControlSource property to display just the date or just the time of
	a DateTime field.
	
	Step-by-Step Example
	--------------------
	
	The following example assumes that a table already exists with a DateTime field
	named tDateTime.
	
	1. Create a new form by using this command:
	
	     CREATE FORM newform
	
	2. Add the proper table to the Data Environment by choosing Data Environment
	  from the Form menu.
	
	3. Add a Grid to the form by dragging the Grid control from the Form Controls
	  toolbar to the form.
	
	4. Change the ColumnCount property of the Grid to 2 (any number greater than
	  zero will work).
	
	5. From the Form menu, choose New Method. Name the new method GetTime.
	
	6. Create a second new method named GetDate.
	
	7. From the Properties sheet, select the Form1 object, and then select the
	  Methods tab. Open the GetTime method.
	
	8. Place the following code in the GetTime method:
	
	     PARAMETERS tField
	     justtime = SUBSTR(TTOC(tField),10)
	     RETURN justtime
	
	  The tDateTime field will be passed to the GetTime method from the Grid Column.
	  The TTOC() function converts the field to character so that SUBSTR() can
	  retrieve just the time portion of the field and return it to the grid.
	
	9. Place the following code in the GetDate method:
	
	     PARAMETERS tField
	     justdate = SUBSTR(TTOC(tField),1,8)
	     RETURN justdate
	
	  The tDateTime field will be passed to the GetDate method from the Grid Column.
	  The TTOC() function converts the field to character so that SUBSTR() can
	  retrieve just the date portion of the field and return it to the grid.
	
	10. Using the Properties sheet, select the Header1 object, and change the
	  caption property to Just Time.
	
	11. Select the Header2 object, and change the caption property to Just Date.
	
	12. Change the ControlSource property of Column1 to:
	
	      thisform.gettime(tDateTime)
	
	13. Change the ControlSource property of Column2 to:
	
	      thisform.getdate(tDateTime)
	
	14. Save and run the form. The time portion of the tDateTime field displays in
	  Column1 and the date portion displays in Column2. Note that the fields are
	  read-only.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
