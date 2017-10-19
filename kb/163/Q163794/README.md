---
layout: page
title: "Q163794: HOWTO: Save and Restore Grid Column Order and Widths"
permalink: /kb/163/Q163794/
---

## Q163794: HOWTO: Save and Restore Grid Column Order and Widths

	Article: Q163794
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp300 kbvfp500 kbvfp600 KbDBFDBC
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to save and restore changes made to the Grid
	column order and width. The suggested method is to store the Grid column order
	and width to a table upon exit of the form and restore the information to Grid
	at form load.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. Create and save a new project, Proj1.
	
	2. Create a new database, Data1, within the project.
	
	3. Define a new table, Table1, with the following fields:
	
	     ID    (Character, 10)
	     STATE (Character, 2)
	     CITY  (Character, 20)
	
	4. Add the following records to Table1:
	
	     ID STATE CITY
	     -- ----- --------------
	     1  IL   CHICAGO
	     2  CA   SAN FRANCISCO
	     3  WA   REDMOND
	
	5. Define a new table, Table2, for storing Grid column order and width: (Records
	  will not be added to this table at this time.)
	
	     FldName (Character, 10)
	     Width   (Numeric,10)
	     ColOrder(Numeric,10)
	
	6. Add a regular index named ColOrder on field ColOrder.
	
	7. Create a new form, Form1. Add Table1 and Table2 to the Data Environment.
	
	8. Drag Table1 from the Data Environment to Form1 to create a grid. The Name
	  property of the grid should be Grid1.
	
	9. Paste the following code to Form1.Init procedure:
	
	        SET SAFETY OFF
	        SELECT Table2
	        IF BOF() AND EOF()
	          * Grid column order/width default setting
	        ELSE
	          SET ORDER TO ColOrder
	          RecCnt = RECCOUNT()
	          GO TOP
	          FOR i = 1 to RecCnt
	             THISFORM.GRID1.COLUMNS(i).WIDTH = TABLE2.Width
	             TEMP = "TABLE1." + ALLTRIM(TABLE2.FLDNAME)
	             THISFORM.GRID1.COLUMNS(i).CONTROLSOURCE = TEMP
	             THISFORM.GRID1.COLUMNS(i).HEADER1.CAPTION = ;
	               TABLE2.FldName
	             IF NOT EOF()
	              SKIP
	              ENDIF
	          ENDFOR
	        ENDIF
	
	10. Add a command button, Command1, to Form1.
	
	11. Change the Command1.caption property to "Exit." Paste the following code
	  into the Command1.Click method:
	
	        SELECT TABLE2
	        USE TABLE2 EXCLUSIVE
	        ZAP
	        FOR i = 1 TO THISFORM.GRID1.COLUMNCOUNT
	          APPEND BLANK
	          REPLACE TABLE2.Width WITH THISFORM.GRID1.COLUMNS(i).WIDTH
	          theControlSource = THISFORM.GRID1.COLUMNS(i).CONTROLSOURCE
	          theFldName=SUBSTR(theControlSource, AT(".", theControlSource)+1)
	          REPLACE TABLE2.FldName WITH theFldName
	          REPLACE TABLE2.ColOrder WITH ;
	          THISFORM.GRID1.COLUMNS(i).COLUMNORDER
	          IF NOT EOF()
	            SKIP
	          ENDIF
	        ENDFOR
	        SELECT TABLE1
	        USE
	        SELECT TABLE2
	        USE
	        THISFORM.RELEASE
	
	12. Run the program.
	
	NOTE: The grid column order can be changed by dragging and dropping the column
	header or adjusting the grid column width by dragging the right border of the
	column header when the mouse pointer becomes a double arrow. Clicking the EXIT
	button saves the changes made to the Grid by updating Table2 before exiting the
	program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp300 kbvfp500 kbvfp600 KbDBFDBC 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
