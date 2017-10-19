---
layout: page
title: "Q196647: PRB: SUBSTR(SYS(2015),3,10) as Alias Name Causes Syntax Error"
permalink: /kb/196/Q196647/
---

## Q196647: PRB: SUBSTR(SYS(2015),3,10) as Alias Name Causes Syntax Error

	Article: Q196647
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a,3.0b; MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; UNIX:2.6; WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp kbvfp300 kbvfp500 kbvfp500a kbvfp600 kbXBase kbXPlatform KbDBFDBC
	Last Modified: 08-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs that have been working properly using the SUBSTR() and SYS(2015)
	functions suddenly produce a syntax error.
	
	CAUSE
	=====
	
	The assignment of an illegal value, or memory variable containing an illegal
	value, to a table, alias or array name.
	
	RESOLUTION
	==========
	
	The solution to the problem is to make sure that the result of the SUBSTR() and
	SYS(2015) functions do in fact begin with a letter or an underscore as required.
	
	- Use the entire result of the SYS(2015) function, without truncating through
	  the SUBSTR() function. This gives a leading character of an underscore '_'.
	
	        x = SYS(2015)
	
	  -or-
	
	- Use a concatenated string that adds a character letter to the beginning of
	  the desired string. For example:
	
	        x = SUBSTR(SYS(2015), 3, 10)
	        x = "A" + x
	
	On operating systems that are limited to eight character file names, you can use
	the following code:
	
	     x = "_" + SUBSTR(SYS(2015), 4)
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Depending upon the character string length and logic you use to obtain it, the
	syntax error may start occurring on computers with a system date of November 18,
	1998.
	
	For example, for computer system dates between 11/17/1998 and 11/10/1999 the
	leading character of a value assigned to variable 'x' will be a numeric digit:
	
	     x = SUBSTR(SYS(2015), 3, 10)
	
	NOTE: Future date periods may also cause a similar problem.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Important: Remember to change your computer system clock to the correct date and
	time after completing the following tests.
	
	Set the computer system date to any date between November 18, 1998 and November
	10, 1999, using the Date/Time Properties in Windows Control Panel.
	
	Note that the leading character of the value assigned to the memory variable is a
	numeric digit.
	
	Alias Names
	-----------
	
	In the specific case of November 18th, 1998 run the following code:
	
	     ? DATE()
	     x=SYS(2015)
	     ? x
	     y=SUBSTR(x,3,10)
	     ? y
	     CREATE CURSOR (y) (field1 c(10))
	
	Note that the leading character of the value assigned to the memory variable 'y'
	is a numeric digit, depending upon the computer system date. Observe that the
	command to create a cursor with that name produces a syntax error.
	
	Array Names
	-----------
	
	    x=SUBSTR(SYS(2015), 3, 10)
	     DIMENSION &x(1,2)
	
	Running the preceding code returns the following error message:
	
	  Command contains unrecognized phrase/keyword.
	
	REFERENCES
	==========
	
	For additional information about the ALIAS parameter of the USE command, the
	SYS(3) or SYS(2015) functions, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q97633 PRB: Alias Problems with Table Name Starting with Number
	
	Microsoft FoxPro Help: search on: "USE command"; "ALIAS argument"; "SYS(3) Legal
	File Name"; "SYS(2015) - Unique Procedure Name"
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by Perry
	Newton, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp kbvfp300 kbvfp500 kbvfp500a kbvfp600 kbXBase kbXPlatform KbDBFDBC 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:2.5b,2.5c,2.6a,3.0b; MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; UNIX:2.6; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
