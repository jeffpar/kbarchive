---
layout: page
title: "Q153155: How To Use New Undocumented Foxtools Function JustCSName()"
permalink: /kb/153/Q153155/
---

## Q153155: How To Use New Undocumented Foxtools Function JustCSName()

	Article: Q153155
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use a new Foxtools function that returns the file
	name portion of a complete path and file name and preserves the case of the
	letters in the file name. It is called the JustCSName() function.
	
	MORE INFORMATION
	================
	
	JustCSName() returns the file name portion of a complete path and file name
	while preserving the case of the letters in the file name as they appear in the
	Macintosh Finder.
	
	The syntax is:
	
	  JustCSName(cFilename)
	
	where cFilename Specifies the name (including path) of the file for which you
	want only the case-sensitive name.
	
	JustCSName returns a character string.
	
	The JustCSName function is similar to the JustFName() function already documented
	in Foxtools.hlp. The Foxtools.hlp file documents other Foxtools.cfm (or
	Foxtools.slm) functions. It is located in the Microsoft Visual FoxPro:Tools
	folder.
	
	Step-by-Step Example
	--------------------
	
	In the Visual FoxPro Command window, type in the following commands to see how
	JustCSName() works in relation to JustFName() and the GETFILE() functions. The
	Visual FoxPro screen should be visible so the results of the ? commands are
	visible:
	
	  ? GETFILE()
	
	  *Choose any file, preferably one that has upper- and lower-case letters
	  *when viewed in Finder.
	
	  SET LIBRARY TO HOME()+"Foxtools.cfm"
	  ? JustFName(GETFILE())
	
	  *The first of these two commands loads the Foxtools library. Choose
	  *the same file as above when GETFILE() is issued and the JustFName()
	  *function will strip off the path and return just the file name.
	
	  ? JustCSName(GETFILE())
	
	  *This command will return a result similar to the JustFName() function,
	  *except the case of the letters in the file name will be preserved.
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
