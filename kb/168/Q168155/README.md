---
layout: page
title: "Q168155: FIX: Crash When Resizing Column of Split DBGrid"
permalink: /kb/168/Q168155/
---

## Q168155: FIX: Crash When Resizing Column of Split DBGrid

	Article: Q168155
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0 97
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVB kbvbp500sp1fix kbvbp500sp2fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to resize a column of a DBGrid that has been split using the
	Split method, your application crashes with an error such as:
	
	  PROJECT1.EXE - Application Error
	  The instruction at "0x019800F0" referenced memory at "0x9998F0D8".
	  The memory could not be "written".
	
	-or-
	
	  PROJECT1.EXE
	  This program has performed an illegal operation and will be shut down.
	  If the problem persists, contact the program vendor.
	  PROJECT1 caused an invalid page fault in module <unknown> at
	  0000:FFFFFFFF
	
	CAUSE
	=====
	
	DBGRID32.OCX version 5.00.3714 does not handle window ownership correctly when
	re-sizing columns.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in the version 5.00.3817
	of DBGRID32.OCX that ships in Visual Studio Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project.
	
	2. Add DBGrid to the project.
	
	3. Place an instance of DBGrid on the default form (DBGrid1 by default).
	
	4. Place a data control on the form (Data1 by default).
	
	5. Set the Database property of the data control to point at BIBLIO.MDB.
	
	6. Set the RecordSource property to Publishers.
	
	7. Set the DBGrid DataSource property to Data1.
	
	8. Add the following code to the Form Load event:
	
	        Private Sub Form_Load()
	           DBGrid1.Splits.Add (1)
	        End Sub
	
	9. Run the application.
	
	10. Resize the first column header as small as possible.
	
	11. Try resizing the first column header as small as possible again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp1fix kbVS97sp2fix kbGrpDSVB kbvbp500sp1fix kbvbp500sp2fix 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0 97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
