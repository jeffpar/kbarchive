---
layout: page
title: "Q135333: PRB: Decimals Don't Display Properly in Grid"
permalink: kb/135/Q135333/
---

## Q135333: PRB: Decimals Don't Display Properly in Grid

	Article: Q135333
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
	
	Numbers displayed in a grid show four decimal places instead of two.
	
	CAUSE
	=====
	
	The Grid.Column.Sparse property is not set to false, and there is no InputMask
	property defined for the Textbox object of the grid.
	
	RESOLUTION
	==========
	
	For the column that is used to display the numeric data, set the Sparse property
	to false, and enter a valid input mask for the Textbox object. Note that setting
	the Sparse property to false can result in some performance degradation.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Numeric fields in a table can have two to nine decimal places. Currency fields
	have an automatic default of four decimal places. When displaying any numeric or
	currency information in a grid, it is necessary to set two properties of the
	grid to limit the display to two and only two decimal places.
	
	The first property is the Sparse value. By default, the Sparse property is set to
	true. According to the information in the Visual FoxPro Help file, the Sparse
	property specifies whether the CurrentControl property affects all or only the
	active cell in a Column object.
	
	When the Sparse property is set to true, only the column's active cell uses the
	CurrentControl property setting to accept and display data. The other cells use
	the default text box. If the Sparse property is set to false, all cells in the
	Column object will use the CurrentControl property setting to display data.
	
	The second property that must be set is the InputMask, which governs how data is
	entered and displayed in a control. A grid is a combination of several different
	objects including a text box, so it is necessary to apply some kind of an input
	mask to the grid text box control. In this situation, a valid input mask would
	consist of the following:
	
	  999,999,999.99
	
	Setting both of these properties allows the desired level of control when
	displaying numeric data in a grid. The setting of the DECIMALS value, such as
	SET DECIMALS TO 2, has no effect on the data displayed in the grid.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add the Orders table to the form's data environment.
	
	3. Drag the table from the data environment to the form. A grid will
	  automatically be created.
	
	4. Run the form.
	
	The data shown in the Order_amt field will display data with four decimal places.
	Following the steps outlined in this article will result in the data being
	displayed with two decimal places.
	
	Additional query words: 3.00 VFoxWin decimals currency
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
