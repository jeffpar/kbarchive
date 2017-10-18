---
layout: page
title: "Q99061: Using REXX Program Flow-Control Commands"
permalink: kb/099/Q99061/
---

## Q99061: Using REXX Program Flow-Control Commands

	Article: Q99061
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article lists the program flow control capabilities of the REXX programming
	language and gives examples.
	
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
	
	ARG var1 var2 var3 ... var20 { splits out the "command line parameters" passed to
	a subroutine using CALL (or a function call with multiple parameters, see
	example) and puts them into var1 through var20. }
	
	CALL name var1 var2 ... var? { where name is a REXX label, built-in function or
	external routine and var1, etc. are parameters. Note that a built-in variable,
	RESULT, may be returned by CALL (see example) }.
	
	CALL ON [ERROR|FAILURE|HALT|NOTREADY] NAME routine_to_call { When the specified
	condition occurs, control is transferred to the named routine. }
	
	CALL OFF [ERROR|FAILURE|HALT|NOTREADY] { turns off the CALL ON for the specified
	condition }
	
	DO n|var = start_value TO end_value |FOREVER ... END DO WHILE condition|UNTIL
	condition ... END { see the explanation and example in the basic article }
	
	EXIT expression { Exit and abort the currently running program optionally
	returning expression. }
	
	IF condition THEN action ELSE action { see the explanation and example in the
	basic article, Q99060. }
	
	ITERATE name { to the next cycle of the current loop (or the loop specified by
	name which is used in the DO name = _ TO _ line) thus bypassing the instructions
	from this point to the end of the loop for this iteration. }
	
	LEAVE name { exit (end) the current loop or loop specified by name which is the
	variable used in the DO name = _ TO _ line. }
	
	NOP { NO oPeration, a do-nothing place holder for situations where an instruction
	is required but no action is wanted. }
	
	PROCEDURE [EXPOSE var1 var2] { this statement must appear after the colon
	identifying the subroutine name and either hides (without the EXPOSE keyword) or
	exposes variables inside the subroutine to the rest of the program. }
	
	RETURN [expression] { returns control to the caller optionally supplying an
	expression as a result. }
	
	SELECT; WHEN condition THEN action; .. OTHERWISE action; END { See the
	explanation in the introductory article, Q99060, for this command. }
	
	SIGNAL [OFF condition|ON condition label|label] { on the specified condition (if
	any) normal processing is terminated and transfer to label is done. SIGNAL OFF
	condition turns signaling off for that condition. Conditions are: ERROR, FAILURE
	(both the previous on command return), HALT (by external means), NOVALUE (use of
	an uninitialized variable) or SYNTAX (if REXX finds a source code syntax
	problem). }
	
	Example: (An analysis follows; you are encouraged to extract the code below and
	run it. If you do, remember to include the beginning comment so that OS/2
	ecognizes it as a REXX file.)
	
	  DO i = 1 TO 10
	  IF i = 5 THEN ITERATE
	  SELECT
	     WHEN i = 1 THEN CALL rtn_a out words of order These are
	     WHEN i > 3 THEN
	        IF done = 'yes' THEN
	           NOP
	        ELSE
	           DO
	           CALL rtn_c
	           SAY RESULT
	           END
	     OTHERWISE CALL routine_b
	  END
	  IF i = 4 THEN SAY "rtn_c's 'i = 5' didn't affect this loop"
	  SAY This is iteration i
	  IF i = 6 THEN
	  DO
	  z = function_a('arg1','arg2')
	  SAY z
	  END
	  IF i = 7 THEN SIGNAL early_exit
	  END
	  SAY Processing never gets here
	  early_exit:
	  SAY Left the routine before completion
	  EXIT
	
	  rtn_a:
	  ARG word1 word2 word3 word4 word5 word6
	  SAY word5 word2 word6 NO LONGER word1 word3 word4
	  RETURN
	
	  routine_b:
	  DO j = 1 TO 10
	  SAY This is pass j of iteration i
	  IF j = 2 THEN LEAVE
	  END
	  RETURN
	
	  rtn_c: PROCEDURE EXPOSE done
	  i = 5
	  SAY 'rtn_c set ' i ' to 5 but did not expose the variable'
	  done = 'yes'
	  RETURN 'Finished'
	
	  function_a:
	  PARSE ARG x , y
	  SAY x
	  SAY y
	  RETURN "This is a returned result"
	
	Analysis (cycle by cycle):
	
	The loop should theoretically cycle 10 times, but it will be interrupted (this is
	discussed later).
	
	On cycle 1 rtn_a was CALLed from the SELECT statement which prevented either
	routine_b or rtn_c from being called. Although the CALL passed only one argument
	(which was the string "out words of order These are") the ARG command at the
	beginning of rtn_a split the string into its individual words allowing the SAY
	command just following it to rearrange them correctly and add the words "NO
	LONGER" before displaying the message. Once SELECT processing is done control
	passes to the statement after SELECT's END statement. Because "SAY This is
	iteration i" is the only unconditionally executed statement in the loop it is
	processed for each cycle.
	
	On cycles 2 and 3 the OTHERWISE clause of the SELECT statement is executed,
	CALLing routine_b, which would have normally produced 10 "This is pass _ of
	iteration _" every time it was called, had it not been for the LEAVE command,
	which interrupted the loop on its second pass.
	
	On cycle 4 the "WHEN i > 3 ..." condition is processed. Because the variable
	"done" is not yet set rtn_c is CALLed. Because of the "PROCEDURE EXPOSE done"
	clause, the assignment "i = 5" is hidden from the CALLing routine but "done" is
	exposed, allowing the IF test for it in the SELECT statement to function
	correctly. This can be seen by the processing of the statement "IF i = 4 THEN
	SAY "rtn_c's 'i = 5' didn't affect this loop"". Also note the SAY RESULT
	statement. This is a built-in variable which, if returned by the subroutine, is
	available after the CALL.
	
	On cycle 5 the "IF i = 5 THEN ITERATE" causes the cycle to be skipped entirely,
	but allows following cycles to continue processing normally. Note that the "SAY
	This is iteration i" is not processed for cycle 5.
	
	On cycle 6 the "WHEN i > 3 ..." option of the SELECT statement is again
	processed. However, since "done" was exposed in rtn_c, its value is now "yes"
	and the NOP command is processed. NOP was used so that a valid action was
	available for this condition. The "SAY This is iteration i" is again processed.
	Also note that function_a is called with two parameters separated by commas. The
	PARSE ARG x , y statement supplied them to function_a for use, when it was done
	it returned a result (required).
	
	On cycle 7 the "IF i = 7 THEN SIGNAL early_exit" is processed, preventing the
	processing of the loop for cycles 8, 9 and 10. Since control is passed to
	early_exit: the line just above it:
	
	     SAY Processing never gets here
	
	is never encountered. Had the loop ended normally it would have been processed.
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
