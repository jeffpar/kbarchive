---
layout: page
title: "Q160149: FreeHand 4.0 Does not Print Properly with EMF Spooling"
permalink: kb/160/Q160149/
---

## Q160149: FreeHand 4.0 Does not Print Properly with EMF Spooling

	Article: Q160149
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Aldus FreeHand does not print properly when using enhanced metafile (EMF)
	spooling on a computer running Windows NT Server 4.0. The job only partially
	spools to the Print server.
	
	CAUSE
	=====
	
	Windows NT 4.0 implements EMF spooling by recording the graphic device interface
	(GDI) function calls that produce the application's graphic object on the
	specified printer. This record is an EMF-format file, called a print spool file.
	Windows NT builds the spool file quickly, and then returns control to the
	application. In the background, the spool file is spooled to the server, and the
	server converts the EMF data into a format suitable for the output device.
	Freehand 4.0 does not work Properly when using EMF. This behavior will occur by
	default in PCL Mode.
	
	RESOLUTION
	==========
	
	To resolve the Print Issue described above, do one of the following:
	
	NOTE: Any of the three steps below can be used to resolve the issue mentioned
	above.
	
	1. Disable EMF Spooling on the Server
	
	  a. In the Printers folder, click the printer whose properties you want to
	     change.
	
	  b. From the File menu, click Properties.
	
	  c. Click PrintProcessor.
	
	  d. Click the Always Spool RAW Datatype option.
	
	2. Upgrade to FreeHand 5.0
	
	3. Print to the Server using Postscript (EMF Turned off by Default)
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
