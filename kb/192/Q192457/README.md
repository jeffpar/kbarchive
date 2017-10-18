---
layout: page
title: "Q192457: Downloaded File May Be Saved in Incorrect Folder with IE"
permalink: kb/192/Q192457/
---

## Q192457: Downloaded File May Be Saved in Incorrect Folder with IE

	Article: Q192457
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following problem will occur if the Y2K-Fix for Windows NT is installed and
	Internet Explorer version 3.x or Internet Explorer version 4.0 without the
	Active Desktop option enabled is used to download files.
	
	When saving a downloaded file to any removable media, including disks, the file
	is saved to a folder with the same name as the file. For example, if the file
	name to be saved is entered as Data on drive A:\, the file is actually saved as
	A:\Data\Data.
	
	For information regarding the Y2K-Fix, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q175093 User Manager Does Not Recognize February 2000 As a Leap Year
	
	  Q183123 Find Files Displays Garbled Date if Year is 2000 or Greater
	
	  Q183125 Shell Doc Property Dialog Custom Date Incorrect After Year 2000
	
	
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
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
