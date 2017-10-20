---
layout: page
title: "Q138779: HOWTO: Make a Lookup Combo Box in a Grid"
permalink: /kb/138/Q138779/
---

## Q138779: HOWTO: Make a Lookup Combo Box in a Grid

{% raw %}

	Article: Q138779
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 03-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are times when a developer may want to limit the user's choices for data
	entry by using a lookup table in a combo box. This allows the user to pick a
	value from a list and have it inserted into the data table. This article shows
	how to use a combo box in a grid to let the users pick a state to be stored in a
	State field. The combo box will show the state's full name but will only store
	the two-letter abbreviation in the table.
	
	MORE INFORMATION
	================
	
	If you are not familiar with creating tables, using the grid, or using combo box
	controls, please see chapters 7 and 11 in the Developer's Guide.
	
	Step-by-Step Example
	--------------------
	
	1. Create two tables by using the following commands:
	
	   - 
	
	     CREATE TABLE Friends (Name C(40), Address C(30), State C(2))
	
	   - 
	
	     CREATE TABLE States (Fullname C(20), Abbrev C(2))
	
	2. Enter the following data in the States table:
	
	     Full Name    Abbreviation
	     -------------------------
	
	     Alaska       AK
	     Colorado     CO
	     Florida      FL
	     Idaho        ID
	     Maine        ME
	     Ohio         OH
	     Texas        TX
	
	3. Enter five records into the Friends table using State abbreviations from the
	  States table.
	
	4. Create a new form, and add the Friends and States tables to the data
	  environment.
	
	5. Drag the Friends table from the data environment to the form to create a
	  grid.
	
	6. Set the following properties for the grid:
	
	  
	
	        ColumnCount = 3
	        Height = 200
	        Width = 448
	        RowHeight = 30
	
	7. Right-click the grid, and click Edit. Select the ComboBox control from the
	  Form Controls toolbar and place a combo box in the third column of the grid.
	
	8. Set the following Properties for each column in the grid:
	
	  
	
	        Column1: ControlSource = Friends.Name
	                 Width = 152
	        Column2: ControlSource = Friends.Address
	                 Width = 166
	        Column3: ControlSource = Friends.State
	                 Bound = .F.
	                 Width = 93
	                 CurrentControl = Combo1
	
	9. Set the following Properties for the combo box in column 3:
	
	  
	
	        BoundColumn = 2
	        ColumnCount = 2
	        ColumnWidths = 75,0
	        ControlSource = Friends.State
	        RowSourceType = 6-Fields
	        RowSource = States.Fullname,Abbrev
	        Style = 2 - Dropdown List
	
	10. Enter the following code in the GotFocus event of the combo box:
	
	  
	
	        IF !EMPTY(Friends.State)
	          This.Value = Friends.State
	        ELSE
	          This.DisplayValue = This.List(1)
	        ENDIF
	        ** This lets you see the current state value in the combo box
	        ** or if it is a new record it displays the first state in the list.
	
	11. In the Init event of the form, enter the following line of code:
	
	  
	
	         ON KEY LABEL F10 APPEND BLANK IN Friends
	         ** Allows you to enter new records in the Grid.
	
	12. In the Destroy event of the form, enter the following line of code:
	
	  
	
	         ON KEY LABEL F10
	  </ITEM>
	  <ITEM>Save and run the Form.
	
	When you enter the State field of the grid, you will see the combo box come up
	with the name of the current state. If you change the state and move off of the
	state field, you will see the new two letter abbreviation for the state. If you
	press F10 to add a record and then move to the state field, you will see the
	name of the first state displayed in the combo box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
