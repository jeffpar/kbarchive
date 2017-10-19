---
layout: page
title: "Q191996: BUG: Field Properties Button in View Designer Malfunctions"
permalink: /kb/191/Q191996/
---

## Q191996: BUG: Field Properties Button in View Designer Malfunctions

	Article: Q191996
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the View Designer, the Field Properties button always displays the properties
	from the first field in the Selected Fields list regardless of which field is
	selected before clicking the button.
	
	RESOLUTION
	==========
	
	After clicking the Properties button, choose the field desired in the field
	drop-down list box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a database (.dbc) file.
	
	2. Create a local view on any table. Do not use the wizard.
	
	3. On the Fields tab, add two or more fields to the Selected Fields list.
	
	4. Click the last field in the Selected Fields list.
	
	5. Choose the Properties button.
	
	Notice that the Properties dialog box displays with the first field in the
	Selected Fields list displayed.
	
	Additional query words: kbVFp600 kbDesigner
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
