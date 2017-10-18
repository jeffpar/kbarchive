---
layout: page
title: "Q185187: BUG: Pageframe Subclass Invisible Until Clicked"
permalink: kb/185/Q185187/
---

## Q185187: BUG: Pageframe Subclass Invisible Until Clicked

	Article: Q185187
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A PageFrame subclass is not visible, at design and run-time, even if its
	PageCount property is set to a value higher than 0.
	
	CAUSE
	=====
	
	The problem described in this article occurs if the PageCount property of the
	Parent class is set to 0.
	
	RESOLUTION
	==========
	
	Do not set the PageCount property of the Parent Class to 0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a class myPage1 using the following line of code:
	
	        CREATE CLASS myPage1 OF myclib AS PAGEFRAME
	
	2. When the Class Designer opens, reset the PageCount to the default value. You
	  can do this by right-clicking on the PageCount property and selecting the
	  "Reset To Default" option from the shortcut menu.
	
	3. Save the class and close the Class Designer.
	
	4. Create a class myPage2 with the code below:
	
	        CREATE CLASS myPage2 OF myclib AS myPage1 FROM myclib
	
	5. When the Class Designer appears, set the Pagecount to three.
	
	6. Save the class and close the Class Designer.
	
	7. Create a form and place each of the classes, myPage1 and myPage2, onto the
	  form.
	
	  NOTE: Both PageFrames are not visible.
	
	8. Run the Form.
	
	  NOTE: Both the PageFrames are still not visible.
	
	9. Click in the area on the form where the PageFrame SubClass should be and it
	  becomes visible.
	
	The PageFrame SubClass, myPage2, should be visible at design and run-time.
	
	Additional query words: vfoxwin kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbnokeyword 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
