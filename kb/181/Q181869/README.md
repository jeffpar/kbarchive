---
layout: page
title: "Q181869: Desktop Folders Are Not Deleted Under Roving Profiles"
permalink: /kb/181/Q181869/
---

## Q181869: Desktop Folders Are Not Deleted Under Roving Profiles

{% raw %}

	Article: Q181869
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.0,2.0,2.1,2.5
	Operating System(s): 
	Keyword(s): kbenv kbnetwork osr1 osr2 win95kbfixlist
	Last Modified: 29-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When roving profiles are implemented, Desktop or Start Menu folders that are not
	empty when you delete them from the client computer are not deleted from the
	server profile when you log off. When you log back on, the folders are restored,
	and are empty.
	
	Note that if an empty folder is deleted, it is deleted from the server profile,
	and is not restored during logon.
	
	CAUSE
	=====
	
	This problem occurs because during the logoff process, in order to synchronize
	the server copy of the desktop with the client, the folder structure of the
	client desktop is first enumerated in a hierarchical order, parent folders
	first. The server copy of the desktop is also enumerated, and compared to the
	client hierarchy. Differences found between them are the source of a work list,
	that includes file and folder deletions to be performed. The work list is
	processed in the same order as the enumeration, and since parent folders are
	listed first, they are not empty when the delete request is issued to the
	server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. This
	problem no longer occurs in Windows 98. To resolve this problem, install the
	current version of Windows. For information about the current version of
	Windows, visit the following Microsoft Web site:
	
	  http://www.microsoft.com/windows
	
	
	Additional query words: roaming
	
	======================================================================
	Keywords          : kbenv kbnetwork osr1 osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :1.0,2.0,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
