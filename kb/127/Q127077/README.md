---
layout: page
title: "Q127077: PC Win: Code Page Translation Incorrect for Custom Templates"
permalink: kb/127/Q127077/
---

## Q127077: PC Win: Code Page Translation Incorrect for Custom Templates

	Article: Q127077
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 3.0 and 3.2 of Microsoft Mail for Windows may display data in an
	imported custom template as solid blocks.
	
	CAUSE
	=====
	
	The solid blocks represent the characters of the original equipment manufacturer
	(OEM) character set that either does not appear in the ANSI character set or
	exists at a different position in the ANSI character set. Therefore, some
	characters in the OEM character set cannot be displayed in Windows using an
	ANSI-set font.
	
	RESOLUTION
	==========
	
	If an application must display these characters under Microsoft Windows, an
	OEM-set font is required.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of the
	Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For the most part, Microsoft Windows uses fonts organized according to the ANSI
	character set. Windows also supports fonts that use the same OEM character set
	that MS-DOS uses. The OEM character set varies between computers and depends on
	the code page ROM installed on the computer. For example, computers manufactured
	in the United States use a character set called Code Page 437.
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
