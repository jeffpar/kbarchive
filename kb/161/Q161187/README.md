---
layout: page
title: "Q161187: FIX: Forms Collection Exposes Memo and General Windows"
permalink: /kb/161/Q161187/
---

## Q161187: FIX: Forms Collection Exposes Memo and General Windows

	Article: Q161187
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Count property of the Forms collection incorrectly sees open memo and
	general edit windows as members of the Forms collection. The Forms collection is
	a property of the _VFP system variable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	According to the Help topic on the _VFP system variable, the Forms property is:
	
	  "An array to access individual forms in a form set."
	
	Therefore, the open memo and general field edit windows should not appear to this
	property as members of the forms collection. The example below illustrates this
	behavior.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the Employee table located in the \Samples\data folder.
	
	2. Browse the table and double-click on the Photo and Notes fields to open these
	  fields in their own windows.
	
	3. Type the following command in the Command window:
	
	     "WAIT WINDOW STR(_VFP.Forms.Count):
	
	  Notice that the number two (2) appears in the wait window.
	
	  Note that this behavior does not exhibit itself when the edit windows are
	  invoked in the following manner:
	
	     USE HOME()+"\samples\data\employee"
	     MODIFY GENERAL photo
	     MODIFY MEMO notes
	     WAIT WINDOW STR(_VFP.Forms.Count)
	
	  Note that the number zero (0) appears in the wait window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
