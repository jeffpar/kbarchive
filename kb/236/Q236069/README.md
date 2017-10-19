---
layout: page
title: "Q236069: PRB:View Field Properties Window Defaults to First Field of View"
permalink: /kb/236/Q236069/
---

## Q236069: PRB:View Field Properties Window Defaults to First Field of View

	Article: Q236069
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDesigner kbvfp600bug KbDBFDBC kbGrpDSFox kbDSupport
	Last Modified: 03-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When displaying the properties of any field in the Selected Fields list of a
	view, only the properties of the first listed field are available.
	
	This worked properly in Visual FoxPro 5.0. However, Visual Studio 6.0 Service
	Pack 3 does not fix this problem.
	
	RESOLUTION
	==========
	
	Open the Properties dialog box and choose the desired field from the Field
	drop-down list. This will cause the field properties to refresh correctly.
	
	STATUS
	======
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a local or remote view in Visual FoxPro 6.0. Use a table that has
	  fields of differing data types.
	
	2. With the View Designer open, modify the view by right-clicking on it and
	  choosing Modify.
	
	3. Highlight the first field in the Selected Fields list and press the
	  Properties button on the View Designer.
	
	4. In the View Field Properties window, note the name of the field displayed in
	  the Field text box. Close the dialog.
	
	5. Highlight any other field in the Selected Fields list and press the
	  Properties button again.
	
	In the View Field Properties window, observe that the name of the first field
	still appears in the Field text box. The Field, Data Type, and Width text boxes
	are not being updated.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDesigner kbvfp600bug KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
