---
layout: page
title: "Q172151: SAM Failed to Start the TCP/IP or SPX/IPX Listening Thread"
permalink: kb/172/Q172151/
---

## Q172151: SAM Failed to Start the TCP/IP or SPX/IPX Listening Thread

	Article: Q172151
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft File and Print Services for NetWare versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove File and Print Services for NetWare (FPNW) an error is posted
	in the Windows NT 4.0 Event Log:
	
	  Event ID 12291: SAM failed to start the TCP/IP or SPX/IPX listening thread.
	
	The error is benign and causes no loss in functionality.
	
	NOTE: FPNW may have been removed when running Windows NT 3.51 as required by the
	upgrade to Windows NT 4.0, this will also cause error 12291.
	
	CAUSE
	=====
	
	This may be due to a failure by the FPNW uninstall process to remove two
	registry values under the LSA Control key.
	
	WORKAROUND
	==========
	
	If the following two values exist in the registry, remove them to prevent
	further occurrences of this error.
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\LSA\ 
	  NetwareClientSupport
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\LSA\ 
	  Notification
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	
	1. Run Registry Editor (Regedt32.exe) and select the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\LSA
	
	2. Select the value NetwareClientSupport click Delete from the Edit menu.
	
	3. Select the Notification value and click Delete from the Edit menu.
	
	MORE INFORMATION
	================
	
	If, however, the above registry keys are not present in the registry, you may be
	able to resolve this error by applying or reapplying the current service pack
	for Windows NT 4.0, and/or reapplying any vendor specific updates.
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbServicesNetwareSearch kbFPNW351 kbFPNW400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
