---
layout: page
title: "Q214488: Registry Flag fUseDefaultGina Does Not Work"
permalink: /kb/214/Q214488/
---

## Q214488: Registry Flag fUseDefaultGina Does Not Work

	Article: Q214488
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): _IK kbWin2000SP2Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If a third-party Gina.dll file is installed and the fUseDefaultGina value in the
	following registry key is set to 0x1, the third-party Gina.dll file is still
	used for the main console on the server:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Terminal
	  Server\WinStations\Console
	
	This setting should force the Msgina.dll file to be used.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To use the default Gina for Terminal Server clients, use the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the fUseDefaultGina value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal
	  Server\WinStations\RDP-Tcp
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click REG_DWORD, type "0x1" (without the quotation marks),
	  and then click OK.
	
	4. Quit Registry Editor.
	
	RESOLUTION
	==========
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Windows 2000
	------------
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time   Version        Size    File name
	  ------------------------------------------------------
	  06/23/2000  03:53p 5.0:2195.2097  177,936 Winlogon.exe
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	Additional query words: 4.00 wts tse
	
	======================================================================
	Keywords          : _IK kbWin2000SP2Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch
	Version           : :2000,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
