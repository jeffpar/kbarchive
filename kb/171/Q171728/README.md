---
layout: page
title: "Q171728: PRB: Text Property of Grid Is Reset When Used on SSTab Control"
permalink: /kb/171/Q171728/
---

## Q171728: PRB: Text Property of Grid Is Reset When Used on SSTab Control

	Article: Q171728
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVBDB
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
	
	The Text property of a Grid control may be set to zero if the Grid control
	resides on a tab of an SSTab control and that tab is not active when the form
	loads.
	
	RESOLUTION
	==========
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN
	RISK. Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	Implementing the following will help work around the problem:
	
	      ' General Declarations of Form
	      Dim blnJustOnce1 As Boolean
	      Dim blnJustOnce2 As Boolean
	      Dim blnJustOnce3 As Boolean
	     
	      Private Sub Form_Load()
	        blnJustOnce1 = True
	        blnJustOnce2 = True
	        blnJustOnce3 = True
	      End Sub
	     
	      Private Sub SSTab1_Click(PreviousTab As Integer)
	        Select Case Form1.SSTab1.Tab
	        Case 0
	          If blnJustOnce1 Then
	           Form1.Grid1.Text =""
	           blnJustOnce1 = False
	          End If
	        Case 1
	          If blnJustOnce2 Then
	           Form1.Grid2.Text =""
	           blnJustOnce2 = False
	          End If
	        Case 2
	          If blnJustOnce3 Then
	           Form1.Grid3.Text =""
	           blnJustOnce3 = False
	          End If
	        End Select
	      End Sub
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new "Standard Exe" project.
	
	2. Click Components on the Project menu. Check "Microsoft Tabbed Dialog Control
	  5.0" and "Microsoft Grid Control" and click OK.
	
	3. Add an SSTab control to Form1.
	
	4. Set the Tabs property of SSTab1 to 3.
	
	5. Add a Grid control to each Tab of the SSTab control.
	
	6. Select the first tab of SSTab1.
	
	7. Run the program. Note that the Text property of the Grid control on the first
	  tab is not set. Also, note that the Text property of the Grid control on the
	  second and third tabs are set to zero.
	
	Additional query words: change reset grid32.ocx tabctl32.ocx
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbprb
	
	=============================================================================
	
