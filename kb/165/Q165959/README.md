---
layout: page
title: "Q165959: Reading a File Saved with the Event Viewer of Another Computer"
permalink: /kb/165/Q165959/
---

## Q165959: Reading a File Saved with the Event Viewer of Another Computer

	Article: Q165959
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Event Viewer enables the user to save the event logs in a binary file with
	the EVT extension. Such a file can be opened with the Event Viewer on any other
	computer running the same version of Windows NT.
	
	Even though the Event Viewer is able to load such a file, it needs the messages
	DLLs for each component described in the source of the events.
	
	For example, assume that computer A is running Windows NT 4.0 and a service
	called "aservice". On this computer, save the system event logs under the file
	System_A.evt. Now assume that computer B is also running Windows NT 4.0. The
	service "aservice" has not been installed on computer B.
	
	On computer B, you open the file System_A.evt with the Event Viewer. If you
	double-click a message with the source set to "aservice," you get the following
	error:
	
	  The description for Event ID (xxx) in Source (aservice) could not be found.
	  It contains the following insertion string(s): ...
	
	Follow the steps in the next section to read the event logs of computer A while
	on computer B without having to install the components of computer A onto
	computer B.
	
	MORE INFORMATION
	================
	
	The EVT files include the event log messages as they are stored by the system.
	Each message is composed of an ID (that is, the message itself) and a number of
	insertion strings. The IDs are translated into strings through the use of
	messages DLLs.
	
	All the application event logs messages DLLs are defined under the following
	registry keys:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\ 
	Application
	
	All the system event logs messages DLLs are defined under the following registry
	keys:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\ 
	System
	
	For example, the TCP/IP service's message DLL is defined under the following
	registry entry:
	
	Key   = HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\ 
	System\TcpIp
	Value = EventMessageFile REG_EXPAND_SZ %SystemRoot%\System32\ 
	netevent.dll
	
	Therefore, all the TCP/IP event log messages are defined in the DLL
	netevent.dll.
	
	When the user double-clicks an event for which the message DLL is not defined in
	the registry, the message string cannot be displayed and the following message
	is displayed:
	
	  The description for Event ID (51) in Source (aservice) could not be found. It
	  contains the following insertion string(s): ...
	
	Below is a description of a way to read the system event logs of a computer with
	WINS on a computer without WINS. This sample can be adapted for any application
	or system component.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	The following operations are required:
	
	1. On the computer with WINS, run REGEDIT and select the following registry
	  key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\ 
	  System\Wins
	
	2. On the Registry menu, click Export Registry File and select a file name (for
	  example, Winsreg.reg).
	
	3. On the computer without WINS (for example, the one used to read the system
	  event logs of the computer with WINS), run REGEDIT. On the Registry menu,
	  click Import Registry File and select the file Winsreg.reg previously saved
	  on the other computer.
	
	4. You should now have the following registry entry on the target computer (that
	  is, the one without WINS):
	
	  Key   = HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\ 
	  EventLog\System\Wins
	  Value = EventMessageFile REG_EXPAND_SZ %SystemRoot%\System32\ 
	  winsevnt.dll
	
	  You now need to copy the file defined in the EventMessageFile registry value
	  in your System32 directory. If X: is mapped to \\wins_server\admins$, you can
	  run the following command:
	
	  copy x:\System32\winsevnt.dll %SystemRoot%\System32\winsevnt.dll
	
	  Of course, the file may be copied somewhere else, but in this case you need to
	  edit the EventMessageFile registry value manually so that it points to the
	  directory with the DLL.
	
	5. Close all the instances of the Event Viewer and rerun the Event Viewer. You
	  should now be able to dump all the WINS events.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
