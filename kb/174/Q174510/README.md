---
layout: page
title: "Q174510: Print Job Corruption Printing on Fast Hardware Across Slow Link"
permalink: kb/174/Q174510/
---

## Q174510: Print Job Corruption Printing on Fast Hardware Across Slow Link

	Article: Q174510
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbWinNT400sp4fix
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When "Start printing immediately" is selected on the Scheduling tab of Printer
	properties, print jobs may be corrupted if the client connection speed is slower
	when compared to the printing hardware.
	
	CAUSE
	=====
	
	Print job data is sent to the print device faster than the client can queue data
	to the print spooler.
	
	MORE INFORMATION
	================
	
	When the .spl file is examined, the file size is the same as the source file;
	however, a portion of the *.spl file is "padded" with 0x00 instead of only data
	received from the client. This may be caused by a flow control problem on the
	"slow link" from the client.
	
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
	
	
	Additional query words: slow wan link printing
	======================================================================
	Keywords          : kbnetwork kbprint kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
