---
layout: page
title: "Q265746: PRB: eVB: Scrollbars Appear Incorrectly in Run Mode"
permalink: kb/265/Q265746/
---

## Q265746: PRB: eVB: Scrollbars Appear Incorrectly in Run Mode

	Article: Q265746
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB kbDSupport kbVBM300
	Last Modified: 23-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you place a small horizontal or vertical scrollbar on a form, the scrollbar
	appears blank or without arrows, depending on the size of the control.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This behavior occurs because of the way that Windows CE handles the painting of
	the control.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new HPC Pro or Pocket PC project in eMbedded Visual Basic. Form1 is
	  created by default.
	
	2. Add a vertical scrollbar to Form1.
	
	3. Add the following code to Form1:
	
	  Private Sub Form_Load()
	           VScroll1.Height = 450
	  End Sub
	
	4. Press the F5 key to run the project in emulation. Notice that no arrows
	  appear in the scrollbar.
	
	5. Change the code provided in Step 3 to read:
	
	  Private Sub Form_Load()
	           VScroll1.Height = 250
	  End Sub
	
	6. Press the F5 key to run the project. Notice that in the HPC Pro project you
	  get a white rectangle, while in the Pocket PC project no scrollbar appears on
	  the form.
	
	Additional query words: wce evb scroll bar scroll-bar
	
	======================================================================
	Keywords          : kbGrpDSVB kbDSupport kbVBM300 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
