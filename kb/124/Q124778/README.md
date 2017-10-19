---
layout: page
title: "Q124778: PRB: Unable to Find Array Name Error When Compiling"
permalink: /kb/124/Q124778/
---

## Q124778: PRB: Unable to Find Array Name Error When Compiling

	Article: Q124778
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a; MS-DOS:2.6a; UNIX:2.6; WINDOWS:2.6a,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	- Microsoft FoxPro for MS-DOS, version 2.6a 
	- Microsoft FoxPro for UNIX, version 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive an "Unable to find <array name>" dialog when building an
	application.
	
	CAUSE
	=====
	
	When building an application, it is not uncommon to receive a warning dialog
	that indicates that FoxPro was unable to find a particular program, menu, or
	report. While the above mentioned are the more common items the Project Manager
	has difficulty reconciling, they are also the easiest to correct. The most
	deceptive unresolved reference is when the Project Manager cannot resolve a
	reference to an array embedded in a report.
	
	RESOLUTION
	==========
	
	You can usually use the EXTERNAL command to resolve the issue. However, this is
	a compiler command, so it is not effective if the array that couldn't be found
	is used as an expression in a report.
	
	NOTE: For more information on the use of the EXTERNAL command, please see the
	Microsoft FoxPro "Language Reference."
	
	One way to resolve this issue is to create a dummy procedure or function with the
	same name as the array called in the report. This procedure should never be
	called and should have no more than a RETURN statement. However, its existence
	will make the compiler quit looking for the array inside the report. In any
	instance where the array name is used, the FoxPro compiler will assume that the
	call is to the dummy procedure and not to an array that exists elsewhere. This
	will have no effect on the compiled application and the report will call the
	array as expected.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin FoxWin FoxDos FoxMac FoxUnix errmsg err msg message
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro260aDOS kbFoxPro260UNIX kbFoxPro260a kbVFP300
	Version           : MACINTOSH:2.6a; MS-DOS:2.6a; UNIX:2.6; WINDOWS:2.6a,3.0
	
	=============================================================================
	
