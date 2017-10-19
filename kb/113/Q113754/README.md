---
layout: page
title: "Q113754: &quot;Syntax Error&quot; When Verifying UDF() in Report Writer"
permalink: /kb/113/Q113754/
---

## Q113754: &quot;Syntax Error&quot; When Verifying UDF() in Report Writer

	Article: Q113754
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.1,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are verifying an user-defined function (UDF) in the Expression Builder,
	a "Syntax Error" appears. The "Syntax Error" message occurs because the
	Expression Builder cannot evaluate UDFs and expects instead to find an internal
	function.
	
	However, if the UDF() function exists as a stand-alone .PRG file and has
	previously been tested, the function will operate properly in a report when the
	report is previewed or printed.
	
	MORE INFORMATION
	================
	
	A UDF is a program routine that must always return a value of some type. It can
	be created in two forms: external and internal. An internal function is a
	subroutine within a .PRG file, and its name must be preceded with the FUNCTION
	statement. An external function is a single .PRG file, with a maximum of eight
	characters for its name.
	
	The external form must be used so that the Report Writer can find it as a
	stand-alone .PRG file in the default directory or SET PATH list (SET PROCEDURE
	TO is not evaluated).
	
	Once you have created the function, you can test the function by invoking it from
	the Command window or from within a program. In the following example, a
	function to print a time stamp (minute resolution) on each record is needed. To
	do this, create the file STAMP.PRG, which contains this single line:
	
	     RETURN LTRIM(STR(SECONDS()/60))+':'+LTRIM(STR(SECONDS()%60,10,3))
	
	This function returns the number of seconds since midnight divided by 60 to show
	the number of minutes (no decimals), concatenated with the modulus of SECONDS to
	show the remainder of seconds and hundredths of seconds. To test this function,
	type the following commands in the Command window:
	
	     SET TALK ON  && if not on already
	     ? Stamp()
	
	FoxPro should return a character string consisting of the minutes, a colon, the
	seconds, a decimal point, and the hundredths of seconds. Although the function
	name is STAMP, it must be invoked as STAMP() to cause FoxPro to look for an
	internal function of the same name. When it cannot be found, FoxPro will then
	look externally for a file with the same name.
	
	After the function has been successfully tested, you can use it in the report. To
	use the function, create a field on the report and enter the name of the
	function followed by a left and right parentheses, as shown in the test above.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin 2.50 2.50a 2.50b 2.50c 2.60 calculate report variable RWriter
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbFoxBASE210DOS kbFoxBASESearch kbVFP300
	Version           : MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.1,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
