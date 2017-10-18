---
layout: page
title: "Q219602: Random Dr. Watson Errors in Services.exe"
permalink: kb/219/Q219602/
---

## Q219602: Random Dr. Watson Errors in Services.exe

	Article: Q219602
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbinterop
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you add or modify one of the values in the
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services registry key on your
	computer running Windows NT 4.0, you may receive random or intermittent Dr.
	Watson error messages with the Services.exe file as the source.
	
	CAUSE
	=====
	
	This problem occurs because the DependOnService value type for one or more
	Windows NT services may be corrupt or incorrect. The registry may have become
	corrupt, or a service's value may have been improperly configured.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, verify that the value type for the DependOnService value
	is set to REG_MULTI_SZ for all services that contain value entries. To do this,
	perform one of the following:
	
	- Use Registry Editor to examine each DependOnService value for the correct
	  value type. To do this:
	
	  1. Start Registry Editor (Regedt32.exe).
	
	  2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	
	  3. Click each service to display to attendant DependOnService value for that
	     key. If the value type is not listed as REG_MULTI_SZ, go to the How To
	     Correct This Issue section.
	
	- Export the HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services key to an
	  external file, and then use a standard text editor to check the individual
	  DependOnService values for the correct value type:
	
	  1. Start Registry Editor (Regedt32.exe).
	
	  2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	
	  3. On the Registry menu, click Save Subtree As, type a unique name for the
	     file, and then click Save.
	
	  4. Quit Registry Editor.
	
	  5. Use a standard text editor, such as Notepad, to review the file and
	     confirm that the DependOnService value is associated with the correct
	     value type. For each entry that is not listed as REG_MULTI_SZ, go to the
	     How To Correct This Issue section.
	
	- Use the Windows NT Diagnostics tool to identify incorrect value types for the
	  DependOnService value.
	
	  1. Click Start, point to Programs, point to Administrative Tools (Common),
	     and then click Windows NT Diagnostics.
	
	  2. Click the Services tab, highlight each individual service, click
	     Properties, and then click Dependencies.
	
	  3. If you are experiencing this exact issue, the Service Dependency window
	     may contain values that look like this:
	
	  MSExchangeIS
	  end||
	  ee|e|e
	  e|||
	
	NOTE:The Above characters "e" and "|" were substituted for the illegible symbols
	that may be displayed.
	
	  4. Make a note of the service that contains these invalid entries and then
	     proceed to the How To Correct This Issue section.
	
	How To Correct This Issue:
	--------------------------
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	
	3. Highlight the DependOnService value, make a note of the current value
	  entries, and then press DELETE.
	
	4. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	  Value Name: DependOnService
	  Data Type:  REG_MULTI_SZ
	  Value:      <dependent on each unique service>
	
	5. Quit Registry Editor, and then restart the computer.
	
	MORE INFORMATION
	================
	
	The Dr. Watson log, located in the %SystemRoot% folder, may also show a call
	similar to the following in the stack trace below the faulted function:
	
	  services!ScReadDependencies
	
	Windows NT reads the service dependencies for the service attempting to start,
	identifies any incorrect value types, and then generates a Dr. Wastson error
	message.
	
	For additional information about the DependOnService value, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q193888 How to Delay Loading of Specific Services
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
