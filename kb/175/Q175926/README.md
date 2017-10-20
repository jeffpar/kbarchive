---
layout: page
title: "Q175926: WD97: How to Select the Current Paragraph Using VBA Code"
permalink: /kb/175/Q175926/
---

## Q175926: WD97: How to Select the Current Paragraph Using VBA Code

{% raw %}

	Article: Q175926
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to select the current paragraph the cursor is in
	using Microsoft Visual Basic for Applications code.
	
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
	
	In Word 97, the WordBasic programming language was replaced with Visual Basic for
	Applications. In WordBasic, you used the following code to select the current
	paragraph:
	
	     EditGoTo "\para"
	
	To select the current paragraph using Visual Basic for Applications code, you can
	use one of the following alternative methods.
	
	Method 1: Using the GoTo Method
	-------------------------------
	
	You can use the GoTo method of the Selection object to select the current
	paragraph, as in the following Visual Basic statement:
	
	     Selection.GoTo What:=wdGoToBookmark, Name:="\para"
	
	Method 2: Using the StartOf and MoveEnd Methods
	-----------------------------------------------
	
	You can use the StartOf and MoveEnd methods of the Selection object to select
	from the beginning to the end of the paragraph, as in the following Visual Basic
	statements:
	
	     Selection.StartOf Unit:=wdParagraphm
	     Selection.MoveEnd Unit:=wdParagraph
	
	Method 3: Using the Select Method
	---------------------------------
	
	If you know the number of the paragraph you want to select, you can use the
	following statement:
	
	     Selection.Paragraphs(n).Range.Select
	
	where n is the number of the paragraph you want to select. For example, the
	following statement selects the third paragraph in the document:
	
	     Selection.Paragraphs(3).Range.Select
	
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
	Keywords          : kbdta kbdtacode word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
