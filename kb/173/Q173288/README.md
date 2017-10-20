---
layout: page
title: "Q173288: PPT: Sample Code to Update Links in a Graph Datasheet"
permalink: /kb/173/Q173288/
---

## Q173288: PPT: Sample Code to Update Links in a Graph Datasheet

{% raw %}

	Article: Q173288
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 97,98
	Operating System(s): 
	Keyword(s): kbcode kbdta kbdtacode kbgraph KbVBA
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint 98 Macintosh Edition 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Graph 97 for Windows 
	- Microsoft Visual Basic for Applications 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article provides a sample Microsoft Visual Basic for Applications macro
	(Sub procedure) that updates the links inside a Microsoft Graph object on a
	Microsoft PowerPoint slide.
	
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
	
	NOTE: The following macro examples only work from within the PowerPoint
	application. Visual Basic for Applications macros are not supported by the
	Microsoft PowerPoint Viewer. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q230746 PPT: Viewer: Presentation Macros Don't Run Within the Viewer
	
	Before you can run the sample Visual Basic macro, you must add a reference to the
	Graph 8.0 object model. To add the reference, follow these steps:
	
	1. On the Tools menu, point to Macros, and then click Visual Basic Editor.
	
	2. On the Tools menu, click References.
	
	3. In the References - VBAProject dialog box, click to select the Microsoft
	  Graph 8.0 Object Library check box.
	
	4. Click OK.
	
	  The project now contains a reference to the Graph 8.0 object model.
	
	Sample Visual Basic Procedure
	-----------------------------
	
	  Sub UpdateAllGraphs()
	
	     Dim oShape As Shape
	     Dim oSlide As Slide
	     Dim oGraph As Object
	     '
	     ' Loop through each slide in the presentation.
	     '
	     For Each oSlide In ActivePresentation.Slides
	     '
	     ' Loop through all the shapes on the current slide.
	     '
	        For Each oShape In oSlide.Shapes
	     '
	     ' Check whether the shape is an OLE object.
	     '
	           If oShape.Type = msoEmbeddedOLEObject Then
	     '
	     ' Check whether the OLE object is a Graph 8 object.
	     '
	              If oShape.OLEFormat.ProgID = "MSGraph.Chart.8" Then
	     '
	     ' Found a graph; obtain object reference, and
	     ' then update.
	     '
	                 Set oGraph = oShape.OLEFormat.Object
	                 oGraph.Application.Update
	     '
	     ' Now, quit out of the MSGraph program. This frees 
	     ' memory, and prevents any problems. Also, set oGraph equal
	     ' to Nothing to release the object.
	     '
	                 oGraph.Application.Quit
	                 Set oGraph = Nothing
	              End If
	           End If
	        Next oShape
	     Next oSlide
	
	  End Sub
	
	REFERENCES
	==========
	
	For more information about how to edit a macro, click the Office Assistant while
	in the Visual Basic Editor, type "edit a macro" (without the quotation marks),
	click Search, and then click to view "Edit a macro."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For more information about how to use the sample code in this article, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q163188 PPT: Sample VB Code to Create a Graph on a Slide
	
	  Q171383 PPT97: Graph8 Process Remains in Memory After Macro Ends
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: macro code vbe graph97 8.0 graph vba ppt ppt97 graph8 offvba kbcode kbmacro macppt mac_ppt ppt98 98 powerpt
	
	======================================================================
	Keywords          : kbcode kbdta kbdtacode kbgraph KbVBA 
	Technology        : kbHWMAC kbOSMAC kbWordSearch kbAccessSearch kbPowerPtSearch kbZNotKeyword6 _IKkbZNotKeyword4 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbGraphSearch kbZNotKeyword3 kbGraph97
	Version           : :97,98
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
