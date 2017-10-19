---
layout: page
title: "Q253814: PRB: SetParent Does Not Change Standard Forms into Child Windows"
permalink: /kb/253/Q253814/
---

## Q253814: PRB: SetParent Does Not Change Standard Forms into Child Windows

	Article: Q253814
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbDLL kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 15-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call the SetParent function to allow a standard form to become a child
	form of a multiple-document interface (MDI) application, many child windowing
	features do not work.
	
	CAUSE
	=====
	
	This problem occurs because, by design, a standard window cannot be completely
	altered at run time to mimic a child window.
	
	RESOLUTION
	==========
	
	To work around this problem, use a dynamic MDI application in place of the
	SetParent call. ActiveX controls can be dynamically loaded onto a form. An MDI
	child form can dynamically load an ActiveX control that takes over the entire
	client area of the window. For more information on this approach, see the
	"References" section.
	
	MORE INFORMATION
	================
	
	Using the SetParent function to change the ownership of a window in Visual Basic
	seldom provides the desired results. Therefore, Microsoft does not recommend or
	support this approach.
	
	Use the sample code in the following steps to examine the problems that occur
	when you try to use the SetParent call to change a standard form into a child
	form.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, click Remove Form1.
	
	3. On the Project menu, click Add MDI Form. MDIForm1 is added to Project1.
	
	4. On the Project menu, click Project1 Properties, and set the Startup object to
	  MDIForm1.
	
	5. Add the following code behind MDIForm1:
	
	  Private Sub MDIForm_Click()
	      Dim x As Class1
	      Set x = New Class1
	      x.ShowChildForm MDIForm1.hWnd
	  End Sub
	
	6. On the File menu, click Add Project. To create a project group, add a new
	  ActiveX DLL project. Class1 is created by default.
	
	7. Add the following code to Class1:
	
	  Private Declare Function GetWindowLong Lib "user32" _
	          Alias "GetWindowLongA" _
	          (ByVal hwnd As Long, ByVal nIndex As Long) As Long
	
	  Private Declare Function SetParent Lib "user32" _
	          (ByVal hWndChild As Long, ByVal hWndNewParent As Long) As Long
	
	  Private Declare Function SetWindowLong Lib "user32" _
	          Alias "SetWindowLongA" _
	          (ByVal hwnd As Long, ByVal nIndex As Long, _
	          ByVal dwNewLong As Long) As Long
	
	  Const GWL_STYLE = (-16)
	  Const WS_POPUP = &H80000000
	
	  Public Function ShowChildForm(ByVal hWndMDIForm As Long)
	      Dim Ret As Long
	      Dim CurrentStyle As Long
	      
	      Ret = SetParent(Form1.hwnd, hWndMDIForm)
	      CurrentStyle = GetWindowLong(Form1.hwnd, GWL_STYLE)
	      Ret = SetWindowLong(Form1.hwnd, GWL_STYLE, CurrentStyle Or WS_POPUP)
	      Form1.Show
	  End Function
	
	8. On the Project menu, click Add Form. Form1 is added to Project2.
	
	9. In the Project Explorer, click Project1 to activate the Project1.
	
	10. On the Project menu, click References, and add a reference to Project2.
	
	11. Press the F5 key to run the program.
	
	12. Click the client area of MDIForm1. Notice that Form1 (from Project2) is now
	  visible in the client area of the MDI form.
	
	The following list includes some of the problems that you may encounter when the
	SetParent approach is implemented:
	
	- The title bar of the MDI parent does not show that it is the active window
	  when a form from the dynamic-link library (DLL) has focus.
	
	- A menu from a form in the DLL does not merge with a menu of the MDI parent
	  form.
	
	- When a form from the DLL is maximized, the title bar of the DLL form is still
	  visible.
	
	- When MDI child forms that are part of the MDI project receive focus, they do
	  not appear on top of a form from the DLL.
	
	- A form from the DLL can be moved over a toolbar that exists in the MDI
	  project.
	
	- When a DLL form is moved out of the visible area of the MDI form, scroll bars
	  do not appear on the MDI parent.
	
	REFERENCES
	==========
	
	For additional information about how to dynamically add intrinsic and ActiveX
	controls, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q190670 HOWTO: Dynamically Add Controls to a Form with Visual Basic 6.0
	
	For additional information about similar problems using the SetParent function to
	manipulate ActiveX components, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q289498 PRB: Form Cannot Get Focus After You Use SetParent to Move Controls
	  to Another Form
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbDLL kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
