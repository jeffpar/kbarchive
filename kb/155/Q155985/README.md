---
layout: page
title: "Q155985: WD97: Run-Time Error Using Macro to Save File with Name"
permalink: /kb/155/Q155985/
---

## Q155985: WD97: Run-Time Error Using Macro to Save File with Name

{% raw %}

	Article: Q155985
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbprogramming kbwordvba
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a macro that saves a file with a file name that uses a character
	outside of the range 32-255, based on the Unicode standard, the following
	Microsoft Visual Basic message appears:
	
	  Run-time error '5152
	  This is not a valid file name. Try one or more of the following:
	
	  *Check the path to make sure it was typed correctly.
	  *Select a file from the list of files and folders.
	  <path>\<file name>.
	
	where <path> is a folder name and <file name> is a file name on the
	computer.
	
	CAUSE
	=====
	
	This problem occurs because Microsoft Windows 95 is not aware of the Unicode
	standard.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use characters from the standard American National
	Standards Institute (ANSI) character set when naming files with a macro.
	
	MORE INFORMATION
	================
	
	The Unicode standard is a world-wide, 16-bit character encoding system. It is a
	fixed-width, uniform text and character encoding scheme that includes characters
	from the world's scripts, as well as technical symbols in common use. It is
	maintained by the Unicode Consortium and corresponds with international standard
	ISO/IEC 10646-1:1993.
	
	One use for characters outside the range is to represent accented characters in
	foreign languages.
	
	
	Additional query words: wordcon 8.0 word8 word97
	
	======================================================================
	Keywords          : kberrmsg kbprogramming kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
