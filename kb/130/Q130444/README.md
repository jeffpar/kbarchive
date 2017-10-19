---
layout: page
title: "Q130444: HOWTO: Calculating Years, Months, and Days Between Two Dates"
permalink: /kb/130/Q130444/
---

## Q130444: HOWTO: Calculating Years, Months, and Days Between Two Dates

	Article: Q130444
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 04-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The program in this article shows by example how to calculate the combination of
	days, months, and years between two dates (starting date and ending date) passed
	as date parameters.
	
	NOTE: The starting date must be an earlier date than the ending date.
	
	MORE INFORMATION
	================
	
	To run the program, save the following code as BTWNDATE.PRG. Then issue the
	following command where startdate and enddate are date values:
	
	  DO BTWNDATE.PRG WITH startdate, enddate
	
	For example:
	
	  DO BTWNDATE WITH {01/05/93},{01/05/95}
	
	Code Sample
	-----------
	
	     *
	     * BTWNDATE.PRG
	     *
	
	     PARAMETERS startdate, enddate
	     IF startdate > enddate
	
	          WAIT WINDOW "Start date must " + CHR(13) ;
	          + "be earlier than End date"
	          RETURN
	
	     ENDIF
	     IF PARAMETERS() <> 2
	
	          WAIT WINDOW "Not Correct Number of Parameters"
	          RETURN
	
	     ENDIF
	
	     PRIVATE  precmpdate, vyears, vmonths, vdays
	     precmpdate={}
	     vyears=0
	     vmonths=0
	     vdays=0
	     
	     * Calculate:
	     *     endofmonth is the last day of month prior to month of enddate
	     *
	     
	     endofmonth = CTOD(ALLTRIM(STR(MONTH(enddate))) + '/' + "01" + '/' + ;
	     ALLTRIM(STR(YEAR(enddate)))) - 1
	     *
	     IF MONTH(startdate) <= MONTH(enddate)
	
	          vyears = YEAR(enddate) - YEAR(startdate)
	          IF DAY(startdate) <= DAY(enddate)
	               vmonths = MONTH(enddate) - MONTH(startdate)
	               vdays = DAY(enddate) - DAY(startdate)
	          ELSE
	               IF MONTH(startdate) = MONTH(enddate)
	                    vyears = vyears - 1
	               ENDIF
	               vmonths = MOD(MONTH(enddate) - MONTH(startdate) - 1 + 12, 12)
	               vdays = endofmonth - precmpdate + DAY(enddate)
	          ENDIF
	
	     ELSE
	
	          vyears = YEAR(enddate) - YEAR(startdate) - 1
	          IF DAY(startdate) > DAY(enddate)
	               vmonths = MONTH(enddate) - MONTH(startdate) + 12 - 1
	               vdays = endofmonth - precmpdate + DAY(enddate)
	          ELSE
	               vmonths = MONTH(enddate) - MONTH(startdate) + 12
	               vdays = DAY(enddate) - DAY(startdate)
	          ENDIF
	
	     ENDIF
	     CLEAR
	     WAIT WINDOW  CHR(13) + ;
	               '  Years: '  + STR(vyears) + CHR(13) + ;
	               ' Months: ' + STR(vmonths) + CHR(13) + ;
	               '   Days: ' + STR(vdays) + CHR(13) + ;
	               CHR(13) + ;
	               ' Between ' + DTOC(startdate) + CHR(13) +;
	               '     and ' + DTOC(enddate)
	
	     RETURN
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300 kbVFP600
	Version           : MS-DOS:2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
