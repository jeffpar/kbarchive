---
layout: page
title: "Q114354: How to Find the Number of Weekdays Between Two Dates"
permalink: kb/114/Q114354/
---

## Q114354: How to Find the Number of Weekdays Between Two Dates

	Article: Q114354
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a; MS-DOS:2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to programmatically determine the number of weekdays
	between and including a start date and an end date.
	
	MORE INFORMATION
	================
	
	Code Example
	------------
	
	     *program to return the number of weekdays between two dates
	     *beginning with d1 through d2
	     PARAMETERS d1,d2
	     IF (TYPE("d1")="D" AND TYPE("d2")="D")   && both variables present?
	        wd=0   && variable to hold total number of weekdays
	        FOR D=0 TO d2-d1
	           IF BETWEEN(DOW(d1+D),2,6)   && 2=Mon 6=Fri
	              wd=wd+1
	           ENDIF
	        ENDFOR
	        RETURN wd
	     ELSE
	        RETURN 0
	     ENDIF
	
	Save the program as WEEKDAYS.PRG. To call it, issue the command:
	
	  ? WEEKDAYS({08/16/61}, {12/31/61})
	
	The answer displayed in the active window should be 98.
	
	NOTE: This program doe not check for invalid dates, such as {2/30/61}.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin 2.50 2.50a 2.50b 2.50c 2.60
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbVFP300
	Version           : MACINTOSH:2.5x,2.6a; MS-DOS:2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
