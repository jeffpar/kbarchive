---
layout: page
title: "Q137823: Windows 95 Client Can Browse NetWare 2.x Without Permission"
permalink: kb/137/Q137823/
---

## Q137823: Windows 95 Client Can Browse NetWare 2.x Without Permission

	Article: Q137823
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse NetWare version 2.x servers using the Microsoft Client for
	NetWare networks, you may be able to view folders and files that you do not have
	permission to view. If you try to run or open such a file or folder, you receive
	one of the following error messages:
	
	- Windows can't find <executable>
	
	- Access denied
	
	CAUSE
	=====
	
	The Novell NetWare NETX and VLM redirectors cannot view files for which the
	client does not have access permissions. However, because the Microsoft Client
	for NetWare Networks is a graphical network client, it allows you to browse
	NetWare resources.
	
	For example, with the Microsoft Client for NetWare Networks installed, you may be
	able to view shared folders that you do not have permissions for and to view a
	list of the files that those folders contain. However, if you try to run, open,
	or manipulate any of these files or folders, you receive an error messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
