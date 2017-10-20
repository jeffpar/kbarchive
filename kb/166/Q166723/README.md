---
layout: page
title: "Q166723: FIX: ATL Object Wizard Prevents Undo Changes"
permalink: /kb/166/Q166723/
---

## Q166723: FIX: ATL Object Wizard Prevents Undo Changes

{% raw %}

	Article: Q166723
	Product(s): Microsoft C Compiler
	Version(s): 2.1,3.0
	Operating System(s): 
	Keyword(s): kbwizard kbATL210bug kbVC500bug kbVC600bug kbATL300bug kbGrpDSMFCATL kbNoUpdatekbbuglis
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Active Template Library (ATL) Object Wizard to add an object to
	the ATL project, you might get a message box informing you that the .idl and
	Stdafx.cpp files were modified outside the editor.
	
	If you have edited the file, the work is saved before the wizard changes the
	source. One bad side-effect of reloading is that the user cannot undo any
	changes previous to the reload.
	
	This mean that if you delete code, then run the ATL object wizard, there is no
	way to get back to the original file using undo, and your original file is lost.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ATL project.
	
	2. Click Finish to create the project.
	
	3. Open the .idl file.
	
	4. Edit the .idl file (for example: change the helpstring).
	
	5. Insert.New ATL Object.
	
	6. Enter the Short Name and click OK.
	
	The message box gets displayed asking you to reload the .idl file. After
	reloading, Edit.Undo is not available.
	
	Additional query words: kbvc500bug kbvc600bug kbatl210bug kbatl300bug
	
	======================================================================
	Keywords          : kbwizard kbATL210bug kbVC500bug kbVC600bug kbATL300bug kbGrpDSMFCATL kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbATL300 kbATL210
	Version           : :2.1,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
