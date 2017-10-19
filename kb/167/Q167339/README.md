---
layout: page
title: "Q167339: FIX: New Class Added in ATLWizard Removes Edit Interface Setting"
permalink: /kb/167/Q167339/
---

## Q167339: FIX: New Class Added in ATLWizard Removes Edit Interface Setting

	Article: Q167339
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbwizard kbATL kbVC500bug kbVC600fix kbGrpDSMFCATLkbbuglist kbfixlist
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add the New Class to an ATL project, the Wizard removes settings on the
	edit interface.
	
	RESOLUTION
	==========
	
	When you add a new class object, make sure that interface attributes are set
	correctly in the New Class dialog box before you click OK. If you add the class
	with the incorrect attributes, you need to edit the header and the idl file
	manually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ATL project using the AppWizard.
	
	2. Get the context menu and click New Class.
	
	3. Enter a name for the class. NOTE: The Edit button is not initially enabled.
	
	4. Click Change, and then Cancel Out to activate the Edit button.
	
	5. Click Custom Interface.
	
	6. Clear the Aggregatable check box.
	
	7. Click Edit, and then Cancel Out.
	
	Observe that the Wizard changed the interface type back to dual, and turned
	Aggregatable back on.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbATL kbVC500bug kbVC600fix kbGrpDSMFCATL kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
