---
layout: page
title: "Q122555: WD97: TOC Field Not Updated Properly from Recorded Macro"
permalink: kb/122/Q122555/
---

## Q122555: WD97: TOC Field Not Updated Properly from Recorded Macro

	Article: Q122555
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbProgramming kbdta kbdtacode kbmacroexample kbwordvba kbfield word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use a macro to update a TOC (table of contents) field, Microsoft Word may
	not prompt you to choose either Update Page Numbers Only or to Update Entire
	Table. Word only updates the page numbers.
	
	CAUSE
	=====
	
	By design, Word defaults to Update Page Numbers Only.
	
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
	
	The following sample Visual Basic for Applications macros demonstrate how to
	update a table of contents:
	
	     Sub UpdateTOC()
	        ' Update the entire first table of contents
	        ' in the active document.
	        ActiveDocument.TablesOfContents(1).Update
	     End Sub
	
	To update only the page numbers of a table of contents, use this macro:
	
	     Sub UpdateTOC()
	        ' Update only the page numbers of the first
	        ' table of contents in the active document.
	        ActiveDocument.TablesOfContents(1).UpdatePageNumbers
	     End Sub
	
	MORE INFORMATION
	================
	
	For additional information about getting help with Visual Basic for
	Applications, please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: macro toc table page numbers entire
	
	======================================================================
	Keywords          : kbmacro kbProgramming kbdta kbdtacode kbmacroexample kbwordvba kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
