---
layout: page
title: "Q156032: PRB: Position of @...SAYs Incorrect When Printing in Raw Mode"
permalink: /kb/156/Q156032/
---

## Q156032: PRB: Position of @...SAYs Incorrect When Printing in Raw Mode

	Article: Q156032
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6a,3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In both FoxPro for Windows and Visual FoxPro for Windows, when attempting to use
	raw mode printing with @...SAYs that changes the formatting of a word or words
	on the same line of output, the printed words following the format changes will
	not print in the expected position. The text after the escape codes will be
	moved to the left one column for each escape code that is inserted in the
	@...SAY.
	
	CAUSE
	=====
	
	When FoxPro executes a series of @...SAYs, it determines the output column of
	the first @...SAY, determines the length of the output text, and then pads the
	remaining columns with spaces up to the next @...SAY command.
	
	Therefore, when FoxPro calculates the column position of the @...SAY of the next
	word in the line of output, it includes the escape codes as viable columns.
	However, when the output is sent to the printer, the printer removes these
	escape codes from the line and executes the command. Since escape codes are
	printer commands, they are essentially treated as null characters and the
	following text is moved to the left one column for each escape code the printer
	uses.
	
	WORKAROUND
	==========
	
	There are two ways to work around this behavior. Use one of the following
	methods:
	
	Method 1
	--------
	
	With this method, the second @...SAY command must take into account the number of
	escape codes entered, and the column number must be incremented accordingly. For
	example, if the name needs to be printed in column 35, the code would appear as
	follows:
	
	     @1,1 SAY CHR(27)+ '(s3B' + 'Pay to the order of:'  &&BOLD on
	     @1,40 SAY CHR(27)+ '(s30' + 'John Doe'       &&BOLD off
	
	Note that the second @...SAY has incremented the column count by five to offset
	the five escape codes.
	
	Method 2
	--------
	
	This method requires the ability to move the printer head to an exact column
	position with an escape code. If this is possible, then the two text portions of
	the @...SAY are concatenated along with the escape code that moves the second
	text to an exact column number. The following example demonstrates printing the
	name in column 35 on a Hewlett-Packard LaserJet:
	
	     * Escape code CHR(27)+'&35C' starts the name in column 35
	     @1,1 SAY CHR(27)+ '(s3B' + 'Pay to the order of:;
	        '+CHR(27)+'(s0B'+CHR(27)+'&a35C'+'Jack Doe'
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sometimes it is desirable to use raw mode printing in FoxPro for Windows 2.6 or
	Visual FoxPro for Windows 3.0 to obtain output that may not be possible using
	the Report Writer. This works as expected when using escape codes to change an
	entire line of output to bold or italic, for example. The problem occurs when
	performing in-line formatting changes of a word or group of words. When
	attempting to change the word formatting in this manner, FoxPro will interpret
	the escape codes as a part of the output character string and will not print the
	next word in the correct column even though it is told in the @...SAY to start
	printing at an explicit column number. Therefore, for every escape code entered,
	the actual column in which the following word will print will be one less than
	the actual column number in the @...SAY.
	
	For example, if the desired output is to be formatted like this:
	
	  Column number:
	  1                                 35
	  Pay to the order of:              John Doe
	
	the code would appear as follows for an HP LaserJet printer:
	
	     @1,1 SAY CHR(27)+ '(s3B' + 'Pay to the order of:'    &&[ASCII 146](s3B'= BOLD on
	     @1,35 SAY CHR(27)+ '(s30' + 'John Doe'               &&[ASCII 146](s30'= Bold off
	
	where 'Pay to the order of:' is bold and the name is non-bold text. The printer
	would move the name five columns to the left. This occurs because the printer
	requires five escape codes, 'CHR(27)'+'('+'s'+'3' +'0', to turn off bold
	formatting. The actual printer output would look like the following:
	
	  Column number:
	  1                            30
	  Pay to the order of:         John Doe
	
	Steps to Reproduce Behavior
	---------------------------
	
	     * Start of code example
	     SET DEVICE TO PRINTER
	     ???""
	     @1,1 SAY '1        10        20        30'          &&Column    numbers
	     @2,1 SAY CHR(27)+ '(s3B' + 'Pay to the order of:'   &&Turn bold    on
	     @2,35 SAY CHR(27)+ '(s0B' + 'John Doe'              &&Turn bold off
	     SET DEVICE TO SCREEN
	     SET PRINTER TO                                      &&Flush print job
	     * end of code
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300 kbVFP300b
	Version           : WINDOWS:2.6a,3.0,3.0b
	
	=============================================================================
	
