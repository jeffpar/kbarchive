---
layout: page
title: "Q141395: FIX: Problem Setting Focus to a Combobox from a PageFrame"
permalink: /kb/141/Q141395/
---

## Q141395: FIX: Problem Setting Focus to a Combobox from a PageFrame

	Article: Q141395
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create the initial instance, you must click twice on a page in a
	pageframe to set the focus to a combo box.
	
	WORKAROUND
	==========
	
	To avoid the problem, use one of these workarounds:
	
	- Change the tab order of the PageFrame so that it is the last object in the
	  tab order of the form. To do this, click the View menu while the form is open
	  in the From Designer. Click Tab Order, and a window will appear with a
	  message "Shift-click to select tab order." Click within the number box of the
	  form object that you want to be first. Now, while holding down the SHIFT key,
	  click within the number boxes of the remaining objects, saving the PageFrame
	  for last. When finished, click Reorder within the "Shift-click to select tab
	  order" window.
	
	-or-
	
	- Add a command button (essentially a dummy control) to the form. In the click
	  event of each page, issue this command:
	
	     THISFORM.COMMAND1.SETFOCUS.
	
	  In the GOTFOCUS method of the command button, issue the command
	  THISFORM.COMBO1.SETFOCUS. The Visible property of the command button may be
	  set to False if you want because it is just acting as a bridge to set the
	  focus to the combo box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	This behavior appears to be isolated to the following circumstances:
	
	- The PageFrame is not the last object in the tab order of the form.
	
	-or-
	
	- The PageFrame immediately follows the combo box in the tab order of the form.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form and place the following controls on it, in the specified
	  order:
	
	  (1) Combo Box   (2) PageFrame   (3) Command Button
	
	2. In the Init event of the form, add this command:
	
	     THISFORM.COMBO1.SETFOCUS.
	
	3. Add the following command to the Click event of pages 1 and 2 of the
	  PageFrame:
	
	         THISFORM.COMBO1.SETFOCUS.
	
	4. Run the form, and click the pages of the PageFrame. It will work correctly
	  the first time but on subsequent attempts the page must be clicked twice to
	  set the focus.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
