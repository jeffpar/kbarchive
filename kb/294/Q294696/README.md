---
layout: page
title: "Q294696: IIS4: Unable to Start Web Sites on Port 80"
permalink: /kb/294/Q294696/
---

## Q294696: IIS4: Unable to Start Web Sites on Port 80

	Article: Q294696
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	All Web sites stop and cannot be started on port 80, although the sites can be
	started on any other port.
	
	CAUSE
	=====
	
	This problem is security-based.
	
	Port 80 has been opened by a custom-written executable file (Events.exe) that
	enters the computer through the Recycle Bin security problem. The file adds
	three registry keys so that the process cannot be stopped, even if you use the
	KILL command.
	
	NOTE: Microsoft Exchange Server version 5.5 has an executable file named
	Events.exe, but this is NOT the same file that ships with Exchange Server 5.5.
	This can happen if the system drive security settings have the Everyone group
	with Full Control. This is not a recommended practice because of the security
	hole that it creates.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Back up and delete the three registry entries.
	
	2. Restart the server.
	
	3. Stop the Events.exe process by using the KILL command.
	
	4. Delete the Events.exe file.
	
	MORE INFORMATION
	================
	
	The path to the executable file is C:\Recycler\Events.exe.
	
	The file may change the registry as follows:
	
	REGEDIT4
	
	[HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\EventsSystem]
	"Type"=dword:00000010 "Start"=dword:00000002 "ErrorControl"=dword:00000001
	"ImagePath"=hex(2):43,3a,5c,77,69,6e,6e,74,5c,73,79,73,74,65,6d,33,32,5c,2e,2e,\
	5c,2e,2e,5c,52,65,63,79,63,6c,65,72,5c,65,76,65,6e,74,73,2e,65,78,65,00
	"DisplayName"="Windows Event System" "ObjectName"="LocalSystem"
	
	[HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\EventsSystem\Security]
	"Security"=hex:01,00,14,80,c0,00,00,00,cc,00,00,00,14,00,00,00,34,00,00,00,02,\
	00,20,00,01,00,00,00,02,80,18,00,ff,01,0f,00,01,01,00,00,00,00,00,01,00,00,\
	00,00,20,02,00,00,02,00,8c,00,05,00,00,00,00,00,18,00,8d,01,02,00,01,01,00,\
	00,00,00,00,01,00,00,00,00,70,00,63,00,00,00,1c,00,fd,01,02,00,01,02,00,00,\
	00,00,00,05,20,00,00,00,23,02,00,00,00,00,00,00,00,00,1c,00,ff,01,0f,00,01,\
	02,00,00,00,00,00,05,20,00,00,00,20,02,00,00,00,00,00,00,00,00,1c,00,ff,01,\
	0f,00,01,02,00,00,00,00,00,05,20,00,00,00,25,02,00,00,00,00,00,00,00,00,18,\
	00,fd,01,02,00,01,01,00,00,00,00,00,05,12,00,00,00,25,02,00,00,01,01,00,00,\
	00,00,00,05,12,00,00,00,01,01,00,00,00,00,00,05,12,00,00,00
	
	[HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\EventsSystem\Enum]
	"0"="Root\\LEGACY_EVENTSSYSTEM\\0000" "Count"=dword:00000001
	"NextInstance"=dword:00000001
	
	REGEDIT4
	
	[HKEY_LOCAL_MACHINE\SYSTEM\ControlSet003\Services\EventsSystem]
	"Type"=dword:00000010 "Start"=dword:00000002 "ErrorControl"=dword:00000001
	"ImagePath"=hex(2):43,3a,5c,77,69,6e,6e,74,5c,73,79,73,74,65,6d,33,32,5c,2e,2e,\
	5c,2e,2e,5c,52,65,63,79,63,6c,65,72,5c,65,76,65,6e,74,73,2e,65,78,65,00
	"DisplayName"="Windows Event System" "ObjectName"="LocalSystem"
	
	[HKEY_LOCAL_MACHINE\SYSTEM\ControlSet003\Services\EventsSystem\Security]
	"Security"=hex:01,00,14,80,c0,00,00,00,cc,00,00,00,14,00,00,00,34,00,00,00,02,\
	00,20,00,01,00,00,00,02,80,18,00,ff,01,0f,00,01,01,00,00,00,00,00,01,00,00,\
	00,00,20,02,00,00,02,00,8c,00,05,00,00,00,00,00,18,00,8d,01,02,00,01,01,00,\
	00,00,00,00,01,00,00,00,00,70,00,63,00,00,00,1c,00,fd,01,02,00,01,02,00,00,\
	00,00,00,05,20,00,00,00,23,02,00,00,00,00,00,00,00,00,1c,00,ff,01,0f,00,01,\
	02,00,00,00,00,00,05,20,00,00,00,20,02,00,00,00,00,00,00,00,00,1c,00,ff,01,\
	0f,00,01,02,00,00,00,00,00,05,20,00,00,00,25,02,00,00,00,00,00,00,00,00,18,\
	00,fd,01,02,00,01,01,00,00,00,00,00,05,12,00,00,00,25,02,00,00,01,01,00,00,\
	00,00,00,05,12,00,00,00,01,01,00,00,00,00,00,05,12,00,00,00
	
	REGEDIT4
	
	[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventsSystem]
	"Type"=dword:00000010 "Start"=dword:00000002 "ErrorControl"=dword:00000001
	"ImagePath"=hex(2):43,3a,5c,77,69,6e,6e,74,5c,73,79,73,74,65,6d,33,32,5c,2e,2e,\
	5c,2e,2e,5c,52,65,63,79,63,6c,65,72,5c,65,76,65,6e,74,73,2e,65,78,65,00
	"DisplayName"="Windows Event System" "ObjectName"="LocalSystem"
	
	[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventsSystem\Security]
	"Security"=hex:01,00,14,80,c0,00,00,00,cc,00,00,00,14,00,00,00,34,00,00,00,02,\
	00,20,00,01,00,00,00,02,80,18,00,ff,01,0f,00,01,01,00,00,00,00,00,01,00,00,\
	00,00,20,02,00,00,02,00,8c,00,05,00,00,00,00,00,18,00,8d,01,02,00,01,01,00,\
	00,00,00,00,01,00,00,00,00,70,00,63,00,00,00,1c,00,fd,01,02,00,01,02,00,00,\
	00,00,00,05,20,00,00,00,23,02,00,00,00,00,00,00,00,00,1c,00,ff,01,0f,00,01,\
	02,00,00,00,00,00,05,20,00,00,00,20,02,00,00,00,00,00,00,00,00,1c,00,ff,01,\
	0f,00,01,02,00,00,00,00,00,05,20,00,00,00,25,02,00,00,00,00,00,00,00,00,18,\
	00,fd,01,02,00,01,01,00,00,00,00,00,05,12,00,00,00,25,02,00,00,01,01,00,00,\
	00,00,00,05,12,00,00,00,01,01,00,00,00,00,00,05,12,00,00,00
	
	[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventsSystem\Enum]
	"0"="Root\\LEGACY_EVENTSSYSTEM\\0000" "Count"=dword:00000001
	"NextInstance"=dword:00000001
	
	For additional information on the Recycle Bin security problem, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q248399 Shared Workstation Setup May Permit Access to Recycle Bin Files
	
	Additional query words: IIS port binding 80 hacker kbWinNTsearch kbOSWinSearch
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
