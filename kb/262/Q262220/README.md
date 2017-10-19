---
layout: page
title: "Q262220: WD97: How to Use AutoCorrect on an Existing Document"
permalink: /kb/262/Q262220/
---

## Q262220: WD97: How to Use AutoCorrect on an Existing Document

	Article: Q262220
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 word97 KbVBA
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The AutoCorrect feature works dynamically when you type a space after a word
	that appears in the AutoCorrect list. This feature operates while you create the
	document, but Word does not automatically scan a previously-created document and
	make AutoCorrect changes.
	
	This article provides a sample macro that compares each word in a Word document
	to words in the AutoCorrect list and then replaces the matched words with the
	text string specified in the AutoCorrect list.
	
	NOTE: In some cases, this macro may take a long time to run. To stop the macro
	before it is finished, press CTRL+BREAK and then click End when you receive the
	following Microsoft Visual Basic message:
	
	  Code execution has been interrupted
	
	When you save the document, Word saves all changes you made up until you pressed
	CTRL+BREAK.
	
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
	
	For more information about how to use the sample code in this article, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	Place the following code in the Declarations section of your code page:
	
	  Option Explicit
	
	  Dim anEntry
	  Dim myMatch
	  Dim myConfirm
	
	Create the following macro to search your active document, identify words that
	appear in both the document and the AutoCorrect list, prompt you to replace the
	word, and then insert the corresponding AutoCorrect text.
	
	  Sub ReplaceAutoCorrectText()
	
	  Application.ScreenUpdating = True
	  Selection.HomeKey unit:=wdStory, Extend:=wdMove
	     
	  With ActiveDocument.Content.Find
	     .ClearFormatting
	     
	     Do While .Execute(FindText:=" ", Forward:=True, Format:=True) = True
	     
	        Selection.MoveRight unit:=wdWord, Count:=1, Extend:=wdExtend
	          
	        For Each anEntry In AutoCorrect.Entries
	           If anEntry.Name = Selection Then
	              Selection.Words(1).Select
	              myMatch = True
	              myConfirm = MsgBox("Are you sure you want to replace " _
	                 & Chr$(34) & anEntry.Name & Chr$(34) & " with " & Chr$(34) _
	                 & anEntry.Value & Chr$(34) & "?", vbYesNo)
	                    If myConfirm = vbYes Then
	                       Selection.TypeText (anEntry.Value)
	                       Exit For
	                    End If
	           End If
	        Next anEntry
	
	        Selection.MoveLeft unit:=wdCharacter, Count:=1, Extend:=wdExtend
	          
	        For Each anEntry In AutoCorrect.Entries
	           If anEntry.Name = Selection Then
	              Selection.Words(1).Select
	              myMatch = True
	              myConfirm = MsgBox("Are you sure you want to replace " _
	                 & Chr$(34) & anEntry.Name & Chr$(34) & " with " & Chr$(34) _
	                 & anEntry.Value & Chr$(34) & "?", vbYesNo)
	                    If myConfirm = vbYes Then
	                       Selection.TypeText (anEntry.Value) & " "
	                       Exit For
	                    End If
	           End If
	        Next anEntry
	          
	        Selection.MoveRight unit:=wdCharacter, Count:=1, Extend:=wdMove
	         
	     Loop
	  End With
	  End Sub
	
	REFERENCES
	==========
	
	For additional information about the AutoCorrect feature in Word, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q159941 WD97: General Information About "Auto" Features in Word 97
	
	  Q186237 WD97: How to Move AutoCorrect Entries Between Computers
	
	  Q176751 WD97: How to Print a List of AutoCorrect Entries
	
	  Q180165 WD97: AutoCorrect Feature Limitations
	
	For additional information about programming resources for Microsoft Word, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q163425 WD97: Macro Programming Resources
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: vba
	
	======================================================================
	Keywords          : kbdta kbdtacode word8 word97 KbVBA 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
