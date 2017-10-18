---
layout: page
title: "Q96299: PRB: ??? &quot;{&quot; Returns Syntax Error"
permalink: kb/096/Q96299/
---

## Q96299: PRB: ??? &quot;{&quot; Returns Syntax Error

	Article: Q96299
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:1.02,2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 3.0, 3.0b, 5.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 1.02, 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to print a single brace ("{" or "}") with the ??? command results in
	a syntax error because FoxPro expects a matching pair of braces in the command
	line.
	
	CAUSE
	=====
	
	The ??? command sends text directly to the printer. This method is normally used
	to send "Escape" codes to change printer settings. Using braces is one of three
	ways to identify ASCII characters. For example, each of the following identify
	the letter "k" (107 on the ASCII chart):
	
	- CHR(107)
	
	- "k"
	
	- {107}
	
	FoxPro expects braces in pairs when the text is evaluated with the ??? command.
	If text (either a string or file) is sent to the printer using the ??? command,
	and the text includes a single brace ("{" or "}") without a matching brace on
	the same line, FoxPro detects the first brace as the beginning or end of an
	ASCII character code sequence.
	
	RESOLUTION
	==========
	
	Replace all single left braces ("{") with "{123}" and single right braces ("}")
	with "{125}". "{123}" will be interpreted as ASCII 123 and the "{" will be
	printed out and likewise for the right brace.
	
	The following snippet provides an example:
	
	     SET PRINTER TO xxx.txt
	     ??? "{123}"
	     SET PRINTER TO
	     MODIFY FILE xxx.txt
	
	The text file will contain a single left brace.
	
	Another alternative is to use "{ {}" and "{} }" to output a single left and right
	brace, respectively. The following command, if used in the above code example,
	will also output a single left brace to the text file:
	
	     ??? "{ {}"
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: FoxDos FoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a
	Version           : MS-DOS:1.02,2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0,3.0b,5.0,6.0
	
	=============================================================================
	
