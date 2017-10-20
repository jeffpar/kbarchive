---
layout: page
title: "Q123729: Accessing Command Line Arguments"
permalink: /kb/123/Q123729/
---

## Q123729: Accessing Command Line Arguments

{% raw %}

	Article: Q123729
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,6.0,6.1,6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 6.0, 6.1, 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In C, you access command line arguments via the argc and argv parameters in your
	main function. MASM doesn't have a similarly built-in feature in a main
	function, but there are two ways to get to the command line arguments for your
	program.
	
	MORE INFORMATION
	================
	
	Method One
	----------
	
	The first way to get the command line arguments for a MASM program is to access
	the command tail in the Program Segment Prefix (PSP). The command tail is one or
	more bytes of ASCII text representing a program's command line arguments. When
	your program starts, the ds and es segment registers initially point to the PSP.
	The byte value at PSP+80h is the length of the command tail. Therefore, you can
	access the command tail length through either ds:80h or es:80h. The command tail
	itself begins at PSP+81h.
	
	The command tail is so named because it contains everything that appears in the
	command line after the command name. The arguments are unformatted; they appear
	exactly as the user typed them in, including any extra spaces. It is up to you
	to parse the command string. Typically, if you use COMMAND.COM to load the
	program, the first character of the command tail is the space that separated the
	command name from the first argument. If your program was called from another
	program, the command tail may not contain the leading space.
	
	NOTE: 80h-FFh in the PSP is the default Disk Transfer Area (DTA). Therefore, if
	you use MS-DOS calls that use the DTA, such as file I/O, the command line
	arguments will be overwritten. To avoid this problem, either extract the command
	tail before you do anything else in your code or set up a custom DTA.
	
	Method Two
	----------
	
	The second way to get the command line arguments for a MASM program is to access
	the command line at the end of the environment block. The environment block
	contains zero-terminated ASCII strings, each of which represents the name and
	value of an environment variable. After the last string in the environment
	block, there are two zero terminators instead of one. These are followed by the
	full command line, including the command name that was used to start your
	program. The segment for the environment block can be found at offset 2Ch in the
	PSP. Therefore, you will need to load this segment value into a segment
	register, such as es, and access the environment block from there.
	
	REFERENCES
	==========
	
	For more information on the PSP and the command tail, please see the PSP table
	in the "Microsoft Macro Assembler Reference."
	
	Additional query words: kbinf 5.10 6.00 6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM610 kbMASM611
	Version           : :5.1,6.0,6.1,6.11
	
	=============================================================================
	

{% endraw %}
