---
layout: page
title: "Q105993: Unable to Print Directly to Ports from a Command Prompt"
permalink: /kb/105/Q105993/
---

## Q105993: Unable to Print Directly to Ports from a Command Prompt

	Article: Q105993
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
	
	If the Default Printer in Print Manager has the Print Directly To Ports option
	selected, you will not be able to print from a Command Prompt (CMD.EXE) to a
	local port.
	
	NOTE: Printing from other applications such as Notepad or Write work correctly
	with the Print Directly To Ports option selected.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	3.5.
	
	The only workaround is to not use the Print Directly To Ports option with Print
	Manager, and resend the print job.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in Windows NT
	Workstation or Server version 3.5.
	
	MORE INFORMATION
	================
	
	You can control how Print Manager sends documents to the printer with the Print
	Directly To Ports option. By default, a document is spooled to the hard disk
	first, and then the spooler sends it to the printer. The spooler sends the
	document to the printer in the background. If you want to bypass spooling, you
	can print directly to the printer. However, you will have to wait until the
	document is printed before continuing to work with your application. This option
	is not available when a printer is shared.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From Print Manager, select a default printer that is local.
	
	2. Select Printer Properties, and then choose Details.
	
	3. Select the Print Directly To Ports option.
	
	  NOTE: This option is not available if the printer is shared.
	
	4. Open a Command Prompt from the Main group and copy a file to a local port
	  with a printer attached.
	
	There will not be any error messages, but no printer output will occur.
	
	Additional query words: prodnt shell
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
