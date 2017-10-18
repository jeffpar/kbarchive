---
layout: page
title: "Q158396: Explorer Hangs When Creating a New Folder On a MAC Volume"
permalink: kb/158/Q158396/
---

## Q158396: Explorer Hangs When Creating a New Folder On a MAC Volume

	Article: Q158396
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Explorer may stop responding (hang) for 10-20 seconds when you type a
	new folder name on a local or remote Macintosh-accessible (Service For Macintosh
	User Authenticated Method) volume or folder. After the computer stops
	responding, the new folder name reverts to "New Folder" until you refresh the
	window. At this time, the folder name becomes the incomplete name entered before
	your computer stopped responding. You can now rename the incomplete folder name
	to a new folder name without experiencing the same behavior.
	
	
	RESOLUTION
	==========
	
	To avoid or work around this problem, use the File Manager interface.
	
	1. Click the Start button, and then click Run.
	
	2. Type "winfile" (without the quotation marks). This will access the File
	  Manager interface.
	
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
	
	Additional query words: macfile non-responsive lock locks freezes hangs
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
