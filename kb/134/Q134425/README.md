---
layout: page
title: "Q134425: Event ID 7000: %1 Not A Valid Windows NT Application"
permalink: /kb/134/Q134425/
---

## Q134425: Event ID 7000: %1 Not A Valid Windows NT Application

	Article: Q134425
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you restart Windows NT and attempt to run an application, service, or
	install a network protocol, one of the following system events appears in Event
	Viewer:
	
	  Event ID: 7000
	  Source: Service Control Manager
	  Type: Error
	  Description: The <service name> service failed to start due to the
	  following error: <service name>: %1 not a valid Windows NT
	  Application.
	
	  -or-
	
	  Event ID: 7000 Source: Service Control Manager Type: Error Description: The
	  <service name> service failed to start due to the following error: The
	  system cannot find the file specified.
	
	  -or-
	
	When you try to manually start a service from the Services tool in Control Panel,
	you may receive the following error message:
	
	  Could not start the service <name> on \\<computer name> 0193: %1
	  is not a valid application.
	
	CAUSE
	=====
	
	This problem occurs if a service component required for Windows NT, an
	application, or a network protocol, is corrupted or missing.
	
	-or-
	
	The problem can also occur if the folder location of the executable contains
	spaces in the directory name (long filename). An example would be when the
	executable is located in the \Program files\<service.exe> folder.
	
	RESOLUTION
	==========
	
	To correct this problem if the file is missing, manually expand the service
	component file. For example, if the <service name> in Event ID 7000 is
	MUP, expand MUP.SY_ from the Window NT CD-ROM to MUP.SYS in the
	%SystemRoot%\SYSTEM32\DRIVERS folder.
	
	To correct this problem if the file is located in a folder with a long file name,
	modify the registry key containing the executable path to be enclosed in
	quotation marks or change the executable to use the standard 8.3 (tilde ~) path
	notation.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	For example:
	
	1. Run Registry Editor (Regedt32.exe), and then navigate to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\[name of service]
	
	2. Double click the ImagePath value, and then change the Value Data of ImagePath
	  by adding quotation marks around the complete path, including the executable
	  name. For example: "C:\Program Files\{executable}".
	
	
	Additional query words: prodnt 3.10 transport
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	
