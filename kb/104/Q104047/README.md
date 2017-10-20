---
layout: page
title: "Q104047: How to Determine the Current DO Nesting Level"
permalink: /kb/104/Q104047/
---

## Q104047: How to Determine the Current DO Nesting Level

{% raw %}

	Article: Q104047
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.01; MS-DOS:1.02,2.0,2.01,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 1.02, 2.0, 2.5, 2.5a 
	- Microsoft FoxBASE+ for MS-DOS, version 2.01 
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxBASE+ and FoxPro allow DO programs to be nested. The maximum number of
	nesting levels for FoxBASE+ is 24, while FoxPro allows a maximum of 32 levels
	and Visual FoxPro allows a maximum of 128 levels. Exceeding this limit results
	in error number 103, "DO nesting too deep."
	
	MORE INFORMATION
	================
	
	DO levels are incremented as follows:
	
	1. When a DO program1 command is issued in the Command window, the DO level is
	  set to 1.
	
	2. If program1 includes a DO program2 statement, the DO level is incremented to
	  2. The DO level is incremented each time another DO program statement is
	  executed. In this scenario, program1 would be referred to as the calling
	  program, and program2 as the called called program.
	
	3. If a called program returns to a calling program, either by executing all
	  commands in the called program, or by explicitly issuing a RETURN command,
	  the DO level is decremented by 1.
	
	The following procedure allows you to determine the current DO level through use
	of the SYS(16) function. The SYS(16) function returns the name of the currently
	executing program. It also allows an optional numeric argument that indicates
	from how many levels back the program name should be fetched.
	
	1. Create a program named DOLVL.PRG with the following commands:
	
	        * Memory variable used:
	        * current - name of currently executing program
	        * do_ctr - counter which indicates current do level
	
	        current = SYS(16)
	        do_ctr = 1
	        DO WHILE .T.
	           IF SYS(16,do_ctr) <> current
	              do_ctr = do_ctr + 1
	            ELSE
	               * In FoxBASE+ or FoxPro 1.02, remove the word WINDOW
	               * in the following command
	               WAIT WINDOW "Current DO level is " + STR(do_ctr,1,0)
	               EXIT
	            ENDIF
	        ENDDO
	
	2. Save and execute the program. A message will be displayed as follows:
	
	  Current DO level is 1
	
	3. Create a program named TEST.PRG with the following command and execute the
	  program:
	
	  DO dolvl.prg
	
	4. A message will be displayed as follows:
	
	  Current DO level is 2
	
	Additional query words: VFoxWin FoxDos FoxWin foxbase+/mac
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbFoxBASE201Mac kbFoxBASE201DOS kbFoxBASESearch kbVFP300
	Version           : MACINTOSH:2.01; MS-DOS:1.02,2.0,2.01,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	

{% endraw %}
