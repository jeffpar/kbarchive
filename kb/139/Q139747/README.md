---
layout: page
title: "Q139747: MS-DOS-Based Program Reports Not Enough NetWare Server Space"
permalink: /kb/139/Q139747/
---

## Q139747: MS-DOS-Based Program Reports Not Enough NetWare Server Space

	Article: Q139747
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork 3rdpartynet win95 kb3rdPartyNetClientkbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive a "Not enough space" error message when you try to save a file
	from an MS-DOS-based program to a Novell NetWare server with more than 2
	gigabytes (GB) of free disk space.
	
	CAUSE
	=====
	
	When a program checks to see if there is enough space on a NetWare volume, the
	Microsoft Client for NetWare Networks reports numbers larger than older programs
	were designed to handle. When the program calculates the free space on the
	NetWare volume the value calculated is too large for the program to handle, and
	a value of zero is reported.
	
	
	RESOLUTION
	==========
	
	To work around this problem, shut down Windows 95, restart the computer in
	MS-DOS mode, and use the real-mode provider included with Windows 95. Type the
	following lines at the command prompt:
	
	  "c:\net start nwredir" (without the quotation marks)
	  "c:\net use <drive letter>:\\servername>\<volume>" (without the
	  quotation marks)
	
	Or, use a real-mode redirector provided by Novell (such as NETX or VLM).
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	This fix is enabled by the following BINARY registry value:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\NWREDIR\LargeDiskSizeCompatibility=01
	
	When this update is installed and this registry value is present, NWRedir scales
	down the bytes-per-sector (bps), sectors-per-cluster (spc), and free-clusters
	(fc) values so as not to overflow a 16-bit unsigned integer when the values are
	multiplied together.
	
	For additional information about issues resolved by updates to this component,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q165402 Windows 95 Update to Encrypt Passwords in Memory
	
	  Q136303 Connecting to Schedule+ 1.0 Calendar File Drops Connections
	
	Additional query words: 2gb
	
	======================================================================
	Keywords          : kbnetwork 3rdpartynet win95 kb3rdPartyNetClient kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
