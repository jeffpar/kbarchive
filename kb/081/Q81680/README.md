---
layout: page
title: "Q81680: Windows 3.1 Setup Requires Spaces Between Parameters"
permalink: kb/081/Q81680/
---

## Q81680: Windows 3.1 Setup Requires Spaces Between Parameters

	Article: Q81680
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows 3.1 and 3.11 Setup program requires spaces between command
	line switches.
	
	MORE INFORMATION
	================
	
	When you use command line switches to pass parameters to the Windows Setup
	program, you must use a space to separate the switches. If you don't use a
	space, Setup interprets multiple switches as one switch.
	
	The following example illustrates the results of the incorrect use of command
	line switches.
	
	  SETUP /B/I   Setup executes in B&W mode but still detects hardware.
	  SETUP /I/B   Setup doesn't detect hardware but executes in color.
	
	The following examples demonstrate the correct use of command line switches:
	
	  SETUP /I     Setup executes ignoring hardware.
	  SETUP /B     Setup executes in B&W mode.
	
	  SETUP /B /I  Setup executes in B&W mode and does not detect hardware.
	  SETUP /I /B  Setup does not detect hardware, and executes in B&W mode.
	
	Additional query words: 3.10 3.11 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
