---
layout: page
title: "Q72932: No &quot;Output Filename&quot; Prompt Printing to a File with PostScript"
permalink: kb/072/Q72932/
---

## Q72932: No &quot;Output Filename&quot; Prompt Printing to a File with PostScript

	Article: Q72932
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you print to a file using the PostScript driver with Windows, the File
	Print command may not produce an Output Filename box.
	
	MORE INFORMATION
	================
	
	The absence of an Output Filename box results when a filename has already been
	supplied in the Options section of the printer setup process (see below).
	
	To verify the existence of a filename, do the following:
	
	1. From Control Panel, select Printers. The installed printers box will list:
	
	  Postscript Printer on File: Active
	
	2. If you are using Windows version 3.0, choose Configure. If you are using
	  Windows 3.1, skip this step.
	
	3. Choose Setup.
	
	4. Choose Options. In the Print To section, Encapsulated Postscript File is
	  selected and a filename is in the File box. Removing the assigned filename
	  will restore the Output Filename box. Also, make sure there are no spaces in
	  this file box. Spaces will produce a
	
	  Cannot Print
	
	  message.
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
