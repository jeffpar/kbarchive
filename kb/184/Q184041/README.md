---
layout: page
title: "Q184041: WD97: Macro to Add, Delete, Find Hidden/Non-Hidden Bookmarks"
permalink: /kb/184/Q184041/
---

## Q184041: WD97: Macro to Add, Delete, Find Hidden/Non-Hidden Bookmarks

	Article: Q184041
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion WordCon kbmacroexample kbwordvba kbconvert
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The following sample macros can be used to add, delete, and find hidden and
	non-hidden bookmarks in Word for Windows documents using Visual Basic for
	Applications.
	
	WARNING: Microsoft Word uses hidden bookmarks for table of contents entries,
	cross-references, and captions. After stripping the hidden bookmarks from a
	document with cross-references, and then updating fields, all the references are
	lost. In their place you get one of the following error messages: "Error!
	Reference source not found" or "Error! Bookmark not defined."
	
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
	
	You can use one of the following methods to strip bookmarks from a Word 97
	document using Visual Basic for Applications.
	
	Method 1: Code to Strip All Bookmarks from a Document
	-----------------------------------------------------
	
	       Sub StripAllBookmarks()
	        Dim stBookmark As Bookmark
	        ActiveDocument.Bookmarks.ShowHidden = True
	        If ActiveDocument.Bookmarks.Count >= 1 Then
	           For Each stBookmark In ActiveDocument.Bookmarks
	              stBookmark.Delete
	           Next stBookmark
	        End If
	     End Sub
	
	Method 2: Code to Strip Only Hidden Bookmarks from a Document
	-------------------------------------------------------------
	
	   Sub StripHiddenBookmarks()
	        Dim stBookmark As Bookmark
	        ActiveDocument.Bookmarks.ShowHidden = True
	        If ActiveDocument.Bookmarks.Count >= 1 Then
	           For Each stBookmark In ActiveDocument.Bookmarks
	             If Left(stBookmark, 1) = "_" Then
	                stBookmark.Delete
	             End If
	          Next stBookmark
	        End If
	     End Sub
	
	Method 3: Code to Add a Hidden Bookmark
	---------------------------------------
	
	The following code adds a bookmark named "_HiddenBookmark1" to a document at the
	location of the insertion point or selection.
	
	     Sub AddHiddenBookmark
	        ActiveDocument.Bookmarks.Add Name:="_HiddenBookmark1"
	     End Sub
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152770 How to Create Hidden Bookmarks
	
	  Q108455 Table of Contents Entries, Cross-Reference,& Captions Marked
	
	  Q113127 Add Button Unavailable for Insert/Bookmark
	
	Additional query words: winword wprd7 word7.0
	
	======================================================================
	Keywords          : kbdta kbconversion WordCon kbmacroexample kbwordvba kbconvert 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
