---
layout: page
title: "Q126969: PRB: Running Genxtab with an Empty Table Causes Error"
permalink: /kb/126/Q126969/
---

## Q126969: PRB: Running Genxtab with an Empty Table Causes Error

	Article: Q126969
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When GENXTAB.PRG is run from an application, and the current table or cursor
	does not contain any records, GENXTAB.PRG issues one of the following error
	messages:
	
	- Cannot prepare crosstab on empty database.
	
	-or-
	
	- Variable '_WIN' not found.
	
	
	In either case, the error message will appear, and your program will exit.
	
	CAUSE
	=====
	
	Cross tabulation requires that a table or cursor (usually the result of a query)
	with only three fields be open in the selected work area.
	
	RESOLUTION
	==========
	
	Please see the workaround listed in the "More Information" section of this
	article.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy one of the following sections of code, depending on your version of
	  FoxPro, to a PRG file. The SELECT, DO (_GENXTAB), and BROWSE NOMODIFY lines
	  were created using the RQBE and copied to a PRG:
	
	  Code for FoxPro 2.x
	  -------------------
	
	     IF !USED("customer")
	        USE customer
	     ENDIF
	
	     STORE "C:\<FoxPro Directory>\GENXTAB.PRG" TO _GENXTAB
	
	     SELECT Customer.cno, Customer.state, Customer.ytdpurch;
	        FROM Customer;
	        GROUP BY Customer.cno, Customer.state;
	        ORDER BY Customer.cno, Customer.state;
	        WHERE alltrim(upper(state))="JP" INTO CURSOR SYS(2015)
	     DO (_GENXTAB) WITH 'Query'
	     BROWSE NOMODIFY
	     WAIT WINDOW "HELLO WORLD"
	
	  The WHERE clause in the SELECT statement returns an empty cursor. Therefore,
	  the BROWSE and WAIT WINDOW commands after the DO (_GENXTAB) WITH 'Query' will
	  never get executed.
	
	  Code for Visual FoxPro
	  ----------------------
	
	     IF !USED("customer")
	           USE c:\vfp\samples\data\customer
	     ENDIF
	
	     SELECT Customer.cust_id, Customer.company, Customer.maxordamt;
	      FROM customer;
	      WHERE Customer.state = "WJ";
	      GROUP BY Customer.cust_id, Customer.company;
	      ORDER BY Customer.cust_id, Customer.company;
	      INTO CURSOR SYS(2015)
	      DO (_GENXTAB) WITH 'Query1'
	     BROWSE NOMODIFY
	     WAIT WINDOW "HELLO WORLD"
	
	2. Create a new project, and add the program to the project.
	
	3. Build an .EXE or .APP from the project.
	
	4. Run the .EXE or .APP and notice that the BROWSE and WAIT WINDOW commands will
	  not be executed.
	
	WORKAROUND
	==========
	
	1. Replace the program listed above with the following:
	
	     IF !USED("customer")
	          USE customer
	     ENDIF
	
	     STORE "C:\<FoxPro Directory>\GENXTAB.PRG" TO _GENXTAB
	
	     SELECT Customer.cno, Customer.state, Customer.ytdpurch;
	        FROM Customer;
	        GROUP BY Customer.cno, Customer.state;
	        ORDER BY Customer.cno, Customer.state;
	        WHERE alltrim(upper(state))="JP" INTO CURSOR SYS(2015)
	
	     IF _TALLY !=0 &&if results are equal to 0 GENXTAB.PRG WILL NOT EXECUTE
	        DO (_GENXTAB) WITH 'Query'
	        BROWSE NOMODIFY
	     ENDIF
	
	     WAIT WINDOW "HELLO WORLD"
	
	2. Create a new project, and add the program to the project.
	
	3. Build an .EXE or .APP from the project.
	
	4. Run the .EXE or .APP and notice that the WAIT WINDOW command is now executed.
	
	Additional query words: VFoxWin FoxWin FoxDos 2.50c
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : MS-DOS:2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	
	=============================================================================
	
