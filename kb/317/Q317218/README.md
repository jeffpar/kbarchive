---
layout: page
title: "Q317218: Event IDs 7024, 7000 and FLCSS Service and Process Reported"
permalink: /kb/317/Q317218/
---

## Q317218: Event IDs 7024, 7000 and FLCSS Service and Process Reported

	Article: Q317218
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg ocsso
	Last Modified: 02-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience the following behavior if you use a Windows NT-based
	computer:
	
	- Windows runs slowly.
	
	- The following STOP events are logged in the System log in Event Viewer:
	
	  
	
	  Date:     <date>         Event ID: 7024
	  Time:     <time>         Source:   Service Control Manager  
	  User:     N/A            Type:     Error
	  Computer: <computername> Category: None
	
	  Description:
	
	  The Protected Storage Service Terminated with Service-Specific  
	  Error 2148270091.
	
	  -and-
	
	  
	
	  Date:     <date>         Event ID: 7000
	  Time:     <time>         Source:   Service Control Manager  
	  User:     N/A            Type:     Error
	  Computer: <computername> Category: None
	
	  Description:
	
	  Spooler service failed to start due to the following
	
	  error: The system cannot find the file specified.
	
	- When you try to reinstall the Windows NT service pack, you receive the
	  following error message:
	
	  An error has occurred copying Calc.exe.
	
	  If you click Skip, you receive a similar error message that lists the
	  following files:
	
	  Ddeshare.exe, Clock.exe, Drwatsn.exe, Eventvwr.exe, Fontview.exe,
	  Grpconv.exe, Llsmgr.exe, Llssrv.exe, Lsass.exe, Mspaint.exe, Nddagent.exe,
	  Nddeapir.exe, Netdde.exe, Ntbackup.exe, Nwconv.exe, Perfmon.exe, Rasmon.exe,
	  Rasphone.exe, Rdisk.exe, Savedump.exe, Services.exe, Shrpubw.exe,
	  Srvrmngr.exe, Tapisrv.exe, Taskmgr.exe, Userinit.exe, Usermgr.exe,
	  Windisk.exe, Winfile.exe, Winlogon.exe, Winmsd.exe, Regsvr32.exe.
	
	- The following service is listed in the Service list of the Services dialog
	  box:
	
	  FLCSS service
	
	  NOTE: To open the Services dialog box, click Start, point to Settings, click
	  Control Panel, and then double-click Services.
	
	  If you try to stop this service, you receive an "Access Denied" message.
	
	- You may notice the following running process on the Processes tab of the
	  "Windows NT Task Manager" dialog box:
	
	  Flcss.exe
	
	  NOTE: To view the running processes, right-click a blank area of the taskbar,
	  click Task Manager, and then click the Processes tab.
	
	  When you try to end this process, the process automatically restarts.
	
	- When you try to restart Windows NT 4.0, you may receive the following STOP
	  error (blue screen error).
	
	  STOP: 0xC000021A
	
	CAUSE
	=====
	
	This behavior may occur if your computer is infected with the W32.FunLove.4099
	virus.
	
	
	RESOLUTION
	==========
	
	Microsoft does not provide software that can detect or remove computer viruses.
	If you suspect or confirm that your computer is infected with a virus, obtain
	current antivirus software. For a list of antivirus software manufacturers, view
	the following article in the Microsoft Knowledge Base:
	
	  Q49500 List of Antivirus Software Vendors
	
	NOTE: If you are unable to completely remove this virus, you may need to
	reinstall Windows. For additional information about how to perform a parallel
	installation of Microsoft Windows NT 4.0, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q259003 How and Why to Perform a Parallel Installation of Windows NT 4.0
	
	  Q244378 System Cleanup After a Parallel Installation of Windows NT 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg ocsso 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
