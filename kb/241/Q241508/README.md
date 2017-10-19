---
layout: page
title: "Q241508: WD97: ParagraphFormat.Shading Shades Cells Black"
permalink: /kb/241/Q241508/
---

## Q241508: WD97: ParagraphFormat.Shading Shades Cells Black

	Article: Q241508
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbmacroexample word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a Visual Basic for Applications macro to shade text contained in a
	table cell, the text may be shaded with black instead of the color shading that
	you specified in your macro code.
	
	For example, if you select the four center cells of a Word table with four rows
	and four columns, and then run the following Visual Basic for Applications macro
	code, the selected cells will be shaded black instead of red:
	
	  With Selection.ParagraphFormat.Shading
	     .ForegroundPatternColorIndex = wdRed
	     .Texture = wdTextureSolid
	  End With
	
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
	
	  Q212536 OFF2000: How to Run Sample Code from Knowledge Base Articles
	
	Use the Paragraphs.Format.Shading function instead of ParagraphFormat.Shading, as
	in the following example:
	
	  Sub Test()
	      Dim pr As Paragraph
	      For Each pr In Selection.Paragraphs
	          With pr.Format.Shading
	              .ForegroundPatternColorIndex = wdRed
	              .Texture = wdTextureSolid
	          End With
	      Next
	  End Sub
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: vba table shading FormatParagraph ForegroundPatternColorIndex
	
	======================================================================
	Keywords          : kbdta kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
