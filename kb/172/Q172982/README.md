---
layout: page
title: "Q172982: 16-bit ShellExecute Fails if Application Exists in Long Path"
permalink: kb/172/Q172982/
---

## Q172982: 16-bit ShellExecute Fails if Application Exists in Long Path

	Article: Q172982
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may get a get an error code 2 (ERROR_FILE_NOT_FOUND) from ShellExecute if
	the associated executable file exists in a directory path containing a long file
	name.
	
	CAUSE
	=====
	
	The 16-bit WinExec is unable to handle unquoted long file names properly. It
	will incorrectly detect spaces as argument separators. For example, if you run
	ShellExecute on readme.txt, from 16-bit Visual Basic, it will try to locate the
	associated notepad.exe. If it exists in a directory with spaces or the file with
	which you run ShellExecute has spaces, ShellExecute will fail with the Error 2.
	
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
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
