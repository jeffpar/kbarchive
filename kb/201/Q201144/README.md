---
layout: page
title: "Q201144: Unable to Print Using the AppleTalk Network Protocol"
permalink: /kb/201/Q201144/
---

## Q201144: Unable to Print Using the AppleTalk Network Protocol

	Article: Q201144
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbprint kbtool
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a printer by using the AppleTalk network protocol, your print
	job may not print at all.
	
	CAUSE
	=====
	
	This behavior can occur when you use a Printer Control Language (PCL) printer
	driver to print to a printer that is connected to an AppleTalk network using a
	Hewlett Packard (HP) JetDirect network printer adapter. When a PCL print job is
	sent to the printer, the JetDirect adapter formats the data for use with a
	PostScript printer, and this results in the data being unusable.
	
	RESOLUTION
	==========
	
	To resolve this issue, install a PostScript printer driver for your printer. For
	information about installing a printer driver in Windows NT, see the "Setting Up
	a Printer" topic in Windows NT Help.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbprint kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
