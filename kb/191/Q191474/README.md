---
layout: page
title: "Q191474: HOWTO: Create a Generic Error Handler for your Application"
permalink: /kb/191/Q191474/
---

## Q191474: HOWTO: Create a Generic Error Handler for your Application

{% raw %}

	Article: Q191474
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual Basic ON ERROR statement is designed to encapsulate error handling
	for each procedure or module in an application. This behavior is by design, and
	is intended to conform with object oriented programming (OOP) conventions. When
	you create an application, you may wish to have a generic error handler that
	traps all errors for the application, and handle exceptions to this routine as
	they occur in various modules.
	
	The ON ERROR statement does not allow the use of an application wide ON ERROR
	routine. However, it is possible to create a generic routine that is called from
	within each procedure or method in the application.
	
	MORE INFORMATION
	================
	
	If the error routine is placed in a global module, it can be called manually
	from each procedure or method in your application. The following code example
	demonstrates how to set up a global error handling routine, and illustrates how
	this can be combined with specific error handling in a procedure or method.
	
	This example creates a project that contains two forms and one code module. Each
	form contains command buttons that cause errors to occur. Some errors are
	handled within the click method for the command button. Other errors are passed
	to the generic error handler.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add the following code to the Load method of Form1. This code causes two
	  errors to occur when the form is loaded. The first error will be handled by
	  the form load method. The second error will be passed to the generic error
	  handler:
	
	        Private Sub Form_Load()
	        On Error GoTo FormLoadErr
	        Err.Raise 76
	        Err.Raise 70
	        Exit Sub
	
	        FormLoadErr:
	        Select Case Err.Number  'Evaluate Error Number
	           Case 76
	              MsgBox "Form_Load Error Handler. Form Does Not Exist"
	           Case Else
	              AppWideErr (Err.Number) 'Pass Error to generic module
	           End Select
	        End Sub
	
	3. Add a CommandButton to the form. This code causes two errors to occur. The
	  first error will be handled by the click method. The second error will be
	  passed to the generic routine. Change the Caption property to "Cause Error 53
	  and 70." Add the following code to the Click method of the CommandButton:
	
	        Private Sub Command1_Click()
	        On Error GoTo Cmd1Err
	           Err.Raise 53 'Handled locally
	           Err.Raise 70 'Handled by generic module
	        Exit Sub
	
	        Cmd1Err:
	        Select Case Err.Number
	           Case 53
	              MsgBox "Command 1 Error Handler"
	           Case Else
	              AppWideErr (Err.Number)
	           End Select
	           Resume Next  'Process the next (70) error
	        End Sub
	
	4. Add a second CommandButton to the form. If an error occurred in this method,
	  no error handler would be called. Change the Caption property to "Show Form
	  2." Add the following code to the Click event:
	
	        Private Sub Command2_Click()
	           'No error handling is coded in this method
	           'AppWideErr would not be called
	     Form2.Show 'Use VB's default error handling only
	        End Sub
	
	5. Add a second form to the project. Add a CommandButton to the form. This
	  CommandButton passes all errors to the generic error handler and does not
	  perform any special processing for specific errors. Change the Caption
	  property of the button to "Cause Error 17." Add code to the Click method as
	  follows:
	
	        Private Sub Command1_Click()
	        On Error GoTo ThisSubErr
	           Err.Raise 17
	           Exit Sub
	        ThisSubErr:
	           AppWideErr (Err.Number)
	        End Sub
	
	6. Add a module to the project. Add the following code to the module:
	
	      Public Sub AppWideErr(lnErrNumber)
	      Select Case lnErrNumber  'Evaluate error passed to routine
	         Case 70
	            'The following two lines of code should be typed on one line.
	            'Added title to MsgBox to make it clearer where error message
	            'came from.
	            MsgBox "Generic Routine.  Access Denied.  See Net Administrator."
	                , , "AppWideErr"
	            Exit Sub
	         Case Else
	            'The following two lines of code should be typed on one line.
	            'Added title to MsgBox to make it clearer where error message
	            'came from.
	            MsgBox "Generic Routine. Unhandled Error: " + Err.Description +
	                " # " & lnErrNumber , , "AppWideErr"
	            Exit Sub
	      End Select
	      End Sub
	
	7. Save and run the project. Note that some errors will be handled by the error
	  routine specific to a method. The logic for each method invokes the generic
	  AppWideErr procedure for any errors not explicitly handled by the method. The
	  error number is passed as a numeric argument to AppWideErr.
	
	REFERENCES
	==========
	
	Visual Basic 5.0 Books Online - Error Handling
	
	Visual Basic 6.0 MSDN - Error Handling
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
