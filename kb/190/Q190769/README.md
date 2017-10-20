---
layout: page
title: "Q190769: HOWTO: Use STRTOFILE() to Send Output to a Printer"
permalink: /kb/190/Q190769/
---

## Q190769: HOWTO: Use STRTOFILE() to Send Output to a Printer

{% raw %}

	Article: Q190769
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is a new function in Visual FoxPro 6.0, STRTOFILE(), which outputs the
	contents of a string to a file. Since it allows additive output, you can also
	direct this output to a printer. This article provides an example of using
	STRTOFILE() to send a file or the contents of string or array to the printer you
	choose.
	
	MORE INFORMATION
	================
	
	Visual FoxPro 6.0 has two new string/file functions. These are the STRTOFILE()
	function, which outputs a string to a file, and the FILETOSTR() function, which
	inputs a file to a string. The following sample uses each to output text to a
	file.
	
	1. Run the following code from a program (.prg) file:
	
	        LOCAL lcString_to_Output, laOutput[1]
	        lcOutPut = ""
	
	        * Get the version information for VFP6.exe, returned to an array.
	        =AGETFILEVERSION(laOutput, HOME()+'vfp6.exe')
	
	        * Convert the contents of that array to a string with the function
	        * Array_to_String. Note that there must be a carriage return and line
	        * feed after each line.
	        lcString_to_Output = Array_to_String(@laOutput)
	
	        * Print the string
	        =Print_a_String(lcString_to_Output)
	
	        * Make sure this .prg file is not open.
	        CLOSE ALL
	
	        * Print this PRG file after converting it to a string with
	        * FILETOSTR().
	        =Print_a_String(FILETOSTR(SUBSTR(SYS(16),1, LEN(SYS(16))-3) + 'prg'))
	
	        RETURN
	
	        PROC Print_a_String
	           LPARAMETER tcStringToPrint
	           LOCAL laPrinters[1,1], lnArrayRow, lcPrinter
	           * Prompt the Select the printer.
	           lcPrinter = GETPRINTER()
	           * You could also use SET('printer', 2) to return Windows default
	           * printer, or SET('printer', 3) to return the VFP default printer.
	           IF LEN(lcPrinter) = 0
	              RETURN .F.
	           ENDIF
	           =APRINTERS(laPrinters)
	          lnArrayRow = ASUBSCRIPT(laPrinters, ASCAN(laPrinters, lcPrinter),1)
	
	          * IIF uses second column of laPrinters array in Windows 95, and
	          * the first in Windows NT.
	          * Last argument of .T. passed to STRTOFILE() means ADDITIVE output.
	           IF STRTOFILE(tcStringToPrint, ;
	                 laPrinters[lnArrayRow,IIF('NT'$OS(), 1, 2)], ;
	                 .T.) > 0
	           * Succeeded, since bytes were written.
	              RETURN .T.
	           ELSE
	              * Failed, since no bytes were written.
	              RETURN .F.
	           ENDIF
	        ENDPROC
	
	        PROC Array_to_String
	           LPARAMETERS tcarray
	           * Note: This would require modification for use with multicolumn
	           * arrays
	           LOCAL lni, lcOutPut
	           lcOutPut = ""
	
	           #DEFINE       CR_LF       CHR(13)+CHR(10)
	
	           * Iterate through array and append a carriage return/line feed
	           * to each line.
	           FOR lni = 1 TO ALEN(tcarray)
	              lcOutPut = lcOutPut + tcarray[lni] + CR_LF
	           ENDFOR
	           RETURN lcOutPut
	        ENDFOR
	
	2. Select a destination for printing each time you are prompted.
	
	This code prints the Visual FoxPro 6.0 version information and the contents of
	the program.
	
	Anything you print in this manner must have each line terminated with carriage
	return and line feeds characters to ensure proper formatting. Window NT uses the
	printer name that is in the first column of the array created by APRINTERS().
	Windows 95 uses the port that is in the second column of the array created by
	APRINTERS(). Code for this behavior accordingly. The third argument in the
	STRTOFILE() function, lAdditive, must be .T. for sending output to a printer.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbXBase kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
