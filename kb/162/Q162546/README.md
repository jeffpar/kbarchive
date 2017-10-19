---
layout: page
title: "Q162546: FIX: ComboBox and ListBox Data Moves when Using Slide Control"
permalink: /kb/162/Q162546/
---

## Q162546: FIX: ComboBox and ListBox Data Moves when Using Slide Control

	Article: Q162546
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Slide control on the scroll bar of a dropped-down combo box or a list
	box causes the data in the combo box or list box to jump around erratically.
	
	CAUSE
	=====
	
	Setting the order on the table that is used as the RowSource property for the
	combo box or list box causes this behavior.
	
	RESOLUTION
	==========
	
	One workaround is to use an ARRAY as the RowSourceType property of the combo box
	or list box.
	
	Another workaround is to use a SQL - STATEMENT as the RowSourceType. However, if
	the ORDER clause is used, it may be necessary to force Visual FoxPro to create
	an actual temporary cursor on disk of the query results. This can be done by
	adding a non-existing column to the resulting cursor as in the following
	example:
	
	     SELECT <desired_field>,.F. FROM <table_name> ;
	        ORDER BY <desired_field> INTO CURSOR temp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Paste the following lines into a program and run it to create the necessary
	  table:
	
	        CREATE TABLE xpop (cnum c(10))
	        FOR i = 1 TO 5000
	          APPEND BLANK
	          REPLACE cnum WITH STR(i)
	        ENDFOR
	        INDEX ON cnum TAG cnum
	
	  NOTE: Any table can be used but this makes it easier to see.
	
	2. Create a form.
	
	3. Add the table created above to the DataEnvironment (DE) of the form.
	
	4. Right-click the table in the DE to bring up the Shortcut menu. Click
	  Properties.
	
	5. Set the Order property of the Cursor to the index tag created above.
	
	6. Add a ComboBox or ListBox control to the form. Set the following properties:
	
	        RowsourceType = 6 - Fields
	        Rowsource     = "xpop.cnum"
	
	7. Run the form.
	
	8. Drop-down the combo box.
	
	9. Drag the Slider control to some where in the middle of the scroll bar.
	
	10. Click the left mouse button on the Slider control and then let up, note the
	  contents of the drop-down jump to another place in the list and back.
	
	11. Click the left mouse button and hold it, drag the Slider control to another
	  location in the list and release. Notice that the data jumps to some other
	  location.
	
	REFERENCES
	==========
	
	For more information about forcing SQL-SELECT to create a temporary file, please
	see the following article(s) in the Microsoft Knowledge Base:
	
	  Q109584 How To Force SELECT-SQL to Create Temp File for Cursor
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0 5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
