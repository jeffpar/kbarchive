---
layout: page
title: "Q165976: WD97: DefaultBorderColorIndex Does Not Apply Color First Time"
permalink: kb/165/Q165976/
---

## Q165976: WD97: DefaultBorderColorIndex Does Not Apply Color First Time

	Article: Q165976
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have a Visual Basic for Applications macro that applies the default color
	for borders and shading, and it then applies a border, the new default color may
	not be applied to the border.
	
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
	
	The following example Visual Basic for Applications macro demonstrates this
	problem:
	
	     Sub BorderParagraph()
	        Documents.Add
	        With Options
	           .DefaultBorderColorIndex = wdRed
	           .DefaultBorderLineStyle = wdLineStyleDouble
	        End With
	        ActiveDocument.Paragraphs(1).Borders.Enable = True
	     End Sub
	
	WORKAROUND
	==========
	
	The following example Visual Basic for Applications macro code can be used as a
	workaround to set the specified border color and to apply the border to the
	specified paragraph:
	
	     Sub BorderParagraph()
	        With Selection.Paragraphs.Borders
	           .Enable = True
	           .OutsideColorIndex = wdRed
	           .OutsideLineStyle = wdLineStyleDouble
	        End With
	     End Sub
	
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
	Keywords          : kbusage kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
