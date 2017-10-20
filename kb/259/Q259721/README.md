---
layout: page
title: "Q259721: Unable to Log On and Authenticate with Novell Server 5.x"
permalink: /kb/259/Q259721/
---

## Q259721: Unable to Log On and Authenticate with Novell Server 5.x

{% raw %}

	Article: Q259721
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:; Win2000:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbnetwork win95 win98 win98se
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Microsoft Novell NetWare-compatible client such as GSNW, CSNW,
	Microsoft Client for NetWare Networks, Microsoft Service for NetWare Directory
	Services, and MSNDS, you may be unable to log on to Novell NetWare 5.x-based
	servers, and you may receive one or more of the following error messages:
	
	  Error: You cannot be authenticated on <tree><context> due to the
	  following reason: The network path was not found.
	
	  Error: You are not logged in to the directory tree <tree name>.
	
	  Error: An unexplained error occurred while your computer tried to access the
	  network. For more information, contact your network administrator.
	
	  Error: Failed to authenticate to server <server name>, attempting to
	  connect bindery FFFFFD88 -632 error
	
	CAUSE
	=====
	
	This issue can occur if your NetWare account was created or your password was
	set from a Novell NetWare version 3.2 or 4.7 client. Because of a change in the
	authentication process of the NetWare version 3.2 or 4.7 clients, non-Novell
	clients can experience this issue.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Novell to inquire about the availability of a fix
	for this issue. For information about how to do so, please view the following
	Novell Web site:
	
	  http://support.novell.com/
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbnetwork win95 win98 win98se 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:; Win2000:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
