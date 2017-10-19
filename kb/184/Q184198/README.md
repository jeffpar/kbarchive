---
layout: page
title: "Q184198: PRB: SelHangingIndent Property of RichTextBox Is Not Persistent"
permalink: /kb/184/Q184198/
---

## Q184198: PRB: SelHangingIndent Property of RichTextBox Is Not Persistent

	Article: Q184198
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
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
	
	The SelHangingIndent property can be set to negative values to create format
	paragraphs in a RichTextBox control. The value of the SelHangingIndent property
	is reflected in the textRTF property of RichTextBox. However, when the textRTF
	property is saved in a variable or in a file and then restored, the
	SelHangingIndent property is set to 0 and the regular paragraph format is lost.
	
	CAUSE
	=====
	
	The Microsoft RichTextBox control internally uses the standard RichText DLL,
	Riched32.dll. This DLL does not persist the SelHangingIndent property. This
	behavior can be seen in Wordpad.exe as well, because Wordpad also uses this DLL.
	
	RESOLUTION
	==========
	
	Tabs and spaces can be inserted at the start of the text to create the same
	format.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project. Form1 is created by default.
	
	2. Add a RichTextBox and two CommandButtons to Form1.
	
	3. Paste the following code in the General Declarations section of Form1:
	
	        Dim s As String
	
	        Private Sub Command1_Click()
	           RichTextBox1.SelHangingIndent = -300
	           s = RichTextBox1.TextRTF
	        End Sub
	
	        Private Sub Command2_Click()
	           RichTextBox1.TextRTF = s
	        End Sub
	
	        Private Sub Form_Load()
	           RichTextBox1.SelIndent = 1000
	        End Sub
	
	4. Run the project.
	
	5. Add text to the control so one or more lines word wrap to the next line.
	
	6. Click Command1 to change the SelHangingIndent and to save the textRTF in a
	  variable.
	
	7. Click Commmand2. Note that the hanging indent is no longer active.
	
	Additional query words: save read kbVBp500 kbVBp600 kbctrl kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
