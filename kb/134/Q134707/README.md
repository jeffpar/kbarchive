---
layout: page
title: "Q134707: BUG: Unbinding Grid with SetAll Method Still Displays Data"
permalink: kb/134/Q134707/
---

## Q134707: BUG: Unbinding Grid with SetAll Method Still Displays Data

	Article: Q134707
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After executing the following command to unbind the grid columns from their
	sources of data, Visual FoxPro still shows data in some of the grid cells when
	you click the cell:
	
	  <form name>.<grid name>.SetAll("ControlSource","","Column")
	
	CAUSE
	=====
	
	The text box (the default control) in the grid columns is caching the last value
	it knew about.
	
	WORKAROUND
	==========
	
	In addition to setting the data source to nothing, you need to set the Value
	property of the text boxes for the grid columns to nothing ("").
	
	  <form name>.<grid name>.SetAll("Value","","TextBox")
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Similar problems are encountered with other controls, such as edit boxes, that
	are set as the CurrentControl for a grid column.
	
	Steps to Reproduce Problem
	--------------------------
	
	NOTE: The following steps assume a working knowledge of the Visual FoxPro Form
	Designer. See Chapter 9 of the Microsoft Visual FoxPro "Developer's Guide" for
	more information on working with the Form Designer.
	
	1. Open the Testdata.dbc database found in the \VFP\Samples\Data directory.
	
	2. Create a new form.
	
	3. Add the Customer table from the Testdata database to the DataEnvironment of
	  the form.
	
	4. Add a grid object by dragging the Grid icon from the Form Controls toolbar
	  and dropping it on the form. Set the Name property of the grid to Grid1.
	
	5. Set the RecordSource property of the grid to the Customer table.
	
	6. Save the form as Test.scx, and run it.
	
	7. In the Command window, issue this command:
	
	     Test.grid1.SetAll("ControlSource","","Column")
	
	8. Click any cell in the first column of the grid to have data show up in that
	  cell. Click other cells in the first column. Data should show up in any
	  clicked cell, and the previous cell should appear blank. Data may or may not
	  appear in the other cells of the other columns, depending on which cell was
	  active when the ControlSource was set to blank (""). This behavior is the
	  same, though, no matter which cell is active.
	
	9. To keep data from showing in any of the cells, issue the following two
	  commands together:
	
	        Test.grid1.SetAll("ControlSource","","Column")
	        Test.grid1.SetAll("Value","","TextBox")
	
	Additional query words: kbvfp600 kbvfp500
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
