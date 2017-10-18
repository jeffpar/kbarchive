---
layout: page
title: "Q256137: Cannot Log Off or Shut Down a Windows NT Server"
permalink: kb/256/Q256137/
---

## Q256137: Cannot Log Off or Shut Down a Windows NT Server

	Article: Q256137
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to log off or shut down a server while a command prompt session
	is still open, the computer may appear to stop responding (hang). When this
	occurs, you receive the following error message:
	
	  The Windows application, Cmd.exe cannot respond to the End Task request.
	
	If you click End Task, the computer pauses for 10 minutes before closing the
	command window, but does not log you off or shut down. If you click Wait, the
	command window does not close. If you click Cancel, the command window closes
	and you are returned to the desktop.
	
	CAUSE
	=====
	
	This behavior can occur if the server is deadlocked because of an inappropriate
	number of CSRSS threads available. This can be caused by a invalid registry
	entry that is created when you install Seagate Backup Exec version 7.0 build
	719.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session
	  Manager\SubSystems\Windows
	
	The data for this value looks something like the following sample data:
	
	  %SystemRoot%\system32\csrss.exe ObjectDirectory=\Windows
	  SharedSection=1024,3072 Windows=On SubSystemType=Windows ServerDll=basesrv,1
	  ServerDll=winsrv:UserServerDllInitialization,3
	  ServerDll=winsrv:ConServerDllInitialization,2 ProfileControl=Off
	  MaxRequestThreads
	
	3. Add "=16" (without the quotation marks) after "MaxRequestThreads" so that the
	  data looks similar to:
	
	  %SystemRoot%\system32\csrss.exe ObjectDirectory=\Windows
	  SharedSection=1024,3072 Windows=On SubSystemType=Windows ServerDll=basesrv,1
	  ServerDll=winsrv:UserServerDllInitialization,3
	  ServerDll=winsrv:ConServerDllInitialization,2 ProfileControl=Off
	  MaxRequestThreads=16
	
	4. Quit Registry Editor.
	
	5. Reboot the computer.
	
	MORE INFORMATION
	================
	
	For additional information about other symptoms that can occur if the registry
	entry is invalid, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q187704 Server Lockup Receiving Pop-up Messages with Backup Exec
	
	  Q242118 Connections May Be Lost After You Upgrade to Seagate Backup Exec
	  Version 7.0 Build 719
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
