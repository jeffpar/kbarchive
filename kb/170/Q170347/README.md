---
layout: page
title: "Q170347: Oops Error Message When Attempting an FTP MGET"
permalink: /kb/170/Q170347/
---

## Q170347: Oops Error Message When Attempting an FTP MGET

	Article: Q170347
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the users' rights on the root directory of the client computer to
	anything lower than change level, users will get an error when they try to use
	the FTP command-line utility mget parameter to copy files.
	
	The following is an example of the error:
	
	  Error opening local file s2u.
	  >\s2u.:Permission denied
	  can't find list of remote files, oops
	
	WORKAROUND
	==========
	
	Currently, the only workaround is to give users at least change level rights to
	the root drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server versions 3.51 and 4.0. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: file transfer protocol
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
