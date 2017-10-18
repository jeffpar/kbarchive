---
layout: page
title: "Q159839: PRB: Sysdiff Does Not Add Empty Directories"
permalink: kb/159/Q159839/
---

## Q159839: PRB: Sysdiff Does Not Add Empty Directories

	Article: Q159839
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfile kbsetup kbWinNT400sp4fix kbOPK kbSBK
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Sysdiff to propagate directory structures to computers running
	Windows NT 4.0, Sysdiff does not add the directories that are empty. Editing the
	[IncludeFilesindDir] section of the Sysdiff.inf file does not seem to help.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Please note that you must rebuild any packages that were built using the previous
	Sysdiff.exe.
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/utilities/Sysdiff-fix
	
	NOTE: This version of Sysdiff replaces the version that ships with Service Pack
	3.
	
	To work around this problem, do one of the following:
	
	- Place a temporary file in the final level of the directory that you want
	  propagated to your computers running Windows NT Server.
	
	  -or-
	
	- Create an $oem$ directory structure on your \i386 share to copy these
	  directories during unattended install to the target computers. Please refer
	  to the Windows NT Workstation Resource Kit for 4.0, chapter 2 for
	  instructions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	
	Additional query words: 4.00 Unattended Automated error 122 SBK OPK Install
	
	======================================================================
	Keywords          : kbfile kbsetup kbWinNT400sp4fix kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
