---
layout: page
title: "Q140475: PRB: Unable to Print to LPT1: Under Windows NT on Motorola"
permalink: /kb/140/Q140475/
---

## Q140475: PRB: Unable to Print to LPT1: Under Windows NT on Motorola

	Article: Q140475
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Windows NT on some early models of the Motorola PowerPC, printing to the
	built-in LPT1: port does not work properly.
	
	An early manufacturing run of the Motorola PowerPC machines had a defect on the
	system board that affected the built-in LPT port. Printing to network printers
	is not affected.
	
	RESOLUTION
	==========
	
	Contact Motorola costumer support at (800) 551-1017 for additional information.
	
	MORE INFORMATION
	================
	
	The system board problem is on revision 01-W3107F02G. It is the G revision at
	the end that is the problem. Use system diagnostics to determine the revision
	number of your board.
	
	The symptoms of this problem appear differently. On advanced language laser
	printers, such as PostScript and PCL, the data light will turn on and the
	printer will appear to be busy, but nothing ever prints. On dot matrix printers,
	the printout shows random ASCII characters.
	
	
	======================================================================
	Keywords          : kb3rdparty kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	Issue type        : kbprb
	
	=============================================================================
	
