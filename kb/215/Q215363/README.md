---
layout: page
title: "Q215363: BUG: Changing TabIndex at Run Time Has No Effect"
permalink: kb/215/Q215363/
---

## Q215363: BUG: Changing TabIndex at Run Time Has No Effect

	Article: Q215363
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0,2.11,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual Basic, version 3.0, on platform(s):
	   - Microsoft Windows CE versions 2.0, 2.11 for the Handheld PC 
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the TabIndex property of a control at run time does not change the tab
	order. The behavior occurs in both the emulation and device modes of Palm-size
	PC, Handheld PC, and Handheld PC Pro projects. The expected behavior is the tab
	order changes according to the TabIndex property.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This section shows how to create a sample project that demonstrates the bug
	behavior.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE HPC project in Visual Basic. Form1 is created by
	  default.
	
	2. Add five CommandButtons to Form1.
	
	3. Copy the following code to the Form1 code window:
	
	  Option Explicit
	  Private Sub Command1_Click()
	     Form1.Cls
	     Print "Command1.TabIndex=" & Command1.TabIndex
	     Print "Command2.TabIndex=" & Command2.TabIndex
	     Print "Command3.TabIndex=" & Command3.TabIndex
	     Print "Command4.TabIndex=" & Command4.TabIndex
	     Print "Command5.TabIndex=" & Command5.TabIndex
	  End Sub
	
	  Private Sub Command2_Click()
	     Command1.TabIndex = 2
	     Command2.TabIndex = 1
	     Command3.TabIndex = 4
	     Command4.TabIndex = 0
	     Command5.TabIndex = 3
	     Form1.Cls
	     Print "Command1.TabIndex=" & Command1.TabIndex
	     Print "Command2.TabIndex=" & Command2.TabIndex
	     Print "Command3.TabIndex=" & Command3.TabIndex
	     Print "Command4.TabIndex=" & Command4.TabIndex
	     Print "Command5.TabIndex=" & Command5.TabIndex
	  End Sub
	
	4. Start the project, targeting either emulation or the remote device. Click
	  Command1 and note the TabIndex value for each command button. Click the TAB
	  key to verify the tab order matches the TabIndex values.
	
	5. Click Command2 to change the TabIndex property. Check the tab order using the
	  TAB key.
	
	Notice that the tab order does not change. The expected behavior is the tab order
	should change according to the new TabIndex property.
	
	Additional query words: vbce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch
	Version           : :1.0,2.0,2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
