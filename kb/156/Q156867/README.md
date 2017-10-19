---
layout: page
title: "Q156867: PRB: SYS(6) Function Returns Empty String"
permalink: /kb/156/Q156867/
---

## Q156867: PRB: SYS(6) Function Returns Empty String

	Article: Q156867
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SYS(6) function returns an empty string in Visual FoxPro 5.0. In earlier
	versions of FoxPro, the function returned information on the current printer
	port or "PRN."
	
	WORKAROUND
	==========
	
	No Visual FoxPro command exists that returns the current printer port. Some
	Application Program Interface (API) calls exist that return information that
	might be useful. See the FoxPro Help file and search on the keyword API.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In FoxPro for MS-DOS, the SYS(6) function returns the port that FoxPro uses for
	printing. Under FoxPro for Windows 2.x and Visual FoxPro 3.0, the SYS(6)
	function returns "PRN" regardless of the port (if any) the driver is using.
	However, this is potentially misleading under Windows. PRN generally means the
	port LPT1. Windows allows a printer driver to direct its output to a variety of
	ports. Therefore, returning "PRN" does not tell you which port holds the printer
	driver connection.
	
	Under Visual FoxPro 5.0, the SYS(6) function does return useful information if
	the printer is redirected to a file. For example, if the printer is set to a
	particular file, the SYS(6) function returns the MS-DOS path and file name of
	the destination file.
	
	In conclusion, do not use the SYS(6) function to return the printer port of a
	Windows printer driver. Use SYS(6) to determine if a printer is currently
	redirected to a file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	In the Command window, type the following lines of code:
	
	     x=SYS(6)
	     DISPLAY MEMORY LIKE x
	     SET PRINTER TO Test.txt
	     ? SYS(6)
	
	The variable x contains an empty string when initially set to SYS(6). After
	redirecting the printer to a file, the SYS(6) function returns the path and file
	name of Test.txt.
	
	Additional query words: VFoxWin kbdsd
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
