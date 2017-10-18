---
layout: page
title: "Q148790: DOC: mktime Fails for January 1, 1970 in Several Time Zones"
permalink: kb/148/Q148790/
---

## Q148790: DOC: mktime Fails for January 1, 1970 in Several Time Zones

	Article: Q148790
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.5,1.51,1.52; winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC4
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.5, 1.51, 1.52, 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For time zones that are ahead of Greenwich Mean Time such as Cairo's time zone
	(GMT + 2, which means the time in Cairo is two hours ahead of GMT), calling
	mktime with its argument set to correspond to January 1, 1970 00:00:00
	(midnight), returns -1 (failure).
	
	The Visual C++ 4.0 Books Online states:
	
	  "...mktime handles dates in any time zone from midnight, January 1, 1970, to
	  midnight, February 5, 2036."
	
	MORE INFORMATION
	================
	
	The problem is not that mktime is in error, it is the documentation's claim that
	this function will handle midnight January 1, 1970 in any time zone. Actually
	mktime returns the number of seconds that have elapsed since January 1, 1970
	00:00:00, adjusted for the current time zone. Adjusted for current time zone
	means that the appropriate number of seconds will be added or subtracted such
	that mktime actually returns the number of seconds elapsed since midnight
	January 1, 1970 Greenwich Mean Time (GMT). This means that, for example, calling
	mktime for January 1, 1970 in the Pacific Time Zone (GMT - 8) returns 28800,
	which happens to be the number of seconds in 8 hours. The return value of 28800
	in the Pacific Time Zone means that 28800 seconds have elapsed since January 1,
	1970 00:00:00 GMT when it is the same time in the Pacific Time Zone. The problem
	occurs in time zones that are ahead of Greenwich Mean Time. Calling mktime in
	Cairo (GMT + 2), for example, would have to return -1 for January 1, 1970
	00:00:00, as January 1, 1970 00:00:00 had not yet occured in GMT when the same
	time happened in Cairo.
	
	
	Additional query words: OLDocIss
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbOLDocs kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbVC220 kbVC410 kbVC420 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : WINDOWS:1.5,1.51,1.52; winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	
	=============================================================================
	
