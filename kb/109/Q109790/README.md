---
layout: page
title: "Q109790: PRB: CTimeSpan::GetDays() Reports 29 Days in April"
permalink: kb/109/Q109790/
---

## Q109790: PRB: CTimeSpan::GetDays() Reports 29 Days in April

	Article: Q109790
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDateTime kbMFC kbVC kbDSupport kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CTimeSpan::GetDays function seems to incorrectly report that the number of
	days between April 1 and May 1 is 29, instead of 30.
	
	CAUSE
	=====
	
	This behavior of the CTimeSpan::GetDays function is by design. One day in April
	is the start of Daylight Savings Time. On that day, there are only 23 hours,
	instead of the normal 24. Because of the way the CTimeSpan::GetDays member
	function is implemented, a day with less than 24 hours is not a complete day.
	
	Because the time span is figured in seconds, the time span for a month is the sum
	of all the seconds in a month. The definition of CTimeSpan::GetDays() in AFX.INL
	(located in the MFC\INCLUDE sub-directory of the Visual C++ installation
	directory)calculates the number of days by dividing the value of the m_timeSpan
	member variable by the number of seconds in a day. Thus, if one day in a 30-day
	month has 23 hours (which is the case here), m_timeSpan will be short by 3600
	seconds, and the result of the division will be 29 (days), rather than 30. This
	is a characteristic of integer division in C/C++ where the remainder is
	truncated.
	
	RESOLUTION
	==========
	
	There are two workarounds:
	
	- If you are interested only in the precision of the number of days, add 3600
	  seconds to the instance of CTimeSpan. This ensures that the April case is
	  handled appropriately, and that other calculations will not be affected, as a
	  characteristic of integer division. Adding 3600 seconds (one hour) to a
	  CTimeSpan instance will not affect measurement in days even in the worst case
	  of a time span being some multiple of 86400 seconds (one day), because a day
	  with one hour is not a full day.
	
	-or-
	
	- Use the TZ environment variable to control how time calculations are handled
	  by MFC. The TZ environment variable can be set from the command line (such as
	  in AUTOEXEC.BAT), or it can be set with the _putenv() function. The
	  documentation for the TZ environment variable [in the online help or the
	  "Run-Time Library Reference," under _tzset()], states that the default value
	  of TZ is PST8PDT, which corresponds to the Pacific time zone.
	
	  To work around the problem at hand, just set ONLY the tzn (three letter time
	  zone) and hh (difference in hours between Universal Coordinated
	  Time/Greenwich Mean Time) fields of the TZ variable. For example, if you are
	  in the Eastern Time Zone, and set the TZ variable to EST5, then Daylight
	  Savings Time would not be taken into account when doing CTime and CTimeSpan
	  calculations.
	
	  NOTE: You MUST set the TZ variable before doing ANY time calculations,
	  including initialization of CTime objects. Try moving the _putenv() call in
	  the following code to demonstrate this. A good place to set the TZ
	  environment variable is in the application's InitInstance() function.
	
	Sample Code
	-----------
	
	     void CDialogsApp::OnTimeDaysInApril()
	     {
	         // Set TZ environment variable.
	         if (_putenv("TZ=PST8")==-1)
	          // Can't set variable.
	          AfxMessageBox("Unable to set TZ environment variable",MB_OK);
	         else {
	          // Variable set, show its effect!
	          CTime t1(1993,4,1,0,0,0);   // April 1, 1993, 12:00:00 am
	          CTime t2(1993,5,1,0,0,0);   // May 1, 1993, 12:00:00 am
	          // Calculate time span.
	          CTimeSpan ts = t2 - t1;
	          LONG lNumDays=ts.GetDays();
	          // Output message.
	          char buffer[40];
	          wsprintf(buffer,"Days in April: %ld",lNumDays);
	          AfxMessageBox(buffer,MB_OK);
	         }
	     }
	
	Additional query words: kbSweptVC600
	
	======================================================================
	Keywords          : kbDateTime kbMFC kbVC kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
