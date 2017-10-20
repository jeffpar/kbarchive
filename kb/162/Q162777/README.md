---
layout: page
title: "Q162777: Printing to an LPD Service Running On SunOS 4.1.x System"
permalink: /kb/162/Q162777/
---

## Q162777: Printing to an LPD Service Running On SunOS 4.1.x System

{% raw %}

	Article: Q162777
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	Registry Key" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Windows NT supplies a command line utility (Lpr.exe) and the LPR port print
	monitor (Lprmon.dll) to print jobs to an LPD service running on another
	computer. If the remote computer runs SunOS 4.1 or a prior version, you may need
	to configure LPR to support the SunOS compatibility mode.
	
	MORE INFORMATION
	================
	
	- The lpr -x option allows you to set the SunOS 4.1.x compatibility mode (see
	  lpr -? ).
	
	- When you use an LPR port printer queue, the LPR port print monitor checks the
	  OldSunCompatibility registry value to check if this mode must be enabled (1
	  enable, 0 disable ).
	
	The following example enables the Sun0S compatibility mode on the port
	SUNSERVER:PRINTER:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topic in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Registry key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print
	\Monitors\LPRPort\Ports\SUNSERVER:PRINTER
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	  OldSunCompatibility:REG_DWORD:0x1
	
	For additional information on this registry setting, please see the following
	article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q126561
	  TITLE : Printing To An LPR Printer May Be Slow
	
	
	
	Additional query words: line printer daemon remote
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
