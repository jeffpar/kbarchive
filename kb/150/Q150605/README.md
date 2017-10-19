---
layout: page
title: "Q150605: Cannot Print Using LPR from Windows NT to Sun Workstation LPD"
permalink: /kb/150/Q150605/
---

## Q150605: Cannot Print Using LPR from Windows NT to Sun Workstation LPD

	Article: Q150605
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you're using the line printer remote (LPR) utility to print from Windows NT
	to a line printer dameon (LPD) printer on a Sun workstation, the job may spool
	out of the Print Manager on the NT Server but not print.
	
	A message may be returned indicating that the print job could not be printed.
	
	CAUSE
	=====
	
	This problem occurs if the Sun computer is running Solaris, which does not run
	an RFC1179-compliant LPD; Solaris runs LPSCHED, which does not conform to
	RFC1179.
	
	LPSCHED requires that the data file be sent first and the control file second.
	This mode is described as desirable but optional under RFC1179, and NT doesn't
	send this way. NT sends the control file first and the data file second, a mode
	that every LPD service must be capable of to be RFC1179 compliant.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	Q150154Printing to LPR Ports and HP-UX Compatibility
	
	STATUS
	======
	
	You can obtain a fix to this problem by calling Sun Microsystems Technical
	Support at (800) 872-4786. The patch ID number is 101959-04 or later.
	
	The products described here are manufactured by Sun Microsystems, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	
