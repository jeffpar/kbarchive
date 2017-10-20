---
layout: page
title: "Q250611: Rexx.exe Date Function Returns Wrong Year After 2000"
permalink: /kb/250/Q250611/
---

## Q250611: Rexx.exe Date Function Returns Wrong Year After 2000

{% raw %}

	Article: Q250611
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Date() function in the Rexx.exe scripting engine returns the year 100
	instead of the year 00 when you use the E, O, or U switches.
	
	CAUSE
	=====
	
	The problem occurs because the localtime() C library function in the Rexx.exe
	source code returns the year as the number of years after 1900.
	
	RESOLUTION
	==========
	
	To resolve this issue, modify the source code and recompile the Rexx.exe script
	engine to handle year 2000 and later dates.
	
	The Rexx.exe source code is included in the Microsoft Windows NT Resource Kit
	CD-ROM in the \Source\Gnu\Rexx folder.
	
	For example, here is one way you can correct the source code:
	
	The problems are in the std_date() function found in the source file builtin.c.
	
	The code uses two characters for the year portion of the date, and stores it in
	the tmdata structure by the localtime() function. However, this is incorrect.
	For example:
	
	        case 'O':
	           retval = Malloc(9+STRHEAD) ;
	           sprintf(retval, fmt, tmdata->tm_year, tmdata->tm_mon+1, 
	                             tmdata->tm_mday);
	
	If you change the code above to the following code, the return is 00/01/10 for
	today's date:
	
	        case 'O':
	           retval = Malloc(9+STRHEAD) ;
	           sprintf(retval, fmt, tmdata->tm_year-100, tmdata->tm_mon+1, 
	                             tmdata->tm_mday);
	
	To potentially work around this problem:
	
	1. Modify a Rexx script to accommodate this behavior. Here is a scripting
	  example that does so.
	
	     say 'Modified output for date(o) function'
	     x = date('o')
	     y = translate(x,' ','/')
	     year = word(y,1)
	     month = word(y,2)
	     day = word(y,3)
	     x = year-100'/'month'/'day
	     say x
	
	2. Use one of the Rexx date options that correctly return the date, such as 'S'.
	
	3. Omit the use of the year portion of the date in your script.
	
	4. Rewrite your scripts using Windows Scripting Host (WSH).
	
	STATUS
	======
	
	Microsoft has determine that this problem in the REXX.EXE source code is by
	design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
