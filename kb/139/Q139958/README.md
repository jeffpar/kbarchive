---
layout: page
title: "Q139958: How to Update a Table from a List Box with Mover Bars"
permalink: /kb/139/Q139958/
---

## Q139958: How to Update a Table from a List Box with Mover Bars

	Article: Q139958
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to create a list box with mover bars that will
	update a table. The example creates a two-field table of cities and their
	original numeric position in the table. The list box mover bars facilitate
	moving the items in the list to a different position and updating the position
	number in the table. Mover bars are only available with a RowSourceType of
	either 0 (None) or 1 (Value).
	
	MORE INFORMATION
	================
	
	The following program creates a table and a form with a list box. The list box
	has mover bars that can be used to move the items in the list. When the item is
	moved, its list number changes as indicated by the grid display.
	
	Code Sample
	-----------
	
	  ***START of the MoverBar Program
	  *
	  * Change the following lines up to the next set of
	  * asterisks into comments to prevent creating a new table each
	  * time this program is executed.
	
	  SELECT DISTINCT city, 100 ;
	  FROM SYS(2004)+"\samples\data\customer" ;
	  INTO table MyCity
	
	  REPLACE ALL exp_2 WITH RECNO()
	  GO TOP
	  ****************
	  frmMoverBar = CREATEOBJECT("moverbar")
	  frmMoverBar.show
	
	  READ EVENTS
	  RELEASE ALL
	
	  **************************************************
	  *-- Class:        moverbar
	  *-- ParentClass:  form
	  *-- BaseClass:    form
	  *
	  DEFINE CLASS moverbar AS form
	
	       Top       = 3
	       Left      = 17
	       Height    = 275
	       Width     = 500
	       DoCreate  = .T.
	       Caption   = "Mover Bar Example"
	       Name      = "frmMoverBarForm1"
	
	       ADD Object grdMyCity AS Grid With ;
	            Columncount      = 2, ;
	            Height           = 175, ;
	            Left             = 225, ;
	            Recordsource     = "MyCity", ;
	            Recordsourcetype = 1, ;
	            Top              = 24, ;
	            Width            = 250
	
	       ADD OBJECT lstList1 AS Listbox WITH ;
	            ColumnCount      = 2, ;
	            ColumnWidths     = "100,50", ;
	            RowSourceType    = 0, ;
	            RowSource        = "", ;
	            Height           = 175, ;
	            Left             = 30, ;
	            MoverBars        = .T., ;
	            Top              = 24, ;
	            Width            = 175, ;
	            Name             = "lstList1"
	
	       ADD OBJECT cmdCommand1 AS commandbutton WITH ;
	            Top     = 216, ;
	            Left    = 400, ;
	            Height  = 29, ;
	            Width   = 75, ;
	            Caption = "Exit", ;
	            Name    = "CmdCommand1"
	
	       PROCEDURE lstList1.InteractiveChange
	            SELECT MyCity
	
	            FOR i = 1 TO ThisForm.lstList1.Listcount
	                 LOCATE FOR city = ThisForm.lstList1.List(i)
	                 REPLACE exp_2 WITH i
	                 ThisForm.lstList1.List(i,2)=ALLTRIM(STR(i))
	            ENDFOR
	
	            GO TOP
	       ENDPROC
	
	       PROCEDURE lstList1.Init
	            SELECT city,exp_2 FROM MyCity INTO cursor x ORDER BY 2
	
	            i=0
	            SCAN
	                 i=i+1
	                 This.AddItem(city,i,1)
	                 This.AddListItem(ALLTRIM(STR(exp_2)),i,2)
	            ENDSCAN
	       ENDPROC
	
	       PROCEDURE CmdCommand1.Click
	            SELECT MyCity
	            USE
	            ERASE mycity.dbf  &&Comment this line in order to save the table.
	            CLEAR EVENTS
	
	       ENDPROC
	
	  ENDDEFINE
	  *
	  *-- EndDefine: moverbar
	  **************************************************
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
