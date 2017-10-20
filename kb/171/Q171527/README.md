---
layout: page
title: "Q171527: FIX: Causing a ListView Control to Paint Causes an IPF"
permalink: /kb/171/Q171527/
---

## Q171527: FIX: Causing a ListView Control to Paint Causes an IPF

{% raw %}

	Article: Q171527
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a ListView control that has the Sorted property set to True, if any
	code is executed that results in a refresh or Paint of the ListView control, the
	following message will be displayed:
	
	  "<application> caused an invalid page fault in module COMCTL32.OCX at
	  0137:202c0ace"
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where,and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project.
	
	2. Insert a ListView control onto Form1.
	
	3. Add the following code to Form1:
	
	        Private Sub Form_Click()
	           ListView1.Sorted = True
	           ListView1.ListItems.Add Text:="L"
	           ListView1.ListItems.Add Text:="S"
	           ListView1.ListItems.Add Text:="A"
	           ListView1.ListItems.Add Text:="$"
	           For Each x In ListView1.ListItems
	              MsgBox x.Text
	           Next x
	        End Sub
	
	4. Run the application by pressing the F5 key.
	
	5. Click on the Form.
	
	  NOTE: This problem does not occur if the Sorted property is set to False.
	
	Additional query words: gpf crash access violation
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
