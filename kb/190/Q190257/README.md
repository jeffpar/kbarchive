---
layout: page
title: "Q190257: PRB: Component Gallery ListView Column Widths are Not Saved"
permalink: /kb/190/Q190257/
---

## Q190257: PRB: Component Gallery ListView Column Widths are Not Saved

	Article: Q190257
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When displaying items in a catalog in the Component Gallery in detail view, you
	may resize the columns in the ListView. However, the column widths are not saved
	when you exit the Component Gallery.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Component Gallery.
	
	2. Select the Details toolbar button.
	
	3. Resize the Object column in the ListView.
	
	4. Close the Component Gallery.
	
	5. Repeat steps 1 - 2.
	
	The ListView columns revert back to their default widths.
	
	Additional query words: kbCtrl kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
