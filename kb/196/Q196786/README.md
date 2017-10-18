---
layout: page
title: "Q196786: PRB: MSDN Libraries 6.0 and October 1998 Fail to Coexist"
permalink: kb/196/Q196786/
---

## Q196786: PRB: MSDN Libraries 6.0 and October 1998 Fail to Coexist

	Article: Q196786
	Product(s): Microsoft Developer Network
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbMSDN kbGrpDSTools
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the MSDN Library asks you to specify the location of a CD-ROM and you
	specify a network or shared drive, one of the following error messages appears:
	
	  Hh : The program has performed an illegal operation and will be shut down. If
	  the problem persists, contact the program vendor.
	
	  -or-
	
	  hh.exe - Application Error : The instruction at "0x5d34543c" referenced
	  memory at "0x0000000c". The memory could not be "read".
	
	CAUSE
	=====
	
	Sometimes installing another version of the MSDN Library corrupts the
	Hhcolreg.dat file. This has been known to happen more frequently when the MSDN
	Library is installed from a network location.
	
	RESOLUTION
	==========
	
	For additional information about manually uninstalling the MSDN Library, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q240350 HOWTO: Manually Uninstall the MSDN Library
	
	Then only reinstall the most recent version of the MSDN Library.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbMSDN kbGrpDSTools 
	Technology        : kbMSDNSearch kbZNotKeyword2
	Version           : winnt:6.0
	Issue type        : kbprb
	
	=============================================================================
	
