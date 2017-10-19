---
layout: page
title: "Q35529: Compiling the Program Currently Loaded in Editor"
permalink: /kb/035/Q35529/
---

## Q35529: Compiling the Program Currently Loaded in Editor

	Article: Q35529
	Product(s): See article
	Version(s): 1.00   | 1.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | appnote | mspl13_basic
	Last Modified: 6-JAN-1989
	
	The following information is taken from an application note called
	"Microsoft Editor Questions and Answers." The application note is
	available from Microsoft Product Support Services by calling (206)
	454-2030.
	
	How to Compile the Program Currently Loaded in the Editor
	
	The current file can be compiled by using the keystrokes corresponding
	to the following functions:
	
	   Arg Arg textarg Compile, where textarg is the compiler command
	   line typed as you normally would outside of the editor; however,
	   the filename does not have to be the current file.
	
	The text switch "extmake" can be entered in TOOLS.INI to associate a
	frequently used command line with a particular file extension. The
	following is an example:
	
	   extmake:c cl /Zi /Od %s
	
	The %s will be replaced with the current filename.
