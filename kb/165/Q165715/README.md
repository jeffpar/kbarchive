---
layout: page
title: "Q165715: WD97: Applying Single Border to Selected Text Sets All Borders"
permalink: /kb/165/Q165715/
---

## Q165715: WD97: Applying Single Border to Selected Text Sets All Borders

	Article: Q165715
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbmacroexample kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to apply a single side border to a single character, word, or
	selection of text, either by choosing Borders and Shading (on the Format menu)
	or by using the Visual Basic for Applications Borders property, all borders are
	applied (top, bottom, left, and right).
	
	CAUSE
	=====
	
	By design, all borders are applied (top, bottom, left, and right) to a single
	character, word, or selection of text.
	
	For example, the following sample Visual Basic for Applications macro places a
	border around the second word in the document, although the command explicitly
	states to format the word with a top border only.
	
	     Sub BorderWord()
	        Documents.Add
	        Selection.InsertBefore "One two three"
	        ActiveDocument.Words(2).Borders(wdBorderTop).LineStyle = 7
	     End Sub
	
	The Word 97 Help Topic "Add a Border" incorrectly states that you can add a
	border to any or all sides of selected text.
	
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
	
	REFERENCES
	==========
	
	For additional information about getting help with Visual Basic for
	Applications, please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbmacroexample kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
