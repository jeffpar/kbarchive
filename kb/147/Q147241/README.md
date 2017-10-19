---
layout: page
title: "Q147241: HP Design Jet 650C Prints Large HPGL/2 Files Slowly"
permalink: /kb/147/Q147241/
---

## Q147241: HP Design Jet 650C Prints Large HPGL/2 Files Slowly

	Article: Q147241
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Hewlett-Packard (HP) Design Jet 650C prints large HPGL/2 files slowly.
	
	CAUSE
	=====
	
	The following is an excerpt from the dj650c FAQ available on the HP WEB site:
	
	  The HP Design Jet 650C plotter has an I/O limit of 10KB/sec when printing HP
	  GL/2 files. When printing large files, ie: greater than physical RAM of the
	  printing device, the I/O limit of the printer slows performance. Once the
	  spooler has filled the maximum RAM on the printing device the I/O is limited
	  to 10 KB/sec with HP GL/2 files and 60 KB/sec with HP RTL files.
	
	The HP Design Jet 650C on-board RAM can be expanded to 68 MBs. Chips are
	available in 4, 8, 16, and 32 MBs.
	
	More information about the capabilities of the HP650c may be found on the
	internet at the following World Wide Web site:
	
	  ftp.hp.com/pub/plotters/support_doc/dj650c.faq
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
