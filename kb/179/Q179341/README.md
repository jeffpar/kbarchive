---
layout: page
title: "Q179341: WD97: On Exit Macro Jump to Unprotected Section Fails"
permalink: kb/179/Q179341/
---

## Q179341: WD97: On Exit Macro Jump to Unprotected Section Fails

	Article: Q179341
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbwordvba kbfield word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an On Exit macro for a form field to go to a bookmark in an
	unprotected section of the document, the insertion point goes to the beginning
	of the section, not the bookmark location.
	
	
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
	
	For more information about how to use the sample code in this article, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	To work around this, add an additional text box after the form field that you
	want to cause the jump to your bookmark location. With that text box, assign
	either of the following Word Visual Basic for Applications procedures as an On
	Entry procedure
	
	  Sub WorkingGoto()
	     ActiveDocument.Bookmarks("bookmarkname").Select
	  End Sub
	
	  -or-
	
	  Sub WorkingGoto()
	     Selection.Goto What:=wdGotoBookmark, Name:="bookmarkname"
	  End Sub
	
	where "bookmarkname" is the name of the bookmark in the unprotected section of
	your Word document.
	
	To make the added text form field less visible, set the maximum length to 1, and
	then remove the bookmark name in the Text Form Field Options dialog box.
	
	NOTE: These code samples do not work in an On Exit macro when the bookmark is in
	the unprotected section of the document. If the bookmark is for another form
	field, the code works as an On Exit macro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	REFERENCES
	==========
	
	For additional information about available resources for creating custom
	solutions by using Visual Basic for Applications, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q163425 WD97: Macro Programming Resources
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: kbcode kbmacro vba
	
	======================================================================
	Keywords          : kbdta kbdtacode kbwordvba kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
