---
layout: page
title: "Q191370: Slow Network Performance with Terminal Server"
permalink: kb/191/Q191370/
---

## Q191370: Slow Network Performance with Terminal Server

	Article: Q191370
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Windows NT Terminal Server experiences difficulties communicating with another
	Windows NT computer on the network. A network monitor trace reveals significant
	delays between successive server message blocks (SMBs) sent from the Windows NT
	Terminal Server client to the remote server.
	
	This situation usually occurs when a high number of client sessions (RDP or ICA)
	are connected and actively using the Terminal Server. This situation is more
	likely to occur if every user has a drive mapped to a common server. Under
	certain circumstances, this can cause the Terminal Server to stop responding on
	all client sessions. When this occurs, console response is normal until
	attempting to use the redirector. CPU usage will normally be very low.
	
	You may experience the following error messages on the Terminal Server computer:
	
	- Event ID: 5719
	  Source: Netlogon
	  Description: No Windows NT Domain Controller is available for domain
	  domain_name. The following error occurred:
	  There are currently no logon servers available to service the logon request.
	- Error 1722: The RPC server is unavailable.
	- Error 1723: The RPC server is too busy to complete this operation.
	- Error 1721: Not enough resources are available to complete this operation.
	
	User Manager, Server Manager, or other programs that require RPC and run on
	Terminal Server may not work.
	
	
	CAUSE
	=====
	
	The MaxMpxCt parameter allows a server to provide a suggested maximum number of
	simultaneous outstanding client requests to a particular server.
	
	During negotiation of the SMB dialect, this value is passed to the client's
	redirector where the limit on outstanding requests is enforced.
	
	When multiple RDP clients are connected to the Terminal Server, there is normally
	one instance of the Windows shell, Explorer.exe, running for each client.
	
	Explorer makes extensive use of directory notifications, resulting in a number of
	NTNotifyDirectoryChange SMBs being posted to the server. Directory notifications
	allow the server to notify the client when file or directory information
	changes. The NTNotifyDirectoryChange SMB is classified as a long term request.
	The SMB is received by the server but is not returned until a change occurs (or
	until the SMB is cancelled by the client).
	
	When several RDP clients connect to the Terminal Server, the number of
	outstanding commands against the server can exceed the default maximum of 50. If
	this situation arises, other SMB requests will wait in the redirector until
	previous requests complete, timeout, or are cancelled.
	
	
	RESOLUTION
	==========
	
	Increase the MaxMpxCt parameter on the remote server, not the Terminal Server
	computer.
	
	
	Although increasing this value can potentially increase server performance, it
	may require a high use of server work items.
	
	NOTE: For Windows NT 4.0 Service Pack 3 and later, the valid values for this
	entry range from 1 to 65535 requests, with a default value of 50 requests. For
	Windows 2000, the maximum value for this entry is limited to 125 requests to
	assure that Windows 95 and Windows 98 clients can connect to the server.
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	WARNING: Making a change to the MaxMpxCt registry entry may cause Windows 95/98
	clients to not be able to connect to the server.
	
	1. Use Registry Editor to locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanServer \Parameters
	
	2. Make the following changes:
	
	  MaxMpxCt REG_DWORD
	
	  Range: 1 to 65535 requests
	  Default: 50
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q232890 Windows 98 Client Unable to Connect to Windows NT Share
	
	Additional query words: semaphore lock freeze break transact tranceive
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
