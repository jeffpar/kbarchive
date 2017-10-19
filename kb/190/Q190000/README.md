---
layout: page
title: "Q190000: HOWTO: Get Started Programming with the Windows API (LONG)"
permalink: /kb/190/Q190000/
---

## Q190000: HOWTO: Get Started Programming with the Windows API (LONG)

	Article: Q190000
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 KbVBA kbVBp kbVBp400 kbVBp500 kbVBp600 kbFAQ kbVBp600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic for Applications version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to get started calling functions in the Windows
	Application Programming Interface (Windows API) in your Visual Basic projects.
	This article assumes you are familiar with using Visual Basic but have never
	used it to call the functions in the Windows API.
	
	MORE INFORMATION
	================
	
	Although Visual Basic has an extensive list of statements, methods, events, and
	procedures to help you create a Windows program quickly and easily, there are
	limitations within the development environment that may prevent you from
	implementing your ideas. One way to go beyond these limitations is to call the
	Windows API from within your Visual Basic project. At the heart of the Windows
	operating system are the functions that make up the Windows API. The majority of
	these functions are accessible from Visual Basic programs.
	
	The following topics are covered in this article:
	
	- What is the Windows API? - A brief overview of the Windows Application
	  Programming Interface.
	
	- Why Use the Windows API? - Explains the advantages of calling Windows API
	  functions in addition to using the functions, methods, and procedures
	  provided by Visual Basic.
	
	- How to call a Windows API function - The details of calling a function from a
	  Visual Basic program.
	
	- Sample Project - Shows how to create your first Visual Basic project that
	  calls two functions in the Windows API.
	
	- Tips - Some tips and tricks to make Windows API programming easier.
	
	- Where to go from here? - additional resources and articles on the topics of
	  using the Windows API with Visual Basic.
	
	What is the Windows API?
	------------------------
	
	If you look at the Windows System directory, typically \Windows\System under
	Window 95/98 and \Winnt\System32 under Windows NT, you will find a number of
	Dynamic Link Library (.DLL) files. These files contain functions that are used
	to run the operating system and to ensure a consistent user interface and
	operating environment. These files make up the Windows API.
	
	The purpose of the Windows API is to allow you to develop programs consistent
	with the Windows operating system and user interface. Instead of individuals
	writing the code to create components of the Windows operating system, such as
	forms, command buttons, and menus, you can call the appropriate functions in the
	Windows API and let the operating system create those components.
	
	The purpose of each function in the Windows API is documented in the Platform
	Software Development Kit (SDK). The Platform SDK is shipped with Microsoft
	Visual C++ and as part of a subscription to the Microsoft Developer Network
	(MSDN.)
	
	You can also download the Platform SDK from the following Microsoft Web site:
	
	  http://www.microsoft.com/msdownload/platformsdk/setuplauncher.htm
	
	As with any other Windows program, Visual Basic uses the functions in the Windows
	API. When you perform a task in Visual Basic, such as adding a command button to
	a form, Visual Basic calls the appropriate functions to perform the task. The
	features of Visual Basic are wrappers to these functions.
	
	Why Use the Windows API?
	------------------------
	
	The reason why you would use the Windows API is to perform a task beyond what is
	available from Visual Basic. For example, you cannot determine or set the cursor
	blinking rate through any statement, property, procedure, or method in Visual
	Basic. You can get the blink rate by calling the GetCaretBlinkTime function,
	which returns the cursor blink rate in milliseconds. If you want to set the
	cursor to blink at another rate under specified conditions, you can call the
	SetCaretBlinkTime function, passing the specified time in milliseconds.
	
	You can get the same functionality as almost any of the features of Visual Basic
	by calling the appropriate Windows API functions. However, calling these
	functions directly is typically more complicated and can cause unpredictable
	behavior if not done correctly, resulting in system errors. For the best
	performance and predictable behavior, you should use the intrinsic Visual Basic
	functionality.
	
	How to Call a Windows API Function
	----------------------------------
	
	There are two steps required to call a Windows API function:
	
	- Declare the function in a module or form.
	
	- Call the function in your program as you would any other function.
	
	The topic "Declaring a DLL Procedure" in "Part 4 Accessing DLLs and the Windows
	API" of the "Visual Basic Component Tools Guide" explains how to declare a
	function in a module. The topic also shows how to use the API Text Viewer to
	find the appropriate declaration and copy and paste the declaration to your
	project.
	
	For example, to declare the GetCaretBlinkTime function in a module, copy the
	following text to the code window of your module:
	
	  Declare Function GetCaretBlinkTime Lib "user32" Alias _
	                   "GetCaretBlinkTime" () As Long
	
	If you want to use the same function only in a specific form, add the keyword
	"Private" to the beginning of the function declaration. The GetCaretBlinkTime
	function declaration is written in the code window of a form as follows:
	
	  Private Declare Function GetCaretBlinkTime Lib "user32" Alias _
	                           "GetCaretBlinkTime" () As Long
	
	This function returns a Long value that is the cursor blink rate in milliseconds.
	The Lib keyword precedes the name of the file that contains the function; in
	this case, User32.DLL. The Alias keyword is used to define the specific function
	in the DLL file. This clause is optional when the function is being declared
	with the same name as in the DLL.
	
	You will often see the Private notation used in Microsoft Knowledge Base articles
	because not using a module streamlines the implementation of the sample code. If
	you need to use a Windows API function in more than one source file in a
	project, it should be declared in a module.
	
	For more information about the Declare statement, see "Declare Statement" in the
	Language Reference in Books Online.
	
	Once you have declared the function, you can call it as you would any Visual
	Basic function and a pass any appropriate parameters. The following example
	shows how to call the GetCaretBlinkTime function:
	
	  Dim lngCaretBlinkTime as Long   ' Blink Rate variable
	     lngCaretBlinkTime =  GetCaretBlinkTime
	
	For functions that require parameters, you can pass parameters by reference or by
	value.
	
	A parameter passed by reference passes the 32-bit address of the location where
	the value is stored. By default, Visual Basic passes parameters by reference.
	You can also explicitly pass parameters by reference using the ByRef keyword.
	
	The values of parameters passed by reference can be changed in the called
	procedure. For example, the InvertRect function inverts a specified rectangle by
	inverting the value of each pixel. The function requires the handle to the
	device context containing the rectangle and the address of a user defined type
	(UDT) variable with the logical coordinates of the rectangle. The address of the
	user defined variable is passed by reference.
	
	When you call this function, the logical coordinates of the rectangle are placed
	in the user defined variable.
	
	To use this function, add the following declarations to a module:
	
	     Public Type RECT
	        Left As Long
	        Top As Long
	        Right As Long
	        Bottom As Long
	     End Type
	
	     Declare Function InvertRect Lib "user32" Alias "InvertRect" _
	     (ByVal hdc As Long, ByRef lpRect As RECT) As Long
	
	The first declaration specifies a user defined type required for a parameter of
	the InvertRect function while the second declaration is for the function.
	
	Passing a parameter by value sends the actual value of the parameter to the
	function. You pass a parameter by value if the parameter is not changed by the
	called procedure. To pass a parameter by value, add the ByVal keyword to each
	parameter you want to pass to the function.
	
	NOTE: When you pass a string variable to an API call, you actually pass the
	memory address of the string, so you should always pass string parameters as
	ByVal. If you pass a string parameter by reference, you pass the memory address
	containing the memory address of the string, which causes the API function
	receiving the parameter to behave incorrectly and may cause a memory violation
	error.
	
	The SetCaretBlinkTime function requires the rate in milliseconds parameter to be
	passed by value to the function. Declare this function by adding the following
	statement to a module:
	
	     Declare Function SetCaretBlinkTime Lib "user32" Alias _
	     "SetCaretBlinkTime" (ByVal wMSeconds As Long) As Long
	
	To use this function to set the cursor blink rate to 250 milliseconds, add the
	following to your project:
	
	  Dim lBlinkRate as Long   ' Blink rate variable
	  Dim lResult as Long      ' Result Variable
	  lBlinkRate = 250
	  lResult = SetCaretBlinkTime (lBlinkRate)
	  If lResult = 0 Then
	     ' Error code
	  End If
	
	Sample Project
	--------------
	
	This section shows you how to create a sample project that controls the cursor
	blink rate by calling two functions in the Windows API. The GetCaretBlinkRate
	function returns the current blink rate in milliseconds while the
	SetCaretBlinkRate function sets the blink rate. Both of these functions will be
	declared in a module. You can also declare these functions in the form by
	prefacing each function declaration with the Private keyword.
	
	NOTE: The SetCaretBlinkRate function sets the cursor blink rate for the operating
	system. If you exit the project before setting the blink rate back to the
	default, the cursor blink rate will change for all programs.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a Module to the project by completing the following steps:
	
	  a. From the Project menu, click Add module. The Add Module dialog box
	     appears.
	
	  b. From the New tab, choose Module and click OK. A new module, Module1, is
	     added to your project.
	
	3. Copy the following code to the Code window of Module1:
	
	  Option Explicit
	
	  ' Returns the current cursor blink rate
	  Declare Function GetCaretBlinkTime Lib "user32" () As Long
	
	  ' Sets the cursor blink rate
	  Declare Function SetCaretBlinkTime Lib "user32" _
	                  (ByVal wMSeconds As Long) As Long
	
	  ' Returns the error code if either GetCaretBlinkTime or
	  ' SetCaretBlinkTime functions fails
	  Public Declare Function GetLastError Lib "kernel32" () As Long
	
	4. Add a HScrollBar, a TextBox, and a CommandButton to Form1.
	
	5. Copy the following code to the Code window of Form1:
	
	  Option Explicit
	  Dim lDefaultTime As Long
	  Dim lResult As Long
	  Dim lErrorCode As Long
	
	  Private Sub Form_Load()
	     lResult = GetCaretBlinkTime
	
	     If lResult = 0 Then
	        Call DisplayError(0)
	     Else
	        lDefaultTime = lResult
	        HScroll1.Min = 10
	        HScroll1.Max = 1000
	        HScroll1.Value = lDefaultTime
	        Text1.Text = CStr(lDefaultTime)
	        Command1.Caption = "Return to Default"
	     End If
	  End Sub
	
	  Private Sub Command1_Click()
	     lResult = SetCaretBlinkTime(lDefaultTime)
	     
	     ' If the function fails then display a message box with the error code
	     If lResult = 0 Then
	        Call DisplayError(1)
	     Else
	        ' Display the new blink rate.
	        HScroll1.Value = lDefaultTime
	        Text1.Text = CStr(GetCaretBlinkTime)
	        HScroll1.SetFocus
	     End If
	  End Sub
	
	  Private Sub HScroll1_Change()
	     lResult = SetCaretBlinkTime(HScroll1.Value)
	
	     If lResult = 0 Then
	        Call DisplayError(1)
	     Else
	        lResult = GetCaretBlinkTime
	        If GetCaretBlinkTime = 0 Then
	           Call DisplayError(0)
	        Else
	           Text1.Text = CStr(lResult)
	        End If
	     End If
	  End Sub
	
	  Private Sub HScroll1_Scroll()
	     Text1.Text = CStr(HScroll1.Value)
	  End Sub
	
	  Private Sub Text1_KeyPress(KeyAscii As Integer)
	     If KeyAscii = vbKeyReturn Then
	        Dim iTextValue As Integer
	        iTextValue = CInt(Text1.Text)
	
	        If iTextValue > 1000 Or iTextValue < 10 Then
	           MsgBox "Enter a number between 10 and 1000."
	           Text1.Text = CStr(HScroll1.Value)
	           Exit Sub
	        Else
	           HScroll1.Value = iTextValue
	        End If
	     End If
	  End Sub
	
	  Private Sub Form_Terminate()
	     lResult = SetCaretBlinkTime(lDefaultTime)
	
	     If lResult = 0 Then
	        lErrorCode = GetLastError
	        MsgBox ("SetCaretBlinkTime failed. Error" & CStr(lErrorCode))
	     End If
	  End Sub
	
	  Private Sub DisplayError(iFail As Integer)
	     Dim sErrorMsg As String
	     lErrorCode = GetLastError
	
	     Select Case iFail
	        Case 0   ' GetCaretBlinkRate Function Failed
	           sErrorMsg = "GetCaretBlinkRate Failed. Error Code "
	           sErrorMsg = sErrorMsg & CStr(lErrorCode)
	        Case 1
	           sErrorMsg = "SetCaretBlinkRate Failed. Error Code "
	           sErrorMsg = sErrorMsg & CStr(lErrorCode)
	        Case Else
	           sErrorMsg = "Unknown Error"
	     End Select
	
	     MsgBox (sErrorMsg)
	  End Sub
	
	6. On the Run menu, click Start or press the F5 key to start the program. Move
	  the scroll bar to change the cursor blink rate. You can also enter a number
	  between 10 and 1000 in the TextBox to change the blink rate. Click the
	  "Return to Default" button to set the blink rate back to the default setting.
	  To exit the application, you should click the Close button at the far right
	  of the title bar instead of the stop button in the Visual Basic environment.
	  This will restore your original cursor blink rate.
	
	Tips
	----
	
	- Save your work often: because you are calling functions in the Windows API,
	  you are bypassing the syntax checking feature of Visual Basic. If the
	  function fails, then an application error can occur and lock up your system.
	  You can set Visual Basic to always save your work prior to running the
	  project by enabling the Prompt to Save Changes option in the Environment Tab
	  of the Options dialog box. You can get to this dialog box by clicking Options
	  from the Tools menu.
	
	- Specify the variable type explicitly rather than using the Any variable type;
	  a number of functions in the API Text Viewer can accept any type of variable
	  as a parameter. These functions have parameters declared as Any. You can
	  change the parameter to as specified variable type in order to simplify
	  debugging your code.
	
	- Verify that you are passing the correct variable types, constants, and values
	  required by the function by checking the function documentation in the
	  Platform SDK. Although the SDK was written for a C programmer and therefore
	  uses C data types, you can pass the appropriate data types by using the
	  following Visual Basic data types:
	
	  Function Data Type Parameter     Appropriate Visual Basic Data Type
	  ----------------------------     ----------------------------------
	
	  int, INT                         ByVal Long
	  UINT                             ByVal Long
	  BOOL                             ByVal Long
	  WORD                             ByVal Integer
	  DWORD                            ByVal Long
	
	  WPARAM                           ByVal Long
	  LPARAM, LRESULT                  ByVal Long
	  COLORREF                         ByVal Long
	  ATOM                             ByVal Integer
	  HANDLE                           ByVal Long
	
	  BYTE                             ByVal Byte
	  char                             ByVal Byte
	
	  LPINT, int *                     ByRef Long
	  LPUINT, UINT *                   ByRef Long
	  LPBOOL, BOOL *                   ByRef Long
	  LPBYTE, BYTE *                   ByRef Byte
	  LPWORD, WORD *                   ByRef Integer
	  LPDWORD, DWORD *                 ByRef Long
	  LPHANDLE, HANDLE *,              ByRef Long
	
	- Use the Add-In Manager to add the API Text Viewer as an add-in to the IDE. To
	  use the Add-In Manager, see Using Wizards and Add-Ins in "Chapter 4-Managing
	  Projects" of the "Visual Basic Programmer's Guide."
	
	- When using the API Text Viewer, convert the API text file to an Access
	  database for faster searches.
	
	- Always pass strings to a DLL using the ByVal keyword.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Arsenio Locsin, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	For more information about using the functions in the Windows API, refer to the
	following sources:
	
	- VB5DLL.DOC - located in the TOOLS\DOCS directory of the Visual Basic product
	  CD. These are notes for developing DLLs for use with Microsoft Visual Basic.
	  Use this information to know what a DLL expects from Visual Basic.
	
	- "Visual Basic 5.0 Programmer's Guide to the Win32 API" by Dan Appleman-A
	  "must" book for Visual Basic programmers who want to use the Windows API. The
	  book contains information written for the Visual Basic programmer on using
	  the Windows API.
	
	- Hardcore Visual Basic by Bruce McKinney-contains good examples on how to
	  extend the capabilities of Visual Basic through the Windows API.
	
	- Microsoft Developer Network Subscription - contains the header files used to
	  compile the DLLs used by the operating system. You can use this information
	  to verify the correct function, type, and constant declarations.
	
	- Mastering Visual Basic 5-Chapter 5: Using Dynamic Link Libraries: contains a
	  good tutorial on using the Windows API.
	
	For additional information on looking for the correct parameters, values, and
	constants required by the Windows API, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q187674 HOWTO: Find Undocumented Constants Used by Windows API Functions
	
	The following articles in the Microsoft Knowledge Base show you how to use
	functions in the Windows API to accomplish specific tasks:
	
	  Q161161 HOWTO: Search a ListBox Control Quickly
	
	  Q175512 HOWTO: Get a Short Filename from a Long Filename
	
	  Q151799 HOWTO: Use the Animated Copy Functions in Windows 95
	
	Additional query words: VBFAQProgramming
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 KbVBA kbVBp kbVBp400 kbVBp500 kbVBp600 kbFAQ kbVBp600FAQ 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVB500 kbVB600 kbVB400Search kbVB400 kbVBASearch kbZNotKeyword3
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
