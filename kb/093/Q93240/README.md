---
layout: page
title: "Q93240: PC Win: Accented Characters Lost in Insert from File"
permalink: kb/093/Q93240/
---

## Q93240: PC Win: Accented Characters Lost in Insert from File

	Article: Q93240
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you choose Insert From File from the Edit menu to insert a file that contains
	accented characters (such as an e or an a with an accent mark on top), Mail
	loses the accented characters.
	
	This occurs when the file uses code page 850 (the multilingual code page)-- or
	some other non-ANSI character set--instead of the ANSI code page character set.
	
	This problem occurs in the US, German, and French versions of Microsoft Mail. The
	same thing happens when you run Mail under the French version of Windows.
	
	CAUSE
	=====
	
	Microsoft Mail does not convert a code page to ANSI when inserting text. Mail
	assumes that the file uses the ANSI character set because Windows version 3.1
	requires that all text use the ANSI code page character set.
	
	RESOLUTION
	==========
	
	Text handled by Microsoft Mail must use the ANSI character set. The active code
	page in Windows is always the ANSI code page regardless of the machine.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
