---
layout: page
title: "Q196746: Dr. Watson Error Occurs Starting Virtual Globe 99"
permalink: /kb/196/Q196746/
---

## Q196746: Dr. Watson Error Occurs Starting Virtual Globe 99

{% raw %}

	Article: Q196746
	Product(s): Microsoft Windows NT
	Version(s): Windows:1.0; WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Encarta Virtual Globe 99 on a computer
	running Windows NT, a Dr. Watson error occurs. The Dr. Watson error is an
	application error in Msworld.exe.
	
	CAUSE
	=====
	
	Encarta Virtual Globe 99 modifies the registry when starting. As a result, to
	use Microsoft Encarta Virtual Globe 99 on a computer running Windows NT, you
	must have Administrator privileges or an administrator must change permissions
	to a more accessible level on two registry keys.
	
	RESOLUTION
	==========
	
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
	
	To resolve this problem, perform the following steps:
	
	1. Log off as the current user.
	
	2. Log on as an Administrator and change the Security Permissions on two keys in
	  the registry. Allow the EVERYONE group Full Control permission on the
	  following two registry entries:
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Microsoft Reference
	
	     HKEY_CURRENT_USER\Software\Microsoft\Microsoft Reference
	
	  Now domain users will be able to use the Virtual Globe 99 software.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q178153 Multimedia: Only Administrator Can Install Program Under NT 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400
	Version           : Windows:1.0; WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
