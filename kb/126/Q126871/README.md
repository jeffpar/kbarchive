---
layout: page
title: "Q126871: DOC: MENU() &amp; PAD() Examples Cause Error Message"
permalink: kb/126/Q126871/
---

## Q126871: DOC: MENU() &amp; PAD() Examples Cause Error Message

	Article: Q126871
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a; WINDOWS:2.6a
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Copying the example program for the MENU() function from the Graphical online
	Help File, pasting it into a new program file, saving the program file with the
	suggested name (MENUEXAM.PRG) and then running it causes the following error
	message:
	
	  Unrecognized phrase/keyword in command
	  <Cancel> <Suspend> <Ignore>
	
	This error message is caused by a space character inside the parentheses of the
	MENU() and PAD() functions on the following line of the program:
	
	     ON SELECTION MENU _MSYSMENU ;
	         DO choice IN menuexam WITH PAD( ), MENU( )
	
	Remove the space that is between the parentheses in the PAD() and MENU()
	functions to eliminate the error message.
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	This problem only occurs when using the Graphical online Help files,
	FOXHELP.HLP, in FoxPro for Windows and FoxPro for Macintosh. The MENU() function
	examples in the .DBF-style online Help files for FoxPro do not contain the space
	between the parentheses of these two functions. The problem does not occur in
	FoxPro for MS-DOS or UNIX because they don't use Graphical Style Help files.
	
	The following manuals also contain the space between the parentheses of the
	MENU() and PAD() functions:
	
	FoxPro for MS-DOS and Windows, "Language Reference," page L3-648
	FoxPro for Macintosh "Language Reference," page 526
	
	Additional query words: docerr errmsg 5.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbFoxPro260a
	Version           : MACINTOSH:2.6a; WINDOWS:2.6a
	
	=============================================================================
	
