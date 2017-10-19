---
layout: page
title: "Q149034: FIX: OLE Control Updated Event Fired in Endless Loop"
permalink: /kb/149/Q149034/
---

## Q149034: FIX: OLE Control Updated Event Fired in Endless Loop

	Article: Q149034
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
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
	
	Interrupting normal execution in the Updated event of an OLE control can cause
	the Updated event to be fired repeatedly, in an endless loop. Displaying a modal
	form such as a dialog box causes this problem, as well as stepping through the
	code in debug mode. Execution does not happen in a normal fashion in both of
	these cases.
	
	RESOLUTION
	==========
	
	Although the code cannot be run in debug mode it does run correctly as a
	compiled executable provided no modal forms are shown in the Updated event. To
	show a modal form in response to an Updated event, you can enable a timer
	control in the Updated event and then have the Timer's Timer event show the
	form. For example:
	
	     Private Sub OLE1_Updated(Code As Integer)
	        Timer1.Enabled = True
	     End Sub
	
	     Private Sub Timer1_Timer()
	        Timer1.Enabled = False
	        MyForm.Show vbModal
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Issue
	------------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. Add a single OLE control to the form. When prompted to insert an object
	  choose a Microsoft Excel worksheet or Microsoft Word document. The problem
	  can occur using other objects also.
	
	3. Add this code to the form:
	
	        Private Sub Form_Click()
	            Dim i As Integer
	
	            i = FreeFile
	            Open "test.ole" For Binary As i
	            OLE1.SaveToFile i
	            Close i
	        End Sub
	
	4. Press F5 or click Start on the Run menu to run the application. Click once on
	  the form to save the object to a file called Test.ole.
	
	5. Start another instance of Visual Basic 4.0. Form1 is again created by
	  default.
	
	6. Add an OLE control to Form1. Click Cancel when prompted with the Insert
	  Object dialog.
	
	7. Add this code to the form:
	
	        Option Explicit
	
	        Private Sub Form_Click()
	            Dim i As Integer
	
	            i = FreeFile
	            Open "test.ole" For Binary As i
	            OLE1.ReadFromFile i
	            Close i
	
	            OLE1.DoVerb vbOLEShow
	        End Sub
	
	        Private Sub OLE1_Updated(Code As Integer)
	            Debug.Print "Updated fired: " & Code
	        End Sub
	
	8. Press F5 or click Start on the Run menu to run the application. Click once on
	  the form and see that the program runs fine. Now stop the application and
	  press F8 to start the program in step mode. Click once on the form and step
	  through the code loading the OLE object and into the Updated event. Keep
	  stepping through the code and notice that the Updated event is fired
	  continually.
	
	Additional query words: kbVBp400bug kbVBp600fix kbVBp kbdsd kbDSupport kbOLE kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
