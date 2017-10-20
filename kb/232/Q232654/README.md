---
layout: page
title: "Q232654: BUG:CommonDialog FilterIndex Always Returns Default Filter Index"
permalink: /kb/232/Q232654/
---

## Q232654: BUG:CommonDialog FilterIndex Always Returns Default Filter Index

{% raw %}

	Article: Q232654
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0,2.11,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual Basic, version 3.0, on platform(s):
	   - Microsoft Windows CE versions 2.0, 2.11 for the Handheld PC 
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FilterIndex property of the CommonDialog control that ships with the
	Microsoft Windows CE Toolkit for Visual Basic 6.0 (VBCE6) will always return the
	index for the first defined filter despite being changed by the user at run
	time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following code will behave differently between VBCE and Visual Basic 6.0.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE HPC Project in Visual Basic.
	
	2. Select Components from the Project menu and reference the Microsoft CE Common
	  Dialog Control 6.0.
	
	3. Add a Common dialog and a Command Button to Form1.
	
	4. Paste the following code into Form1:
	
	  Private Sub Command1_Click()
	      CommonDialog1.Filter = "Text (*.txt)|*.txt|Pictures (*.bmp)|*.bmp"
	      CommonDialog1.FilterIndex = 1
	      CommonDialog1.ShowOpen
	      
	      MsgBox "FilterIndex: " & CommonDialog1.FilterIndex
	  End Sub
	
	5. Run the project and click the Command Button.
	
	6. Select a text file to open and notice that the message box will display
	  "FilterIndex: 1."
	
	7. Click the Command Button again and select a bitmap file to open.
	
	Notice that the message box will again display "FilterIndex: 1," when it should
	display "FilterIndex: 2." This is inconsistent with how the Visual Basic 6.0
	CommonDialog control works where the FilterIndex will reflect the user's
	selection.
	
	REFERENCES
	==========
	
	Visual Basic 6.0 Online Help
	Windows CE Toolkit for Visual Basic 6.0 Online Help
	
	Additional query words: vbce vbce6 wince
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch
	Version           : :1.0,2.0,2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
