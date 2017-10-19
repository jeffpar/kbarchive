---
layout: page
title: "Q170032: WD97: Multiple-Heading Numbering Converted to Plain Text"
permalink: /kb/170/Q170032/
---

## Q170032: WD97: Multiple-Heading Numbering Converted to Plain Text

	Article: Q170032
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a Microsoft Word 97 for Windows document with the Word 6.0/95
	binary format converter, multilevel and heading numbering are changed to plain
	text.
	
	CAUSE
	=====
	
	This problem is caused by the Word 97 RTF Export Converter (Wrd6ex32.cnv ) that
	ships with Microsoft Word 97 for Windows. The number formatting feature in Word
	97 provides for greater customization of heading and multilevel numbering than
	Word 6.0 or Word 7.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Office 97 Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	
	MORE INFORMATION
	================
	
	SR-2 includes an updated version of the Wrd6ex32.cnv converter which causes the
	multilevel and heading numbering to be converted to Word 6.0/95 heading
	numbering format.
	
	Additional query words: multilevel heading numbering converts wrd6ex32.cnv Outline retain
	
	======================================================================
	Keywords          : kbdta kbconversion word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
