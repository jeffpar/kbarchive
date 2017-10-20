---
layout: page
title: "Q160059: WD97: Macros to Move to Beginning, End of Paragraph"
permalink: /kb/160/Q160059/
---

## Q160059: WD97: Macros to Move to Beginning, End of Paragraph

{% raw %}

	Article: Q160059
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article provides several sample macros using Microsoft Visual Basic for
	Applications. The first macro moves the insertion point to the beginning of the
	current paragraph. The second macro moves the insertion point to the end of the
	current paragraph. The third macro selects the current paragraph.
	
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
	
	Macro to Move Insertion Point to the Beginning of a Paragraph
	-------------------------------------------------------------
	
	NOTE: If the insertion point is already at the beginning of the paragraph, it is
	not moved.
	
	     Sub BeginningParagraph()
	        ' The variable "char" will contain
	        ' the number of characters moved.
	        Dim char As Long
	        char = Selection.StartOf(Unit:=wdParagraph, Extend:=wdMove)
	     End Sub
	
	Macro to Move Insertion Point to the End of a Paragraph
	-------------------------------------------------------
	
	NOTE: If the insertion point is already at the end of the paragraph, it is not
	moved.
	
	     Sub EndParagraph()
	        ' The variable "char" will contain
	        ' the number of characters moved.
	        Dim char As Long
	        char = Selection.EndOf(Unit:=wdParagraph, Extend:=wdMove)
	        Selection.MoveLeft Unit:=wdCharacter, Count:=1
	     End Sub
	
	Macro to Select the Current Paragraph
	-------------------------------------
	
	The following Visual Basic macro selects the current paragraph.
	
	     Sub SelectCurrentParagraph()
	         Selection.Paragraphs(1).Range.Select
	     End Sub
	
	For information about how to do this in earlier versions of Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q89376 Macros to Move to Beginning and End of Paragraph
	
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
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
