---
layout: page
title: "Q109698: Spool File Location is Not Configurable"
permalink: kb/109/Q109698/
---

## Q109698: Spool File Location is Not Configurable

	Article: Q109698
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
	
	SYMPTOMS
	========
	
	When you print from an application under Windows NT, the Spooler usually stores
	the print job as a pair of files on your hard disk. The location of these files
	is not configurable, the Spooler is hard-coded to store the files at
	%SYSTEMROOT%\SYSTEM32\SPOOL\PRINTERS.
	
	CAUSE
	=====
	
	This is a limitation in the current product.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation or Server version
	3.5.
	
	There is no workaround to force the Spooler to store spool files in a different
	location, but you can prevent spooling from applications running on the local
	computer. In Print Manager, select the printer whose jobs should not be spooled.
	From the Printer menu, choose Properties, and then select the Details button. In
	the Printer Details dialog box, select the Print Directly To Ports option. Note
	that the Print Directly To Ports option is not available for printers that are
	shared on the network.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in Windows NT
	Workstation or Server version 3.5.
	
	Additional query words: prodnt SHD SPL
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
