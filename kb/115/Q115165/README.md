---
layout: page
title: "Q115165: PC Win: Attached Mac Filenames Convert to Windows Incorrectly"
permalink: kb/115/Q115165/
---

## Q115165: PC Win: Attached Mac Filenames Convert to Windows Incorrectly

	Article: Q115165
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 3.0, 3.0b, and 3.2 of Microsoft Mail for Windows appends a file
	extension to an attached file received from a version 3.0 Microsoft Mail for PC
	Networks, Macintosh workstation, even if the file has a valid Microsoft MS-DOS
	filename.
	
	NOTE: MS-DOS supports a filename limited to eight characters for the name and
	three characters for the extension (for example, FILENAME.DOC). This naming
	convention is commonly referred to as 8.3 format.
	
	CAUSE
	=====
	
	Mail's naming algorithm assumes that Macintosh file attachments do not have
	valid filenames and extensions (that is, filenames in 8.3 format). Therefore,
	Mail moves the decimal to the end of the filename and adds the appropriate
	extension. The filename conversion is handled by VFORMS.DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0b and 3.2 of
	Microsoft Mail for Windows. This problem was corrected in version 3.2a.
	
	For information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  mailupd
	
	NOTE: If the extension does not contain three characters, the updated VFORMS.DLL
	file drops the extension and adds the correct one. If the extension is three
	characters, it is left unchanged.
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
