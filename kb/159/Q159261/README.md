---
layout: page
title: "Q159261: WD97: Use Textbox Form Control to WorkAround 255 Character Limit"
permalink: /kb/159/Q159261/
---

## Q159261: WD97: Use Textbox Form Control to WorkAround 255 Character Limit

	Article: Q159261
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbmacroexample word97 word7
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Word FILLIN field prompts you for text that is used as the FILLIN field
	result. The maximum number of characters that can be entered in a FILLIN field
	is 255. In addition, the Microsoft Visual Basic for Applications InputBox
	statement is restricted to this 255 character limitation.
	
	Microsoft Visual Basic for Applications allows you to construct a dialog box
	using the UserForm command. The form can contain text box controls into which
	you can type more than 255 characters. This article describes how to create and
	display the form.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	Creating the user form
	----------------------
	
	Create the form using the following steps:
	
	1. On the Tools menu, point to Macro, and then click Visual Basic Editor.
	
	2. In the Visual Basic project window, click Normal.
	
	  The form will be available to all documents.
	
	3. On the Insert menu, click UserForm.
	
	4. Click the TextBox control on the Toolbox toolbar and then click the form.
	
	  The text box control appears in the default size. Drag a sizing handle to
	  resize the control or drag the control to move it to a new location.
	
	5. Click the CommandButton control on the Toolbox toolbar and then click the
	  form.
	
	  The command button control appears in the default size. Drag a sizing handle
	  to resize the control or drag the control to move it to a new location.
	
	  Repeat this step to add a second CommandButton control.
	
	6. Select the first command button control and then click Code on the View menu.
	
	7. In the Code window, type "Selection.TypeText TextBox1.Text" (without the
	  quotation marks), so that your code looks like this:
	
	         Private Sub CommandButton1_Click ()
	            Selection.TypeText TextBox1.Text
	            'When you click this button on the form, the contents of the text
	            'box is inserted into the active document at the location of the
	            'insertion point.
	         End sub
	
	8. On the View menu, click Object to return to the form.
	
	9. Select the second command button control and then click Code on the View
	  menu.
	
	10. In the Code window, type "End" (without the quotation marks), so that your
	  code looks like this:
	
	         Private Sub CommandButton2_Click ()
	            End
	            'When you click this button after you click the first command
	            'button, the form is closed. If you click this button instead of
	            'the first command button, the form is canceled.
	         End sub
	
	11. On the File menu, click Save Normal.
	
	Displaying the form
	-------------------
	
	To display the form, switch to Word, and then do the following:
	
	1. On the Tools menu, point to Macro, and then click Macros.
	
	2. In the Macro Name box, type "FillInForm" (without the quotation marks) and
	  then click Create.
	
	3. In the Code window, type "UserForm1.Show" (without the quotation marks), so
	  that your code looks like this:
	
	        Sub FillInForm()
	           UserForm1.Show
	        End Sub
	
	4. Save and close the macro.
	
	5. Close the Visual Basic Editor.
	
	6. You can now run the macro from Word to display the form.
	
	If you want default text to appear in the text box, create the following
	initialize event for the UserForm object. To do this, use the following steps:
	
	1. Double-click the form.
	
	2. From the Object drop-down list, select UserForm.
	
	3. From the Procedure drop-down list, select Initialize.
	
	4. In the Code window, type the following code
	
	        Private Sub UserForm_Initialize()
	           TextBox1.Text = "<default text>"
	        End Sub
	
	  where <default text> is the text you want to appear in the text box when
	  the form appears.
	
	For information about how to do this in earlier versions of Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q93706 Word: FILLIN Field Is Limited to 255 Characters
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbusage kbmacroexample word97 word7 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
