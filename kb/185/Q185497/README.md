---
layout: page
title: "Q185497: HOWTO: Using GridHitTest() with OLE Drag and Drop"
permalink: /kb/185/Q185497/
---

## Q185497: HOWTO: Using GridHitTest() with OLE Drag and Drop

	Article: Q185497
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	OLE Drag and Drop is a new feature in Visual FoxPro 6.0. This article shows how
	to make use of the new GridHitTest() function with OLE Drag and Drop to drag
	text from a text box and drop it into a cell in a grid. Changing the mouse
	pointer while dragging the text is also featured in this article. This article
	does not cover all scenarios when dragging text into a grid. It is provided to
	allow developers to get a start in working with OLE Drag and Drop.
	
	This article does not cover the background for OLE Drag and Drop. For more
	information on OLE Drag and Drop, please see Chapter 31: Interoperability and
	the Internet in the Microsoft Visual FoxPro "Programmer's Guide," version 6.0.
	
	MORE INFORMATION
	================
	
	Follow the steps below to create a sample form that allows text to be dragged
	out of a text box control and dropped into a cell in a grid.
	
	1. Create a table for use with the grid. The following code can be used:
	
	        ** Make table
	        CREATE TABLE gridtest (color c(10), fruit c(15), quantity i)
	        INSERT INTO gridtest VALUES ("Red","Apple",5)
	        INSERT INTO gridtest VALUES ("Blue","Pear",10)
	        INSERT INTO gridtest (fruit) VALUES ("Peach")
	        INSERT INTO gridtest (COLOR) VALUES ("Green")
	        INSERT INTO gridtest (quantity) VALUES (7)
	        INSERT INTO gridtest (COLOR,fruit) VALUES ("Black","Blackberry")
	        INSERT INTO gridtest (COLOR,quantity) VALUES("Orange",3)
	        INSERT INTO gridtest (fruit,quantity) VALUES ("Orange",8)
	        INSERT INTO gridtest (fruit,COLOR) VALUES ("Banana","Indigo")
	
	2. Create a new form. Save the form as Gridodd.scx.
	
	3. Add the gridtest table created in step 1 to the data environment of the form.
	
	4. Drag the table from the data environment to the form. It should create a grid
	  when dropped onto the form. Resize the form and grid as desired.
	
	5. Add a text box control to the form. Set the OLEDragMode property to 1 -
	  Automatic.
	
	6. Place the following code in the text box's OLEGiveFeedback event. Note that
	  the LPARAMETERS line should already be there by default.
	
	        LPARAMETERS nEffect, eMouseCursor
	        IF nEffect=0
	           eMouseCursor=12     && the no drop circle with line
	        ELSE
	           eMouseCursor="bullseye.cur"
	        ENDIF
	
	7. Copy the Bullseye.cur file from Visual Studio\Common\Graphics\Cursors folder
	  to the folder where the form and table are saved. The HOME(4) function can be
	  used to find the path to the Visual Studio\Common\Graphics folder. The
	  following command can be used in the Visual FoxPro Command window to copy the
	  file to the current default folder:
	
	        COPY FILE HOME(4)+"Cursors\bullseye.cur" TO SYS(5)+SYS(2003)
	
	8. Set the OLEDropMode property of the grid to 1 - Enabled.
	
	9. Add the following code to the OLEDragOver event of the grid. Note that the
	  LPARAMETERS line should already be there by default.
	
	        LPARAMETERS oDataObject, nEffect, nButton, nShift, nXCoord, ;
	           nYCoord, nState
	        LOCAL nWhere
	        nWhere=0
	        IF This.GridHitTest(nXCoord,nYCoord,@nWhere)
	           IF nWhere=3    && over a grid cell
	              nEffect=3
	           ELSE
	              nEffect=0  && if not over a grid cell, can't drop
	           ENDIF
	        ENDIF
	
	10. Add the following code to the OLEDragDrop event of the grid. Note that the
	  LPARAMETERS line should already be there by default.
	
	        LPARAMETERS oDataObject, nEffect, nButton, nShift, nXCoord, nYCoord
	        LOCAL nOperation, cText, nWhere, nRelRow, nRelCol
	        IF nShift=2   && Control key is down
	           nOperation=1   && DropEffect_Copy
	        ELSE
	           nOperation=2   && DropEffect_Move
	        ENDIF
	
	        IF This.GridHitTest(nXCoord,nYCoord,@nWhere,@nRelRow,@nRelCol)
	           IF nWhere=3    && over a grid cell
	              This.ActivateCell(nRelRow,nRelCol)
	           ENDIF
	        ENDIF
	
	        IF oDataObject.GetFormat(1)   && CF_TEXT
	           cText=oDataObject.GetData(1)
	           This.Columns(nRelCol).Text1.Value=cText
	           NODEFAULT
	        ENDIF
	        nEffect=nOperation  && nEffect gets passed to OLECompletDrag
	
	11. Save and run the form.
	
	12. Enter some text in the text box, select it and drag the text into one of the
	  grid cells. Also, try holding down the CTRL key while dragging. Without
	  holding down the CTRL key, the text moves, with the CTRL key, the text
	  copies and is in the text box in addition to the grid.
	
	Briefly, what happens when the text is dragged out of the text box and over the
	grid is this:
	
	1. The form's OLEDropMode property is set to 0 - Disabled so the mouse pointer
	  stays the default "no drop" pointer. However, the grid's OLEDropMode property
	  is set to 1 - Enabled.
	
	2. When the mouse with the data is moved over the grid, the grid's OLEDragOver
	  event fires. Within the OLEDragOver event, the GridHitTest function fires.
	  When it returns a three (3), which means that the mouse is over a grid cell,
	  the text box's OLEGiveFeedback tells FoxPro to change the mouse pointer to
	  the bullseye cursor. This lets the user know that the text can be dropped
	  there.
	
	3. When the user drops the text on top of a grid cell, the grid's OLEDragDrop
	  event fires. Within this event, the GridHitTest fires again with the
	  coordinates of the mouse being passed to the event. GridHitTest returns, by
	  reference, whether or not the mouse is over a grid cell as well as the
	  relative row and column values for the grid. These are then used in the
	  grid's ActivateCell method to select the grid cell that the mouse is over.
	
	4. Now that FoxPro knows what grid cell the mouse is over and has activated it,
	  it checks to see if there is text data in the Data Object. The
	  oDataObject.GetFormat(1) line of code in the grid's OLEDragDrop event does
	  this. If there is text data, it is obtained and stored to a variable using
	  the Data Object's GetData() method. The value property of the text box
	  control in the current grid cell is then set to the variable containing the
	  data just obtained from the Data Object.
	
	5. Within the grid's OLEDragDrop event, the nShift parameter is checked to see
	  if any of the modifier keys are held down. In this example, there is a check
	  for the CTRL key. If the CTRL key is down, the nEffect output parameter is
	  set to 1, which means copy. If the CTRl key is not held down, nEffect is set
	  to 2, which means move.
	
	6. The nEffect output parameter of the grid's OLEDragDrop event is passed into
	  the text box's OLECompleteDrag event. In this case, there is no code in the
	  text box's OLECompleteDrag so the default behavior takes place. Move deletes
	  the data from the text box, copy leaves it in the text box.
	
	REFERENCES
	==========
	
	Microsoft Visual FoxPro "Programmer's Guide," version 6.0, Chapter 31:
	Interoperability and the Internet. The section on OLE Drag and Drop.
	
	Microsoft Visual FoxPro Help, 6.0: search on: "GridHitTest()";
	"OLEDropMode"; "OLEDragDrop"; "OLECompleteDrag"; "OLEDragOver"
	
	Additional query words: FxprgClassoop FxprgGrid kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
