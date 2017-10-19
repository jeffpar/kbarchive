---
layout: page
title: "Q112427: DDE Commands Must Be Bracketed for Non-Windows Platform"
permalink: /kb/112/Q112427/
---

## Q112427: DDE Commands Must Be Bracketed for Non-Windows Platform

	Article: Q112427
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b; MS-DOS:2.5,2.5a,2.5b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dynamic data exchange (DDE) commands are not ignored in FoxPro for MS-DOS or
	FoxPro for Macintosh.
	
	If you execute a DDE command, FoxPro for MS-DOS will produce the error message
	"Function not implemented." FoxPro for Macintosh will display the error message
	"Feature not available."
	
	Use the system memory variable _WINDOWS to prevent the error messages from
	appearing. For example:
	
	     IF _WINDOWS
	        <DDE commands>
	     ENDIF
	
	The value of this system memory variable is determined by the version of FoxPro
	that is executing the code. You cannot use the STORE or = commands to change the
	value of this variable.
	
	Additional query words: VFoxMac FoxMac FoxDos errmsg err msg _dos _mac _unix
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b; MS-DOS:2.5,2.5a,2.5b
	
	=============================================================================
	
