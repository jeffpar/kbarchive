---
layout: page
title: "Q171820: FIX: ListView/ListItems Don't Refresh When ColumnHeaders Cleared"
permalink: kb/171/Q171820/
---

## Q171820: FIX: ListView/ListItems Don't Refresh When ColumnHeaders Cleared

	Article: Q171820
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Clear method to remove all ColumnHeaders from a ListView control
	in Report View, the ListItems are not hidden as expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new "Standard EXE" project.
	
	2. Click Components on the Project menu. Check "Microsoft Windows Common
	  Controls 5.0" and click OK.
	
	3. Add a ListView control and a CommandButton to Form1.
	
	4. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	            ListView1.ColumnHeaders.Clear
	        End Sub
	
	        Private Sub Form_Load()
	            Dim itm As ListItem
	            With ListView1
	                .View = lvwReport
	                .ColumnHeaders.Add , , "Last Name", .Width / 3
	                .ColumnHeaders.Add , , "First Name", .Width / 3
	                Set itm = .ListItems.Add(, "Doe", "Doe")
	                itm.SubItems(1) = "John"
	            End With
	        End Sub
	
	5. Run the program.
	
	6. Click Command1. Note that the ColumnHeaders are cleared and the ListItems are
	  not hidden as expected.
	
	Additional query words: remove delete column header headers kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
