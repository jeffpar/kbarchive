---
layout: page
title: "Q165268: WD97: wdParagraph, ColumnSelectMode Do Not Select Text Column"
permalink: /kb/165/Q165268/
---

## Q165268: WD97: wdParagraph, ColumnSelectMode Do Not Select Text Column

	Article: Q165268
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
	
	In a Visual Basic for Applications macro, you cannot use the wdParagraph
	constant in conjunction with the ColumnSelectMode property to select a vertical
	column of text.
	
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
	
	Use the wdLine constant instead of the wdParagraph constant, as in the following
	example:
	
	     Sub SelectVerticalColumn()
	        With Selection
	           .Collapse
	           .ColumnSelectMode = True
	           ' Count specifies the number of characters to the right
	           ' to select. In this case the number is 3.
	           .MoveRight Unit:=wdCharacter, Count:=3, Extend:=wdExtend
	           ' Count specifies the number of Lines down
	           ' to select. In this case the number is 2.
	           .MoveDown Unit:=wdLine, Count:=2
	        End With
	     End Sub
	
	Note: To cancel ColumnSelectMode, press Cancel or set ColumnSelectMode equal to
	False.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
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
	
	=============================================================================
	
