---
layout: page
title: "Q216175: FIX: CTRL+C Does Not Copy From Locked Textbox"
permalink: /kb/216/Q216175/
---

## Q216175: FIX: CTRL+C Does Not Copy From Locked Textbox

{% raw %}

	Article: Q216175
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbClipboard kbVBp kbVBp600bug kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a textbox on a form has its Locked property set to True, and the CTRL+C
	shortcut is used to copy text in the textbox, the selected text will not be
	copied to the clipboard.
	
	RESOLUTION
	==========
	
	To work around this behavior, you must use the textbox's KeyDown event to check
	for a CTRL+C key combination. If CTRL+C does occur, then you must
	programatically put the selected text on the clipboard, as follows:
	
	     If KeyCode = 67 And Shift = vbCtrlMask Then
	         Clipboard.Clear
	         Clipboard.SetText Text1.SelText
	     End If
	
	See the MORE INFORMATION section below for an example of the workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic standard EXE project. Form1 is created by default.
	
	2. Add a textbox to the default form.
	
	3. Add the following code to the default form's Form_Load event:
	
	  Private Sub Form_Load()
	      Text1.Locked = True
	      Text1.Text = "This is a test."
	  End Sub
	
	4. Run the program. While the program is running, highlight the text in the
	  textbox and hit CTRL+C. Then, try to paste test into Notepad or another
	  editor. You will note that nothing is pasted or some text from an earlier
	  copy and paste operation is pasted from the clipboard.
	
	5. To work around the problem, add the following code to the textbox's KeyDown
	  event:
	
	  Private Sub Text1_KeyDown(KeyCode As Integer, Shift As Integer)
	     If KeyCode = 67 And Shift = vbCtrlMask Then
	         Clipboard.Clear
	         Clipboard.SetText Text1.SelText
	     End If
	  End Sub
	
	6. Run the program and try the copy-paste operation again. This time it will
	  work properly.
	
	NOTE: Using the shortcut menu available with the right-mouse button will work
	properly to copy text from a locked textbox.
	
	REFERENCES
	==========
	
	Online Help for Microsoft Visual Basic, version 6.0
	
	Additional query words: keyboard
	
	======================================================================
	Keywords          : kbservicepack kbClipboard kbVBp kbVBp600bug kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
