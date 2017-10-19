---
layout: page
title: "Q193593: PRB: Cannot Paste PrintScreen Result to OLE Control"
permalink: /kb/193/Q193593/
---

## Q193593: PRB: Cannot Paste PrintScreen Result to OLE Control

	Article: Q193593
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
	
	Pressing the ALT+PRINTSCRN key combination turns the OLE control's PasteOK
	property to False, and the bitmap in the clipboard cannot be pasted to the OLE
	control.
	
	CAUSE
	=====
	
	There are two kinds of Clipboard formats; one is the traditional format and the
	other is the OLE format. Microsoft's Visual Basic OLE control is designed to
	hold the objects that can either be linked or embedded in the control. It
	requires the clipboard to contain the OLE information to be pasted into it.
	However, after pressing the ALT+PRINTSCRN key combination, the clipboard format
	is in the traditional format. For the same reason, simple metafiles in the
	clipboard cannot be pasted into the OLE control either.
	
	RESOLUTION
	==========
	
	To workaround this problem, the clipboard format needs to be transformed from
	traditional format to OLE format.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce and Work Around Behavior
	-------------------------------------------
	
	The following is an example of using a Rich Textbox to transform the clipboard
	format from traditional format to OLE format and make the paste possible. The
	basic idea is to paste the bitmap from the clipboard to a Rich Textbox and then
	copy it back from the Rich Textbox to the clipboard. In the example, the
	SendKeys function is used to paste to and copy from the clipboard.
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Put an OLE control on Form1 and keep the default name, OLE1. Click Cancel
	  when the "Insert Object" dialog box comes up.
	
	3. Put a CommandButton on Form1 and keep the default name, Command1.
	
	4. Add the following code to the code window of Form1:
	
	        Private Sub Command1_Click()
	          if OLE1.PasteOk = True then
	              OLE1.Paste
	          else
	              msgbox "Can not paste!"
	          End if
	        End Sub
	
	5. Run the application. Pressing the ALT+PRINTSCRN key combination and then
	  click the CommandButton. The message box "Can not paste!" is displayed,
	  demonstrating the problem.
	
	6. Stop the application.
	
	7. Select Components from the Project menu and check "Microsoft Rich Textbox
	  Control X.0."
	
	8. Add a Rich Textbox to Form1 and keep the default name, RichTextBox1. Make
	  sure its Visible property is set to True and its TabStop property is set to
	  False. Make the Rich Textbox as small as possible and hide it under the
	  CommandButton (because you don't want it to show on the screen). If
	  necessary, right-click on the Rich Textbox and click "Send to Back."
	
	9. Change the Command1_Click event handler to be:
	
	        Private Sub Command1_Click()
	          ' use RichTextBox to transform the clipboard info
	          RichTextBox1.TextRTF = ""
	          RichTextBox1.SetFocus
	          SendKeys "^v", True
	          SendKeys "^+{HOME}", True
	          SendKeys "^c", True
	          RichTextBox1.TextRTF = ""
	
	          if OLE1.PasteOk = True then
	              OLE1.Paste
	          else
	              msgbox "Can not paste!"
	          End if
	        End Sub
	
	10. Run the application again. Press the ALT+PRINTSCRN key combination and then
	  click on Command1. This time the screen capture is pasted to the OLE
	  control.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbVBp600 kbOLE kbClipboard
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
