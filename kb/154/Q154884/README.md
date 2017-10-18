---
layout: page
title: "Q154884: HOWTO: Find and Highlight Text in the RichTextBox Control"
permalink: kb/154/Q154884/
---

## Q154884: HOWTO: Find and Highlight Text in the RichTextBox Control

	Article: Q154884
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In many applications there is a function to search and highlight keywords in a
	text window. The RichTextBox control in Visual Basic can be made to provide this
	functionality, as shown in the sample code below.
	
	MORE INFORMATION
	================
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a Command button and a RichTextBox on Form1. Set the Text property of
	  the RichTextBox to "This is an example of finding text in a rich text box."
	
	3. Add the following code to the General Declarations section of Form1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	          HighlightWords RichTextBox1, "text", vbRed
	        End Sub
	
	        Private Function HighlightWords(rtb As RichTextBox, _
	                                    sFindString As String, _
	                                    lColor As Long) _
	                                    As Integer
	
	          Dim lFoundPos As Long           'Position of first character
	                                          'of match
	          Dim lFindLength As Long         'Length of string to find
	          Dim lOriginalSelStart As Long
	          Dim lOriginalSelLength As Long
	          Dim iMatchCount As Integer      'Number of matches
	
	          'Save the insertion points current location and length
	          lOriginalSelStart = rtb.SelStart
	          lOriginalSelLength = rtb.SelLength
	
	          'Cache the length of the string to find
	          lFindLength = Len(sFindString)
	
	          'Attempt to find the first match
	          lFoundPos = rtb.Find(sFindString, 0, , rtfNoHighlight)
	          While lFoundPos > 0
	            iMatchCount = iMatchCount + 1
	
	            rtb.SelStart = lFoundPos
	            'The SelLength property is set to 0 as
	            'soon as you change SelStart
	            rtb.SelLength = lFindLength
	            rtb.SelColor = lColor
	
	            'Attempt to find the next match
	            lFoundPos = rtb.Find(sFindString, _
	              lFoundPos + lFindLength, , rtfNoHighlight)
	          Wend
	
	          'Restore the insertion point to its original
	          'location and length
	          rtb.SelStart = lOriginalSelStart
	          rtb.SelLength = lOriginalSelLength
	
	          'Return the number of matches
	          HighlightWords = iMatchCount
	
	        End Function
	
	4. Choose Start from the Run menu, or press the F5 key to start the project.
	  Click the Command button and you should see that both occurrences of the word
	  "text" are now shown in red.
	
	REFERENCES
	==========
	
	The Visual Basic Online Help and the Professional Features Manual in the Custom
	Control Section, p.329-362.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbControl kbintluk
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
