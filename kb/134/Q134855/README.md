---
layout: page
title: "Q134855: PRB: Unable to Edit Blank Text Boxes in a Grid"
permalink: kb/134/Q134855/
---

## Q134855: PRB: Unable to Edit Blank Text Boxes in a Grid

	Article: Q134855
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
	
	In a grid, when you try to edit a column that doesn't have a control source, the
	computer beeps and the text is not entered. You might expect that the grid would
	accept data.
	
	CAUSE
	=====
	
	This is the correct behavior for columns that don't have a ControlSource set. If
	you set the ControlSource, the column is editable. As the code below
	demonstrates, a table defined with only two fields as a control source for the
	grid disallows the additional column a place to store the new information being
	entered when the button's click procedure is run.
	
	WORKAROUND
	==========
	
	Create a custom grid class with an Init procedure to alter the table or
	ControlSource to allow the user to create and store new data by passing the
	optional "init1,init2" parameter used with the addobject() function.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code:
	
	  CREATE TABLE table1 ;
	       (col1 C(15), col2 c(15))
	  append blank
	  replace col1 with 'Row(1)  Col(1)'
	  replace col2 with 'Row(1)  Col(2)'
	  append blank
	  replace col1 with 'Row(2)  Col(1)'
	  replace col2 with 'Row(2)  Col(2)'
	  append blank
	  replace col1 with 'Row(3)  Col(1)'
	  replace col2 with 'Row(3)  Col(2)'
	  append blank
	  replace col1 with 'Row(4)  Col(1)'
	  replace col2 with 'Row(4)  Col(2)'
	  append blank
	  replace col1 with 'Row(5)  Col(1)'
	  replace col2 with 'Row(5)  Col(2)'
	  skip - 5
	
	  use table1
	
	  public x
	  x = create("f1")
	  x.show
	
	  define class f1 as form
	  add object grid1 as grid with ;
	  forecolor = rgb(255,0,0);
	
	  add object b1 as commandbutton with ;
	  fontsize = 8, ;
	  caption = 'AddColumn', ;
	  top = 200
	
	  add object l1 as label with ;
	  caption = 'Clicking this button should add a Column.', ;
	  fontsize = 8, ;
	  autosize = .T., ;
	  top  = 220
	  proc b1.click
	       x.grid1.addcolumn
	       x.grid1.column3.addobject('text','textbox')
	       x.grid1.column3.currentcontrol = 'text1'
	       x.grid1.column3.text1.visible = .t.
	       x.refresh
	  endproc
	  enddefine
	
	  * Click the AddColumn button.
	  * Click in one of the blank cells and begin typing.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
