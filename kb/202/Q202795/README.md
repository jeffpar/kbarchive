---
layout: page
title: "Q202795: PRB: REPLACE Command is Slow in Some Instances"
permalink: /kb/202/Q202795/
---

## Q202795: PRB: REPLACE Command is Slow in Some Instances

	Article: Q202795
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp300b kbvfp500 kbvfp600 kbXBase KbDBFDBC
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the APPEND BLANK and REPLACE commands to add data to a table, adding
	a large number of records could take much longer in some cases versus others. If
	the SET TALK command is ON and a REPLACE command is used on each field when you
	add values to the record, then the amount of time greatly increases versus using
	one REPLACE command with commas separating each field and its value. Of course,
	using SET TALK OFF greatly increases speed regardless of whether you use one or
	more REPLACE commands.
	
	CAUSE
	=====
	
	Using the REPLACE command on each field while SET TALK is set to ON makes
	multiple REPLACE's slower because of the echoing to the desktop of when each
	REPLACE executes.
	
	RESOLUTION
	==========
	
	Try one of the following to increase performance when you use the REPLACE
	command:
	
	- Use the SET TALK OFF command.
	
	- Use a single REPLACE command with commas separating the fields and values
	
	- Use the INSERT INTO command, which is much faster.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If SET TALK is set to ON and 5000 records are added to a table with the APPEND
	BLANK command and a REPLACE command for each field, the time it would take on an
	average computer would be around 20 seconds. Adding the same amount of records
	using a single REPLACE command for all the fields would take a couple of seconds
	to complete. The reason that the individual REPLACE commands take so long is
	that each REPLACE is echoed to the screen. Using the INSERT command would be an
	even faster way to add data to the table.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code to build the table and then time the REPLACE command.
	
	  SET TALK ON  &Change this to OFF for faster REPLACE's.
	  CREATE TABLE bigtable ;	
	  (Fld1 c(10), ;	
	  Fld2 c(10), ;	
	  Fld3 c(10), ;	
	  Fld4 c(10), ;
	          Fld5 c(10), ;	
	  	Fld6 i, ;	
	  	Fld7 i, ;	
	  	Fld8 i, ;	
	  	Fld9 i, ;	
	  	Fld10 i)
	  	USE bigtable
	  	CLEAR
	     beg_counter = SECONDS()
	     FOR x = 1 TO 5000	
	     APPEND BLANK
	  	REPLACE Fld1 WITH 'aaaaa' + ALLTRIM(STR(x))
	  	REPLACE Fld2 WITH 'bbbbb' + ALLTRIM(STR(x))
	  	REPLACE Fld3 WITH 'ccccc' + ALLTRIM(STR(x))
	  	REPLACE Fld4 WITH 'ddddd' + ALLTRIM(STR(x))
	  	REPLACE Fld5 WITH 'eeeee' + ALLTRIM(STR(x))
	  	REPLACE Fld6 WITH x
	  	REPLACE Fld7 WITH x	
	  	REPLACE Fld8 WITH x	
	  	REPLACE Fld9 WITH x
	  	REPLACE Fld10 WITH x
	  	ENDFOR
	  	counter = SECONDS() - beg_counter
	  ? "Individual REPLACE commands took: " + ALLTRIM(STR(counter,4,2)) +"    seconds."
	
	  beg_counter = SECONDS()
	   FOR x = 1 TO 5000	
	    APPEND BLANK
	  	REPLACE Fld1 WITH 'aaaaa' + ALLTRIM(STR(x)), ;
	  	Fld2 WITH 'bbbbb' + ALLTRIM(STR(x)), ;	
	  	Fld3 WITH 'ccccc' + ALLTRIM(STR(x)), ;
	  	Fld4 WITH 'ddddd' + ALLTRIM(STR(x)), ;	
	  	Fld5 WITH 'eeeee' + ALLTRIM(STR(x)), ;
	  	Fld6 WITH x, ;	
	  	Fld7 WITH x, ;	
	  	Fld8 WITH x, ;	
	  	Fld9 WITH x, ;	
	  	Fld10 WITH x
	  		
	   ENDFOR
	     counter = SECONDS() - beg_counter
	     ? "One REPLACE command: " + ALLTRIM(STR(counter,4,2)) + " seconds."
	     beg_counter = SECONDS()
	     FOR x = 1 TO 5000
	  	INSERT INTO bigtable (Fld1, Fld2, Fld3, ;
	                                Fld4, Fld5, Fld6, ;
	                                Fld7, Fld8, Fld9, ;
	                                Fld10) VALUES ('aaaaa' + ;
	                                ALLTRIM(STR(x)), 'bbbbb' + ;
	                                ALLTRIM(STR(x)), 'ccccc' + ;
	                                ALLTRIM(STR(x)), 'ddddd' + ;
	                                ALLTRIM(STR(x)), 'eeeee' + ;
	                                ALLTRIM(STR(x)), x, x, x, x, x)
	     ENDFOR
	     counter = SECONDS() - beg_counter
	     ? "The INSERT command: " + ALLTRIM(STR(counter,4,2)) + " seconds." 
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbDatabase kbvfp300b kbvfp500 kbvfp600 kbXBase KbDBFDBC 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
