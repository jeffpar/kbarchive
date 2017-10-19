---
layout: page
title: "Q253932: PRB: Incorrect Line of Code Displayed in Debugger"
permalink: /kb/253/Q253932/
---

## Q253932: PRB: Incorrect Line of Code Displayed in Debugger

	Article: Q253932
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 28-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The line of code that is currently executing in the Trace window either does not
	move at all or jumps erratically and the program line of code does not match up
	with the debugger line of code.
	
	CAUSE
	=====
	
	Visual FoxPro's debugger has a command line limit of 2048 characters.
	
	RESOLUTION
	==========
	
	To correct this behavior, you must reduce the length of the line of code.
	
	Here are three ways to accomplish this task:
	
	- Remove extra white spaces in the line of code, such as tabs, extra spaces on
	  either side of operational expressions such as +, -, <, >, spaces after
	  commas in parameter lists, and so forth.
	
	- Change variable names to shorter variable names.
	
	- Use Macro expansion and build a text string for evaluation at run-time.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Copy the following code into a .prg file and then run it:
	
	  SET STEP ON
	  lcResultsFile = SYS(2015)
	
	  Thisform_SummaryType_VALUE = 0
	
	  DIMENSION THISFORM_ataginfo[10,2]
	  THISFORM_ataginfo = 1
	  nRow = THISFORM_ataginfo(1,1) + 1
	  nColumn = THISFORM_ataginfo(1,2)
	
	  *!*	This shows the correct line of code in the Output
	  *!*	window of the debugger.
	  DEBUGOUT LINENO()
	
	  DO CASE
	  CASE Thisform_SummaryType_VALUE = 1
	  CASE Thisform_SummaryType_VALUE = 2
	
	  **************************************************************************
	  * In testing, the cursor came into this CASE, even though the            *
	  * expression is false. Subsequent steps just left the pointer            *
	  * on this line of code. Do not indent this code segment.                 *
	  **************************************************************************
	  * Look in the debugger output window to see the current line number
	  CREATE CURSOR &lcResultsFile (date_time T,DATE D,Date_hour T,;
	  Result1 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST31 N(6),STS1 c(3),;
	  Result2 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST32 N(6),STS2 c(3),;
	  Result3 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST33 N(6),STS3 c(3),;
	  Result4 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST34 N(6),STS4 c(3),;
	  Result5 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST35 N(6),STS5 c(3),;
	  Result6 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST36 N(6),STS6 c(3),;
	  Result7 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST37 N(6),STS7 c(3),;
	  Result8 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST38 N(6),STS8 c(3),;
	  Result9 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST39 N(6),STS9 c(3),;
	  Result10 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST310 N(6),STS10 c(3),;
	  Result11 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST311 N(6),STS11 c(3),;
	  Result12 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST312 N(6),STS12 c(3),;
	  Result13 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST313 N(6),STS13 c(3),;
	  Result14 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST314 N(6),STS14 c(3),;
	  Result15 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST315 N(6),STS15 c(3),;
	  Result16 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST316 N(6),STS16 c(3),;
	  Result17 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST317 N(6),STS17 c(3),;
	  Result18 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST318 N(6),STS18 c(3),;
	  Result19 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST319 N(6),STS19 c(3),;
	  Result20 N(THISFORM_ataginfo(1,1)+1,THISFORM_ataginfo(1,2)) NULL,ST320 N(6),STS20 c(3),;
	  Result21 N(nRow,                    THISFORM_ataginfo(1,2)) NULL,ST321 N(6),STS21 c(3),;
	  Result22 N(nRow, nColumn) NULL,ST322 N(6),STS22 c(3),;
	  Result23 N(nRow, nColumn) NULL,ST323 N(6),STS23 c(3),;
	  Result24 N(nRow, nColumn) NULL,ST324 N(6),STS24 c(3))
	
	  **************************************************************************
	  * You are just past the big line of code, remove a space from above to   * * fix the problem.                                                       *  *                                                                        *
	  **************************************************************************
	
	  CASE Thisform_SummaryType_VALUE = 3
	  	=ACOPY(THISFORM_ataginfo, aX)
	  CASE Thisform_SummaryType_VALUE = 4
	  OTHERWISE
	  	DEBUGOUT LINENO()
	  	latagcounter = 1
	  	lcfieldstring = "(date_time T,Date D,Date_hour T"
	  	DO WHILE latagcounter <= 8
	  		DEBUGOUT LINENO()
	  		lcfieldstring = lcfieldstring + ", Result" + ALLTRIM(STR(latagcounter)) + " N(";
	  			+ ALLTRIM(STR(THISFORM_ataginfo(latagcounter, 1) + 1)) + " ,";
	  			+ ALLTRIM(STR(THISFORM_ataginfo(latagcounter, 2))) + ") NULL, ";
	  			+ "ST3"+ALLTRIM(STR(latagcounter));
	  			+ " N(6)," + " STS" + ALLTRIM(STR(latagcounter)) + " C(3)"
	  		DEBUGOUT LINENO()
	  		latagcounter=latagcounter+1
	  		DEBUGOUT LINENO()
	  	ENDDO
	  	DEBUGOUT LINENO()
	  	lcfieldstring=lcfieldstring+")"
	  	CREATE CURSOR &lcResultsFile &lcfieldstring
	  ENDCASE
	  SELECT &lcResultsFile
	  USE
	
	Note that as you step through the code in the Trace window, the debugger
	incorrectly goes into the Case statement and highlights the long line of code.
	If you continue to step through the code, look at the Output window and you see
	that the correct line of code executes. You can even put the LINE function in
	the Watch window, which shows you the line on which the debugger stops. In this
	case, it line 49.
	
	To fix this problem, remove at least one space from line 49 in the program. This
	reduces the characters in the command to an acceptable length. Run the program
	again, and the debugger correctly reflects the line in the Trace window. Also,
	the LINE function in the Watch window now corresponds to the correct line.
	
	To see the proper behavior of the debugger, remove at least one space in the
	second Case statement from the preceding code, which also makes the number of
	characters in the line of acceptable.
	
	Additional query words: JUMP, ERRATIC, STUCK
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
