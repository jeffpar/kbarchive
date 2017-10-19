---
layout: page
title: "Q130991: HOWTO: Send a Windows Print File to the Printer"
permalink: /kb/130/Q130991/
---

## Q130991: HOWTO: Send a Windows Print File to the Printer

	Article: Q130991
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A file created with the command REPORT FORM formname TO FILE filename will
	create a file with printer codes. This file can be printed with this MS-DOS
	command:
	
	     RUN COPY /b filename LPT1:
	
	MORE INFORMATION
	================
	
	A file created with printer codes cannot be printed using the TYPE command or by
	choosing Print from the File menu. These two methods expect a text file with no
	printer codes. Using either of these two methods prints the file with lots of
	strange looking characters that are the printer control codes.
	
	The /b in the above command stands for binary. Print files created by the REPORT
	FORM command are graphic files, not text files and must be printed as a binary
	file not as a text file. The /b command can only be used with the MS-DOS COPY
	command.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
