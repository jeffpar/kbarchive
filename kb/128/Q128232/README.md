---
layout: page
title: "Q128232: PRB: Viewer Compiler Error 1661 w/ Identical Baggage Filenames"
permalink: kb/128/Q128232/
---

## Q128232: PRB: Viewer Compiler Error 1661 w/ Identical Baggage Filenames

	Article: Q128232
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Multimedia Viewer for Windows, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Multimedia Viewer generates multiple warning 1661 messages during the
	compilation of an application. Each warning message designates a file with the
	same name, but resides in a separate directory. The error message looks like
	this:
	
	  Warning 1661: Error loading baggage file:
	  C:\MVPUBKIT\TURTORIAL\COYOTE.AVI (line 44 of MYTHS.MVP)
	
	For graphic files, running the Viewer application may result in this message:
	
	  The picture could not be displayed because it could not be found.
	
	This message will be displayed in place of the intended image.
	
	CAUSE
	=====
	
	The Viewer compiler strips the directory path and retains only the baggage
	filename. The Viewer documentation suggests that these circumstances will
	generate an
	
	  Invalid Filename
	
	message.
	
	RESOLUTION
	==========
	
	To avoid the warnings, rename the baggage files.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	Consult the Multimedia Viewer Authoring Guide (p. 2-14) for further
	documentation regarding the causes of warning 1661.
	
	Additional query words: 2.00 2.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	
