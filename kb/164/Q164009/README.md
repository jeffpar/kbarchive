---
layout: page
title: "Q164009: WD97: Paragraph.Border.Linestyle Incorrect After Applying Shadow"
permalink: kb/164/Q164009/
---

## Q164009: WD97: Paragraph.Border.Linestyle Incorrect After Applying Shadow

	Article: Q164009
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you apply both 3-D borders and shadowing to a paragraph, then use the
	LineStyle property to return the type of borders applied for top, bottom, left,
	and right sides of the border for that paragraph, the returned values for bottom
	and right borders are wdLineStyleEngrave3D (or 22). The expected returned values
	would be wdLineStyleEmboss3D (or 21).
	
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
	problem. The macro first applies 3-D borders to a paragraph and then applies a
	paragraph shadow. A loop is set to return the values of the type of border
	applied to each side of the paragraph.
	
	     Sub ParaShadowBorder()
	        Set oBorders = ActiveDocument.Paragraphs(1).Borders
	        oBorders.OutsideLineStyle = wdLineStyleEmboss3D
	        oBorders.Shadow = True
	        For Each Border In oBorders
	           MsgBox Border.LineStyle
	        Next Border
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
	Keywords          : kbualink97 kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
