---
layout: page
title: "Q192257: PRB: Recursive Use of AddressOf Operator Fails"
permalink: /kb/192/Q192257/
---

## Q192257: PRB: Recursive Use of AddressOf Operator Fails

	Article: Q192257
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use "AddressOf MyFunc" in the function, or Subroutine "MyFunc" in the
	standard module, Visual Basic compiler will generate an error message:
	
	  "Expected Sub, Function, or Property"
	
	RESOLUTION
	==========
	
	Include the module name when you use the AddressOf Operator. For example, use:
	
	      AddressOf MyModule.MyFunc
	
	instead of:
	
	      AddressOf MyFunc
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, add a standard Module, Module1, and insert the
	  following code:
	
	        Declare Function EnumChildWindows Lib "user32" ( _
	                ByVal hWndParent As Any, ByVal lpEnumFunc As Long, _
	                ByVal lParam As Long) As Long
	
	        Declare Function FindWindowEx Lib "user32" Alias _
	                "FindWindowExA" (ByVal hWnd1 As Long, _
	                ByVal hWnd2 As Long, ByVal lpsz1 As String, _
	                ByVal lpsz2 As String) As Long
	
	        Dim m_hWnd As Long
	
	        Public Function EnumWindowProc(ByVal hWnd As Long, _
	                ByVal lParam As Long) As Long
	
	           Dim nRet As Long
	
	           nRet = FindWindowEx(hWnd, 0, "VbaWindow", "Immediate")
	           If nRet Then
	               m_hWnd = nRet
	               EnumWindowProc = False
	           Else
	               Call EnumChildWindows(hWnd, AddressOf EnumWindowProc, 0)
	               EnumWindowProc = (m_hWnd = 0)
	           End If
	       End Function
	
	3. From the Run menu, pick "Start with Full Compile" or press the CTRL+F5 key
	  combination. You will get the error message:
	
	  Compile error:
	  Expected Sub, Function, or Property
	
	4. Click OK to dismiss the error message. "AddressOf EnumWindowProc" should be
	  highlighted.
	
	5. Edit this line to add the module name so that it looks like this:
	
	        Call EnumChildWindows(hWnd, AddressOf Module1.EnumWindowProc, 0)
	
	6. Repeat step 3 and note that the project runs without an error message.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbVBp600 kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
