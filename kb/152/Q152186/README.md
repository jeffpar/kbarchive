---
layout: page
title: "Q152186: Possible Network Data Corruption If Locking Not Used"
permalink: /kb/152/Q152186/
---

## Q152186: Possible Network Data Corruption If Locking Not Used

{% raw %}

	Article: Q152186
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use certain programs to access a common data file over the network from
	multiple workstations, the data may be read incorrectly or may become damaged.
	
	
	CAUSE
	=====
	
	The Microsoft Client for Microsoft Networks and Microsoft Client for NetWare
	Networks cache some network data on the client computer for enhanced network
	performance. If the program does not use locking calls to guarantee data
	synchronization and integrity, this cached data may not be kept in
	synchronization with the data on the network server.
	
	If an opened file is not locked, it may be cached by the client. If the file is
	then modified by a second client, the first client may read incorrect file data
	from the cache, instead of reading the current file data from the network
	server. Subequent writes by the first client may result in incorrect data being
	written to the file, and damage to the file data.
	
	
	RESOLUTION
	==========
	
	Contact the program's manufacturer for additional information about using the
	program with Windows 95.
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	When locking calls are not used, the integrity of data cannot be guaranteed by a
	network client that employs caching for enhanced performance. Such network
	clients include the Microsoft Client for NetWare Networks and the Microsoft
	Client for Microsoft Networks included in Windows 95.
	
	If a program locks the file or range of bytes that it intends to read from or
	write to, the server locks that file, or that range of the file. This denies
	access to that data to other users, and forces the client to read the current
	data from the server instead of from the cache. This technique is advised for
	maintaining data integrity when required, while providing the performance
	benefits of caching when it is safe to do so.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
