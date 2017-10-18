---
layout: page
title: "Q165977: WD97: StoryRanges Does Not Return Text Box Text in Header/Footer"
permalink: kb/165/Q165977/
---

## Q165977: WD97: StoryRanges Does Not Return Text Box Text in Header/Footer

	Article: Q165977
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbProgramming kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You can use the Visual Basic for Applications StoryRanges collection to return
	text from all parts of a document including text boxes. However, attempting to
	return text from a text box located in a header or footer does not return the
	text as expected.
	
	The following macro demonstrates this behavior if your document contains a Text
	box within a header of footer:
	
	     Sub ForEntireDocument()
	        Dim oDoc As Document
	        Dim oStory As Range
	        For Each oStory In ActiveDocument.StoryRanges
	           MsgBox oStory.Text
	        Next
	     End Sub
	
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
	
	The following sample Visual Basic for Applications routine can be used to return
	text from a text box found in a header or footer. The example loops through
	every section, header and text box of the active document. The routine looks for
	text boxes existing only in the primary header of each section. If a text box is
	found, a message is displayed with the contents of the text box.
	
	     Sub GetTextBoxTextInHeader()
	        Dim sSection As Section
	        Dim hHeader As HeaderFooter
	        Dim shpShape As Shape
	        ' Loop through each section in the document.
	        For Each sSection In ActiveDocument.Sections
	           ' Loop through each header in each section.
	           For Each hHeader In sSection.Headers
	              ' If the header is the Primary header.
	              If hHeader.Index = wdHeaderFooterPrimary Then
	                 ' Loop through each Shape object in the header.
	                 For Each shpShape In hHeader.Shapes
	                    ' If the shapetype is a text box.
	                    If shpShape.Type = msoTextBox Then
	                       ' Display the text in each textbox found.
	                       MsgBox shpShape.TextFrame.TextRange.Text
	                    End If
	                 Next
	              End If
	           Next
	        Next
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
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
	Keywords          : kbmacro kbProgramming kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
