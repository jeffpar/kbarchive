---
layout: page
title: "Q187740: PRB: UserControl Resize Event Fails with MoveWindow API"
permalink: /kb/187/Q187740/
---

## Q187740: PRB: UserControl Resize Event Fails with MoveWindow API

{% raw %}

	Article: Q187740
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
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
	
	The Resize Event of a UserControl will not fire if you use the MoveWindow API
	function to resize the window of the UserControl.
	
	NOTE: Other API calls that manipulate the UserControl window, such as
	SetWindowPos, may also show this behavior.
	
	CAUSE
	=====
	
	When you manipulate the UserControl window through API calls, you bypass the
	UserControl Object. So any of the events that would normally get raised from a
	COM call to the UserControl may fail when you bypass the UserControl object and
	manipulate the UserControl's window directly.
	
	RESOLUTION
	==========
	
	Use the Visual Basic Move method.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When using the MoveWindow API function to move or resize a UserControl, the
	UserControl's Resize event will not fire. You will see the same behavior if the
	UserControl is in a standard EXE or a compiled OCX.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a standard Exe Project. Form1 is created by default.
	
	2. Click Add UserControl from the Project menu to add a UserControl to the
	  project.
	
	3. Change the BackColor of the UserControl to Red so you will be able to see the
	  control.
	
	4. Add the following code to the UserControl:
	
	        Public Property Get hWnd() As Long
	          hWnd = UserControl.hWnd
	        End Property
	
	        Private Sub UserControl_Resize()
	          Debug.Print "Resize!"
	        End Sub
	
	5. Add the UserControl to Form1.
	
	6. Add the following code to Form1:
	
	        Private Declare Function MoveWindow Lib "user32" (ByVal hWnd As _
	         Long, ByVal X As Long, ByVal Y As Long, ByVal nWidth As Long, _
	         ByVal nHeight As Long, ByVal bRepaint As Long) As Long
	
	        Private Sub Form_Load()
	          Me.ScaleMode = vbPixels
	        End Sub
	
	        Private Sub Form_MouseDown(Button As Integer, Shift As Integer, _
	         X As Single, Y As Single)
	          Static Chop As Boolean
	
	          Chop = Not Chop
	          With UserControl1
	            If Chop Then
	             Call MoveWindow(.hWnd, X, Y, .Width \ 2, .Height \ 2, True)
	             '.Move X, Y, .Width \ 2, .Height \ 2 'VB Move Method
	            Else
	             Call MoveWindow(.hWnd, X, Y, .Width * 2, .Height * 2, True)
	             '.Move X, Y, .Width * 2, .Height * 2 'VB Move Method
	            End If
	          End With
	        End Sub
	
	7. Save and run the project. Try clicking on the form and note that you will not
	  see the Resize code in the UserControl run. If you comment out the call to
	  the MoveWindow API function and use the Visual Basic Move method in place of
	  the API call, you will see the Resize code for the UserControl run.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbCtrl kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
