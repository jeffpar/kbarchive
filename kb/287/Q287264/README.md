---
layout: page
title: "Q287264: Monitor Service Stops Running; Event Logs Appear"
permalink: /kb/287/Q287264/
---

## Q287264: Monitor Service Stops Running; Event Logs Appear

	Article: Q287264
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you log off a computer that is running Windows NT Workstation or Server 4.0
	and Lotus Notes 4.5.2, the Monitor service, which is installed from the Resource
	Kit as part of the Data Logging service, unexpectedly stops running but produces
	no error message. This occurs whether you start the Monitor service manually or
	by using the Schedule service.
	
	You may also encounter the following application event log entries:
	
	  Event ID: 1008
	  Source: Perflib
	  Type: Error
	  Description: The Open Procedure for service "notestat" in DLL
	  "d:\notes\server\nnotes.dll" failed. Performance data for this service will
	  not be available. Status code returned is DWORD 0.
	
	  Event ID 1999
	  Source: n
	  Type: Informational
	  Description: The description for Event ID ( 1999 ) in Source ( n ) could not
	  be found. It contains the following insertion string(s): .
	
	  Event ID 2003
	  Source: n
	  Type: Error
	  Description: The description for Event ID ( 2003 ) in Source ( n ) could not
	  be found. It contains the following insertion string(s): .
	
	  Event ID 1900
	  Source: n
	  Type: Information
	  Description: The description for Event ID ( 1900 ) in Source ( n ) could not
	  be found. It contains the following insertion string(s): .
	
	When you log on again, the Monitor service is no longer running, and you must
	manually restart it.
	
	If Compaq Insight Agent is installed on the computer, you may also encounter the
	following application event log entry:
	
	  Event ID 4097 Source: DrWatson Type: Information Description: The
	  application, exe\cpqmgmt.DBG, generated an application error The error
	  occurred on 2/12/1998 @ 9:39:57.531 The exception generated was c0000005 at
	  address 02267ec0 (nosymbols)
	
	RESOLUTION
	==========
	
	To resolve this behavior, remove Lotus Notes, delete the registry entry for the
	Lotus Notes Monitor Agent, and then reinstall Lotus Notes without choosing the
	Notes Monitor Agent installation option:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Remove Lotus Notes.
	
	2. Start Registry Editor (Regedt32.exe).
	
	3. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\notestat
	
	4. On the Edit menu, click Delete.
	
	5. Quit Registry Editor.
	
	6. Reinstall Lotus Notes. During the installation, do not click the Notes
	  Monitor Agent installation option.
	
	These steps also resolve the Compaq Insight Agent "Dr. Watson" error message.
	
	If this does not resolve events 1900 and 1999, make this additional change in the
	registry:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Notestat\Performance
	
	3. Double-click Reg_sz to open the key.
	
	4. Change the value Nnotes.dll to xxnnotes.dll, and then click OK.
	
	5. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For information about how to contact Lotus Development Corporation or IBM, click
	the appropriate article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
