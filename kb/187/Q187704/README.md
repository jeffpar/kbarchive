---
layout: page
title: "Q187704: Server Lockup Receiving Pop-up Messages with Backup Exec"
permalink: /kb/187/Q187704/
---

## Q187704: Server Lockup Receiving Pop-up Messages with Backup Exec

{% raw %}

	Article: Q187704
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a pop-up message is received from Backup Exec 7.0 build 719 that is
	installed on Windows NT Server 4.0, the access to the CPU is blocked, except for
	critical processes necessary to keep the computer running Windows NT running.
	Some or all applications may quit responding until the message box is closed.
	The server may become completely unresponsive on the network while in this
	state.
	
	NOTE: This behavior has only been seen in Backup Exec 7.0 Build 719.
	
	CAUSE
	=====
	
	Seagate Technical Support reports that Build 719 of Backup Exec for Windows NT
	Server 7.0 makes a change to the registry that causes this behavior. The
	registry change is required in order for Backup Exec to work on Small Business
	Server (SBS). This change, however, causes problems on Windows NT 4.0 Server. At
	this time, the installation program of Build 719 does not check to see if the
	version of the OS is Windows NT Server or BackOffice SBS. The registry subkey
	changed is:
	
	  
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager
	  \SubSystems\Windows
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	The entry before installing Backup Exec 7.0 Build 719 is:
	
	  
	  %SystemRoot%\system32\csrss.exe ObjectDirectory=\Windows
	  SharedSection=1024,3072 Windows=On SubSystemType=Windows
	  ServerDll=basesrv,1 ServerDll=winsrv:UserServerDllInitialization,3
	  ServerDll=winsrv:ConServerDllInitialization,2 ProfileControl=Off
	  MaxRequestThreads=16
	
	The entry after installing Backup Exec 7.0 Build 719 is:
	
	  
	  %SystemRoot%\system32\csrss.exe ObjectDirectory=\Windows
	  SharedSection=1024,3072,512 Windows=On SubSystemType=Windows
	  ServerDll=basesrv,1 ServerDll=winsrv:UserServerDllInitialization,3
	  ServerDll=winsrv:ConServerDllInitialization,2 ProfileControl=Off
	  MaxRequestThreads
	
	RESOLUTION
	==========
	
	On Windows NT Server 4.0, add the "=16" value back to the MaxRequestThreads
	section. Do not make this change on Small Business Server.
	
	
	MORE INFORMATION
	================
	
	Build 719 removes the "=16" from MaxRequestThreads=16. Also note that Backup
	Exec implements the change indicated in the following article by adding ",512"
	after the SharedSection:
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q142676
	  TITLE : Overcoming User32.dll Initialization Failure Errors
	
	For information on Backup Exec, see the following Web site:
	
	  http://www.veritas.com (http://www.veritas.com)
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: hang hangs hung frozen freeze non-responsive
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : :4.0,4.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
