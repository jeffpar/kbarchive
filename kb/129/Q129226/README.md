---
layout: page
title: "Q129226: PRB: Controls Not Correctly Updated in a Grid"
permalink: kb/129/Q129226/
---

## Q129226: PRB: Controls Not Correctly Updated in a Grid

	Article: Q129226
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a grid, as soon as you change the value of one control, the new value appears
	throughout the whole column. The expected behavior is that only one row displays
	the new value. Modifying the value of the Sparse property for this column has no
	effect on this behavior.
	
	CAUSE
	=====
	
	The control that is added to the column of the grid has no ControlSource.
	Therefore, when the value of the control is modified, there's no underlying
	variable, so the data is stored in the control itself. The same check box is
	populating the whole column in the grid. For example, one column of a grid
	contains a check box. If you click the check box on one row, the value of the
	check box will be modified. If the control does not have a controlsource, the
	new value will be propagated across all of the rows in the column.
	
	The SPARSE property of the column object affects the display in the column. It
	does not control the value associated with the control.
	
	STATUS
	======
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	Controls that are to display different values across a column of a grid need to
	be bound to data. You can set the Controlsource property of either the control
	or the column that contains the control to a field that will hold the value of
	the control.
	
	MORE INFORMATION
	================
	
	The following sample program reproduces the behavior described in this article.
	To run this example, copy and paste the code into a program file. When the grid
	is displayed, click the check box. As you navigate through the grid, all of the
	rows will display the same value for the check box.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code:
	
	     USE SYS(2004)+"SAMPLES\DATA\CUSTOMER"
	     oMyform=CREATE ('MYFORM')
	     oMyform.SHOW
	     READ EVENTS
	
	     DEFINE CLASS MYFORM AS FORM
	       ADD OBJECT grdChecbox AS MYGRID
	       ADD OBJECT cmdquit AS COMMANDQUIT
	     ENDDEFINE
	
	     DEFINE CLASS MYGRID AS GRID
	       ADD OBJECT COLUMN1 AS COLUMN
	       ADD OBJECT clmChk1 AS COLUMNCHECK
	     ENDDEFINE
	
	     DEFINE CLASS COLUMNCHECK AS COLUMN
	       Bound=.f.
	       Sparse=.f.
	       ADD OBJECT CHK1 AS CHECKBOX
	        CURRENTCONTROL="CHK1"
	     ENDDEFINE
	
	     DEFINE CLASS COMMANDQUIT as COMMANDBUTTON
	       Caption="Quit"
	       Top=208
	       Left=58
	       Height=20
	       Width=45
	       PROCEDURE  Click
	         RELEASE thisform
	         CLEAR EVENTS
	       ENDPROC
	     ENDDEFINE
	
	Additional query words: Vfoxwin browse command bind
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
