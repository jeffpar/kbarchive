---
layout: page
title: "Q115166: PC Forms: Spell Checking Text in an E-Form"
permalink: /kb/115/Q115166/
---

## Q115166: PC Forms: Spell Checking Text in an E-Form

{% raw %}

	Article: Q115166
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2,97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create a message using a Microsoft Electronic Forms Designer version
	1.0 E-form, you cannot spell check the message using the Spelling feature of
	Microsoft Mail for Windows. Also, the Check Spelling Of Messages Before Sending
	option does not check an E-form message before it is sent. You can, however,
	spell check an E-form message using OLE and Microsoft Word 6.0 for Window's
	spelling checker.
	
	MORE INFORMATION
	================
	
	The following example shows how to use Word's built-in spelling checker to check
	the spelling of the contents of a text box in an E-form.
	
	The example takes the contents of a Microsoft Visual Basic text box, inserts the
	text into a Word document, and then spell checks the text. After the spell check
	is complete, you insert the spell checked text from the Word document back into
	the Visual Basic text box.
	
	Step-by-Step Example
	--------------------
	
	1. Open a new E-form project in Visual Basic.
	
	2. Add a text box (Text1) and a command button (Command1) to the Compose form.
	
	3. Set the multiline property of the text box to True.
	
	4. Add the following code to the Form_Load event:
	
	     Sub Form_Load()
	        Command1.Caption = "Press to Spell Check"
	        Text1.Text = "The Seattle SuperSonics ar goig all the wa this yeer!"
	     End Sub
	
	5. Place the following code in the Command1 Click event procedure of the Compose
	  form:
	
	     Sub Command1_Click ()
	        Dim oWDBasic As Object
	        Dim sTmpString As String
	        Set oWDBasic = CreateObject("Word.Basic")
	        oWDBasic.FileNew
	        oWDBasic.Insert Text1.Text
	        On Error Resume Next
	        oWDBasic.ToolsSpelling
	        oWDBasic.EditSelectAll
	        oWDBasic.SetDocumentVar "MyVar", oWDBasic.Selection
	        sTmpString = oWDBasic.GetDocumentVar("MyVar")
	        Text1.Text = Left(sTmpString, Len(sTmpString) - 1
	        MsgBox "Spell Check is complete"
	     End Sub
	
	6. Save the project. Follow the steps listed on pages 25-28 of the Electronic
	  Forms Designer "Developer's Guide" to set the message type, build the
	  project, and update the MSMAIL.INI file.
	
	7. Use the E-Form Browser to open the E-form.
	
	8. Click the Command1 button and perform the following sequence of corrections:
	
	  SuperSonics (Ignore)
	  ar (Change to are)
	  goig (Change to going)
	  wa (Change to way)
	  yeer (Change to year)
	
	After the last correction, a Message box appears, stating that the spell check is
	complete. The results inserted back into the Text1 text box should read as
	follows:
	
	  The Seattle SuperSonics are going all the way this year!
	
	You can modify this example to spell check any of the text boxes in an E-form
	project.
	
	Additional query words: 1.00 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2,97
	
	=============================================================================
	

{% endraw %}
