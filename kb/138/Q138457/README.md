---
layout: page
title: "Q138457: DOC: PUTFILE() Help Topic Says DialogCaption Is at the Top"
permalink: kb/138/Q138457/
---

## Q138457: DOC: PUTFILE() Help Topic Says DialogCaption Is at the Top

	Article: Q138457
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a; WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Help topic for PUTFILE() describes the parameters that the function can
	accept. The Help topic describes the first parameter, cDialogCaption, with the
	following text:
	
	  Specifies the caption displayed at the top of the Save As dialog box.
	
	If Visual FoxPro is running under an operating system such as Windows 95 or
	Windows NT that uses Comdlg32.dll, the description (physical location) of the
	Dialog Caption is incorrect.
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	When PUTFILE() calls Comdlg32.dll, the physical location of the string affected
	by the first parameter in PUTFILE() is not at the top of the dialog box produced
	by Comdlg32.dll as it is in Windows version 3.x and as it is described in the
	Help file. Instead, it is in the lower-left corner of the dialog box produced by
	Comdlg32.dll and by default contains a "File name:" string.
	
	Additional query words: docerr FoxMac VFoxWin 5.00 putfile win95 win vfp comdlg32 dll
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300
	Version           : MACINTOSH:2.6a; WINDOWS:3.0
	
	=============================================================================
	
