---
layout: page
title: "Q164624: WD97: Inserting OLE Object in Header Opens OLE Application"
permalink: kb/164/Q164624/
---

## Q164624: WD97: Inserting OLE Object in Header Opens OLE Application

	Article: Q164624
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbole kbwordvba
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Visual Basic for Applications to insert an OLE object, such as a
	Microsoft Excel Worksheet object, into the header or footer of a document, the
	object opens the application for editing instead of providing in-place editing
	within Word for Windows.
	
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
	
	The following example Visual Basic for Applications macro replicates this
	behavior:
	
	     Sub Main()
	       ' Set up object variables.
	       Dim oDoc1 As Object
	       Dim oRange1 As Object
	       Dim oInlineShape As Object
	       Set oDoc1 = Documents.Add
	       Set oRange1 = oDoc1.Content
	       Set oRange2 = oDoc1.Sections(1).Headers(1).Range
	       ' Insert the OLE object
	       Set oInlineShape1 = oDoc1.InlineShapes.AddOLEObject(Range:=oRange2, _
	       ClassType:="Excel.Sheet.8", LinkToFile:=False, DisplayAsIcon:=False)
	     End Sub
	
	WORKAROUND
	==========
	
	To provide in-place editing, the OLE object needs to know where it will be
	inserted on the screen. When this position is unknown, the OLE server, in this
	case, Microsoft Excel, operates in Open Mode.
	
	To ensure that the OLE server is activated "in-place," view the header before you
	insert the object. The following example Visual Basic for Applications macro
	includes the commands for viewing the header prior to inserting the OLE object:
	
	     Sub Main()
	        ' Set up object variables.
	        Dim oDoc1 As Object
	        Dim oRange1 As Object
	        Dim oInlineShape As Object
	        Set oDoc1 = Documents.Add
	        Set oRange1 = oDoc1.Content
	        Set oRange2 = oDoc1.Sections(1).Headers(1).Range
	        ' Must be in page layout to view header.
	        If ActiveWindow.View.SplitSpecial <> wdPaneNone Then
	           ActiveWindow.Panes(2).Close
	        End If
	        If ActiveWindow.ActivePane.View.Type = _
	            wdNormalView Or ActiveWindow. _
	            ActivePane.View.Type = wdOutlineView Or _
	            ActiveWindow.ActivePane.View.Type = wdMasterView Then
	            ActiveWindow.ActivePane.View.Type = wdPageView
	         End If
	         ' View the header.
	        ActiveWindow.ActivePane.View.SeekView = wdSeekCurrentPageHeader
	        ' Insert the OLE object
	        Set oInlineShape1 = _
	        oDoc1.InlineShapes.AddOLEObject(Range:=oRange2, _
	        ClassType:="Excel.Sheet.8", LinkToFile:=False, DisplayAsIcon:=False)
	     End Sub
	
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
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbinterop kbole kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
