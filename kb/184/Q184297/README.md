---
layout: page
title: "Q184297: HOWTO: Create a Form That Always Stays on Top"
permalink: /kb/184/Q184297/
---

## Q184297: HOWTO: Create a Form That Always Stays on Top

{% raw %}

	Article: Q184297
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 08-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual Basic does not offer a property or method to make a form the
	topmost window. This behavior can be achieved using the SetWindowPos Win32 API.
	
	This article demonstrates how to set a form as the topmost window using the
	SetWindowPos Win32 API.
	
	MORE INFORMATION
	================
	
	The sample code below uses a function called SetTopMostWindow. The
	SetTopMostWindow function sets a window as a topmost Window or as a normal
	Window, based on the two parameters, hwnd and Topmost, passed to it.
	
	The hwnd parameter specifies the handle of the window to be set as topmost or as
	normal.
	
	The Topmost parameter specifies whether to set the form as topmost or as normal.
	If the value is true, the function sets the form to always remain on top. If the
	value is false, the function sets the form as a normal window.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Add two command buttons (Command1 and Command2) to Form1.
	
	3. Set the caption property of Command1 to "Always on top."
	
	4. Set the caption property of Command2 to "Normal."
	
	5. Put the following code in the Form1 Declaration section:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	           Dim lR As Long
	           lR = SetTopMostWindow(Form1.hwnd, True)
	        End Sub
	
	        Private Sub Command2_Click()
	           Dim lR As Long
	           lR = SetTopMostWindow(Form1.hwnd, False)
	        End Sub
	
	6. On the Project menu, click Add Module, to add a new module to the project.
	
	7. Add the following code to the new module:
	
	        Option Explicit
	        Public Const SWP_NOMOVE = 2
	        Public Const SWP_NOSIZE = 1
	        Public Const FLAGS = SWP_NOMOVE Or SWP_NOSIZE
	        Public Const HWND_TOPMOST = -1
	        Public Const HWND_NOTOPMOST = -2
	
	        Declare Function SetWindowPos Lib "user32" Alias "SetWindowPos"  _
	              (ByVal hwnd As Long, _
	              ByVal hWndInsertAfter As Long, _
	              ByVal x As Long, _
	              ByVal y As Long, _
	              ByVal cx As Long, _
	              ByVal cy As Long, _
	              ByVal wFlags As Long  ) As Long
	
	        Public Function SetTopMostWindow(hwnd As Long, Topmost As Boolean) _
	           As Long
	
	           If Topmost = True Then 'Make the window topmost
	              SetTopMostWindow = SetWindowPos(hwnd, HWND_TOPMOST, 0, 0, 0, _
	                 0, FLAGS)
	           Else
	              SetTopMostWindow = SetWindowPos(hwnd, HWND_NOTOPMOST, 0, 0, _
	                 0, 0,FLAGS)
	              SetTopMostWindow = False
	           End If
	        End Function
	
	NOTE: In the above sample code, an underscore (_) at the end of a line is used as
	a line-continuation character.
	
	8. Press F5 to run the project.
	
	If you click the "Always on top" command button, your form becomes the topmost
	window and remains on top of every window; you cannot move any other window on
	top of it. If you click the "Normal" button, the form behaves normally (you can
	move other windows on top of it).
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q84251 How to Create a Topmost or Floating Window in Visual Basic
	
	  Q150233 BUG: Topmost Window Does Not Stay on Top in Design Environment
	
	Also view the sample project, CallDlls, located in the VB\Samples\CallDlls
	folder. The CallDlls sample has code to set a Form as the topmost window and is
	illustrated in the sample.
	
	Additional query words: always on top topmost splash screen SetWindowPos System Modal
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
