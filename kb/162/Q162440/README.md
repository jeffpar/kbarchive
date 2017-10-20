---
layout: page
title: "Q162440: WD97: BuiltInDocumentProperties Returns Incorrect Page Count"
permalink: /kb/162/Q162440/
---

## Q162440: WD97: BuiltInDocumentProperties Returns Incorrect Page Count

{% raw %}

	Article: Q162440
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacroexample word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a macro to insert page breaks in a document and then return a page
	count by using the BuiltInDocumentProperties property, the number of pages
	returned may be incorrect.
	
	CAUSE
	=====
	
	The document needs to be repaginated before you return the number of pages.
	
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
	
	To work around this problem, use the Repaginate method to force document
	repagination before calling the BuiltInDocumentProperties(wdPropertyPages)
	property. For example:
	
	     Sub GetNumberOfPages()
	        ActiveDocument.Repaginate
	        MsgBox ActiveDocument.BuiltInDocumentProperties(wdPropertyPages)
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: wordcon vba vbe kbmacroexample
	
	======================================================================
	Keywords          : kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
