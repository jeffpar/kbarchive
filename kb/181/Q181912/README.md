---
layout: page
title: "Q181912: PRB: FlexGrid Control Does Not Highlight Whole Row"
permalink: /kb/181/Q181912/
---

## Q181912: PRB: FlexGrid Control Does Not Highlight Whole Row

{% raw %}

	Article: Q181912
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Depending on the setting of the FlexGrid's Highlight property, the grid may not
	select the entire row. Instead the grid may select only the first cell or no
	cell at all.
	
	RESOLUTION
	==========
	
	Use the Highlight property setting of "1 - flexHighlightAlways."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic. Form1 is created by default.
	
	2. Choose "Project" from the main menu, and then select "Components." Choose the
	  "MS FlexGrid Control 5.0 (sp2)" from the list of controls. Add a FlexGrid and
	  a CommandButton to the form.
	
	3. Change the following properties on the FlexGrid control:
	
	        SelectionMode = 1 - flexSelectionByRow
	        Highlight = 2 - flexHighlightWithFocus
	
	4. Add the following code to the Form's Load method:
	
	        Dim i As Integer
	
	        MSFlexGrid1.Cols = 4
	        MSFlexGrid1.AllowUserResizing = flexResizeColumns
	        MSFlexGrid1.ColWidth(0) = 200
	
	        For i = 1 To 25
	           MSFlexGrid1.AddItem "" + vbTab + Str(i) + vbTab + _
	           Str(Time()) + vbTab + String(i, "*")
	        Next i
	
	5. Save the Project and form and run it. Note the entire row is not highlighted.
	
	6. Stop the form. Adjust the FlexGrid's Highlight property from "2 [ASCII 150]
	  flexHighlightWithFocus" to "1 - flexHighlightAlways."
	
	7. Save the project and run the form again. Hit the down ARROW key or click on a
	  row and note that the rows are highlighted.
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbNoKeyWord VB6Test
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA500Search kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
