---
layout: page
title: "Q145605: HOWTO: Modify the Results of the MDY() Function"
permalink: kb/145/Q145605/
---

## Q145605: HOWTO: Modify the Results of the MDY() Function

	Article: Q145605
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a; WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode kbvfp
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the day of a month is between the first and the ninth, the MDY function
	returns the date with a zero (0) in front of the day. This article gives you a
	program that removes the zero (0) from the results of the MDY format.
	
	MORE INFORMATION
	================
	
	Normally, a date in the form of month/day/year does not have a zero in front of
	a day. The MDY() function always places a zero in front of single-digit days.
	The program listed in this article uses the functions MDY() and STRTRAN() to
	remove the blank space and zero and replace it with only a blank space.
	
	The program searches the value returned from the MDY() function for a blank space
	followed by a zero. If it finds this combination, the STRTRAN() function
	replaces it with a blank space.
	
	WARNING: The MDY() function changes the data type of the variable from a date
	type to a character type so that the unwanted zero can be removed. If the
	variable must remain as a date type, no setting or function exists to remove it.
	Furthermore, after modifying the format of the variable, you can't use the
	CTOD() functions to convert it back to its original date format.
	
	Create a program file named Test that contains the following code. Then run the
	program.
	
	     SET CENTURY ON
	     x={01/01/1996}
	     y={01/01/2000}
	     ? MDY(x)
	     ? MDY(y)
	     ? STRTRAN(MDY(x)," 0"," ")
	     ? STRTRAN(MDY(y)," 0"," ")
	     SET CENTURY OFF
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300 kbVFP300b
	Version           : MACINTOSH:2.6a; WINDOWS:3.0,3.0b
	Issue type        : kbhowto
	
	=============================================================================
	
