---
layout: page
title: "Q191011: How To Create a Log File of Created Named Objects"
permalink: /kb/191/Q191011/
---

## Q191011: How To Create a Log File of Created Named Objects

	Article: Q191011
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	Registry Key" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	When you set an application-compatibility flag of 0x1000 for an application on a
	Terminal Server, you tell the system to log any named object creations, such as
	semaphores, mutexes, events, and sections, to a file. This can be useful when
	you troubleshoot application problems. Normally, named objects have the Session
	ID appended to them to help distinguish them from objects created by other
	sessions. This process is referred to as "decorating the object." Some
	applications will fail if they cannot locate a named object. If the application
	expects a specific object name, but the name has been modified through
	decoration, the application may fail. You can register the application
	executable using the REGISTER utility, which will instruct Multi-User Object
	Manager to not decorate the created name objects in the application. Making a
	log file of created named objects (and the DLLs that made the objects) can be
	help you determine which DLLs to register.
	
	MORE INFORMATION
	================
	
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
	
	Application compatibility flags are set under:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\\Windows NT\ 
	  CurrentVersion\Terminal Server\Compatibility\Applications
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	1. Create a key for the executable you want to monitor. In this example, NET.EXE
	  will be monitored, so a key called NET is created.
	
	2. Add a DWORD value called FLAGS to the NET key. The Flags value will be 1000
	  in hex (and will appear as 0x1000).
	
	3. Locate or create a directory to store the log file. In this example, the
	  directory D:\OBJECTLOG is used.
	
	4. In Control Panel/System, locate Environment and add a system variable,
	  CITRIX_COMPAT_LOGPATH. The value for this variable will be the directory for
	  the log. In this example, D:\OBJECTLOG is used.
	
	5. At a command prompt, type SET to view environment variables. Check the
	  variable name and path for accuracy. In the example, the variable reads,
	  CITRIX_COMPAT_LOGPATH=D:\OBJECTLOG.
	
	6. Run the application and then view the created log. If no log is created then
	  the application does not create named objects. For the example, run NET USE
	  G: \\Serververname\C$ (or any share). The resulting NET.LOG is created:
	
	  Create Event name: ConnectionChangeEvent\USER Return Addr: 777079db
	  (D:\WTSRV\system32\MPR.dll)
	  Create Event name: SvcctrlStartEvent_A3752DX\SYSTEM Return Addr:
	  77db84cd (D:\WTSRV\system32\ADVAPI32.dll)
	  Create Event name: ScNetDrvMsg Return Addr: 77703140
	  (D:\WTSRV\system32\MPR.dll)
	
	NOTE: The log provides details about the object name, its memory address, and the
	DLL that created the object.
	
	7. When you complete troubleshooting, edit the flags value for the application
	  so logging stops. Remove the 1000 value. Be sure not to delete any other flag
	  values. For example, a flags value of 1008 means that object creation logging
	  should occur, and that the application is a 32-bit application. Subtract the
	  0x1000, and leave behind the value of 0x8.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
