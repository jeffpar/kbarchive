---
layout: page
title: "Q63624: BUG: L1027 Error When Object File Name Includes a Parenthesis"
permalink: /kb/063/Q63624/
---

## Q63624: BUG: L1027 Error When Object File Name Includes a Parenthesis

{% raw %}

	Article: Q63624
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.0x,5.1,5.13,5.15,5.3,5.31.009,5.5,5.6; OS/2:5.01.21,5.03,5.05,5.1,5.3
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.0x, 5.1, 5.13, 5.15, 5.3, 5.31.009, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.01.21, 5.03, 5.05, 5.1, 5.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK generates the
	following message:
	
	  L1027: Unmatched left/right parenthesis
	
	CAUSE
	=====
	
	One or more object modules contains a parenthesis in its filename. If the object
	module is in the current directory, the error occurs when either of the
	following conditions is true:
	
	- If the object module has a left parenthesis as the first character of its
	  name and a character other than a right parenthesis as the last character.
	
	- If the object module has a right parenthesis as the last character of its
	  name and a character other than a left parenthesis as the first character.
	
	If the object module is not in the current directory, the error occurs only when
	the second condition above is true.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in each version of Microsoft LINK
	that supports overlays. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Normally, when the names of one or more object modules are surrounded by
	parentheses, LINK places those modules into an overlay. Therefore, if a left (or
	right) parenthesis appears immediately before (or after) the name of an object
	module, LINK expects a matching right (or left) parenthesis immediately after
	(or before) the name. If the parentheses does not match, LINK generates a fatal
	error L1027.
	
	For example, the following LINK command line causes an "unmatched left
	parenthesis" error if the object module ABC.OBJ is in the current directory:
	
	  link (abc;
	
	However, if ABC.OBJ is not in the current directory, then the parenthesis is
	imbedded in the path and filename string. In this case, LINK does not generate
	an error, as shown below:
	
	  link temp\(abc;
	
	Similarly, a file named ABC).OBJ does not generate an error if linked as
	follows:
	
	  link abc).obj;
	
	However, if the .OBJ extension is omitted, as follows, the L1027 error occurs:
	
	  link abc);
	
	If a left or right parenthesis is embedded in the name of a file, no error
	occurs. The following three LINK command lines each function correctly:
	
	  link a(bc;
	  link a()bc;
	  link a)bc;
	
	Additional query words: 3.x 4.06 4.07 5.01.21 5.03 5.05 5.10 5.13 buglist5.50 buglist5.60 5.15 5.30 5.31.009 5.50
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK50121DOS kbLINK510DOS kbLINK513DOS kbLINK515DOS kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560DOS kbLINK503OS2 kbLINK505OS2 kbLINK510OS2 kbLINK530OS2
	Version           : MS-DOS:3.x,4.x,5.0x,5.1,5.13,5.15,5.3,5.31.009,5.5,5.6; OS/2:5.01.21,5.03,5.05,5.1,5.3
	
	=============================================================================
	

{% endraw %}
