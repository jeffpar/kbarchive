---
layout: page
title: "Q241718: HOWTO: Convert a DBTIMESTAMP into a DATE"
permalink: kb/241/Q241718/
---

## Q241718: HOWTO: Convert a DBTIMESTAMP into a DATE

	Article: Q241718
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbAutomation kbMFC kbVC400 kbVC420 kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When given a DBTIMESTAMP value, you might need to convert the value into a type
	that is compatible with COM IDispatch interfaces such as the DATE type. If you
	are using Microsoft Foundation Classes (MFC), you can use the COleDateTime class
	to help convert from a DBTIMESTAMP to a DATE. If you are not using MFC, you can
	still use the code provided by MFC without needing the entire MFC framework.
	
	MORE INFORMATION
	================
	
	If You Are Using MFC, Use this Code
	-----------------------------------
	
	  #include <oledb.h>
	
	  void MFCTestConversion()
	  {
	     DBTIMESTAMP dbTimeStamp;
	
	     dbTimeStamp.year = 1900;
	     dbTimeStamp.month = 1;
	     dbTimeStamp.day = 1;
	     dbTimeStamp.hour = 0;
	     dbTimeStamp.minute = 0;
	     dbTimeStamp.second = 0;
	
	     COleDateTime d(dbTimeStamp.year, dbTimeStamp.month, dbTimeStamp.day,  
	              dbTimeStamp.hour, dbTimeStamp.minute, dbTimeStamp.second);
	
	     COleVariant var = d;
	     DATE date = var.date;
	  }
	
	If You Are Using MFC, Use this Code
	-----------------------------------
	
	  //headers needed
	  #include <windows.h>
	  #include <oledb.h>
	
	  // One-based array of days in year at month start
	  int MonthDays[13] =
	  	{0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365};
	
	  // Modified Helper taken from \MFC\SRC\OLEVAR.CPP, _AfxOleDateFromTm
	  // This will compile in .c files too
	  BOOL OleDateFromTm(WORD wYear, WORD wMonth, WORD wDay, 
	                     WORD wHour, WORD wMinute, WORD wSecond, DATE *dtDest)
	  {
	     long nDate;
	     double dblTime;
	     BOOL bLeapYear;
	     int nDaysInMonth;
	
	     // Validate year and month (ignore day of week and milliseconds)
	     if (wYear > 9999 || wMonth < 1 || wMonth > 12)
	        return FALSE;
	
	     //  Check for leap year and set the number of days in the month
	     bLeapYear = ((wYear & 3) == 0) && ((wYear % 100) != 0 || (wYear % 400) == 0);
	
	     nDaysInMonth = MonthDays[wMonth] - MonthDays[wMonth-1] +
	                 ((bLeapYear && wDay == 29 && wMonth == 2) ? 1 : 0);
	
	     // Finish validating the date
	     if (wDay < 1 || wDay > nDaysInMonth || wHour > 23 || wMinute > 59 || wSecond > 59)
	        return FALSE;
	
	     // Cache the date in days and time in fractional days
	     //It is a valid date; make Jan 1, 1AD be 1
	     nDate = wYear*365L + wYear/4 - wYear/100 + wYear/400 + MonthDays[wMonth-1] + wDay;
	
	     //  If leap year and it's before March, subtract 1:
	     if (wMonth <= 2 && bLeapYear)
	        --nDate;
	
	     //  Offset so that 12/30/1899 is 0
	     nDate -= 693959L;
	
	     dblTime = (((long)wHour * 3600L) +  // hrs in seconds
	                ((long)wMinute * 60L) +  // mins in seconds
	                ((long)wSecond)) / 86400L;
	
	     *dtDest = (double) nDate + ((nDate >= 0) ? dblTime : -dblTime);
	     return TRUE;
	  }
	
	  void TestConversion()
	  {
	     BOOL bRet;
	     DBTIMESTAMP dbTimeStamp;
	     DATE d;
	
	     dbTimeStamp.year = 1900;
	     dbTimeStamp.month = 1;
	     dbTimeStamp.day = 1;
	     dbTimeStamp.hour = 0;
	     dbTimeStamp.minute = 0;
	     dbTimeStamp.second = 0;
	
	     bRet = OleDateFromTm(dbTimeStamp.year, dbTimeStamp.month,  
	                          dbTimeStamp.day, dbTimeStamp.hour,  
	                          dbTimeStamp.minute, dbTimeStamp.second, &d);
	     if (bRet) //succeeded...
	     {
	        //d should equal 2.00
	     }
	  }
	
	REFERENCES
	==========
	
	COleDateTime in MSDN
	
	Additional query words: COleDateTime DBTIMESTAMP OLEDB Conversion VarDateFromStr
	
	======================================================================
	Keywords          : kbnokeyword kbAutomation kbMFC kbVC400 kbVC420 kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.0,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
