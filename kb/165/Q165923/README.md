---
layout: page
title: "Q165923: WD97: Creating Hyperlink Deletes Object Reference"
permalink: /kb/165/Q165923/
---

## Q165923: WD97: Creating Hyperlink Deletes Object Reference

	Article: Q165923
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbProgramming kbusage kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When your Visual Basic for Applications macro creates an object variable that is
	set to reference a picture object, and if your macro later anchors a hyperlink
	to the picture object, the object reference is deleted and the following error
	message appears:
	
	  Run-time error '5825': Object has been deleted
	
	For example, the following Visual Basic for Applications macro adds a hyperlink
	to an already linked picture. The hyperlink is "anchored" to the picture object
	referenced by the InLine Picture object variable oILPic. Once the hyperlink is
	added, the object variable reference oILPic is deleted.
	
	     Sub DoInLineShapeHyperlink()
	        Dim oDoc As Document
	        Dim oILPic As InlineShape
	        Dim oHLink As Hyperlink
	        Dim sPicFile As String
	        Dim sLinkFile as String
	        sPicFile = "<Your Graphic File Path and Name>"
	        sLinkFile = "<Your HyperLink File Path and Name>"
	        ' Create new document.
	        Set oDoc = Documents.Add
	        ' Insert a picture.
	        Set oILPic = oDoc.InlineShapes.AddPicture _
	           (Range:=oDoc.Content, FileName:=sPicFile, LinkToFile:=True)
	        ' Add a hyperlink for the picture.
	        oDoc.Hyperlinks.Add Anchor:=oILPic.Range, Address:=sLinkFile
	        ' The error occurs here because oILPic is no longer valid.
	        Set oHLink = oILPic.Hyperlink
	     End Sub
	
	CAUSE
	=====
	
	The "Object has been deleted" error message appears because the macro has
	attempted to access an object that has been deleted. The object may have been
	deleted deliberately, such as with the Delete method, or it may have been
	deleted as a side effect of another operation, such as when a frame is added
	around an inline shape, which deletes the original inline shape and creates a
	copy of it in the frame.
	
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
	
	To work around this problem, reference the object directly, as in the following
	example:
	
	     Private Sub DoInLineShapeHyperlink()
	        Dim oDoc As Document
	        Dim oILPic As InlineShape
	        Dim oHLink As Hyperlink
	        Dim sPicFile As String
	        Dim sLinkFile as String
	        sPicFile = "<Your Graphic File Path and Name>"
	        sLinkFile = "<Your HyperLink File Path and Name>"
	        ' Create new document.
	        Set oDoc = Documents.Add
	        ' Insert a picture.
	        Set oILPic = oDoc.InlineShapes.AddPicture _
	        (Range:=oDoc.Content, FileName:= sPicFile, LinkToFile:=True)
	        ' Add a hyperlink for the picture.
	        oDoc.Hyperlinks.Add Anchor:=oILPic.Range, Address:=sLinkFile
	        ' Use the InlineShapes Property to reference the object.
	        Set oHLink = oDoc.InlineShapes(1).Hyperlink
	     End Sub
	
	MORE INFORMATION
	================
	
	You can use the IsObjectValid method to verify that an object still exists. The
	following example demonstrates the use of this method:
	
	     Sub testObject()
	        Dim ilShp As InlineShape
	        Set ilShp = ActiveDocument.InlineShapes.Add("C:\Windows\bubbles.bmp")
	        MsgBox IsObjectValid(ilShp)     ' This will display True
	        a.Delete
	        MsgBox IsObjectValid(ilShp)     ' This will display False
	     End Sub
	
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
	Keywords          : kberrmsg kbProgramming kbusage kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
