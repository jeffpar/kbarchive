---
layout: page
title: "Q176084: Cannot connect to Dfs Share Using Fully Qualified Domain Names"
permalink: /kb/176/Q176084/
---

## Q176084: Cannot connect to Dfs Share Using Fully Qualified Domain Names

	Article: Q176084
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Connecting to a Distributed File System (Dfs) share using a Fully Qualified
	Domain Name (FQDN), for example, DIR \\DFS.Microsoft.Com\Share will result in:
	
	Either an empty directory being returned when browsing directories under the root
	Dfs share point.
	
	-or-
	
	If mapping to a directory under the DFS share point.
	
	  System error 67 has occurred. The network name cannot be found.
	
	CAUSE
	=====
	
	The "How Users See and Connect to Dfs Trees" section of the "Microsoft
	Distributed File System for Microsoft Windows NT Server 4.0 Administrator's
	Guide" states the following:
	
	  Windows 95 Dfs clients have some additional limitations which do not
	  apply to Windows NT clients:
	
	  The Windows 95 client cannot access non-SMB leaf volumes.
	  The Windows 95 client cannot use the DNS namespace as part of
	  accessing Windows NT shares
	  (for example, DIR \\DFS.Microsoft.Com\Public).
	
	It should also state that Windows NT does not support access to a Dfs share from
	a Domain Name Server (DNS) namespace.
	
	WORKAROUND
	==========
	
	Connect to the Dfs share using NetBIOS machine names only. This may require use
	of a WINS server or a LMHOSTS file to resolve the Dfs server's machine name to
	an IP address.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
