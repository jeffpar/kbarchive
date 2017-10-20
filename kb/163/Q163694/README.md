---
layout: page
title: "Q163694: PPT: Sample Code to Apply Small Caps Formatting to Selection"
permalink: /kb/163/Q163694/
---

## Q163694: PPT: Sample Code to Apply Small Caps Formatting to Selection

{% raw %}

	Article: Q163694
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:98; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint 98 Macintosh Edition 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Visual Basic for Applications 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a sample Microsoft Visual Basic for Applications macro
	(Sub procedure) that formats the lowercase letters in a selection as small
	capital letters and reduces their size to about eighty percent of their original
	point size. Small capital letters (small caps) formatting does not affect
	uppercase letters, punctuation, or nonalphabetic characters.
	
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
	
	Sample Visual Basic Procedure
	-----------------------------
	
	     Sub SetSmallCaps()
	
	        ' Used to trap errors.
	        On Error Resume Next
	        Err.Clear
	
	        ' Dimension the variables.
	        Dim oTextRange As TextRange
	        Dim oWordRange As TextRange
	        Dim lNewFontSize As Long
	        Dim i As Long
	
	        ' Get reference to the selected text.
	        Set oTextRange = ActiveWindow.Selection.TextRange
	
	        ' See whether error occurred getting text selection.
	        If Err.Number <> 0 Then
	
	           MsgBox "Cannot apply Small Caps to selection. Please select " _
	              & "some text and run the macro again.", vbExclamation, _
	              "Invalid Selection"
	
	           ' Stop the macro.
	           End
	        End If
	
	        ' Loop through the words in the selection.
	        For i = 1 To oTextRange.Paragraphs.Words.count
	
	           ' Get a reference to the first word in the selection.
	           Set oWordRange = oTextRange.Paragraphs.Words(i, 1)
	
	           ' With oWordRange.Paragraphs.Characters(1, 1)
	           With oWordRange.Characters(1, 1)
	
	              ' Set the first letter to be upper case.
	              .ChangeCase ppCaseUpper
	
	              ' Calculate the new font size.
	              lNewFontSize = ((.font.Size) / 1.3)
	
	           End With
	
	           ' Change the remaining characters to the new font size.
	           With oWordRange
	              .Characters(2, (oWordRange.Length)).font.Size = lNewFontSize
	              .Characters(2, (oWordRange.Length)).ChangeCase ppCaseUpper
	           End With
	
	        Next i
	
	     End Sub
	
	REFERENCES
	==========
	
	For more information about creating Visual Basic for Applications macros, click
	the Office Assistant in Microsoft PowerPoint, type "how to create a macro"
	(without the quotation marks) click Search, and then click to view "Create a
	macro in Visual Basic Editor."
	
	For more information about running Visual Basic for Applications macros, click
	the Office Assistant in Microsoft PowerPoint, type "how to run a macro" (without
	the quotation marks), click Search, and then click to view "Run a macro."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: 8.00 ppt8 vba vbe macppt mac_ppt ppt98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
