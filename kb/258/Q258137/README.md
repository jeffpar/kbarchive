---
layout: page
title: "Q258137: 2nd Hex Character Overwrites 1st in Binary Value w/ MetaEdit 2.0"
permalink: /kb/258/Q258137/
---

## Q258137: 2nd Hex Character Overwrites 1st in Binary Value w/ MetaEdit 2.0

	Article: Q258137
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use MetaEdit 2.0 to create or modify a binary value, the second
	hexadecimal character of the byte overwrites the first hexadecimal character of
	the byte.
	
	For example, in the "Edit Metabase Data" dialog box for a binary value, if you
	type "1A" (without the quotation marks) in the "Data" text box, and then click
	OK, the value of "AA" is actually saved (instead of "1A").
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install MetaEdit 2.1.
	
	For additional information about obtaining MetaEdit 2.1, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q232068 FILE: How to Download, Install, and Uninstall IIS MetaEdit 2.1
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in MetaEdit 2.0.
	
	MORE INFORMATION
	================
	
	MetaEdit 2.0:
	
	MetaEdit 2.0 is included with the Windows 2000 Server Resource Kit.
	
	Hexadecimal Character Pairs:
	
	In MetaEdit, each byte of binary data is represented by a pair of hexadecimal
	characters, such as 1A, 11, FF, and so on.
	
	Additional query words: iis 5 bug RK meta edit meta-edit hex duplicated akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
