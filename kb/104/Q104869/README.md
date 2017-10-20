---
layout: page
title: "Q104869: PC Adm: Err Msg: Import Error &#91;72&#93; Fullname Is Too Long"
permalink: /kb/104/Q104869/
---

## Q104869: PC Adm: Err Msg: Import Error &#91;72&#93; Fullname Is Too Long

{% raw %}

	Article: Q104869
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 2.1, 3.0, and 3.2 of Microsoft Mail for PC Networks, the following
	error may occur when you use the Import utility (IMPORT.EXE) to import new
	addresses:
	
	  Error [ 72] Fullname is too long:
	
	This error occurs when you use an input text file specified with the
	-F<filename> option.
	
	CAUSE
	=====
	
	There are three possible causes of this error:
	
	- The alias (or full name) is longer than 30 characters.
	
	- The first character of the alias does not occur in the third column of the
	  Import text file and the alias is 30 characters long. This effectively makes
	  the alias appear to exceed 30 characters. If the alias begins in column 4 and
	  the alias is 30 characters long, it appears to be a 31-character alias,
	  because the preceding space is interpreted as the first character of the
	  alias.
	
	- The first character of the alias occurs in the third column; however, the
	  first character of the address type occurs before column 34. This also
	  results in making the alias appear to exceed 30 characters, because the
	  address type characters preceding column 34 is considered a part of the
	  alias.
	
	RESOLUTION
	==========
	
	Make sure the first character of the alias always occurs in column 3 of the
	Import text file, that the alias is no longer than 30 characters, and that the
	first character of the address type occurs in column 34 of the Import text
	file.
	
	
	Additional query words: 2.1x 2.10 3.00 3.00b 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
