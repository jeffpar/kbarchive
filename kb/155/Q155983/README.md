---
layout: page
title: "Q155983: WD97: InsertBreak Statement Inserts a Carriage Return"
permalink: /kb/155/Q155983/
---

## Q155983: WD97: InsertBreak Statement Inserts a Carriage Return

{% raw %}

	Article: Q155983
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbProgramming kbdta kbdtacode
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a macro that uses the InsertBreak statement following an Insert
	statement, Word 97 inserts a paragraph mark after the inserted text. This
	behavior is different from previous versions of Word.
	
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
	
	To work around this problem, add the Type:=0 parameter as in the following sample
	code:
	
	  Sub Test()
	
	      WordBasic.FileNewDefault
	      WordBasic.Insert "This is some text"
	      WordBasic.InsertBreak Type:=0
	
	  End Sub
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: 8.0 word8 word97 winword
	
	======================================================================
	Keywords          : kbProgramming kbdta kbdtacode 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
