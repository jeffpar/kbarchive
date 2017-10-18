---
layout: page
title: "Q157835: English Excel Worksheet Used Instead of German"
permalink: kb/157/Q157835/
---

## Q157835: English Excel Worksheet Used Instead of German

	Article: Q157835
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	NOTE: The information in this article applies to the 
	German version(s) of Windows NT 4.0.
	
	SYMPTOMS
	========
	
	When you open a Microsoft Excel workbook by right-clicking the desktop, pointing
	to New, and then clicking Microsoft Excel Workbook, an English Excel workbook is
	opened instead of a German Excel Workbook.
	
	CAUSE
	=====
	
	This problem occurs because Windows NT copies an English Excel.xls file in the
	%SystemRoot%\ShellNew folder. The files in this folder are used when you
	right-click a document and then click New.
	
	RESOLUTION
	==========
	
	To resolve this problem, complete the steps below. You must be a local
	administrator to perform these steps:
	
	1. Start Excel from the Start menu. This will open a German Excel workbook.
	
	2. Save this workbook as Excel.xls and close Excel.
	
	3. In Windows Explorer, copy the file to the %SystemRoot%\ShellNew folder.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
