---
layout: page
title: "Q160897: NWRedir Reports Incorrect Free Space If Limited by Admin"
permalink: /kb/160/Q160897/
---

## Q160897: NWRedir Reports Incorrect Free Space If Limited by Admin

{% raw %}

	Article: Q160897
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a NetWare network administrator has limited the amount of disk space
	available to a user in a particular folder on a NetWare server, the free disk
	space available reported by the Microsoft Client for NetWare Networks does not
	reflect this limitation.
	
	The value reported as free disk space is the total amount of space physically
	available on the server's volume, instead of the amount available to the user.
	
	CAUSE
	=====
	
	The Microsoft Client for NetWare Networks makes a single request for directory
	information with the permanent directory handle that returns the total free disk
	space.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
