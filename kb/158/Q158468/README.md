---
layout: page
title: "Q158468: WD97: Compile, Syntax Errors When You Run a Converted Macro in W"
permalink: /kb/158/Q158468/
---

## Q158468: WD97: Compile, Syntax Errors When You Run a Converted Macro in W

{% raw %}

	Article: Q158468
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbProgramming kbdta word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run a WordBasic macro that was converted to a Microsoft
	Visual Basic for Applications macro, you may receive a compile error or a syntax
	error.
	
	CAUSE
	=====
	
	When Microsoft Word converts a WordBasic macro, Word truncates (cuts off) the
	end of any WordBasic command that exceeds 1,024 characters.
	
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
	
	Method 1: Open the WordBasic Macro in the Previous Version of Word
	------------------------------------------------------------------
	
	Open the WordBasic macro in the previous version of Word, and modify the
	WordBasic macro so that each command is fewer than 1,024 characters.
	
	Method 2: Edit the Incorrectly Converted Macro
	----------------------------------------------
	
	Edit the incorrectly converted macro in the Microsoft Visual Basic Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	REFERENCES
	==========
	
	For additional informationabout getting help with Visual Basic for Applications,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q163425 WD97: Macro Programming Resources
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kberrmsg kbProgramming kbdta word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
