---
layout: page
title: "Q167122: FIX: FindItem Method of ListView Incorrectly Returns an Error"
permalink: /kb/167/Q167122/
---

## Q167122: FIX: FindItem Method of ListView Incorrectly Returns an Error

	Article: Q167122
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVB kbvbp500sp1fix kbvbp500sp2fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Studio 97 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications compiled and tested with earlier versions of the ListView control
	may encounter an unexpected error:
	
	  Run-time error '35600': Index out of bounds
	
	when running on a system with version 5.00.3714 of COMCTL32.OCX. This unexpected
	error may cause the application to crash if it was not designed to handle
	unexpected errors.
	
	CAUSE
	=====
	
	The ListView control in COMCTL32.OCX version 5.00.3714 incorrectly raises this
	error when the FindItem method is called to search on the item Tags or SubItems
	and the ListView is empty.
	
	RESOLUTION
	==========
	
	This problem has been fixed in version 5.00.3828 of COMCTL32.OCX and is
	available in Visual Studio 97 Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For customers who do not own Visual Basic 5.0, Visual C++ 5.0, or Visual Studio
	97 the COMCTL32.OCX update is available to download separately.
	
	For instructions on how to obtain the COMCTL32.OCX update, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q167121 : FILE: Updated COMCTL32.OCX Version 5.00.3828 Available
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in COMCTL32.OCX, version
	5.00.3828. This bug has also been corrected in Visual Studio 97 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic and create a new Standard EXE project.
	
	2. Select Project/Components... from the menu and add the "Microsoft Windows
	  Common Controls 5.0" to the project.
	
	3. Add a ListView control to the default form in the project.
	
	4. In the click event of the list view, add the following code to call the
	  FindItem method:
	
	        Private Sub ListView1_Click()
	           ListView1.FindItem "bob", lvwTag
	        End Sub
	
	5. Run the project and click on ListView. This should result in the error
	  "Run-time error '35600': Index out of bounds."
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVB kbvbp500sp1fix kbvbp500sp2fix 
	Technology        : kbVCsearch kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVC500 kbVC32bitSearch kbVS97 kbVS97Search kbVC500Search
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
