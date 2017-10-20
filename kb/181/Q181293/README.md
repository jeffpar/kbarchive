---
layout: page
title: "Q181293: WD97: Jumping to a Bookmark Located in a Header or Footer"
permalink: /kb/181/Q181293/
---

## Q181293: WD97: Jumping to a Bookmark Located in a Header or Footer

{% raw %}

	Article: Q181293
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Word 97 allows you to insert bookmarks into a document header or
	footer. In versions of Word prior to Word 97, you can only jump to a bookmark in
	a document header or footer when the header or footer pane is active.
	
	This article contains a sample Microsoft Visual Basic for Applications macro (Sub
	procedure) that demonstrates how to jump to a bookmark in a header or footer.
	
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
	
	The following sample Visual Basic macro tests whether a bookmark named Test
	exists. If so, the macro selects the bookmark. If the bookmark exists within a
	header or footer, Word automatically opens the header or footer pane.
	
	     Sub GotoHeaderBookmark()
	        If ActiveDocument.Bookmarks.Exists("test") = True Then
	           ActiveDocument.Bookmarks("test").Select
	        End If
	     End Sub
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon kbmacro vba editbookmark go to
	
	======================================================================
	Keywords          : kbdta kbdtacode word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
