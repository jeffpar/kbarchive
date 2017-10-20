---
layout: page
title: "Q197362: FIX: FormatString Ignored for Fixed Columns in MSHFlexGrid"
permalink: /kb/197/Q197362/
---

## Q197362: FIX: FormatString Ignored for Fixed Columns in MSHFlexGrid

{% raw %}

	Article: Q197362
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you specify justification settings in the FormatString Property of the
	Microsoft Hierarchical Flexgrid control, the justification is ignored for fixed
	columns.
	
	RESOLUTION
	==========
	
	Following are two alternatives, both of which have limitations:
	
	- If possible, use the Microsoft FlexGrid control. The FlexGrid control is not
	  affected by this problem.
	
	- Avoid using fixed columns when using the Hierarchical FlexGrid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Visual Basic Standard EXE Project. Form1 is created by default.
	
	2. From the Project menu, choose Components and then select the Microsoft
	  Hierarchical FlexGrid Control 6.0 (OLEDB). Click OK.
	
	3. Place an instance of the Hierarchical FlexGrid on Form1.
	
	4. Place the following code in the General Declarations section of Form1:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           Dim strFormat As String
	           ' The '^' in strFormat is a Center Justify instruction
	           strFormat = "^AAA      |^BBBB      |^CCC      "
	           MSHFlexGrid1.Rows = 10
	           MSHFlexGrid1.Cols = 3
	           For i = 0 To 9
	              For j = 0 To 2
	                 MSHFlexGrid1.TextMatrix(i, j) = "XXX"
	              Next j
	           Next i
	           MSHFlexGrid1.FormatString = strFormat
	        End Sub
	
	5. Run the Project. Note that the justification does not take effect on the
	  fixed column (that is, column 1.)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix kbpending
	
	=============================================================================
	

{% endraw %}
