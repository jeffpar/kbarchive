---
layout: page
title: "Q185083: PRB: Combo Box Displays Incorrectly w/ Large DisplayCount"
permalink: /kb/185/Q185083/
---

## Q185083: PRB: Combo Box Displays Incorrectly w/ Large DisplayCount

	Article: Q185083
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbnokeyword
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a large value set in the DisplayCount property of a combo box, the
	drop-down of the combo box either does not display or displays incorrectly.
	
	RESOLUTION
	==========
	
	Use a smaller DisplayCount value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Create a custom array property, something like myarr[1].
	
	3. In the INIT event of the form, place the following code:
	
	        DIMENSION Thisform.myarr[1000]
	
	        FOR i = 1 TO 500
	           Thisform.myarr[i] = STR(i)
	        ENDFOR
	
	4. Place a combo box object on the form.
	
	5. Set the RowSourceType to 5-Array and the RowSource to Thisform.myarr.
	
	6. Set the DisplayCount to 150.
	
	7. Save and run the form.
	
	8. Click the drop-down array.
	
	  Nothing shows up. Change the DisplayCount to a smaller number like 50 to fix
	  this problem.
	
	NOTE: If you change the DisplayCount property to 80 or higher, depending upon
	where you have your combo box in the form and the size of the Visual FoxPro
	desktop, you may see that the drop-down gets detached from the combo box.
	
	Additional query words: DisplayCount Combobox kbvfp600
	
	======================================================================
	Keywords          : kbnokeyword 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
