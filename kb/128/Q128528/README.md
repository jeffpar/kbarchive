---
layout: page
title: "Q128528: How to Create a Resizeable Grid"
permalink: kb/128/Q128528/
---

## Q128528: How to Create a Resizeable Grid

	Article: Q128528
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to create a resizeable grid.
	
	MORE INFORMATION
	================
	
	1. In the Form Design, drop a grid control onto a form, and place it in the
	  upper-left corner of the form. The easiest way is to add a table to the data
	  environment. Then drag and drop the table from the Data Environment window to
	  the form.
	
	2. Add the following code to the Resize Event method of the Form:
	
	     thisform.grid1.height=this.height
	     thisform.grid1.width=this.width
	
	3. Add the following code to the Init Event method of the form:
	
	     thisform.grid1.height=this.height
	     thisform.grid1.width=this.width
	
	  This sizes the grid to the form upon startup,
	
	4. Run the form, and resize the window. The grid will automatically size to fit.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
