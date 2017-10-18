---
layout: page
title: "Q99621: Changing Font Used in Print Commands in FP for Windows"
permalink: kb/099/Q99621/
---

## Q99621: Changing Font Used in Print Commands in FP for Windows

	Article: Q99621
	Product(s): Microsoft FoxPro
	Version(s): 2.5x 2.6x 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Commands such as LIST TO PRINTER, DISPLAY STRUCTURE TO PRINTER, and TYPE TO
	PRINTER do not include a method for changing the font in FoxPro for Windows.
	These commands use the FoxPrint font by default.
	
	A new command called SET PRINT FONT was added to FoxPro for Windows to allow you
	to specify a font other than the default FoxPrint font for all printed output
	and textmerge output. This command was added after the documentation had already
	been printed, so it is not included in the documentation.
	
	MORE INFORMATION
	================
	
	In FoxPro for Windows, the following command will change the font:
	
	     SET PRINT FONT "font name",point size
	
	This command allows the font's name and size to be changed in subsequent commands
	such as LIST TO PRINTER or DISPLAY STRUCTURE TO PRINTER.
	
	For example, enter the following code in the Command window:
	
	     USE file1.dbf
	     LIST STRUCTURE TO PRINTER  && Structure prints using FoxPrint font.
	
	     SET PRINT FONT "Arial",12
	     LIST STRUCTURE TO PRINTER  && Structure prints using Arial font
	                                &&  with size 12.
	
	Under FoxPro for Windows versions 2.x, the following commands will not generate
	an error, but neither will it use the STYLE clause:
	
	     SET PRINT FONT "Arial", 12 STYLE 'B'
	
	The SET PRINT FONT command uses only the font name and point size as arguments.
	
	Under Visual FoxPro, the STYLE clause is also valid.
	
	Additional query words: vFoxWin FoxWin 2.50 2.50a 2.50b 2.60 2.60a docerr printout @ ... SAY Fox Print List to Print kbvfp300 kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300 kbVFP600
	Version           : 2.5x 2.6x 3.00
	
	=============================================================================
	
