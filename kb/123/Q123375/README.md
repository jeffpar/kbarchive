---
layout: page
title: "Q123375: Mac Form: Text in Field Truncated After Install"
permalink: /kb/123/Q123375/
---

## Q123375: Mac Form: Text in Field Truncated After Install

	Article: Q123375
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When designing a form using the Form Designer, included with versions 3.x of
	Microsoft Mail for AppleTalk Networks, it is possible that text inserted in a
	field while designing the form will be truncated when the form is installed and
	accessed from the server.
	
	RESOLUTION
	==========
	
	To workaround this problem, text inserted in the field at design time should be
	limited to 256 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.x of Mail for
	AppleTalk Networks. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When a form is compiled, text entered in a field is accessed in 256 character
	blocks. If a field contains less than 256 characters, all the characters will be
	displayed when the form is installed. If a field contains more than 256
	characters, only the number of characters greater than 256 (or a multiple of
	256) will be displayed.
	
	For example, if 266 characters are added to the body field and the form is
	compiled and installed, only the first 10 characters of the original text will
	be displayed.
	
	Similarly, if a field has 930 characters, only the first 162 characters will be
	displayed. This can be seen in the following:
	
	  Total Chars in field: 930
	  930/256 = 3.633
	  So, there are three 256 character blocks (3 x 256 = 768)
	  Only the remainder: 930 - 768 = 162 will be displayed
	
	Therefore, only the first 162 characters would be displayed.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
