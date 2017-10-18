---
layout: page
title: "Q119899: SET FILTER TO Does Not Move Record Pointer"
permalink: kb/119/Q119899/
---

## Q119899: SET FILTER TO Does Not Move Record Pointer

	Article: Q119899
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6x; UNIX:2.6; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Issuing a SET FILTER command does not move the record pointer, even if the
	record is currently located on a record that does not meet the filter condition.
	This is the expected behavior, as documented in the "Language Reference" manual
	and online Help system:
	
	  The condition specified by SET FILTER isn't evaluated until the record
	  pointer is moved in the table/.DBF.
	
	MORE INFORMATION
	================
	
	To move to a record that meets the FILTER condition, issue a command that moves
	the record pointer. For example:
	
	     GOTO TOP
	
	  -or-
	
	     LOCATE
	
	Additional query words: VFoxWin FoxUnix FoxMac FoxDos FoxWin 2.50 2.50a 2.50b incorrect
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbFoxPro260UNIX kbVFP300
	Version           : MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6x; UNIX:2.6; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
