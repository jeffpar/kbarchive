---
layout: page
title: "Q156549: FIX: Click Event of a List Box Fires Twice"
permalink: kb/156/Q156549/
---

## Q156549: FIX: Click Event of a List Box Fires Twice

	Article: Q156549
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp kbvfp300bBUG kbvfp500fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 3.0 and 3.0b for Windows, when you click on an item in a list
	box, the Click event fires and runs the code in the Click event. If the item in
	the List box is already highlighted and the item is clicked again, the code in
	the Click event runs twice.
	
	WORKAROUND
	==========
	
	If the desired effect is to click on an item and have the Click event fire once
	and not fire again until another item is chosen, create a form as follows:
	
	1. Create a form and place a list box on it.
	
	2. While the list box is highlighted, set the RowSourceType property to Value in
	  the Properties box.
	
	3. In the RowSource property, type the following values:
	
	        AAA, BBB, CCC, DDD
	
	4. In the Click event of the list box, type the following code:
	
	        WAIT WINDOW "List box, Click event"
	
	  NOTE: If you run the form at this point, the problem described above occurs.
	
	5. Modify the form and create a custom property for the form by clicking New
	  Property on the Form menu. In the New Property box type "OneClick" (without
	  the quotation marks).
	
	6. In the Init event of the form, type "ThisForm.OneClick = X " (without the
	  quotation marks).
	
	7. In the Click event of the list box change the current code with the
	  following:
	
	        IF This.DisplayValue != ThisForm.OneClick
	           WAIT WINDOW "List box, Click event"
	           ThisForm.OneClick = This.DisplayValue
	        ENDIF
	
	  If an item is selected and the Click event needs to be fired regardless of it
	  being previously highlighted, then the code is going to be fired twice. There
	  is no workaround for this case.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro
	version 5.0 for Windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbvfp kbvfp300bBUG kbvfp500fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500
	Version           : WINDOWS:3.0,3.0b,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
