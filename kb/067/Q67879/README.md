---
layout: page
title: "Q67879: INFO: scanf() Format Specifications and Syntax"
permalink: /kb/067/Q67879/
---

## Q67879: INFO: scanf() Format Specifications and Syntax

	Article: Q67879
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:6.0,6.00a,6.00ax,7.0; OS/2:6.00a,6.0; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft C, the scanf() format specifier for a string is generally specified
	with the "%s" specifier. However, "%s" is a shorthand notation for the specifier
	that the run-time library actually uses.
	
	Because "%s" causes the library to read the input string until it finds some
	white space, the equivalent format specifier is "%[^\0x20\t\n]", which instructs
	the library to read the string until it encounters a space character (\0x20), a
	tab character (\t), or a newline character (\n).
	
	MORE INFORMATION
	================
	
	The table below presents some examples of different uses for the string type.
	
	  Format
	  Specifier   Usage
	  ------------------------------------------------------------------
	
	  %[a-z]      Read the input string until the library encounters a
	              character other than a lowercase letter ("abc...z").
	
	  %[^a-z]     Read the input string until the library encounters a
	              lowercase letter.
	
	  %[]]        According to the ANSI specification, read a series of
	              right bracket (]) characters from the input string.
	
	  %[^]]       Read the input string until the library encounters a
	              right bracket character.
	
	  %*[^%]      Scan the input string (without storing it in a
	              variable) until the library encounters a percent sign
	              (%) character. (The asterisk "*" instructs the compiler
	              to scan the string without storing it in a variable.)
	
	  %[-af-k]    Read the input string until the library encounters a
	              character other than a hyphen (-), a lowercase "a", or
	              a character between the lowercase "f" and lowercase "k"
	              characters (fghijk).
	
	  %[]         Illegal -- unpredictable results. The compiler does not
	              detect this error because it is in a parameter string.
	
	  %[^]        Illegal -- unpredictable results. The compiler does not
	              detect this error because it is in a parameter string.
	
	  %40c        Read 40 characters from the input string. [The run-time
	              library does not automatically append a null terminator
	              to the string, nor does reading 40 characters
	              automatically terminate the scanf() function. Because the
	              library uses buffered input, you must press the ENTER key
	              to terminate the string scan. If you press the ENTER before
	              the scanf() reads 40 characters, it is displayed normally,
	              and the library continues to prompt for additional input
	              until it reads 40 characters.]'
	
	  %[^.-]      Read the input string until the library encounters a
	              period (.) or a hyphen (-).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:6.0,6.00a,6.00ax,7.0; OS/2:6.00a,6.0; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
