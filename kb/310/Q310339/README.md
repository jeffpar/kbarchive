---
layout: page
title: "Q310339: PRB: Netlogon Logs Event ID 5719 on a Domain Controller"
permalink: kb/310/Q310339/
---

## Q310339: PRB: Netlogon Logs Event ID 5719 on a Domain Controller

	Article: Q310339
	Product(s): Microsoft Windows NT
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When the Netlogon service starts or the service is under load, the following
	event may be logged to the Event Log:
	
	  
	
	  Event Type:	Error
	  Event Source:	NETLOGON
	  Event Category:	None
	  Event ID:	5719
	  Date:		9/28/2001
	  Time:		4:12:55 PM
	  User:		N/A
	  Computer:	Server
	  Description:
	  No Windows NT or Windows 2000 Domain Controller is available for domain <domain name>. The following error occurred:
	  There are currently no logon servers available to service the logon request.  
	  Data:
	  0000: c000005e 
	
	CAUSE
	=====
	
	One possible cause of this error is that you have run out of buffer space in the
	NetBT datagram buffer.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, increase the MaxDgramBuffering value from 128 KB to 256
	KB:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NetBT\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following information:
	
	  Value Name: MaxDgramBuffering
	  Data Type: REG_DWORD
	  Value: 0x40000
	
	4. Quit Registry Editor.
	
	5. Restart the Netlogon service (you may have to restart the computer).
	
	NOTE: If you are using Regedit instead of Regedt32 to modify the registry,
	either
	
	- right-click Parameters, click New, and then click "REG_DWORD"
	
	-or-
	
	- click "New" on the Edit menu, and then click "REG_DWORD"
	
	and then add the new registry key information.
	
	MORE INFORMATION
	================
	
	MaxDgramBuffering Details
	-------------------------
	
	Key: NetBT\Parameters
	Value Type: REG_DWORD - Count of bytes
	Valid Range: 0 - 0xFFFFFFFF
	Default: 0x20000 (128 KB)
	Description: This parameter specifies the maximum amount of memory that NetBT
	will dynamically allocate for all outstanding datagram send commands. After this
	limit is reached, further send commands will fail due to insufficient
	resources.
	
	For additional information on other possible causes of this error, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q259883 Upgrading Windows NT 4.0 Domain Controller with FAT File System Does
	  Not Install Active Directory
	
	  Q269119 Logging on to a Domain Does Not Work from a Windows 2000-Based RAS
	  Client
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q217023 Event ID 5701 Starting Netlogon on Domain Controller
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbWinAdvServSearch
	Version           : :2000
	Issue type        : kbprb
	
	=============================================================================
	
