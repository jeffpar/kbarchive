---
layout: page
title: "Q179112: WD97: Distribute Relative to Page Ignores Landscape Page Setting"
permalink: kb/179/Q179112/
---

## Q179112: WD97: Distribute Relative to Page Ignores Landscape Page Setting

	Article: Q179112
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample kbwordvba word97 kblayout
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to distribute drawing objects horizontally or vertically,
	relative to page, and the page orientation is set to landscape, the drawing
	objects are distributed calculated on a portrait orientation page width and
	height instead of the landscape orientation page width and height.
	
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
	
	The following Visual Basic for Applications macro provides a workaround for this
	problem. Run this macro to evenly distribute selected drawing objects
	horizontally between margins.
	
	After you create the macro, you can assign the macro to a toolbar button or menu
	item.
	
	     Sub DistributeHoriz()
	        Dim iTxtArea As Integer
	        Dim iCenters As Integer
	        Dim iObjLeft As Integer
	        Dim iNumObj As Integer
	        ' Get number of selected objects.
	        iNumObj = Selection.ShapeRange.Count
	        ' If there are no objects selected,
	        ' exit this routine.
	        If iNumObj = 0 Then Exit Sub
	        ' Get area distance between margins.
	        With ActiveDocument.PageSetup
	           iTxtArea = (.PageWidth - (.LeftMargin + .RightMargin))
	        End With
	        ' Divide evenly the Text Area between margins
	        ' by the number of selected objects. Then
	        ' divide by two to get divisional centers.
	        iDivisionCenters = (iTxtArea / iNumObj) / 2
	        ' Loop number of selected objects to distribute horizontally.
	        For i = 1 To iNumObj
	           With Selection.ShapeRange(i)
	              ' Set each selected object's relative horizontal position
	              ' to be relative to margin.
	              .RelativeHorizontalPosition =wdRelativeHorizontalPositionMargin
	              ' Calculate object placement.
	              iObjLeft = ((iTxtArea / iNumObj) * i) - iDivisionCenters
	              .Left = iObjLeft - (.Width / 2)
	           End With
	        Next
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	You can align two or more drawing objects relative to each other by their left,
	right, top, or bottom edges or by their centers (vertically) or middles
	(horizontally).
	
	To align one or more drawing objects relative to each other, follow these steps:
	
	1. Select the drawing objects you want to align.
	
	2. Click Draw on the Drawing toolbar.
	
	3. Point to Align Or Distribute and then click the alignment you want.
	
	By default, drawing objects align in relation to each other.
	
	To align one or more drawing objects relative to the entire page, follow these
	steps:
	
	1. Select the drawing objects, click Draw, point to Align Or Distribute, and
	  click Relative To Page.
	
	2. Click Draw again, point to Align Or Distribute, and then click the alignment
	  you want.
	
	You can also use the Align Or Distribute command to arrange or distribute drawing
	objects equal distances from each other vertically, horizontally, or in relation
	to the entire page.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample kbwordvba word97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
