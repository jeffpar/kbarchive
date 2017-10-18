---
layout: page
title: "Q138755: FIX: GPF When Drag-Drop Resources Between Two Resource Scripts"
permalink: kb/138/Q138755/
---

## Q138755: FIX: GPF When Drag-Drop Resources Between Two Resource Scripts

	Article: Q138755
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbui _IK920 kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbGrpDSTools
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you drag-and-drop resources between two Resource Scripts and then try to
	undo the drag-and-drop, Visual C++ terminates the action with an Application
	Error (general protection (GP) fault). This happens only when you try to undo it
	while the resource that was dragged and dropped is left open.
	
	RESOLUTION
	==========
	
	Without opening the resource kit that was dragged and dropped select Undo.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open or create a resource script that contains at least one resource (for
	  example, a Dialog resource).
	
	2. Open or create another Resource Script. Drop the dialog resource into this
	  file, and open it.
	
	3. With this dialog resource open, shift the focus back to the first resource
	  script file.
	
	4. Select Undo the Drag-and-Drop. At this point, an application error appears.
	
	Additional query words: gpf
	
	======================================================================
	Keywords          : kbui _IK920 kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
