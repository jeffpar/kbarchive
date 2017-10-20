---
layout: page
title: "Q223113: FIX: EXE Crashes When Looping Through Array From Property Get"
permalink: /kb/223/Q223113/
---

## Q223113: FIX: EXE Crashes When Looping Through Array From Property Get

{% raw %}

	Article: Q223113
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCompiler kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a For...Each loop to iterate through an array that was returned from
	a Property Get procedure, you receive the following error message:
	
	  The instruction at "0x6610d3b1" referenced memory at "0x00131004". The memory
	  could not be "read".
	
	NOTE: The error occurs when the code is called from an EXE that was compiled to
	native code, but does not occur when called from an EXE that was compiled to
	p-code. The error does not occur when you execute the code in the Visual Basic
	IDE.
	
	RESOLUTION
	==========
	
	You can work around the problem using one of the following alternative methods:
	
	- Compile the EXE to p-code.
	
	- Copy the result of the Property Get procedure to a dynamic array, and then
	  use the dynamic array in the For...Each loop.
	
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
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. In the code module for Form1, add the following code:
	
	  Private sSeasons() As String
	
	  Property Get SeasonsProp() As String()
	      SeasonsProp = sSeasons
	  End Property
	
	  Private Sub Form_Initialize()
	      ReDim sSeasons(3)
	      sSeasons(0) = "Spring"
	      sSeasons(1) = "Summer"
	      sSeasons(2) = "Autumn"
	      sSeasons(3) = "Winter"
	  End Sub
	
	  Private Sub Form_Load()
	      Dim x As Variant
	      Dim fForm1 As Form1
	
	      Set fForm1 = New Form1
	
	      MsgBox "Before arrays"
	      For Each x In fForm1.SeasonsProp
	         MsgBox "Item: " + x
	      Next
	  End Sub
	
	3. Compile the EXE and run it.
	
	  You should see a message box that displays "Before arrays," and then you will
	  receive the error message described in the SYMPTOMS section of this article.
	
	To fix the problem:
	
	   - Select "Compile to P-Code" on the Compile tab of the Project Properties,
	     and then recompile.
	
	     -or-
	
	   - Change the sample Form_Load event to the following:
	
	  Private Sub Form_Load()
	      Dim x As Variant
	      Dim fForm1 As Form1
	      Dim sTemp() As String
	
	      Set fForm1 = New Form1
	      sTemp = fForm1.SeasonsProp
	
	      MsgBox "Before arrays"
	      For Each x In sTemp
	         MsgBox "Item: " + x
	      Next
	  End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCompiler kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
