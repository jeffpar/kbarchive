---
layout: page
title: "Q158980: Protocols Major and Minor Version Registry Keys Not Updated"
permalink: kb/158/Q158980/
---

## Q158980: Protocols Major and Minor Version Registry Keys Not Updated

	Article: Q158980
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Srvinfo.exe that ships with the Windows NT 4.0 Resource Kit against
	a server that was upgraded to Windows NT 4.0 from a previous version of Windows
	NT, the protocols may be listed as being from the previous version (even though
	they were upgraded to the Windows NT 4.0 version of those protocols).
	
	CAUSE
	=====
	
	The following keys were not updated during the upgrade process:
	
	WINS CLIENT (TCP/IP)
	--------------------
	
	HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\NETBT\CurrentVersion\MajorVersion
	
	HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\NETBT\CurrentVersion\MinorVersion
	
	NETBEUI Protocol
	----------------
	
	HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\NBF\CurrentVersion\MajorVersion
	
	HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\NBF\CurrentVersion\MinorVersion
	
	NWLink NetBIOS
	--------------
	
	HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\NwlnkNB\CurrentVersion
	\MajorVersion
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\NwlnkNB\CurrentVersion
	\MinorVersion
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	NWLINK IPX/SPX Compatible Transport
	-----------------------------------
	
	HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\NwlnkIpx\CurrentVersion
	\MajorVersion
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\NwlnkIpx\CurrentVersion
	\MinorVersion
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	RESOLUTION
	==========
	
	Use Registry Editor to change the MajorVersion from 3 to 4 and change the
	MinorVersion from 51(decimal) to 0. To do this, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe) and edit each of the earlier protocol
	  subkeys to the following:
	
	  MajorVersion:REG_DWORD:0x4
	  MinorVersion: REG_DWORD:0
	
	2. Quit Registry Editor and restart your computer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
