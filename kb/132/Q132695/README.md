---
layout: page
title: "Q132695: PRB: Private Data Session Causes Blank Grid to Appear"
permalink: /kb/132/Q132695/
---

## Q132695: PRB: Private Data Session Causes Blank Grid to Appear

	Article: Q132695
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A blank grid object appears after you drag a grid control onto a form in the
	Form Designer, set the Form.DataSession property to 2 (Private Data Session),
	and run the form.
	
	CAUSE
	=====
	
	This is by design. It occurs if no tables have been added to the data
	environment of the form.
	
	If no table is specified in the Grid.RecordSource property, the grid uses the
	open table in the current work area. If no tables were added to the data
	environment of the form, the private data session has no open tables, so the
	grid does not have any data to display.
	
	RESOLUTION
	==========
	
	Either use the default data session, or add one or more tables to the data
	environment of the form.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a table in the current work area:
	
	     Versions 3.0 or 5.0 USE c:\vfp\samples\mainsamp\data\customer
	     Version 6.0  USE C:\\Program Files\Microsoft Visual Studio
	       \Common\Samples\Data\customer
	
	2. Create a new form, and drag a grid control from the Forms Control toolbar
	  onto the form.
	
	3. Set the Form.DataSession property to 2 - Private Data Session.
	
	4. Save and run the form. A blank grid object appears. Close the form.
	
	5. Modify the form in the Form Designer. Set the Form.DataSession property to 1
	  - Default Data Session. Save and run the form. The grid is populated with
	  data from the Customer table.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	
	=============================================================================
	
