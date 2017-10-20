---
layout: page
title: "Q181292: WD97: InsertSymbol Result Not Translated Between Mac and ANSI"
permalink: /kb/181/Q181292/
---

## Q181292: WD97: InsertSymbol Result Not Translated Between Mac and ANSI

{% raw %}

	Article: Q181292
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you run a Microsoft Visual Basic for Applications macro (Sub procedure) that
	inserts a character, a different character may be inserted when the macro is run
	on the Macintosh than when it is run on Windows.
	
	CAUSE
	=====
	
	Word currently does not support conversion of Macintosh CharNum values to
	equivalent ANSI values, and vice versa.
	
	When a Visual Basic for Applications macro that includes the InsertSymbol method
	is exchanged between Word 98 Macintosh Edition or later versions for the
	Macintosh and Word 97 or later versions for Windows, the numeric value of the
	CharNum or CharacterNumber command is not translated from its Macintosh
	character set value to its ANSI equivalent, and vice versa.
	
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
	
	Edit the macro on the target platform, replacing the character value with the
	value that gives correct results. In the following example, replace the number
	203 with 192. (ANSI 192, Capital A Grave, is the equivalent of Macintosh
	character 203.)
	
	The following macro statements insert the Capital A Grave character:
	
	     ' Word for Windows statement
	     Selection.InsertSymbol CharacterNumber := 192, Font:= "(normal text)"
	
	     ' Macintosh Word statement
	     Selection.InsertSymbol CharacterNumber := 203, Font:= "(normal text)"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following Word 98 Macintosh Edition sample macro statement, which inserts
	the character Capital A Grave (Macintosh character 203) in a Word document, is
	transferred unchanged to Word 97 for Windows:
	
	     Selection.InsertSymbol CharacterNumber := 203, Font:= "(normal text)"
	
	If the preceding statement is run in Word 97 for Windows, a CE Diaeresis (ANSI
	203) is inserted instead of the intended Capital A Grave.
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon conversion converted converts transfer transfers translation translate charnum symbol
	
	======================================================================
	Keywords          : kbdta kbdtacode word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
