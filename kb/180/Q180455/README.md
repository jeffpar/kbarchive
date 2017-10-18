---
layout: page
title: "Q180455: BUG: Error 451 &quot;Object not a collection&quot; When Using Left()"
permalink: kb/180/Q180455/
---

## Q180455: BUG: Error 451 &quot;Object not a collection&quot; When Using Left()

	Article: Q180455
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp kbVBp500bug kbVBp600bug kbOSWinCE100 kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Left Function is used in a form module, the following error occurs:
	
	  Error 451 "Object not a collection"
	
	CAUSE
	=====
	
	Visual Basic is misinterpreting the Left function as the Left property of the
	Form.
	
	RESOLUTION
	==========
	
	There are two possible workarounds to this problem:
	
	1. (This is the preferred method.) Use the Mid Function with the start parameter
	  equal to 1, similar to the following:
	
	        Private Sub Form_Load()
	            On Error Resume Next
	            Dim sDrive
	            'Use the following line instead of sDrive = Left("c:\windows", 3)
	            sDrive = Mid("c:\windows", 1, 3)
	            If Err.Number = 0 Then
	               MsgBox "The Drive is " & sDrive, vbInformation, "Drive"
	            Else
	               MsgBox "Error: " & Err.Number & " - " & _
	               Err.Description, vbInformation, "Error Message"
	            End If
	        End Sub
	
	2. Use the Left Function in a standard module (*.bas).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in either eMbedded Visual Basic or Visual
	  Basic 6.0. Form1 is created by default.
	
	2. Add the following code to the Load Event of Form1:
	
	        Private Sub Form_Load()
	           On Error Resume Next
	           Dim sDrive
	           sDrive = Left("c:\windows", 3)
	           If Err.Number = 0 Then
	              MsgBox "The Drive is " & sDrive, vbInformation, "Drive"
	           Else
	              MsgBox "Error: " & Err.Number & " - " & _
	              Err.Description, vbInformation, "Error Message"
	           End If
	        End Sub
	
	3. Press F5 to run the project in the emulator and observe the error.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Mike Dixon, Microsoft Corporation
	
	
	Additional query words: wince vbce vbce6 evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp kbVBp500bug kbVBp600bug kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
