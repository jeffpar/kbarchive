---
layout: page
title: "Q107416: INFO: User-Defined Function to Convert a Date into Words"
permalink: kb/107/Q107416/
---

## Q107416: INFO: User-Defined Function to Convert a Date into Words

	Article: Q107416
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	The following user-defined function (UDF) uses the FoxPro functions CDAY(),
	CMONTH(), DTOC(), and DTOS() to obtain the character representations of the
	day and month. It then computes the "st", "nd", "rd", and "th" suffixes and
	returns the date in words to the calling procedure.
	
	  TheDate = {01/01/93}
	  @ 10,20 SAY SpellDat(TheDate)
	  RETURN
	
	  *********************************************************************
	  * Function.: SPELLDAT
	  * Notes....: This function converts a date into a specific format in
	  *            words. For example, 01/01/93 = Friday, January 1st, 1993
	  *
	  * Parameters: Mdate - The expression to convert.
	  *********************************************************************
	  FUNCTION  SpellDat
	  PARAMETER Mdate
	  Mday    = CDOW(Mdate)
	  Mmonth  = CMONTH(Mdate)
	  Numday  = SUBSTR(DTOC(Mdate),4,2)
	  NumYear = SUBSTR(DTOS(Mdate),1,4)
	  Nday    = VAL(NumDay)
	  HalfDay = VAL(SUBSTR(NumDay,2,1))
	  NumDay  = IIF(Nday<=9,STR(Nday,1,0),NumDay)
	  IF Nday > 3 AND Nday < 21
	
	  Suff = "th"
	
	  ELSE
	
	  Suff = SUBSTR("thstndrdthththththth",(HalfDay*2)+1,2)
	
	  ENDIF
	  RETURN (Mday+", "+Mmonth+" "+NumDay+Suff+", "+NumYear)
	
	Additional query words: VFoxWin FoxDos FoxWin long alpha alphabet
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP500 kbVFP600
	Version           : MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
