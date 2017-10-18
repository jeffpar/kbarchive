---
layout: page
title: "Q157634: BUG: Drag and Drop Fails in an As Top-Level Form"
permalink: kb/157/Q157634/
---

## Q157634: BUG: Drag and Drop Fails in an As Top-Level Form

	Article: Q157634
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Drag and Drop does not work in the As Top-Level form when the Visual FoxPro
	desktop is not visible, minimized, or the dragging object within the As Top-
	Level form is outside of Visual FoxPro desktop boundary.
	
	WORKAROUND
	==========
	
	The workaround is to change the DragIcon property to some other icon other than
	the default icon.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	You do not get the above symptoms as long as the form is not an As Top- Level
	form.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form.
	
	2. Set the ShowWindow property for the form to "2-As Top-Level form."
	
	3. Add two command buttons onto the form.
	
	4. Set the DragMode property for the two command buttons to "1 - Automatic."
	
	5. Run the form, then minimize the Visual FoxPro desktop.
	
	6. Try to drag the command button.
	
	The command button cannot be dragged.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
