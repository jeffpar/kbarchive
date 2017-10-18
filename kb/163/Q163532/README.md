---
layout: page
title: "Q163532: PPT: For Each Loop Doesn't Find All Shapes on a Slide"
permalink: kb/163/Q163532/
---

## Q163532: PPT: For Each Loop Doesn't Find All Shapes on a Slide

	Article: Q163532
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:98; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint 98 Macintosh Edition 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Visual Basic for Applications 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a For Each...Next statement to loop through and remove all shapes
	on a specified slide, some shapes are not deleted. For example, the following
	code does not delete all the shapes on a slide.
	
	     For Each shapeObject In ActivePresentation.Slides(1).Shapes
	   
	        shapeObject.Delete
	   
	     Next shapeObject
	
	CAUSE
	=====
	
	When you use a For Each...Next statement in a Microsoft Visual Basic for
	Applications procedure, the procedure keeps track of each shape that it finds.
	When it finds the first shape, it knows that the next shape is the second shape
	on the slide. However, when it finds the first shape and then deletes it, the
	next shape becomes the first shape on the slide. Consequently, each subsequent
	shape on the slide is assigned a new position.
	
	RESOLUTION
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
	
	As the following sample Visual Basic procedure demonstrates, you can replace the
	For Each...Next statement with a Do...Loop statement (including the While
	keyword) to remove all the shapes on a slide.
	
	     Sub DeleteAllShapes()
	
	        ' Delete every shape on slide 1.
	        With ActivePresentation.Slides(1)
	           While (.Shapes.Count > 0)
	              .Shapes(1).Delete
	           Wend
	        End With
	
	     End Sub
	
	MORE INFORMATION
	================
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: 8.00 ppt8 vba vbe macppt mac_ppt ppt98 powerpt
	
	======================================================================
	Keywords          : kbcode kbmacro kbProgramming kbdta kbdtacode KbVBA _IK11573 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
