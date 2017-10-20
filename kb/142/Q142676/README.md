---
layout: page
title: "Q142676: Overcoming User32.dll Initialization Failure Errors"
permalink: /kb/142/Q142676/
---

## Q142676: Overcoming User32.dll Initialization Failure Errors

{% raw %}

	Article: Q142676
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to start a service a pop-up dialog box appears with the following
	message:
	
	  <ServiceName> - DLL initialization failure Initialization of the
	  dynamic link library c:\windows\system32\user32.dll failed. The process is
	  terminating abnormally.
	
	CAUSE
	=====
	
	The system has run out of memory to create a new desktop heap for the service
	being started.
	
	
	RESOLUTION
	==========
	
	Fixing this behavior requires editing of the Registry and restarting the
	computer concerned.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Run the Registry Editor(Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  \System\CurrentControlSet\Control\Session Manager\ SubSystems\Windows
	
	The default data for this value may look something like the following (all on one
	line):
	
	  %SystemRoot%\system32\csrss.exe ObjectDirectory=\Windows
	  SharedSection=1024,3072 Windows=On SubSystemType=Windows
	  ServerDll=basesrv,1 ServerDll=winsrv:UserServerDllInitialization,3
	  ServerDll=winsrv:ConServerDllInitialization,2 ProfileControl=Off
	  MaxRequestThreads=16
	
	You need to make the following change to this value:
	
	Scan along the line until you reach the part that defines the SharedSection
	values and add ",512" after the second number. This value should now look
	something like the following:
	
	  %SystemRoot%\system32\csrss.exe ObjectDirectory=\Windows
	  SharedSection=1024,3072,512 Windows=On SubSystemType=Windows
	  ServerDll=basesrv,1 ServerDll=winsrv:UserServerDllInitialization,3
	  ServerDll=winsrv:ConServerDllInitialization,2 ProfileControl=Off
	  MaxRequestThreads=16
	
	After making this change, close Regedt32 and restart the server.
	
	This change limits the size of desktop heaps created by non-interactive services
	to 512 KB, which should be ample for most services.
	
	Adding this optional third value defines the desktop heap size for non-
	interactive desktops (e.g. services) to be 512K. By default they may use the
	same desktop heap size as interactive desktops which is defined by the second
	value (3072 which equates to 3MB). The minimum that this third value can be set
	to is 128. Any attempts to set this value to less than 128 results in 128 being
	used. Setting this value to 512 enables approximately 90 services to be started
	before this behavior reoccurs.
	
	For a fuller definition of what the first two parameters to SharedSection mean,
	see Article Q126962
	
	
	STATUS
	======
	
	This behavior is by design. The registry entry enables users to override the
	default settings.
	
	Additional query words: Exchange SMS SNA SQL Server prodnt stop initialize initialized heap space heapspace winstation desktop user32 dll Initialization failed dynamic link system32
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
