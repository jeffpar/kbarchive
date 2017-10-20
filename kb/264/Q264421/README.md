---
layout: page
title: "Q264421: BUG: Application Error Closing Form with Graphics in RichTextBox"
permalink: /kb/264/Q264421/
---

## Q264421: BUG: Application Error Closing Form with Graphics in RichTextBox

{% raw %}

	Article: Q264421
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbOSWinNT kbVBp kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport
	Last Modified: 30-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Application Error occurs when a Form is closed after multiple graphics have
	been added to the same line of a RichTextBox control.
	
	This problem does not occur on Microsoft Windows 2000.
	
	RESOLUTION
	==========
	
	There are two ways to avoid this problem:
	
	1. Because the problem does not occur if the graphics display on different lines
	  within the control, one solution is to keep each graphic on a separate line.
	
	2. If the graphics are cleared from the RichTextBox control prior to closing the
	  Form, the problem does not occur. Call the Clear method of the RichTextBox
	  just prior to unloading the form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Change the following code to point to graphics on your system, otherwise the
	indicated bitmaps cannot be found:
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, click to select Components, select "Microsoft Rich
	  Textbox Control 6.0," and then click OK.
	
	3. Add a RichTextBox control to Form1.
	
	4. Paste the following code into the code window of Form1:
	
	  Private Sub Form_Activate()<BR/>
	      ' Choose path and file names for your system
	      RichTextBox1.Width = 10000
	      RichTextBox1.OLEObjects.Add , , "c:\balloon.bmp"
	      RichTextBox1.SelStart = 1
	      RichTextBox1.OLEObjects.Add , , "c:\pinstripe.bmp"
	      RichTextBox1.SelStart = 2
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	      ' Uncomment the following line to workaround this problem
	      'RichTextBox1.OLEObjects.Clear
	  End Sub
	
	5. Save the project and press the F5 key to run the program.
	
	6. Close Form1, and note that the Application Error occurs.
	
	7. Restart Visual Basic, select the Recent tab, then select the project you just
	  saved, and click Open.
	
	8. Uncomment the indicated line in the Form_Unload event.
	
	9. Save and run the project, and note that this time when you close Form1, no
	  errors occur.
	
	Additional query words: GPF IPF Invalid Page Fault
	
	======================================================================
	Keywords          : kbCtrl kbOSWinNT kbVBp kbVBp500bug kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
