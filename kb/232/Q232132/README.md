---
layout: page
title: "Q232132: MMC Does not Show Physical Directories under FTP Root"
permalink: /kb/232/Q232132/
---

## Q232132: MMC Does not Show Physical Directories under FTP Root

{% raw %}

	Article: Q232132
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbiis400 kbiis500
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When looking at the directories under the FTP root with the Microsoft Management
	Console (MMC), only the virtual directories are displayed even though physical
	directories are present.
	
	CAUSE
	=====
	
	This behavior is by design. The MMC will only display virtual directories under
	the FTP root.
	
	WORKAROUND
	==========
	
	To see a list of all directories, both physical and virtual, present under the
	FTP root you will need to create a virtual directory pointing to the physical
	directory. This will have to be done for every physical directory.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
