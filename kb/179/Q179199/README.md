---
layout: page
title: "Q179199: BUG: Grid Based on .QPR File Appears Blank in Visual FoxPro 5.0"
permalink: /kb/179/Q179199/
---

## Q179199: BUG: Grid Based on .QPR File Appears Blank in Visual FoxPro 5.0

	Article: Q179199
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running a form that contains both a grid and a list box or combo box that have
	the RowSource property set to the same .qpr file causes the grid to appear
	empty. This behavior does not occur in Visual FoxPro 3.0b.
	
	RESOLUTION
	==========
	
	In the Activate event of the form, set the RowSource of the grid to itself. For
	example:
	
	     ThisForm.Grid1.RecordSource=ThisForm.Grid1.RecordSource
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Orders table located in the \Samples\Tastrade\Data folder.
	
	2. Create a file called Ztest.qpr (make sure the extension is .qpr) that
	  contains the following code:
	
	        SELECT order_id, cust_id FROM orders INTO CURSOR temp
	
	3. Create a form called Ztest and add a Grid object to the form.
	
	4. Set the following properties of the grid:
	
	        RecordSource=Ztest.qpr
	        RecordSourceType=3-Query (QPR)
	
	5. Add a List box object to the form and set the following properties:
	
	        RecordSource=Ztest.qpr
	        RecordSourceType=4-Query (QPR)
	
	6. Run the form and note that the grid is empty.
	
	In Visual FoxPro 3.0b, both the grid and the list box appear populated with data.
	
	Additional query words: kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
