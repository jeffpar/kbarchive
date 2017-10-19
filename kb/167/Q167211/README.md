---
layout: page
title: "Q167211: PRB: Cmdlines.txt Does Not Recognize Parameters Surrounded by Qu"
permalink: /kb/167/Q167211/
---

## Q167211: PRB: Cmdlines.txt Does Not Recognize Parameters Surrounded by Qu

	Article: Q167211
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During an unattended setup, some entries in the Cmdlines.txt file do not
	execute.
	
	CAUSE
	=====
	
	The entries in Cmdlines.txt that are not executing may contain entries that
	contain parameters between quotation marks, as in the following example:
	
	     Cmdlines.txt
	        [Commands]
	        ".\at 04:00 /interactive cmd.exe /c "c:\batch\runme.bat"
	
	Cmdlines.txt treats the first quotation mark in the parameter as the end of the
	command line.
	
	RESOLUTION
	==========
	
	To resolve this problem, create a batch file containing the same command line
	with quotation marks, and run that batch file from the Cmdlines.txt text file.
	For the previous example, the resolution would be:
	
	     CMDLINES.TXT
	        [Commands]
	        ".\mybatch.bat"
	
	     Mybatch.bat
	        AT 04:00 /interactive cmd.exe /c "c:\batch\runme.bat"
	
	MORE INFORMATION
	================
	
	The Unattend.txt setup script must include "OEMPreinstall=Yes in the
	[Unattended] section, to enable the Cmdlines.txt file. This file must also
	reside in the $OEM$ directory of your Windows NT distribution share.
	
	For additional information about unattended installations, please see the
	following article at the Microsoft Web site:
	
	  http://www.microsoft.com/ntworkstation/info/Deployment-guide.htm
	
	Additional query words: prodnt Unattended Setup
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
