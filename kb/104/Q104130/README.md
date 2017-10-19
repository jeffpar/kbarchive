---
layout: page
title: "Q104130: PC Win: Import/Export Does Not Work with Extended Characters"
permalink: /kb/104/Q104130/
---

## Q104130: PC Win: Import/Export Does Not Work with Extended Characters

	Article: Q104130
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.0b of Microsoft Mail for Windows does not correctly import or export a
	folder with an extended character (such as the letter O with an umlaut) in the
	filename. The folder appears to be saved correctly, but the filename is not
	converted properly.
	
	CAUSE
	=====
	
	The function responsible for converting extended characters does not convert
	from CP850 (the MS-DOS code page for multi-lingual keyboard sets) to ANSI. As a
	result, the extended characters are lost.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0b of Microsoft Mail
	for Windows. This problem was corrected in version 3.2 of Microsoft Mail for
	Windows.
	
	
	Additional query words: 3.00b foreign country ascii non-English
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300b
	Version           : WINDOWS:3.0b
	
	=============================================================================
	
