---
layout: page
title: "Q163418: FIX: Disabled Page in a Pageframe Shows Objects with Arrow Key"
permalink: kb/163/Q163418/
---

## Q163418: FIX: Disabled Page in a Pageframe Shows Objects with Arrow Key

	Article: Q163418
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a page in a pageframe is disabled (grayed out) in Visual FoxPro 5.0 and the
	arrow keys are used to move from an active page to the disabled page, all items
	in the disabled page will show through on the pageframe even though the page is
	disabled. The ActivePage property will show that the page that was active before
	trying to move to the disabled page is still the active page, but the objects
	shown on the pageframe will be the contents of the disabled page. In Visual
	FoxPro 3.0, the arrow keys could not be used to move through the pages of a
	pageframe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add a pageframe to it. Change the PageCount to 3.
	
	2. Add a label to each page of the pageframe and change the Caption of the label
	  to the name of each page.
	
	3. Select Page 2 of the pageframe and change the Enabled Property to False.
	
	4. Run the form and move through the pages of the pageframe with the left or
	  right arrow keys. Note that the label of page 2 shows through even though the
	  page is disabled.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
