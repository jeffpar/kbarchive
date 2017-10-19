---
layout: page
title: "Q110763: Postscript Error Printing to Macintosh from Windows NT"
permalink: /kb/110/Q110763/
---

## Q110763: Postscript Error Printing to Macintosh from Windows NT

	Article: Q110763
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Printing from a Macintosh computer using Apple 6.x or 7.x Laserwriter drivers to
	an HP Laserjet IIIsi printer that has its queue defined on a Windows NT computer
	using HP Postscript drivers, results in a print failure with the following
	Postscript error page:
	
	  ERROR: invalidaccess
	  OFFENDING COMMAND: setdefaulttimeouts
	
	  STACK:
	
	  300
	  60
	0
	
	NOTE: This problem may occur with any Postscript printer under similar
	configurations.
	
	CAUSE
	=====
	
	This problem is caused by a bug in SFMPRINT.EXE.
	
	RESOLUTION
	==========
	
	Using the newest Laserwriter driver from Apple (version 8.1.1) or the newest
	driver from HP (version 8.0) allows jobs to be successfully printed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1. This problem was corrected in the latest US Service Pack for
	Windows NT and Windows NT Advanced Server. For information on obtaining this
	update, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
