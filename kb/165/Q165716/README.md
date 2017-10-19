---
layout: page
title: "Q165716: WD97: Para Mark Not Included In Selection.MoveRight(wdSentence)"
permalink: /kb/165/Q165716/
---

## Q165716: WD97: Para Mark Not Included In Selection.MoveRight(wdSentence)

	Article: Q165716
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbProgramming kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Visual Basic for Applications Selection Property to return text
	from a sentence, the paragraph mark is not included. By contrast, when you use
	the Sentences collection to return text of a sentence, the paragraph mark is
	included.
	
	CAUSE
	=====
	
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
	
	The following macro demonstrates this behavior. The first message box will
	display 0 (zero) indicating that no paragraph mark is contained within the
	selection. The second message box will display 12 indicating that a paragraph
	mark is found within the selection whose position within the selection is the
	twelfth character.
	
	     Sub SentencesCollection()
	        ActiveDocument.Range.Text = "Sentence 1." & vbCr & "Sentence 2."
	        Selection.MoveRight wdSentence, 1, wdExtend
	        MsgBox InStr(1, Selection, vbCr)
	        MsgBox InStr(1, Selection.Sentences(1), vbCr)
	     End Sub
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
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
	Keywords          : kbProgramming kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
