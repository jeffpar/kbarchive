---
layout: page
title: "Q110213: HP 1200C PostScript Color Printer Prints Black-and-White"
permalink: /kb/110/Q110213/
---

## Q110213: HP 1200C PostScript Color Printer Prints Black-and-White

	Article: Q110213
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhw kbprint kbPrinting kbHardware
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from an Apple Macintosh with Windows NT Services for Macintosh
	(SFM) to a shared PostScript color printer that does not have a Windows NT
	driver and includes a PostScript Printer Definition (PPD) file, such as the
	Hewlett-Packard (HP) DJ1200C, it prints in black-and-white or grayscale.
	
	CAUSE
	=====
	
	The cause of this problem is that the Macintosh client queries the server for
	information about the printer. If the printer being used is PostScript and has a
	PPD file, the file is read for printer capabilities. However, if there is not a
	corresponding PPD file, this prompts the server to return default information to
	the Macintosh client. The default information returned is set up for a
	black-and-white printer.
	
	If you set up your printer with a non-PostScript driver, the Macintosh Services
	checks the default non-PostScript device. The default is set to Color=False in
	this device; therefore, you cannot work around this problem by setting up the
	driver with a non-PostScript version for the same printer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	The Hewlett-Packard product included here is manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	REFERENCES
	==========
	
	Windows NT Advanced Server, "Services for Macintosh"
	
	
	Additional query words: prodnt gray scale HP1200c HPDJ1200c SFMPSPRT.DLL
	
	======================================================================
	Keywords          : kbhw kbprint kbPrinting kbHardware 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	
	=============================================================================
	
