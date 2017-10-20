---
layout: page
title: "Q237791: Unable to View Some Network Shared Folders"
permalink: /kb/237/Q237791/
---

## Q237791: Unable to View Some Network Shared Folders

{% raw %}

	Article: Q237791
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): kbenv kbnetwork win98 win98se
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to view shared network resources on a network computer, one or
	more shared folders are not visible, even though when you use another computer
	on your network, you can view these resources.
	
	CAUSE
	=====
	
	This behavior can occur if all of the following conditions are true:
	
	- The computer sharing the network resource is running Windows 2000.
	
	- The name of the shared folder contains more than 12 characters.
	
	- The computer you are using to view network resources is running Windows 98.
	
	RESOLUTION
	==========
	
	To resolve this issue, change the name of the shared network folder to contain
	12 characters or less.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	Windows 2000 supports long filenames for network shares. However, earlier
	versions of Windows are unable to view these shared resources. In earlier
	versions of Windows, you receive a warning when you attempt to give a share a
	name that contains more than 12 characters.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork win98 win98se 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin98search kbWin98SEsearch kbWinAdvServSearch kbWin98 kbWin98SE
	Version           : WINDOWS:2000
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
