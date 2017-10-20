---
layout: page
title: "Q182748: WD97: Sample Macro to Place a Border on a Single Cell in a Table"
permalink: /kb/182/Q182748/
---

## Q182748: WD97: Sample Macro to Place a Border on a Single Cell in a Table

{% raw %}

	Article: Q182748
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 word97 kbformatkbfaq
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to place a border around a single cell in a table
	using a Microsoft Visual Basic for Applications macro.
	
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
	
	The following sample macro applies a border to the table cell that contains the
	insertion point:
	
	     Sub BorderCell()
	
	        ' Set the Border style and width.
	        With Options
	           ' Set the line style.
	           .DefaultBorderLineStyle = wdLineStyleThinThickLargeGap
	           ' Set the line thickness.
	           .DefaultBorderLineWidth = wdLineWidth150pt
	        End With
	   
	        ' Select and apply border to table cell.
	        With Selection
	           ' Selects only the cell containing the insertion point.
	           .GoTo what:=wdGoToBookmark, Name:="\cell"
	           ' Applies border to cell.
	           .Cells.Borders.Enable = True
	           .Collapse
	        End With
	   
	     End Sub
	
	For more information about DefaultBorderlineStyle property, from the Visual Basic
	Editor, click the Office Assistant, type "defaultborderlinestyle" (without the
	quotation marks), click Search, and then click to view "DefaultBorderlineStyle
	Property."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
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
	Keywords          : kbdta kbdtacode kbmacroexample word8 word97 kbformat kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
