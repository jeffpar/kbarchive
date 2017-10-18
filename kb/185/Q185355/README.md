---
layout: page
title: "Q185355: Printers Folder Displays Printer Error When Printer Is Busy"
permalink: kb/185/Q185355/
---

## Q185355: Printers Folder Displays Printer Error When Printer Is Busy

	Article: Q185355
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use LPR to send a print job to the printer, the message "Printer Error"
	will incorrectly be displayed if the printer is busy. Even though the printers
	folder displays an error, LPRMON will continue to retry the print job until it
	is cancelled by the user.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	In most cases when "printer error" is displayed it is because the buffer on the
	printer network card or print server is full or there is another LPR connection
	to the printer from a different computer. "Printer Busy or Error" will now be
	displayed, which is a more accurate description. This message will also be
	displayed if the printer is out of paper or has a hardware failure.
	
	
	Additional query words: 2004 rfc1179
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
