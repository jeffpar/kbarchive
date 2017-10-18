---
layout: page
title: "Q156630: PRB: Incremental Search with Grid Causes Screen Flicker"
permalink: kb/156/Q156630/
---

## Q156630: PRB: Incremental Search with Grid Causes Screen Flicker

	Article: Q156630
	Product(s): Microsoft FoxPro
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Refresh method of the Grid control does not move the record pointer in the
	grid to the selected record when the record pointer is moved from a control
	external to the grid. The grid has to get the focus in order for the record
	pointer in it to move to the selected record. Because of this problem, an
	incremental search routine, involving the grid and another control, causes the
	screen to flicker every time a character is entered.
	
	This article describes a way to avoid the screen flicker when using an
	incremental search routine with a grid.
	
	WORKAROUND
	==========
	
	You can use the LockScreen property of the Form to eliminate most of the screen
	flicker. For example, you can make the following modifications to the Form
	created in the STEPS TO REPRODUCE BEHAVIOR section below:
	
	1. Create a New Property for the Form and name it lRefreshingGrid. Set the
	  property to .F.
	
	2. Change the code in Text1.InterActiveChange event as follows:
	
	        ThisForm.lRefreshingGrid = .T.
	        ThisForm.LockScreen = .T.
	        SELECT customer
	        SEEK UPPER(ALLTRIM(ThisForm.Text1.Value))
	        ThisForm.grid1.SetFocus
	        ThisForm.text1.SetFocus
	        ThisForm.LockScreen = .F.
	        ThisForm.lRefreshingGrid = .F.
	
	3. To ensure that the Valid event of the text box does not fire when the focus
	  is moved to the grid and then back to the text box, add the following code to
	  the Valid event of the text box:
	
	        IF ThisForm.lRefreshingGrid
	           RETURN .T.
	        ENDIF
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Form, and set the LockScreen property to False (.F.).
	
	2. Add the Customer table, in the home()+"SAMPLES\DATA" folder, to the Data
	  Environment. By default, the table is added to the Data Environment with the
	  Name "cursor1". Set the Order property of the cursor to "cust_id".
	
	3. Drag the table onto the form to create a grid. Set the Name property of the
	  Grid to "Grid1".
	
	4. Add a TextBox control to the form. Make sure that SelectOnEntry property of
	  the Textbox control is set to .F. (the default). Add the following code to
	  the TextBox control's InterActiveChange event:
	
	        SELECT customer
	        SEEK UPPER(ALLTRIM(This.Value))
	        ThisForm.Grid1.Refresh
	
	5. Run the Form and type a few characters in the text box.
	
	6. Although the REFRESH method of the grid is being called from
	  Text1.InterActiveChangeEvent, the record pointer in the grid does not move to
	  the correct record.
	
	7. Now change the code in Text1.InterActiveChange event as follows:
	
	        SELECT customer
	        SEEK UPPER(ALLTRIM(This.Value))
	        ThisForm.grid1.SetFocus
	        ThisForm.text1.SetFocus
	
	8. Repeat step 5.
	
	9. Now the Record Pointer in the grid is moving correctly but there is a lot of
	  screen flicker every time a character is entered into the text box.
	
	Additional query words: kbdse VFoxWin Flash
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : 5.00
	
	=============================================================================
	
