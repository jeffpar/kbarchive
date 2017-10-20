---
layout: page
title: "Q150193: BUG: Visible Property of Sheridan Command Button May Not Work"
permalink: /kb/150/Q150193/
---

## Q150193: BUG: Visible Property of Sheridan Command Button May Not Work

{% raw %}

	Article: Q150193
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Sheridan Command button does not stay invisible although the Visible
	property is set to False. This can occur if the Visible property of a Sheridan
	Command button was set to False in a procedure in another form.
	
	RESOLUTION
	==========
	
	Use the ShowWindow API function instead of the Visible property of the button to
	hide/show the button. This function takes only two parameters: a window handle
	that becomes the hWnd property of the Sheridan control, and a constant that
	determines how to show the window.
	
	The declaration below can be pasted in the General...Declarations section of the
	form where the routine is to hide the window:
	
	     #If Win16 Then
	
	     Private Declare Function ShowWindow Lib "User" (ByVal hWnd As Integer,
	
	     ByVal nCmdShow As Integer) As Integer
	
	     #Else
	
	     Private Declare Function ShowWindow Lib "user32" (ByVal hwnd As Long,
	
	     ByVal nCmdShow As Long) As Long
	
	     #EndIf
	
	     Const SW_SHOW = 5
	
	     Const SW_HIDE = 0
	
	To hide a Sheridan Command button, issue a command similar to the following:
	
	     ShowWindow Form1.SSCOmmand1.HWnd, SW_HIDE
	
	and, to show a button:
	
	      ShowWindow Form1.SSCommand1.HWnd, SW_SHOW
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project. Form1 is created by default. On Form1 place a regular
	  Command button and a Sheridan SSCommand button. Go to the Properties window
	  and change the TabIndex property of the SSCommand1 control to 0.
	
	2. In the Form_Load event for Form1, place the following code:
	
	        Private Sub Form_Load()
	
	            Form2.Show
	
	        End Sub
	
	3. Insert another form into the project. On Form2, place a regular command
	  button. In the Command1_Click event for the button on Form2, place the
	  following code:
	
	        Private Sub Command1_Click()
	
	            Form1.SSCommand1.Visible = False
	
	        End Sub
	
	Run the project by pressing the F5 key. Bring Form2 to the foreground and press
	the Command button to make the Sheridan Command button on Form1 disappear. Click
	anywhere on Form1 to bring it to the foreground. Notice that SSCommand1
	reappears.
	
	To correct this problem with the workaround, paste the declaration for ShowWindow
	in the Form...Declarations section of Form2. Instead of the command to make
	Visible property false, use the following command:
	
	     Call ShowWindow(Form1.SSCOmmand1.HWnd, SW_HIDE)
	
	The button will not reappear until the following command is issued:
	
	     Call ShowWindow(Form1.SSCommand1.HWnd, SW_SHOW)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400bug 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
