---
layout: page
title: "Q161958: WD97: Run-Time Error '424' Attempting to Ungroup Shape Objects"
permalink: kb/161/Q161958/
---

## Q161958: WD97: Run-Time Error '424' Attempting to Ungroup Shape Objects

	Article: Q161958
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a Visual Basic for Applications macro that attempts to ungroup a
	range of objects, the following error message may appear:
	
	  Run time error '424': Object required
	
	CAUSE
	=====
	
	This error occurs because there are no objects selected to ungroup.
	
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
	
	To work around this problem, add the Select method to the Group and Ungroup
	commands, as in the following sample code:
	
	  Sub UnGroupShapes()
	     Dim sShape1 As Shape
	     Dim sShape2 As Shape
	     ' Create new blank document.
	     Application.Documents.Add
	     ' Create two shapes(Hexagon and Heart).
	     With ActiveDocument.Shapes
	        ' Add Hexagon shape.
	        Set sShape1 = .AddShape(10, 122.4, 79.2, 72#, 72#)
	        ' Add Heart shape.
	        Set sShape2 = .AddShape(21, 230.4, 79.2, 72#, 72#)
	     End With
	     ' Select both shapes.
	     sShape1.Select
	     ' The (0) argument in the following command allows
	     ' selection of the second shape without deselecting
	     ' the first shape.
	     sShape2.Select (0)
	     With Selection.ShapeRange
	        ' Group the shapes.
	        .Group.Select
	        ' UnGroup the shapes and leave them selected.
	        .Ungroup.Select
	     End With
	  End Sub
	
	To have this code work properly, you can have the last two lines resemble the
	following sample (which groups the objects, reselects them, ungroups the
	objects, and then deselects them):
	
	     ' Group the shapes.
	     Selection.ShapeRange.Group.Select
	     ' UnGroup the shapes and leave them deselected.
	     Selection.ShapeRange.Ungroup
	
	Or you can use code similar to the following, as in the "Ungroupshapes" example
	(which groups the objects, selects them, ungroups the objects, and then leaves
	them selected):
	
	     ' Group the shapes.
	     Selection.ShapeRange.Group.Select
	     ' UnGroup the shapes and leave them selected.
	     Selection.ShapeRange.Ungroup.Select
	
	For more information about grouping and ungrouping shapes, from the Visual Basic
	Editor, click the Office Assistant, type "ShapeRange," click Search, and then
	click to view "ShapeRange Collection Object."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
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
	Keywords          : kberrmsg kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
