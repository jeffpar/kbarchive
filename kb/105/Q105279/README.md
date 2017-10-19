---
layout: page
title: "Q105279: How to Remove Carriage Returns/Linefeeds from @ ... EDIT"
permalink: /kb/105/Q105279/
---

## Q105279: How to Remove Carriage Returns/Linefeeds from @ ... EDIT

	Article: Q105279
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When information is entered in a character field in a database through an @ ...
	EDIT command and the RETURN key is pressed in the edit region during the input
	process, a carriage return and a linefeed are added to the text. These control
	codes can cause problems if the text field must be written out to a text file or
	another databases without control codes in the field.
	
	To remove the carriage returns and linefeeds and replace them with a space in
	both FoxPro for MS-DOS and Windows, enter the following code either in the
	Command window or in a program
	
	     REPLACE ALL <fieldname> WITH STRTRAN(<fieldname>,CHR(13)+CHR(10),' ')
	
	where <fieldname> is the name of the database field that contains the
	carriage returns and linefeeds.
	
	MORE INFORMATION
	================
	
	When the database is browsed in FoxPro for MS-DOS, you can view control codes in
	the fields. In the active record, the field will contain two accented characters
	together, an "i" and an "e" representing the carriage return and linefeed. In
	the other records in the Browse window, a musical note and a circle in a box
	represents the carriage return and linefeed. In FoxPro for Windows, the carriage
	return and linefeed are represented by two vertical bars in all records in the
	Browse window.
	
	Additional query words: VFoxWin FoxDos FoxWin get line feed cr/lf
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
