---
layout: page
title: "Q191313: BUG: Word Doc in Component Gallery Gives Fatal Exception Err"
permalink: /kb/191/Q191313/
---

## Q191313: BUG: Word Doc in Component Gallery Gives Fatal Exception Err

	Article: Q191313
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Dynamic folder property of a Component Gallery item to a Microsoft
	Word document can cause Visual FoxPro to generate a Fatal Exception error and
	then close.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Component Gallery.
	
	2. Open the Component Gallery Options dialog box, click the Standard tab and
	  make sure that the Advanced editing enabled option is selected.
	
	3. Create a new folder by right-clicking the right window pane, point to New
	  Item and then choose Folder.
	
	4. Right-click the folder and choose properties.
	
	5. In the Folder Properties dialog box, select the Node tab.
	
	6. Insert a path to a Word document in the Dynamic folder text box and then
	  click OK to close the dialog box.
	
	7. Select this item in the left-hand pane of the Component Gallery.
	
	8. Select another item in the left-hand pane of the Component Gallery.
	
	9. Repeat steps 7-8 until the error occurs.
	
	Additional query words: kbVFp600bug kbMiscTools kbXBase kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
