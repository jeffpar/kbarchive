---
layout: page
title: "Q103091: PRB: FoxBASE+ Fails to Send CHR(0) to Printer"
permalink: kb/103/Q103091/
---

## Q103091: PRB: FoxBASE+ Fails to Send CHR(0) to Printer

	Article: Q103091
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	FoxBASE+ ignores the CHR(0) character when sending output to a printer.
	
	RESOLUTION
	==========
	
	To work around this problem, send CHR(127) to the printer.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run the following code:
	
	        SET PRINT ON
	        SET PRINT TO
	        SET PRINT TO test.txt
	        ?CHR(27)+"YES"+CHR(0)
	        ?
	        SET PRINT TO
	        SET PRINT OFF
	
	2. After the program has executed, you must quit FoxBASE+. At the MS-DOS prompt,
	  issue the following command:
	
	  " DEBUG test.txt d " (without the quotation marks)
	
	  The following line of hexadecimal characters will be displayed:
	
	  0D 0A 1B 79 65 73 0D 01-8B C3 48 12 B1 04 50 50 1B hex=chr(27) 79 hex=Y 65
	  hex=E 73 hex=S
	
	  NOTE: "00 hex" is not present after "73 hex".
	
	3. Press Q to quit Debug.
	
	If the same code is executed in FoxPro versions 1.02 and later for MS-DOS, Debug
	will produce the following line of hexadecimal characters:
	
	  0D 0A 1B 79 65 73 00 0D-0A C3 48 12 B1 04 62 75
	
	  1B hex=chr(27)
	  79 hex=Y
	  65 hex=E
	  73 hex=S
	  00 hex=chr(0)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASESearch
	Version           : MS-DOS:2.1
	
	=============================================================================
	
