---
layout: page
title: "Q162399: WD97: Unexpected Name in &quot;File Name&quot; Box After Macro Change"
permalink: /kb/162/Q162399/
---

## Q162399: WD97: Unexpected Name in &quot;File Name&quot; Box After Macro Change

{% raw %}

	Article: Q162399
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Visual Basic for Applications BuiltInDocumentProperties
	property and the wdPropertyTitle constant in a macro to alter the title of a
	document, as in the following example,
	
	     ActiveDocument.BuiltInDocumentProperties(wdPropertyTitle) = "My Title"
	
	and you then save the document, you may not receive the results you expect.
	Specifically, the name suggested in the Save As dialog box (in the File Name
	box) will reflect a name other than the name in the Title box in the Properties
	dialog box (on the File menu, click Properties).
	
	NOTE: This problem does not occur if you manually change the value in the Title
	box in the Properties dialog box. In this case, the Save As dialog box suggests
	the title of the document for the file name.
	
	CAUSE
	=====
	
	This problem occurs when the document you are working with is based on a custom
	template that has a title.
	
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
	
	The following example Visual Basic for Applications routine uses the Dialogs
	Collection to work around this problem:
	
	     Sub SetDocTitle()
	        With Dialogs(wdDialogFileSummaryInfo)
	           .Title = "My Title"
	           .Execute
	        End With
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you save a new document, Word checks to see whether the document has a
	title. If it does, Word will suggest that title for the file name. By default,
	Word sets the title for a document equal to the title of the template that the
	document is based on. So, if the template has a title, Word uses that title for
	the suggested file name.
	
	If you programmatically change the title of the new document, the change will
	occur as expected in the Properties dialog box; however, when you choose either
	Save or Save As (on the File Menu), Word continues to suggest the title of the
	template.
	
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
	Keywords          : kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
