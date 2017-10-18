---
layout: page
title: "Q322800: Turn Off 8.3 Translation to Improve Client For NFS Performance"
permalink: kb/322/Q322800/
---

## Q322800: Turn Off 8.3 Translation to Improve Client For NFS Performance

	Article: Q322800
	Product(s): Microsoft Windows NT
	Version(s): 2.0,2.1 OEM Only,2.2 OEM Only,2.3 OEM Only,3.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, versions 2.0, 2.1 OEM Only, 2.2 OEM Only, 2.3 OEM Only, 3.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	You can improve Client For NFS performance by turning off the ability to
	translate file names on an NFS share to the 8.3 format.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To turn off the ability to translate file names on an NFS share to the 8.3
	format, use Registry Editor to locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Client for
	  NFS\CurrentVersion\Users\Default\Defaults
	
	Edit the following value:
	
	  Value Name: 8.3Format
	  Value Type: REG_DWORD
	  Value:
	  0 is 8.3 translation is turned off
	  1 is 8.3 translation is turned on (the default setting)
	
	After you make this change, stop and then restart the Client For NFS service.
	
	NOTE: After you turn off 8.3 translation, you cannot run a 16-bit program from an
	NFS share by using the Client For NFS. If you try to do so, you receive the
	following error message:
	
	  Cannot run 16 bit application
	
	Additional query words: solar coaster solarcoaster interix
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch kbWinServiceUNIX300 kbWinServiceUNIX210OEM kbWinServiceUNIX220OEM
	Version           : :2.0,2.1 OEM Only,2.2 OEM Only,2.3 OEM Only,3.0
	Issue type        : kbinfo
	
	=============================================================================
	
