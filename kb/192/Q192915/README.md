---
layout: page
title: "Q192915: PRB: Corrupt Hh.dat Prevents Starting the MSDN Library"
permalink: /kb/192/Q192915/
---

## Q192915: PRB: Corrupt Hh.dat Prevents Starting the MSDN Library

	Article: Q192915
	Product(s): Microsoft Developer Network
	Version(s): 
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbMSDN
	Last Modified: 27-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Studio 6.0 
	- Microsoft Developer Network (MSDN) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the MSDN Library from Visual Studio 6.0, the following
	error message appears:
	
	  MSDEV.EXE - Application Error : The instruction at "0x5d48d2f0" referenced
	  memory at "0x00000000". The memory could not be "written".
	
	When you try to start the MSDN Library from the desktop, the following error
	message appears:
	
	  OleMain ThreadWndName: HH.EXE - Application Error : The instruction at
	  "0x5d48d2f0" referenced memory at "0x00000000". The memory could not be
	  "written".
	
	This message is followed by:
	
	  OleMain ThreadWndName: HH.EXE - Application Error : The instruction at
	  "0x5d48932e" referenced memory at "0x00000000". The memory could not be
	  "read".
	
	CAUSE
	=====
	
	The Hh.dat file is corrupt.
	
	RESOLUTION
	==========
	
	Close all instances of the MSDN Library. Search for all occurences of the Hh.dat
	file on the system. Delete the Hh.dat file, and attempt to launch the MSDN
	Library again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Hh.dat is a database file that saves information about the HTML Help window and
	MSDN Library favorites. Unfortunately, all favorites are lost when the Hh.dat
	file is deleted, but there is no other known way to recover from this error. The
	Hh.dat file is recreated when the MSDN Library launches.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbMSDN 
	Technology        : kbVSsearch kbAudDeveloper kbMSDNSearch kbZNotKeyword2 kbVS600 kbVS600Search
	Issue type        : kbprb
	
	=============================================================================
	
