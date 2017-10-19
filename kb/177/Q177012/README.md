---
layout: page
title: "Q177012: WD97: Macro Does Not Insert AutoText Entries with Formatting"
permalink: /kb/177/Q177012/
---

## Q177012: WD97: Macro Does Not Insert AutoText Entries with Formatting

	Article: Q177012
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you record and then playback a Visual Basic for Applications macro that
	inserts formatted AutoText entries, the formatting is not inserted into your
	document.
	
	CAUSE
	=====
	
	Word does not record the RichText argument.
	
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
	
	To work around this problem, modify the macro to include the RichText:=True
	argument.
	
	To edit the macro:
	
	1. On the Tools menu, point to Macro, and then click Macros.
	
	2. Select the recorded macro, and then click Edit.
	
	3. Look for the line that inserts the AutoText entry. For example:
	
	        NormalTemplate.AutoTextEntries("test").Insert Where:=Selection.Range
	
	  Change the statement above to the following:
	
	        NormalTemplate.AutoTextEntries("test").Insert _
	           Where:=Selection.Range , RichText:=True
	
	4. In the Visual Basic Editor, on the File menu click Close and Return to
	  Microsoft Word.
	
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
	Keywords          : kbdta kbdtacode kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
