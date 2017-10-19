---
layout: page
title: "Q171071: WD97: Extended Characters Improperly Converted in ASCII RTF File"
permalink: /kb/171/Q171071/
---

## Q171071: WD97: Extended Characters Improperly Converted in ASCII RTF File

	Article: Q171071
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create or edit RTF (Rich Text Format) code and specify the ASCII
	character set, Microsoft Word 97 may incorrectly map the extended ASCII
	characters to extended ANSI characters. This results in incorrect characters
	appearing when you open the document in Word 97.
	
	CAUSE
	=====
	
	Word 97 ignores the RTF keyword \pc that is used to specify the ASCII character
	set. Instead, Word uses the default ANSI character set.
	
	Because ASCII and ANSI have different extended character sets, when Word maps
	extended ASCII characters to their equivalent ANSI values, these are different
	characters.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	When you create or edit RTF code, you can specify the character set the file
	uses with the following keywords: \ansi, \mac, \pc, and \pca. Word 97 ignores
	the \pc keyword that specifies the ASCII character set, and instead uses the
	default ANSI character set.
	
	NOTE: Earlier versions of Word correctly interpreted the character set keyword.
	
	
	REFERENCES
	==========
	
	For more information about codepages and international characters, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q168063 WD97: LineDraw and Extended Characters May Map Incorrectly
	
	  Q159471 WD97: How to Install the Far East Support Files
	
	For more information about international features, click the Office Assistant,
	type "international features" (without the quotation marks), click Search, and
	then click one of the topics.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: SR1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kbusage word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
