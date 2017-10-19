---
layout: page
title: "Q97974: PRB: CV1053 Warning: TOOLS.INI Not Found"
permalink: /kb/097/Q97974/
---

## Q97974: PRB: CV1053 Warning: TOOLS.INI Not Found

	Article: Q97974
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kb16bitonly kbCodeView kbDebug kbVC kbprb
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS 
	- Microsoft CodeView for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft CodeView displays the following message when it first starts up:
	
	  CV1053 Warning: TOOLS.INI not found
	
	CAUSE
	=====
	
	Unlike Microsoft Programmer's WorkBench (PWB), CodeView searches for the
	TOOLS.INI file in only the first directory listed in the INIT environment
	variable. If TOOLS.INI is not in this directory, CodeView generates the warning
	above.
	
	RESOLUTION
	==========
	
	Because CodeView does not always require the TOOLS.INI file, you can typically
	ignore this warning. If you have a TOOLS.INI file, modify your MS-DOS INIT
	environment variable to specify only the directory that contains the file.
	
	If you have more than one TOOLS.INI file that you want PWB to load, you can avoid
	this warning by concatenating distinctly named sections from the files into one
	TOOLS.INI file. Each section begins with the section name in square brackets,
	such as [pwb-main]. You can use a text editor such s PWB or MS-DOS EDIT to
	create this file. Then place the resulting file into the one directory specified
	in the INIT environment variable.
	
	Additional query words: 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kberrmsg kb16bitonly kbCodeView kbDebug kbVC kbprb 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
