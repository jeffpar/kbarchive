---
layout: page
title: "Q178890: HOWTO: Use ON ERROR To Debug Applications"
permalink: /kb/178/Q178890/
---

## Q178890: HOWTO: Use ON ERROR To Debug Applications

{% raw %}

	Article: Q178890
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbHWMAC kbvfp300 kbvfp500 kbvfp600
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxPro provides the ON ERROR command to allow programmers to trap specific
	errors that occur within applications. This article describes how to use an
	error trapping routine that stores relevant debugging information in a FoxPro
	table.
	
	The code included in this article traps errors that occur within a FoxPro
	application and stores the following information to a table:
	
	- The computer name where the error occurred.
	
	- The error number.
	
	- The error message.
	
	- The line of code where the error occurred if the source code is available.
	
	- The program file where the error occurred.
	
	- The line number where the error occurred.
	
	- The name of the currently selected table when the error occurred.
	
	- The date and time of the error.
	
	MORE INFORMATION
	================
	
	Faulty syntax and/or logic in an application can result in a wide array of
	trappable error conditions. Some of the errors that occur in an application may
	not be known until the application has been tested by end users. While the
	default FoxPro error message display contains useful information for a
	programmer, its appearance may be confusing to an end user. Likewise, end users
	usually have little time to carefully note and report errors that occur while an
	application is executing. This code may also prove useful in determining the
	cause of intermittent errors that occur when no one is normally present to
	witness the error.
	
	1. Create a program called Errutil.prg with the following code.
	
	        ON ERROR DO errhand IN errutil ;
	        WITH SYS(0), ERROR(), MESSAGE(), MESSAGE(1), ;
	        PROGRAM(), LINENO(1), DBF(), DATE(), TIME()
	        * End of error trap setup.
	
	        PROCEDURE errhand
	        PARAMETER m.machine, m.messgnum, m.messg, m.linecode, ;
	           m.callprog, m.inline, m.OPENTABL, m.errdate, ;
	           m.errtime
	           m.errspace=SELECT()      && Store current work area.
	           m.errorder=ORDER()       && Store current order.
	        IF LEN(ALLTRIM(m.callprog))=0
	           m.callprog="Command Line"
	          STORE SPACE(0) TO m.linecode
	        ENDIF
	        outmsgline="Error ; "+m.messg+CHR(13)+"Line "+STR(m.inline)+ ;
	             CHR(13)+ ;
	            "program name = "+m.callprog+CHR(13)+"Syntax is  :"+m.linecode
	        * Visual FoxPro users use =MESSAGEBOX(outmsgline,32+0)
	        * MAC uUse the FXALERT() Function in Foxtools.mlb
	        * FoxPro For Windows users use the MsgBox() Function in Foxtools.fll
	        WAIT WINDOW outmsgline TIMEOUT 5 && All versions can use this syntax.
	          IF !USED("ERRORLOG")
	        IF FILE("ERRORLOG.DBF")
	           SELECT 0
	           USE errorlog
	        ELSE
	           SELECT 0
	           thisversion=VERSION()
	           IF LEFT(ALLTRIM(thisversion),6)="Visual"
	              * Create Free table for Visual FoxPro Versions
	              CREATE TABLE errorlog FREE (machine c(20), messgnum N(4,0), ;
	                 messg c(70), linecode c(70), callprog c(40), ;
	                 inline N(6,0), OPENTABL c(25), errdate d, errtime c(8))
	           ELSE
	                 CREATE TABLE errorlog (machine c(20), messgnum N(4,0), ;
	                      messg c(70), linecode c(70), callprog c(40), ;
	                   inline N(6,0), OPENTABL c(25), errdate d, errtime c(8))
	                 ENDIF
	              ENDIF
	          ENDIF
	          INSERT INTO errorlog FROM MEMVAR
	          SELECT errorlog                  && Select errorlog table.
	          USE                              && Close errorlog table.
	          SELECT (m.errspace)              && Return to stored work area.
	          IF !EMPTY(ALIAS())
	        SET ORDER TO (m.errorder)
	         ENDIF
	        RELEASE ALL LIKE m.messgnum, m.messg, m.linecode, m.callprog, ;
	            m.inline
	        RETURN
	
	2. Create a program called Ztest.prg that contains the following lines of code:
	
	        DO errutil          && Activates ON ERROR routine in Errutil.prg.
	        USE c:\noexist.dbf  && These files should not exist in order to
	        DO C:\noexist.prg   && produce errors for testing purposes.
	        ON ERROR            && Turns off active ON ERROR routine.
	
	3. Type the following in the Visual FoxPro Command window:
	
	        Do ZTest.prg.
	
	  Two Wait windows appear identifying the offending lines of code. This
	  information is placed into the Errorlog.dbf file. The windows disappear after
	  five seconds.
	
	4. Activate the Command window, then open and browse the Errorlog table.
	
	REFERENCES
	==========
	
	FoxPro Help, search on: "ON ERROR"; "ERROR()"; "MESSAGE()"; "SYS()";
	"PROGRAM()"; "DBF()"; "LINENO()"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbHWMAC kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
