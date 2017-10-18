---
layout: page
title: "Q114559: Print to Encapsulated PostScript File Option Disabled"
permalink: kb/114/Q114559/
---

## Q114559: Print to Encapsulated PostScript File Option Disabled

	Article: Q114559
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	
	
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT PostScript printer driver user interface has an option to force
	all jobs sent to a particular PostScript printer to be converted to an
	encapsulated PostScript (EPS) file instead of being sent to the print device.
	This option is disabled (grayed out) and cannot be enabled.
	
	MORE INFORMATION
	================
	
	To view this option, create a PostScript printer in Print Manager, select this
	printer, and choose the Properties option from the Printer menu. Next, select
	the Details button, then select the Job Defaults button, then select the Options
	button. In the Print To dialog box, the option that indicates a choice of
	printing to Printer or Encapsulated PostScript File is permanently set to
	Printer; the Encapsulated PostScript File option is unavailable.
	
	This option was built into previous Windows PostScript drivers to let people
	generate EPS graphics from any application, including applications like Notepad
	that do not natively have code to create EPS graphics. This was an important
	feature in earlier versions of Windows, when few applications could create EPS
	graphics natively. Today, most people who want to generate EPS graphics use more
	sophisticated applications that can generate these graphics by themselves.
	
	
	Additional query words: prodnt grey dimmed dim
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
