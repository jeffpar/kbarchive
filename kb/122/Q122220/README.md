---
layout: page
title: "Q122220: FIX: Return Value Not Ignored with NMAKE's Dash (-) Command"
permalink: /kb/122/Q122220/
---

## Q122220: FIX: Return Value Not Ignored with NMAKE's Dash (-) Command

{% raw %}

	Article: Q122220
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0,1.5,1.51,2.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Program Maintenance Utility (NMAKE), used with:
	   - Microsoft Visual C++, versions 1.5, 1.51 
	   - Microsoft Visual C++, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the dash command (-) in a makefile to turn off error checking for a
	given command, return values that are greater than 255 will not be ignored.
	NMAKE will detect an error and the make process will be terminated, as shown
	below:
	
	  NMAKE : fatal error U1077: 'C:\WINDOWS\SYSTEM32\CMD.EXE' : return
	  code '0xYYY'
	  Stop.
	
	YYY is the hexadecimal value of the return code from the command that generated
	the error.
	
	RESOLUTION
	==========
	
	Use the !CMDSWITCHES (+/-) I directive to work around this problem. For
	example:
	
	     !CMDSWITCHES +I
	     mylabel:
	          mycommand
	     !CMDSWITCHES -I
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	The following makefile will prematurely terminate after the mycommand statement
	if an error MYCOMMAND.EXE returns is a value greater that 255. A small MS-DOS-
	or Windows NT-based console program returning a value can be used as mycommand.
	
	  mylabel:
	       -mycommand
	
	Additional query words: 1.50 1.51 1.00 2.00 buglist1.50 buglist1.51 buglist1.00 buglist2.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch
	Version           : :1.0,1.5,1.51,2.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
