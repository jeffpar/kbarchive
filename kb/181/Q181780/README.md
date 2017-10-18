---
layout: page
title: "Q181780: WD97: Text from WordBasic.Input Command Truncated After Comma"
permalink: kb/181/Q181780/
---

## Q181780: WD97: Text from WordBasic.Input Command Truncated After Comma

	Article: Q181780
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Visual Basic for Applications, the WordBasic.Input macro command
	truncates text if your input text contains a comma. The text is truncated from
	the first comma to the end of the input text.
	
	For example, if you input:
	
	  Doe, John
	
	the status bar result will be:
	
	  Doe
	
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
	
	To correct this problem, replace the commas entered on the status bar with
	semicolons. If you insert the input text into a document, you can then replace
	the semicolons with commas.
	
	NOTE: Beginning in Word 97 for Windows and Word 98 Macintosh Edition, there is no
	Visual Basic for Applications equivalent for the Input command as used in
	earlier versions of Word. To use this feature in Visual Basic for Applications,
	use the WordBasic Property as in the following example:
	
	     Sub StausBarInput()
	        WordBasic.Input a
	        StatusBar = a
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :97
	Issue type        : kbprb
	
	=============================================================================
	
