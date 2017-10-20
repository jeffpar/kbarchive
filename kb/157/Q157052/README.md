---
layout: page
title: "Q157052: HOWTO: Display Blank in Place of .NULL. in a Grid Column"
permalink: /kb/157/Q157052/
---

## Q157052: HOWTO: Display Blank in Place of .NULL. in a Grid Column

{% raw %}

	Article: Q157052
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to display a blank in place of .NULL. in a Grid
	column in Visual FoxPro 3.0, and 3.0b.
	
	MORE INFORMATION
	================
	
	By default, fields containing NULL values are displayed as .NULL. in a Grid in
	all versions of Visual FoxPro. To display a blank in place of .NULL. in a column
	of a grid in Visual FoxPro 3.0 and 3.0b, place an inline if (IIF) statement in
	the DynamicForeColor property of the subject column. The IIF sets the column's
	ForeColor to the same color as the Grid Column's BackColor when the field
	contains a value. In Visual FoxPro 5.0 a NULL value can be displayed as a blank
	in a Grid by issuing the following SET command, which makes setting the
	DynamicForeColor unnecessary:
	
	     SET NULLDISPLAY TO ''
	
	Use the following steps to set the DynamicForeColor property of a column to white
	when a field contains a NULL value and to black when the value is not NULL. This
	article assumes that the Grid column's BackColor property is white (255,255,255)
	and that the ForeColor property is black (0,0,0). This article also assumes a
	working knowledge of creating forms, grids, and tables.
	
	1. Create a table called Test.dbf with a numeric field named nNulltest, which
	  allows null values.
	
	2. Add some records to the table, storing .NULL. in the nNulltest field of some
	  of the records.
	
	3. Create a form.
	
	4. Add the table Test.dbf, created above, to the DataEnvironment of the form.
	
	5. Create a Grid on the form by dragging Test.dbf onto the form.
	
	6. Change the Grid's ColumnCount property to 1.
	
	7. Place the following in column 1's DynamicForeColor property:
	
	        IIF(ISNULL(nNulltest),RGB(255,255,255),RGB(0,0,0))
	
	  A true condition sets DynamicForeColor to white; a false condition is set to
	  black.
	
	8. Run the form. Notice that a blank instead of .NULL. appears in the rows of
	  the Grid pertaining to records with a NULL value in the nNulltest field.
	  Should you get an error message starting with "Error loading file," you can
	  correct the problem by deleting the = (equal sign) placed at the beginning of
	  your IIF statement in the DynamicForeColor property.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
