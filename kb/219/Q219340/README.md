---
layout: page
title: "Q219340: Unable to Read Files from a Remote LANMAN 2.1 Compatible Server"
permalink: kb/219/Q219340/
---

## Q219340: Unable to Read Files from a Remote LANMAN 2.1 Compatible Server

	Article: Q219340
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you read a file list from a remote LAN Manager 2.1-compatible server (for
	example, an OS/2 server) where the folder you are reading contains multiple
	files with names longer than 128 characters, the list of files displayed may not
	contain all files in the remote shared folder.
	
	This does not affect folders shared on computers running Windows NT.
	
	CAUSE
	=====
	
	This problem occurs when there are multiple files on the shared folder with
	names longer than 128 characters. The internal buffers in the Windows NT
	redirector code does not account for the possiblity of these large names. The
	buffers have been expanded in Windows NT 4.0 Service Pack 5 to account for the
	largest possible names on these systems.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : winnt:4.0,4.0a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
