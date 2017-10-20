---
layout: page
title: "Q99067: REXX Practices, Peculiarities and Problems"
permalink: /kb/099/Q99067/
---

## Q99067: REXX Practices, Peculiarities and Problems

{% raw %}

	Article: Q99067
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article discusses known peculiarities and problems with OS/2 version 1.31
	REXX.
	
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
	
	REXX files do NOT accept batch file labels; therefore, the GOTO command is
	unusable. Use the SIGNAL, LEAVE, or ITERATE instructions (see further below). A
	REXX label has a colon appended (rather than prepended) to it.
	
	There can be no spaces between a function call and its parentheses. For example,
	MAX (5,7) is not valid. It must be MAX(5,7).
	
	Multiple arguments in call statements are concatenated together to form one
	argument. Each argument needs to be separated by a space and can be extracted in
	the subroutine with a "PARSE ARG var1 var2 ... var?" style command. In function
	calls, multiple parameters separated by commas can accessed with "PARSE ARG
	var1, var2 ...". Note that the commas are not enclosed in quotation marks as
	might be expected.
	
	Parameters to commands specified in REXX may need to be enclosed in quotation
	marks. For example, DIRECTORY(c:\public) produces an error.
	DIRECTORY("c:\public") is the correct form of the command.
	
	Anything not recognized by REXX as a syntax error or one of its own keywords is
	considered to be a command to be executed by OS/2. Watch out for intended REXX
	statements being evaluated as commands; for example, if longstr = abcdefghi then
	the intended REXX statement (which is explained later)
	
	     substr(longstr,2,5)
	
	produces
	
	  bcdef
	
	which REXX doesn't recognize and therefore tries to execute as a command. Unless
	a program or batch file named "bcdef" exists in the path, this produces an
	error. The appropriate way to accomplish the above is:
	
	     var = substr(longstr,2,5)
	
	It is best to put any complex strings used by REXX in quotation marks so that
	REXX keywords accidentally embedded in the text don't produce errors.
	
	When a command such as "copy a:*.* b:" is executed in REXX, the system variable
	"rc" holds the return code from the command. Usually a zero return code means
	success and non-zero code means failure. To get a return code in REXX without
	having a message appear on the screen and prompt for a response, use the
	AUTOFAIL=YES command in CONFIG.SYS.
	
	CTRL+BREAK or CTRL+BREAK followed by ENTER breaks out of most REXX programming.
	The ENTER may be needed depending on the programming code context when the
	CTRL+BREAK was pressed.
	
	Help on REXX error messages can be obtained at the command prompt by typing "help
	rexnnnn" (without the quotation marks). Note that, in this case, there is only
	one X in the message number prefix instead of the two in the language name. If
	you want to try a single REXX command or even a few commands, use the REXXTRY
	program. The syntax for the command is:
	
	     REXXTRY rexx_command1;rexx_command2;rexx_command3 ...
	
	Note that semicolons separate each command. Also note that any action you take
	with REXXTRY is the same as if you had run it in a REXX program. For example, if
	you delete a file using REXXTRY, then the file is gone.
	
	In addition to REXXTRY, there is PMREXX, which is a Presentation Manager
	interface you can use to run REXX programs. The syntax is:
	
	     PMREXX rexx_file.cmd
	
	Not using the "b" (binary) suffix on strings supplied to BITAND or BITOR or
	BITXOR causes these functions to consider them to be character strings,
	resulting in the bit operation being applied to all bits of all characters in
	the strings.
	
	Using the REXX FORMAT command, if you specify an exponential trigger and an
	integer size where the trigger is greater than the size of the integer part, the
	results are not always consistent. For example, if you have
	FORMAT(123456,2,2,2,3), it should theoretically (and sometimes does) work. This
	is because the exponent trigger of 3 combined with a six-digit number should
	trigger exponential format. This would produce one integral digit that is less
	than the two specified in the FORMAT command. Unfortunately, under some
	circumstances, a REXX error is produced. Avoid this situation by supplying an
	exponential trigger that is not greater than the integer value.
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
