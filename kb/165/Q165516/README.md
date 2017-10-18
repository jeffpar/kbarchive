---
layout: page
title: "Q165516: WD97: ArtWidth Sets Values in Points But Returns in Twips"
permalink: kb/165/Q165516/
---

## Q165516: WD97: ArtWidth Sets Values in Points But Returns in Twips

	Article: Q165516
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbmacro kbProgramming word8 kbwordvba word97 kbhelp
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a Visual Basic for Applications macro to return the width of an
	applied page border using the ArtWidth property, the value returned is in Twips,
	not Points as specified in Help.
	
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
	
	The following sample Visual Basic for Applications macro sets a page border with
	an ArtWidth of 6 points. It then displays the return value of the ArtWidth
	property in twips. To have the ArtWidth return the value in points instead of
	twips, divide the ArtWidth return value by 20. (One Point is approximately 1/20
	of a twip.)
	
	     Sub SetPageBorders()
	        Dim aBorder As Border
	        For Each aBorder In Selection.Sections(1).Borders
	           aBorder.ArtStyle = wdArtBasicBlackDots
	           aBorder.ArtWidth = 6
	        Next aBorder
	        MsgBox ActiveDocument.Sections(1).Borders(1).ArtWidth / 20
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	  Q76388 Q76388 TITLE : Relationship Between Inches, Picas, Points, Pitch, and
	  Twips
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming word8 kbwordvba word97 kbhelp 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
