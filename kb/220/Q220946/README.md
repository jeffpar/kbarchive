---
layout: page
title: "Q220946: Symptoms That You May Experience If the Lsass.exe Process Stops"
permalink: /kb/220/Q220946/
---

## Q220946: Symptoms That You May Experience If the Lsass.exe Process Stops

	Article: Q220946
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbsetup w2000setup
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Lsass.exe process stops on a Windows NT 4.0-based computer, the domain
	box may be missing from the logon dialog box. If you try to log on to the local
	computer, you may receive the following error message:
	
	  The system can not log you on (C0000037). Please try again or consult your
	  system administrator.
	
	You can ping the computer from the network; however, when you use the net command
	to gain access to the computer, the command does not work and you receive the
	following error message:
	
	  System error 6 has occurred
	  The handle is invalid
	
	An event is not logged on computers that are running Windows NT 4.0 or Windows
	2000.
	
	In Windows 2000, when the Lsass.exe process stops the computer restarts after you
	receive the following message:
	
	  The system process LSASS.EXE terminated unexpectedly with status code X. The
	  system will now shut down and restart.
	
	The status code may be different depending on the conditions that caused the
	Lsass.exe process to stop.
	
	CAUSE
	=====
	
	The Lsass.exe process has unexpectedly stopped.
	
	RESOLUTION
	==========
	
	You may be able to resolve this issue by installing the latest service pack or
	security roll-up for your version of Microsoft Windows. For additional
	information about how to do so, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain Windows NT Version 4.0 U.S. Service Pack
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	If the issue continues to occur, contact Microsoft Technical Support for
	assistance with this issue. For a complete list of Microsoft Technical Support
	phone numbers and information about support costs, please visit the following
	Microsoft Web site:
	
	  United States Support Options Overview
	  (http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS)
	
	MORE INFORMATION
	================
	
	The status code in one of the error messages is -1073741819. If you convert this
	number from decimal to hexadecimal, it becomes C0000005, which is the code for
	an access violation:
	
	  //
	  // MessageId: STATUS_ACCESS_VIOLATION
	  //
	  // MessageText:
	  //
	  // The instruction at "0x%08lx" referenced memory at "0x%08lx". The memory
	  // could not be "%s".
	  // #define STATUS_ACCESS_VIOLATION ((NTSTATUS)0xC0000005L) //
	
	You can use Dr.Watson to capture the information from the Lsass.exe process. If
	Dr.Watson does not capture the information about the Lsass.exe process, you may
	want to set up the Userdmp.exe tool.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup w2000setup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
