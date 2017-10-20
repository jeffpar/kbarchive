---
layout: page
title: "Q134436: FIX: After Removing Text in Grid Other Data Appears Truncated"
permalink: /kb/134/Q134436/
---

## Q134436: FIX: After Removing Text in Grid Other Data Appears Truncated

{% raw %}

	Article: Q134436
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add an edit box as a control to a grid column and delete some of the
	text in the edit box, the text in the other records in this column appear to be
	truncated to the new length of the text in the edit box.
	
	WORKAROUND
	==========
	
	Set the Sparse Property for the grid column that contains the edit box to True
	(.T.).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	This behavior happens whether the grid is created using the Grid Builder or
	manually in the Form Designer.
	
	Steps to Reproduce Problem
	--------------------------
	
	NOTE: To understand the following steps, you need working knowledge of the Visual
	FoxPro Form Designer. See Chapter 9 of the Microsoft Visual FoxPro "Developer's
	Guide" for more information on working with the Form Designer.
	
	1. Open the Testdata.dbc database found in the \VFP\Samples\Data directory.
	
	2. Create a new form.
	
	3. Add the Customer table from the Testdata database to the Data Environment of
	  the form.
	
	4. Add a grid object to the form.
	
	5. Set the following properties for the grid, and resize it as desired.
	
	     ColumnCount=3
	     RecordSource=Customer
	     RowHeight=45
	
	6. Add an Editbox control to either column 2 or 3 (or both) of the grid. To do
	  this, follow these steps:
	
	  a. Click the form to make sure it is active.
	
	  b. Click the grid to select it.
	
	  c. Using the right mouse button, click the grid to bring up the shortcut
	     menu, and click Edit from this menu.
	
	  d. Click the Editbox control icon on the Form Controls toolbar.
	
	  e. Click the grid column where you want to put the Editbox. Any cell in that
	     column will do.
	
	7. Set the following properties for the column(s) that the Editbox control was
	  placed in (assume it is column 2 for this example):
	
	     CurrentControl=Edit1
	     Sparse=.F.
	     ControlSource=Customer.company
	
	8. For the other columns in the grid (columns 1 and 3 for this example), set the
	  ControlSource property to a field from the Customer table. Customer.cust_id
	  and Customer.contact will work fine for this example.
	
	9. Save and Run the form.
	
	10. The text in the second column of the first record should be "Alfreds
	  Futterkiske." Delete the "Futterkiske" portion of the text, and press the
	  TAB key a few times to force the grid to refresh. The other entries in the
	  second column should truncate (for display purposes only) at the length of
	  the word "Alfreds," which was what was left in the edit box in the first
	  record.
	
	The grid can also be designed by clicking Builder on the shortcut menu displayed
	in Step 6.c above. In the Layout tab of the Builder dialog box, set the Control
	Type for column 2 to be Editbox.
	
	REFERENCES
	==========
	
	For additional information on adding and removing objects from the columns of a
	grid, please see the following articles in the Microsoft Knowledge Base:
	
	  Q127843 How to Place a Command Button in a Grid Cell Visually
	
	  Q127880 How to View Memo Fields as Edit Boxes in a Grid
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
