---
layout: page
title: "Q195855: Application Exception in Spoolss When Printing"
permalink: /kb/195/Q195855/
---

## Q195855: Application Exception in Spoolss When Printing

	Article: Q195855
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Citrix ICA client and are connected to a server configured
	using the Metaframe add-on to Microsoft Terminal Server, you may receive a Dr.
	Watson error in Spoolss if using the HP LaserJet 4000 printer.
	
	  
	
	  Application exception occurred:
	     App: exe\spoolss.dbg (pid=74)
	     When: 9/14/1998 @ 14:28:14.841
	     Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	This issue may be caused because you may have a mismatched version of the
	Hpdcmon.dll file, or the Hpdcmon.dll file may be corrupted, or it may be
	unnecessary for proper operation.
	
	RESOLUTION
	==========
	
	Remove the dynamic link library file named Hpdcmon.dll from
	%SystemRoot%\System32 folder. If it is not found in this folder, perform a
	search of your %SystemRoot% folder including subfolders, and remove it from any
	folder in which it is found.
	
	MORE INFORMATION
	================
	
	Hpdcmon.dll is a port status monitor that queries the parallel port for incoming
	information. Not all versions of Hewlett Packard's printer drivers require this
	library file. Check with Hewlett Packard for more information on using this file
	with the printer driver being used.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
