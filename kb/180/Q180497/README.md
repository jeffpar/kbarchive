---
layout: page
title: "Q180497: PRB: Formset with Modal Windows Containing OCX Hangs VFP"
permalink: kb/180/Q180497/
---

## Q180497: PRB: Formset with Modal Windows Containing OCX Hangs VFP

	Article: Q180497
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aBUG kbvfp500bug kbvfp600
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Repeatedly switching the focus between forms using the mouse or CTRL-F1 in a
	modal formset that has two or more forms with OCX controls causes Visual FoxPro
	to freeze.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	A list of the ActiveX controls that have been confirmed to cause this behavior
	is shown below; however, other ActiveX controls may also cause this behavior.
	
	Here are the four controls that have caused this behavior:
	
	- Outline.ocx
	
	- Treeview.ocx
	
	- MSDataGrid.ocx
	
	- MSDataCombobox.ocx
	
	This problem occurs only if the focus of the forms is changed using the mouse or
	the CTRL-F1 combination. Using the TAB key or programmatically calling a form
	object's SetFocus method will not cause this problem.
	
	Steps to Reproduce Behavior
	---------------------------
	
	WARNING: After running this code you will be unable to close Visual FoxPro
	through normal means. Use Task Manager in Windows NT or the Close Program dialog
	box in Windows 95 to close Visual FoxPro. Before running this code, close all
	running applications and save your data. To close all open applications, press
	CTRL+ALT+DELETE to open the Windows Task Manager or Close Program dialog box,
	and then close all the other applications you have running. Note that following
	the steps below may produce lost allocation units, lost clusters, or
	cross-linked files.
	
	1. Create a formset and set the Window Type property to MODAL.
	
	2. Add two or more forms that each contain the Outline.ocx.
	
	3. Run the formset and change the focus from the first form to the second form
	  using either the mouse or CTRL-F1 and then give the focus to the first form.
	  Repeat this operation several times. Eventually, Visual FoxPro freezes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500aBUG kbvfp500bug kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
