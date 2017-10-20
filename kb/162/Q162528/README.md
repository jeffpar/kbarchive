---
layout: page
title: "Q162528: WD97: Returning Object Counts for Parts of a Document"
permalink: /kb/162/Q162528/
---

## Q162528: WD97: Returning Object Counts for Parts of a Document

{% raw %}

	Article: Q162528
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Visual Basic for Applications, an object represents an element of an
	application, such as a document, a paragraph, a sentence, a word, or a field.
	
	A collection is an object that contains several other objects, usually, but not
	always, of the same type. In Microsoft Word, for example, the Documents
	Collection object contains all the open document objects.
	
	At times it may be necessary when you write Visual Basic for Applications macros
	to return the number of objects within a particular collection of objects.
	
	This article discusses methods that can be used to return the count of a
	collection of objects for part or all of a document including but not limited to
	objects located in headers, footers, and different sections of a document.
	
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
	
	Method 1: To Return a Count of Objects for an Entire Document
	-------------------------------------------------------------
	
	To return a count of objects for an entire document including those contained in
	headers, footers, comments, endnotes, footnotes and text frames use the
	StoryRanges Collection object.
	
	A Story object is contained within the Story Collection. Members of the Story
	collection are
	
	- The Main Text or Body of a Document
	
	- First Page Header
	
	- First Page Footer
	
	- Primary Header
	
	- Primary Footer
	
	- Even Pages Headers
	
	- Even Pages Footers
	
	- Comments
	
	- EndNotes
	
	- Footnotes
	
	- Text Frames
	
	For example, to count the number of fields in all stories of a document, use the
	following example:
	
	     Sub CountAllFields()
	        Dim iCount As Integer
	        Dim aStory As Range
	        For Each aStory In ActiveDocument.StoryRanges
	           iCount = iCount + aStory.Fields.Count
	        Next
	        MsgBox iCount
	     End Sub
	
	To count the number of Shapes(Drawing Objects) in all stories of a document, use
	the following example:
	
	     Sub CountAllShapes()
	        Dim iCount As Integer
	        Dim aStory As Range
	        For Each aStory In ActiveDocument.StoryRanges
	           iCount = iCount + aStory.Application.ActiveDocument.Shapes.Count
	        Next
	        MsgBox iCount
	     End Sub
	
	To count the number of Hyperlinks in all stories of a document, use the following
	example:
	
	     Sub CountAllHyperLinks()
	        Dim iCount As Integer
	        Dim aStory As Range
	        For Each aStory In ActiveDocument.StoryRanges
	           iCount = iCount + _
	           aStory.Application.ActiveDocument.Hyperlinks.Count
	        Next
	        MsgBox iCount
	     End Sub
	
	Method 2: To Return a Count of Objects for Part of a Document
	-------------------------------------------------------------
	
	To return a count of items for a single member of the StoryRange, specify a
	member of the story range with a wdStoryType constant.
	
	In this example, the wdMainTextStory constant is used in conjunction with the
	Paragraphs collection to return the count of paragraphs in the main text or body
	of a document:
	
	     Sub CountParagraphs()
	        With ActiveDocument.StoryRanges(wdMainTextStory)
	           MsgBox .Paragraphs.Count
	        End With
	     End Sub
	
	In this example, the wdMainTextStory constant is used in conjunction with the
	Sentences Collection to return the count of sentences in the main body of a
	document:
	
	     Sub CountSentencesInMainDocBody()
	        With ActiveDocument.StoryRanges(wdMainTextStory)
	           MsgBox .Sentences.Count
	        End With
	     End Sub
	
	For more information about StoryRanges, from the Visual Basic Editor, click the
	Office Assistant, type "StoryRanges" (without the quotation marks) click Search,
	and then click to view "StoryRanges."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q163435 VBA: Programming Resources for Visual Basic for
	  Applications
	
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
