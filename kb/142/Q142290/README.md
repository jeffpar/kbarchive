---
layout: page
title: "Q142290: FIX: Printer Error When Printing from RTF Control"
permalink: kb/142/Q142290/
---

## Q142290: FIX: Printer Error When Printing from RTF Control

	Article: Q142290
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After printing from a Rich Text Box control, Visual Basic 4.0 raises error 482 -
	"Printer Error". This error can occur when exiting a Visual Basic application or
	when executing the EndDoc method of the Printer object.
	
	RESOLUTION
	==========
	
	After printing from a RTF control, executing an EndDoc will exhibit this
	problem. Visual Basic executes an automatic Printer.EndDoc if a program stops
	execution with buffered data. Even though this error is raised, the pages do
	print correctly. The workaround for this problem is to trap error 482 and simply
	ignore it. The example below contains code to demonstrate this technique.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic, or, if it is already running, choose New Project from the
	  File Menu.
	
	2. Add an RTF control and a command button to the form.
	
	3. Insert the following code in the Command1_Click event.
	
	     Private Sub Command1_Click()
	         Printer.Print ""
	         RichTextBox1.SelPrint Printer.hDC
	         Printer.EndDoc
	     End Sub
	
	4. Run the application.
	
	5. Enter some text in the RTF text box, and click on the command button to
	  print. The program will stop and an error dialog box, complaining of the
	  above mentioned error, will be displayed. Clicking on the "Debug" button in
	  the error dialog box will show that the line of code that execution stopped
	  on was the call to EndDoc.
	
	This problem can be avoided by changing the code in the Command1_Click procedure
	to the following:
	
	     Private Sub Command1_Click()
	         Printer.Print ""
	         RichTextBox1.SelPrint Printer.hDC
	
	         On Error GoTo EndDocError
	         Printer.EndDoc
	         On Error GoTo 0
	
	         Exit Sub
	
	     EndDocError:
	         If Err.Number = 482 Then
	             'do nothing
	         Else
	             Err.Raise Err.Number
	         End If
	     End Sub
	
	This code initializes the printer object and prints from the RTF control. Error
	trapping is turned on, and if the error that occurs with the EndDoc method is
	number 482, it is ignored. If some other error is raised as a result of the
	EndDoc method, that error is passed upwards in the call stack to be handled by
	another procedure or Visual Basic as normal.
	
	Additional Note
	---------------
	
	The RTF sample application included with the Visual Basic 4.0 MSDN Starter Kit
	was written using a different version of the RTF control than the one that
	shipped with Visual Basic 4.0. As a result, the above fix is not implemented in
	the code for that sample application. The RTF sample can be fixed by the same
	method outlined above; simply trap error 482 and ignore it.
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbPrint kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
