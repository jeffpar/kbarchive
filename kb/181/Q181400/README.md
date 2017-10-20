---
layout: page
title: "Q181400: WD97: VBA Routines to Determine If Line or Document Is Empty"
permalink: /kb/181/Q181400/
---

## Q181400: WD97: VBA Routines to Determine If Line or Document Is Empty

{% raw %}

	Article: Q181400
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you write a Microsoft Visual Basic for Applications procedure, you may need
	to know whether or not the insertion point is positioned within an empty
	document or a blank document line. The sample procedures in this article
	determine whether the current line or document is empty and then display a
	message regarding the current status.
	
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
	
	The following Visual Basic for Applications Sub procedure uses the predefined
	bookmark, "\Line," in combination with the Empty function to determine whether
	the current line is empty. Using this method will detect text as well as inline
	objects (such as an inline graphic) or floating objects anchored to the current
	line (such as a text box or drawing object).
	
	     Sub IsLineEmpty()
	
	        If ActiveDocument.Bookmarks("\Line").Empty Then
	           MsgBox "The current line is empty."
	        Else
	           MsgBox "The current line is not empty."
	        End If
	
	     End Sub
	
	For more information about predefined bookmarks, click the Office Assistant while
	in the Visual Basic Editor, type "Predefined Bookmarks" (without the quotation
	marks), click Search, and then click to view "Predefined Bookmarks."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	The following Visual Basic for Applications Sub and Function procedures use the
	StoryRanges property to loop through the StoryRanges collection of the active
	document. Using this method will detect text as well as inline objects (such as
	an inline graphic) or floating objects anchored to the current line (such as a
	text box or drawing object).
	
	       Sub YourMacro()
	
	        ' Call the IsDocEmpty function.
	        If IsDocEmpty() Then
	           MsgBox "The document is empty."
	        Else
	           MsgBox "The document contains text, objects or empty lines."
	        End If
	
	     End Sub
	
	     Function IsDocEmpty() As Boolean
	
	        ' Initialize function to True.
	        IsDocEmpty = True
	        For Each astory In ActiveDocument.StoryRanges
	
	           ' Check for text. If the length of the
	           ' current story is greater than one, then
	           ' there is either text or more than one
	           ' empty line.
	           If Len(astory.Text) > 1 Then
	              IsDocEmpty = False
	           End If
	
	           ' Check for Objects.
	           ' Note: If there are no objects within
	           ' the current story range, an error occurs.
	           On Error Resume Next
	           If astory.ShapeRange.Count > 0 Then
	              If Err = 0 Then
	                 IsDocEmpty = False
	              Else
	                 On Error GoTo 0
	              End If
	           End If
	
	           ' If something was found, then
	           ' return to the calling routine with
	           ' a value of False.
	           If IsDocEmpty = False Then Exit Function
	
	        Next
	
	     End Function
	
	For more information about the StoryRanges property, click the Office Assistant
	while in the Visual Basic Editor, type "StoryRanges Property" (without the
	quotation marks) click Search, and then click to view "StoryRanges Property."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon In-Line routine routines
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
