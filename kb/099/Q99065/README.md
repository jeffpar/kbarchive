---
layout: page
title: "Q99065: Using REXX System and Miscellaneous Commands"
permalink: kb/099/Q99065/
---

## Q99065: Using REXX System and Miscellaneous Commands

	Article: Q99065
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article lists what are typically considered to be "operating system"
	oriented commands (date, time, etc.) and miscellaneous capabilities of the REXX
	programming language, and gives examples.
	
	MORE INFORMATION
	================
	
	DISCLAIMER: This article is provided for users capable of developing programs
	with the information presented; it is not an extensive treatment of the language
	but rather a quick reference to aid someone in writing simple routines.
	Microsoft cannot support programming efforts beyond reproducing and submitting
	problems with the language implementation itself. If you need further
	assistance, consult REXX references such as "The REXX Language, A Practical
	Approach to Programming" by M. F. Cowlishaw, Prentice-Hall, Englewood Cliffs,
	1985.
	
	Examples are given at the bottom of the listing. Braces ({}) are used to indicate
	comments.
	
	  BEEP(frequency_in_hertz, duration_in_milliseconds)
	
	  CONDITION(option)
	
	     { Returns the information requested by "option" for the current
	     trap condition.  Options are: NAME, DESCRIPTION, INSTRUCTION
	     (returns CALL or SIGNAL) and STATUS (returns ON, OFF or DELAY which
	     means delay any new occurrence). CONDITION returns null ("") is no
	     trap is active. }
	
	  DATE(option)
	
	     { Returns various formats of days based on the option supplied.
	
	       B - Days since a theoretical January 1, year 1.
	       M - Alphabetical representation of the month (Ex: June)
	       E - dd/mm/yy
	       O - yy/mm/dd
	       S - yyyymmdd (note four year digits and no slashes)
	       U - mm/dd/yy
	       W - Alphabetical representation of the day (for example, Monday)
	
	       }
	
	  DIRECTORY(drive:directory)
	
	     { Returns the drive and path of the current directory (no
	     drive:directory supplied) or the new directory (drive:directory
	     specified and exists.) }
	
	  DROP variable
	
	     { "Undefines" the variable. }
	
	  ENDLOCAL()
	
	     { Restores the directory and environment status to its pre-SETLOCAL
	     condition. Returns 1 for success, zero otherwise. }
	
	  ERRORTEXT(number)
	
	     { Returns the message text associated with number. }
	
	  FILESPEC(requested_information, file_specification)
	
	     { Returns the drive, path, or file specification depending on
	     whether requested_information is given as D, P, or N. }
	
	  INTERPRET(expression)
	
	     { Dynamically assemble expression from its components and then
	     process it. }
	
	  OPTIONS
	
	     { This is a double-byte language feature, consult REXX programming
	     books for details. }
	
	  SETLOCAL()
	
	     { Saves the current drive and environment settings of a running
	     REXX program and returns a 1 for success or a zero otherwise. }
	
	  SYMBOL('var')
	
	     { Should return a result indicating if var is a variable (returns
	     VAR), a literal (returns LIT) or invalid (returns BAD). Note that
	     the name of the variable needs to be in quotes. }
	
	  TIME('C'|'E'|'H'|'L'|'M'|'R'|'S')
	
	     { Returns the time in civil format (hh:mm:[a|p]m); elapsed
	     (sssssss.uu, seconds and hundredths of seconds since the start of
	     the clock); hours (since midnight); long (hh:mm:ss:uu); minutes
	     (since midnight); reset (returns the same form as elapsed and also
	     resets the elapsed timer) or seconds (since midnight). }
	
	  TRACE(A|C|E|F|I|L|N|O|R)
	
	     { Each letter refers to a type of trace: A(ll), C(ommands),
	     E(rror), F(ailure), I(ntermediate), L(abels), N(ormal), O(ff),
	     R(esults). C, E and F provide tracing on commands passed to the
	     operating system with E and F (= Normal) restricted to problems, L,
	     A, R, and I provide increasing levels of detail (in the order
	     given), O turns tracing off. A question mark preceding one of the
	     preceding letters causes the program to process step- by-step
	     waiting for an Enter before proceeding at the points indicated by
	     the letter. No example has been given for this command, you are
	     encouraged to experiment with it yourself. }
	
	  VALUE(var, value_to_set, flag)
	
	     { Returns the value of var and, if specified, then replaces it with
	     value_to_set. If flag is specified as OS2ENVIRONMENT then var
	     refers to an OS/2 environment variable such as "path" allowing
	     reading/setting of environment variables. }
	
	  XRANGE(start,end)
	
	     { Returns a sequential list of the unique values between start and
	     end. Example: XRANGE(2,7) would return the string "234567". }
	
	  Examples follow. Create a REXX program and run it to see the results.
	
	  SAY 'DATE(B) returns ' DATE(b)
	  SAY 'DATE(M) returns ' DATE(m)
	  SAY 'DATE(E) returns ' DATE(e)
	  SAY 'DATE(O) returns ' DATE(o)
	  SAY 'DATE(S) returns ' DATE(s)
	  SAY 'DATE(U) returns ' DATE(u)
	  SAY 'DATE(W) returns ' DATE(w)
	  say "FILESPEC('D','p:\path\file.ext') returns:"
	  say FILESPEC('D','p:\path\file.ext')
	  say "FILESPEC('N','p:\path\file.ext') returns:"
	  say FILESPEC('N','p:\path\file.ext')
	  say "FILESPEC('P','p:\path\file.ext') returns:"
	  say FILESPEC('P','p:\path\file.ext')
	  say "TIME('C') returns " TIME('c')
	  say "TIME('E') returns " TIME('e')
	  say "TIME('H') returns " TIME('h')
	  say "TIME('L') returns " TIME('l')
	  say "TIME('M') returns " TIME('m')
	  say "TIME('R') returns " TIME('r')
	  say "TIME('S') returns " TIME('s')
	  a = 'pau'
	  b = 'se'
	  say "INTERPRET(a||b) (a = 'PAU', b = 'SE') follows"
	  interpret(a||b)
	  say 'BEEP(1000,300) sounds like this ' BEEP(1000,300)
	  say "XRANGE('31'x,'41'x) returns " XRANGE('31'x,'41'x)
	  say 'DIRECTORY() returns ' DIRECTORY()
	  say 'ERRORTEXT(27) returns ' ERRORTEXT(27)
	  x = 5
	  say 'the value of x is ' x
	  DROP x
	  say 'After DROP x the value of x is ' x
	  pause
	  say "SYMBOL('a') returns " SYMBOL('a')
	  say "SYMBOL('xyz') returns " SYMBOL('xyz')
	  say "SYMBOL('/') returns " SYMBOL('/')
	  say "SETLOCAL, VALUE and ENDLOCAL example follows"
	  say "A '1' indicates SETLOCAL success " SETLOCAL()
	  say 'Current path is: 'VALUE('path','q:','OS2ENVIRONMENT')
	  say 'This path is now:'
	  path
	  say "A '1' indicates ENDLOCAL success " ENDLOCAL()
	  say 'The path is back to:'
	  path
	  EXIT
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
