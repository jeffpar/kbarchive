---
layout: page
title: "Q130072: Net Watcher Shows Users Without Access Rights as Connected"
permalink: kb/130/Q130072/
---

## Q130072: Net Watcher Shows Users Without Access Rights as Connected

	Article: Q130072
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Net Watcher shows all users who browse a Windows 95 computer as being connected
	to all user-level-security shared folders, even if those users have not been
	given access rights to any of the shared folders.
	
	Note that this behavior occurs only if the Windows 95 computer has been
	configured to use File and Print Sharing for NetWare Networks.
	
	MORE INFORMATION
	================
	
	File and Print Sharing for NetWare Networks (NWSERVER) does not understand the
	client's drive mappings and there is no NetWare Core Protocol (NCP) that can
	obtain the list of directory handles for a random session. Also, even if an NCP
	method existed, users can open a directory handle on an NCP share on which they
	do not have any rights (although they cannot view the contents of the share).
	Net Watcher shows these users as being connected to shares to which they have no
	access rights.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
