---
layout: page
title: "Q184896: PRB: Scroll Arrows Not Showing When DisplayCount = 1"
permalink: kb/184/Q184896/
---

## Q184896: PRB: Scroll Arrows Not Showing When DisplayCount = 1

	Article: Q184896
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
	
	In Visual FoxPro 6.0, setting the DisplayCount property to 1 causes the scroll
	arrows not to show in the drop-down list box. However, clicking on the scroll
	arrows location scrolls the list.
	
	CAUSE
	=====
	
	There is not enough room to see the scroll arrows when the DisplayCount is equal
	to 1; therefore, the scroll arrows do not appear.
	
	RESOLUTION
	==========
	
	To see the scroll arrow in the drop-down list box, set the DisplayCount property
	to two.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Drop a Combo box object onto the form and named it combo1.
	
	3. Place the following code in the Init of the form:
	
	        Thisform.combo1.AddItem("One")
	        Thisform.combo1.AddItem("Two")
	        Thisform.combo1.AddItem("Three")
	        Thisform.combo1.AddItem("Four")
	
	4. Set the combo's DisplayCount property to 1.
	
	5. Save and run the form.
	
	After clicking the down arrow of the combo box, the drop-down list only displays
	one item without scroll arrows.
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
