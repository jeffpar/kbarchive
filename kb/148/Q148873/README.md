---
layout: page
title: "Q148873: INFO: Visual FoxPro Calculates Leap Year Correctly in 21st Centu"
permalink: /kb/148/Q148873/
---

## Q148873: INFO: Visual FoxPro Calculates Leap Year Correctly in 21st Centu

	Article: Q148873
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbYear2000 kbvfp kbvfp300 kbvfp300b kbvfp500a kbvfp600
	Last Modified: 26-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a year marking a new century arrives, one would assume that it is a leap
	year because it can be divided by the number 4. This is not always true for a
	centesimal year. So, when FoxPro checks to see if a centesimal year is a leap
	year, there is another condition that must be met.
	
	A year that is a century year must follow another condition to be considered a
	leap year. If the centesimal year can also be divided by 400 and return an
	integer, then that year is considered a leap year. For example, the year 1600 is
	a leap year but 1700, 1800, and 1900 are not. The year 2000 meets the condition,
	so it will be a leap year.
	
	
	MORE INFORMATION
	================
	
	Calendars based on the movements of the sun and moon have been used since
	ancient times, but none have been perfect. The Julian calendar, under which
	western nations measured time until A.D. 1582 was authorized by Julius Caesar in
	46 B.C., the year 709 of Rome. The Julian calendar, on the assumption that the
	true year was 365 1/4 days, gave every fourth year 366 days. The Venerable Bede,
	an Anglo-Saxon monk, announced in A.D. 730 that the 365 1/4-day Julian year was
	11 minutes, 14 seconds too long, a cumulative error of about a day every 128
	years, but nothing was done about it for more than 800 years. By 1582, the
	accumulated error was estimated to amount to 10 days. In that year Pope Gregory
	XIII decreed that the day following Oct. 4, 1582, should be called Oct. 15, thus
	dropping 10 days and initiating what became known as the Gregorian calendar.
	
	However, with common years of 365 days and a 366-day leap year every fourth year,
	the error in the length of the year would have recurred at the rate of a little
	more than 3 days every 400 years. Therefore, 3 of every 4 centesimal years
	(years ending in 00) were made common years, not leap years. Thus, 1600 was a
	leap year but 1700, 1800, and 1900 were not. The year 2000 will be a leap year.
	Leap years are those years divisible by 4, except centesimal years, which are
	common unless divisible by 400.
	
	The year 2000 is arriving soon, and Visual FoxPro is indeed calculating leap year
	correctly. The following examples show how to check to see if a centesimal year
	is a leap year or not.
	
	Type the following in the Command window:
	
	     SET CENTURY ON
	     ? {02/28/1900} + 1
	     ? {02/28/2000} + 1
	
	The first example returns 03/01/1900 to the screen, and the second example
	returns 02/29/2000.
	
	For more information about how Microsoft products are affected by year 2000 (Y2K)
	issues, please see the following Microsoft World Wide Web site:
	
	  http://www.microsoft.com/technet/year2k/product/product.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 kbvfp kbvfp300 kbvfp300b kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
