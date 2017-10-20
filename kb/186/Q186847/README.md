---
layout: page
title: "Q186847: WD97: Unicode Characters Converted Incorrectly"
permalink: /kb/186/Q186847/
---

## Q186847: WD97: Unicode Characters Converted Incorrectly

{% raw %}

	Article: Q186847
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97, when you open a Microsoft Word 98 Macintosh Edition
	document containing Unicode characters that are beyond the 256th character (512
	bytes) of the document, those Unicode characters are not converted correctly
	(they will be displayed as "garbage" characters).
	
	CAUSE
	=====
	
	The converter for Unicode characters fails to correctly read characters after
	the 256th character of the document.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Word 97 Service Release 2 (SR-2).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Office 97
	Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	MORE INFORMATION
	================
	
	Unicode is a 16-bit character set designed to cover all the world's major living
	languages in addition to scientific symbols and dead languages that are the
	subject of scholarly interest. It eliminates the complexity of multi-byte
	character sets that are currently used on UNIX and Windows to support Asian
	languages. A consortium of companies including Apple, Microsoft, Hewlett-Packard
	(HP), Digital, and IBM created Unicode. These companies used information from
	the ISO-10646 standard to produce a single standard in 1993. Unicode is the
	basis for the Windows NT operating system.
	
	Unicode is a 16-bit character set where all characters occupy the same space. The
	first 256 values are the same as the ISO-Latin character set, which is also the
	basis for the ANSI character set used in Windows 3.1 and Windows 95. However,
	Unicode defines 34,168 distinct coded characters. In most character sets a
	single value is often assigned to several characters. For example, in ASCII a
	"-" is used to represent a hyphen, a minus sign, a dash, and a non-breaking
	hyphen. In Unicode, each meaning is given its own code; that is, a hyphen is
	represented by a character different from a minus sign, and so forth. The
	Unicode standard contains only one instance of each character and assigns it a
	unique name and code value. It also supports "combining" accent characters,
	which follow the base character that they are to modify.
	
	For more information about Unicode, visit the Unicode Web site at:
	
	  http://www.unicode.org/
	
	Additional query words: uni code font trash garbled unreadable
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
