---
layout: page
title: "Q247348: ASP 200 Error Setting Cookie Expiration Past January 19, 2038"
permalink: kb/247/Q247348/
---

## Q247348: ASP 200 Error Setting Cookie Expiration Past January 19, 2038

	Article: Q247348
	Product(s): Internet Information Server
	Version(s): winnt:3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Active Server Pages (ASP) and attempt to set a cookie exportation
	date past January 19, 2038, one of the following ASP 200 error messages occurs
	(depending on the version of IIS you are running):
	
	  IIS 4.0
	
	  Cookies object error 'ASP 0200 : 0x80004005'
	  Out of Range 'Expires' attribute
	  /path/file.asp, line nn
	  The date given for 'Expires' precedes Jan 1, 1980 or exceeds Jan 19, 2038,
	  3:14:07 GMT.
	
	  IIS 5.0
	
	  Error Type:
	  Cookies object, ASP 0200 (0x80004005)
	  Out of Range 'Expires' attribute
	  The date and time given for 'Expires' precedes Jan 1, 1980 or exceeds Jan 19,
	  2038, 3:14:07 GMT.
	  /path/file.asp, line nn
	
	CAUSE
	=====
	
	This is caused by an overflow of the time_t variable in the C/C++ programming
	language. This variable is a 32-bit integer value used as an offset in seconds
	from January 1, 1970. This variable has a maximum value of 2147483647, which
	only allows dates through 3:14:07 GMT on January 19, 2038.
	
	MORE INFORMATION
	================
	
	A detailed white paper on this topic is available on the following Web site:
	
	  http://www.microsoft.com/technet/year2k/white/ctime.htm
	
	
	Additional query words: y2k
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : winnt:3.0,4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
