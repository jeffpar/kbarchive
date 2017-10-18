---
layout: page
title: "Q148681: FIX: localtime() Does Not Always Switch to Standard Time"
permalink: kb/148/Q148681/
---

## Q148681: FIX: localtime() Does Not Always Switch to Standard Time

	Article: Q148681
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,1.52,2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbList kbCRT kbVCkbbuglist kbfixlist
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The C run-time function localtime() incorrectly fills the tm_isdst member of the
	returning struct tm when it is executed in a time zone that does not switch from
	Daylight Savings to Standard time on the same date that the U.S. time zones make
	the switch.
	
	CAUSE
	=====
	
	The C Runtime Function localtime() is apparently not considering the time zone.
	Instead, it is assuming that the switch to Standard time always occurs on the
	last Sunday in October.
	
	RESOLUTION
	==========
	
	Choose one of the following two workarounds:
	
	- Use the return value of the Win32 SDK function GetTimeZoneInformation, which
	  returns a DWORD. A return value of TIME_ZONE_ID_STANDARD or
	  TIME_ZONE_ID_DAYLIGHT will indicate whether the system time has been adjusted
	  for daylight savings time. GetTimeZoneInformation correctly considers the
	  current system time zone settings and adjusts on the proper date. (See the
	  documentation for GetTimeZoneInformation, as there are other possible return
	  values.)
	
	  -or-
	
	- Obtain the source for the C Run-time Library, and modify the localtime
	  function to adjust according to the current system time zone setting. The C
	  Run-time Library source is available in several locations. For instructions
	  about how to obtain the C Runtime Library Source, please see the following
	  article in the Microsoft Knowledge Base:
	
	  For Visual C++ 2.x:
	
	  Q123464 How to Obtain Visual C++ 2.0 Run-Time Library Source Code
	
	  NOTE: localtime is defined in the file Localtim.c. Windows NT and Windows 95
	  both account for the different dates by way of the
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\TimeZoneInformation
	  registry entry, which is changed when the time zone changes in the control
	  panel.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.1.
	
	MORE INFORMATION
	================
	
	Some Time Zones switch from Daylight Savings back to Standard Time about a month
	before most time zones (including the U.S. time zones). GMT + 0200 (Cairo) is an
	example. In the GMT + 0200 time zone, the switch date is the last Wednesday in
	September, whereas most other time zones switch on the last Sunday in October.
	
	Calling the localtime() CRT to fill in a structure of type tm (defined in Time.h)
	gives an incorrect result of non-zero for the tm_isdst data member if you call
	it from one of the time zones that switch early on a date that falls between the
	two. A non-zero value in the tm_isdst member indicates that the system time has
	been adjusted for daylight savings time.
	
	Sample Code
	-----------
	
	  /* Compile options needed: None
	  */ 
	
	  #include <iostream.h>
	  #include <time.h>
	
	  void main()
	  {
	    tm *loc;
	    time_t clock;
	
	    time(&clock);
	    tzset();
	    loc = localtime(&clock);
	    cout << "In timezone GMT+0200, 9-26-1995 is DST, ";
	    cout << "9-27-1995 is not DST" << endl;
	    cout << "The current date and time is: " << asctime(loc) << endl;
	    if(loc->tm_isdst)
	      cout << "It is daylight savings time" << endl;
	    else
	      cout << "It isn't daylight savings time" << endl;
	  }
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Change your system date to 9/26/95.
	
	2. Change your time zone to GMT + 0200. Note that Egypt Daylight Time displays
	  as your time zone. (Windows 95 and Windows NT automatically adjust the time.)
	
	3. Run the sample code listed above, and note that it correctly says that it is
	  daylight savings time.
	
	4. Change the system date to 9/27/95. Note that Egypt Daylight Time changes to
	  Egypt Standard. (Windows 95 and Windows NT automatically adjust the time.)
	
	5. Run the sample code again, and note that it incorrectly says that it is
	  daylight savings time.
	
	Additional query words: localtime
	
	======================================================================
	Keywords          : kbList kbCRT kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.5,1.51,1.52,2.0,2.1,2.2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
