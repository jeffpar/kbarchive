---
layout: page
title: "Q264662: Leftover SPL, SHD, and TMP Files Remain in the Spool Directory A"
permalink: /kb/264/Q264662/
---

## Q264662: Leftover SPL, SHD, and TMP Files Remain in the Spool Directory A

	Article: Q264662
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After all print jobs are completed, you have several SPL, SHD, and TMP files
	left over in the C:\Winnt\System32\Spool\Printers directory.
	
	WORKAROUND
	==========
	
	You can safely delete leftover files that have an .spl, .shd, or .tmp extension
	from the C:\Winnt\System32\Spool\Printers directory. These files should have
	been automatically deleted when the print job was printed.
	
	MORE INFORMATION
	================
	
	The following briefly describes the purpose of SPL, SHD, and TMP files:
	
	SPL files are the actual spool (print job) files.
	
	TMP files are usually associated with LPR print jobs.
	
	SHD files provide information about which printer the print job was sent to and
	from whom the print job came. An SHD file is a "shadow" file that keeps track of
	what logical printer a (same number) xxxxx.spl file goes to. It also contains
	the file's order in the queue, the user who sent the file to the printer, and
	other information. These files are usually deleted unless the logical printer
	settings state otherwise.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
