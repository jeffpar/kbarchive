---
layout: page
title: "Q142886: FIX: &quot;Record is in use by another&quot; Error Inside of Grid"
permalink: kb/142/Q142886/
---

## Q142886: FIX: &quot;Record is in use by another&quot; Error Inside of Grid

	Article: Q142886
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bFIXkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Error #109 "Record is in use by another user" is activated when you try to edit
	a field in a grid. The grid has both child and grandchild fields with Buffering
	set to Optimistic Table Buffering (5) on the grandchild table, and the form is
	using a Private Data Session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in FoxPro 3.0b for
	Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Add three tables to the form's data environment and set a 1:1 relation from
	  first table to the second and from the second to the third.
	
	2. Set the BufferModeOverride property to 5 for the third table.
	
	3. Create a text box for the first table.
	
	4. Add navigation buttons that will move the record pointer in the first table
	  and refresh the form.
	
	5. Create a grid by dragging the second table to the form.
	
	6. Set the ColumnCount of the grid to 3.
	
	7. Set the ControlSource of Column3 to a field from the third table.
	
	8. Set the DataSession property of the form to 2-Private Data Session.
	
	9. Run the form, and select a parent record with many records in the grid.
	
	10. Try to edit two or three child records by changing data in the child and
	  grandchild. At this point, you'll receive the error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bFIX kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
