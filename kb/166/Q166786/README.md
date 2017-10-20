---
layout: page
title: "Q166786: WD97: Selection.Cells.Shading Applies Shading to Selected Text"
permalink: /kb/166/Q166786/
---

## Q166786: WD97: Selection.Cells.Shading Applies Shading to Selected Text

{% raw %}

	Article: Q166786
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbdta word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have selected text within a table cell and you run the following sample
	Visual Basic for Applications code,
	
	     With Selection.Cells.Shading
	        .Texture = wdTextureSolid
	        .ForegroundPatternColorIndex = wdRed
	        .BackgroundPatternColorIndex = wdAuto
	     End With
	
	the shading is applied to the selected text only instead of the entire table
	cell.
	
	WORKAROUND
	==========
	
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
	
	To work around this problem, specify a table cell by index. For example, the
	following Visual Basic for Applications code specifies the cell containing the
	insertion point:
	
	     If Selection.Information(wdWithInTable) = True Then
	        Selection.Cells(1).Shading.BackgroundPatternColorIndex = wdRed
	     Else
	        MsgBox "The insertion point is not in a table."
	     End If
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	REFERENCES
	==========
	
	For additional information about getting help with Visual Basic for
	Applications, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbcode kbProgramming kbdta word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
