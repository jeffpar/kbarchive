---
layout: page
title: "Q190163: Using Hummingbird NFS products with Terminal Server"
permalink: /kb/190/Q190163/
---

## Q190163: Using Hummingbird NFS products with Terminal Server

{% raw %}

	Article: Q190163
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Hummingbird Communications Ltd. ships two network file system (NFS) products,
	the NFS Maestro Client for Windows NT, and NFS Maestro Gateway. The NFS Maestro
	Client for Windows NT should not be installed on Windows NT Terminal Server.
	However, you can use NFS Maestro Gateway on a Terminal Server.
	
	NFS Maestro Client for Windows NT
	---------------------------------
	
	The NFS Maestro Client is not a multi-user application. If it is installed on a
	Terminal Server, the NFS client will fail for all but the first user. For
	example, the first user to NFS-mount drive K, where drive K is any free drive
	letter, to an NFS drive will be successful. When a second user attempts to mount
	ANY network drive to the same drive letter, drive K, that user receives an error
	that the drive is already in use. This occurs even though drive K does not
	appear to be mapped to anything for the second user.
	
	NFS Maestro Gateway
	-------------------
	
	You can install this application on Terminal Server. As with any application that
	is designed for multiple users, the application should be installed by the
	administrator at the Terminal Server console, with the server in Installation
	Mode. To make certain that the server is in Installation Mode, install the
	application through Control Panel Add/Remove Programs, or execute the line
	"change user /install" from the command prompt. When installed, the
	administrator would mount drives using the NFS Gateway Access program. These
	drives will be listed in My Computer for all users connecting to the Terminal
	Server, and they will be granted or denied access, based on their UID GID
	mapping to Windows NT User accounts.
	
	The actual designed installation for the Gateway in this environment is to have a
	dedicated Windows NT Server, not a Terminal Server, located on the network. The
	Windows NT Server acts as the gateway allowing Terminal Server Clients to mount
	the NFS drives through Microsoft Networking.
	
	MORE INFORMATION
	================
	
	Hummingbird is exploring the possibility of creating a multi-user NFS client for
	Terminal Server.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
