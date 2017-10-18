---
layout: page
title: "Q171213: Copy to Removable Drive in Explorer May Fail After Media Swap"
permalink: kb/171/Q171213/
---

## Q171213: Copy to Removable Drive in Explorer May Fail After Media Swap

	Article: Q171213
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbui kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT Explorer, when you drag a folder from your hard drive to another
	folder on a removable drive, the files do not get copied correctly.
	
	This problem only occurs when:
	
	- You have recently changed the media in the removable drive but have not
	  forced an update in Windows NT Explorer by pressing F5.
	
	  -and-
	
	- You are dragging files or folders to a folder that used to exist on the
	  previous disk, but does not exist on the new one.
	
	CAUSE
	=====
	
	This problem is caused by a problem in the Explorer.exe code in Windows NT 4.0.
	The problem does not occur in File Manager (Winfile.exe) in Windows NT 3.51 or
	4.0.
	
	RESOLUTION
	==========
	
	To work around this problem, force an update of the Windows NT Explorer window
	by pressing F5 after changing the removable media.
	
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
	
	
	Additional query words: explorer removable media
	
	======================================================================
	Keywords          : kbui kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
